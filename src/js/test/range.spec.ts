import {
  mergeRanges,
  findOverlappingRangeIndex,
  diffRanges,
  diffValidationInputs
} from "../utils/range";

describe("Range utils", () => {
  describe("findOverlappingRangeIndex", () => {
    it("should find overlapping ranges", () => {
      const ranges = [{ from: 5, to: 10 }];
      expect(
        findOverlappingRangeIndex(
          {
            from: 0,
            to: 4
          },
          ranges
        )
      ).toBe(-1);
      expect(
        findOverlappingRangeIndex(
          {
            from: 0,
            to: 6
          },
          ranges
        )
      ).toEqual(0);
      expect(
        findOverlappingRangeIndex(
          {
            from: 6,
            to: 8
          },
          ranges
        )
      ).toEqual(0);
      expect(
        findOverlappingRangeIndex(
          {
            from: 5,
            to: 10
          },
          ranges
        )
      ).toEqual(0);
      expect(
        findOverlappingRangeIndex(
          {
            from: 8,
            to: 15
          },
          ranges
        )
      ).toEqual(0);
      expect(
        findOverlappingRangeIndex(
          {
            from: 11,
            to: 15
          },
          ranges
        )
      ).toEqual(-1);
    });
  });
  describe("mergeRanges", () => {
    it("merges overlapping ranges", () => {
      const ranges = [
        {
          from: 0,
          to: 10
        },
        {
          from: 5,
          to: 15
        },
        {
          from: 5,
          to: 20
        }
      ];
      expect(mergeRanges(ranges)).toEqual([
        {
          from: 0,
          to: 20
        }
      ]);
    });
  });
  describe("diffRanges", () => {
    it("should remove the second set of ranges from the first range", () => {
      expect(
        diffRanges(
          [
            {
              from: 0,
              to: 10
            }
          ],
          [
            {
              from: 5,
              to: 10
            }
          ]
        )
      ).toEqual([
        {
          from: 0,
          to: 5
        }
      ]);
      expect(
        diffRanges(
          [
            {
              from: 0,
              to: 10
            },
            {
              from: 5,
              to: 15
            }
          ],
          [
            {
              from: 5,
              to: 10
            }
          ]
        )
      ).toEqual([
        {
          from: 0,
          to: 5
        },
        {
          from: 11,
          to: 15
        }
      ]);
      expect(
        diffRanges(
          [
            {
              from: 0,
              to: 20
            }
          ],
          [
            {
              from: 5,
              to: 10
            },
            {
              from: 13,
              to: 17
            }
          ]
        )
      ).toEqual([
        {
          from: 0,
          to: 5
        },
        {
          from: 11,
          to: 13
        },
        {
          from: 18,
          to: 20
        }
      ]);
    });
  });
  describe("diffValidationInputs", () => {
    it("should remove the second validation inputs from the first where they overlap", () => {
      expect(
        diffValidationInputs(
          [
            {
              str: "example",
              from: 5,
              to: 12
            }
          ],
          [
            {
              str: "example",
              from: 7,
              to: 14
            }
          ]
        )
      ).toEqual([
        {
          str: "ex",
          from: 5,
          to: 7
        }
      ]);
      expect(
        diffValidationInputs(
          [
            {
              str: "examplestringoverlaps",
              from: 5,
              to: 26
            }
          ],
          [
            {
              str: "string",
              from: 12,
              to: 19
            }
          ]
        )
      ).toEqual([
        {
          str: "example",
          from: 5,
          to: 12
        },
        {
          str: "overlaps",
          from: 19,
          to: 26
        }
      ]);
      expect(
        diffValidationInputs(
          [
            {
              str: "example",
              from: 5,
              to: 12
            }
          ],
          [
            {
              str: "example",
              from: 5,
              to: 12
            }
          ]
        )
      ).toEqual([]);
      expect(
        diffValidationInputs(
          [
            {
              str: "example string with match",
              from: 10,
              to: 35
            },
            {
              str: "example string with match also",
              from: 40,
              to: 70
            }
          ],
          [
            {
              str: "example string with no match",
              from: 10,
              to: 38
            }
          ]
        )
      ).toEqual([
        {
          str: "example string with match also",
          from: 40,
          to: 70
        }
      ]);
    });
  });
});
