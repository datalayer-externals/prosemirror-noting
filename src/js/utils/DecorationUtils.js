import { DecorationSet, Decoration } from "prosemirror-view";
import { notesFromDoc } from "./StateUtils";

const noteWrapper = (id, pos, side, inside) => {
  const span = document.createElement("span");
  span.classList.add(`note-${id}`, `note--${side < 0 ? "start" : "end"}`);
  span.dataset.toggleNoteId = id;
  return Decoration.widget(pos, span, {
    side: inside ? side : 0 - side,
    marks: []
  });
};

const placeholderDecos = (noteTransaction, state) =>
  state.selection.$cursor && noteTransaction.hasPlaceholder(state)
    ? [
        noteWrapper("NONE", state.selection.$cursor.pos, -1, true),
        noteWrapper("NONE", state.selection.$cursor.pos, 1, true)
      ]
    : [];

export const createDecorateNotes = (markType, noteTransaction) => state =>
  DecorationSet.create(state.doc, [
    ...notesFromDoc(state.doc, markType).reduce(
      (out, { id, nodes }) => [
        ...out,
        noteWrapper(id, nodes[0].start, -1, noteTransaction.inside),
        noteWrapper(id, nodes[nodes.length - 1].end, 1, noteTransaction.inside)
      ],
      []
    ),
    ...placeholderDecos(noteTransaction, state)
  ]);