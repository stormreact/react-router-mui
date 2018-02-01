import matchPath from "../matchPath";

describe("matchPath", () => {
  describe('with path="/x/"', () => {
    it('returns correct url at "/x"', () => {
      const path = "/x/";
      const pathname = "/x/y/1";
      const match = matchPath(pathname, path);
      console.log(match);
      expect(match.url).toBe("/x");
    });

  });
});
