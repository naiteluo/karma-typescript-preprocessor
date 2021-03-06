describe("The 'toBe' matcher compares with ===", () => {
    it("and has a positive case ", () => {
        expect(true).toBe(true);
    });
    it("and can have a negative case", () => {
        expect(false).not.toBe(true);
    });
});

describe("Included matchers:", () => {
    it("The 'toBe' matcher compares with ===", () => {
        var a = 12;
        var b = a;
        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });
    describe("The 'toEqual' matcher", () => {
        it("works for simple literals and variables", () => {
            var a = 12;
            expect(a).toEqual(12);
        });
        it("should work for objects", () => {
            var foo = {
                a: 12,
                b: 34
            };
            var bar = {
                a: 12,
                b: 34
            };
            expect(foo).toEqual(bar);
        });
    });

    it("The 'toMatch' matcher is for regular expressions", () => {
        var message = 'foo bar baz';
        expect(message).toMatch(/bar/);
        expect(message).toMatch('bar');
        expect(message).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", () => {
        var a = {
            foo: 'foo'
        };
        expect(a.foo).toBeDefined();
        expect((<any>a).bar).not.toBeDefined();
    });

    it("The `toBeUndefined` matcher compares against `undefined`", () => {
        var a = {
            foo: 'foo'
        };
        expect(a.foo).not.toBeUndefined();
        expect((<any>a).bar).toBeUndefined();
    });

    it("The 'toBeNull' matcher compares against null", () => {
        var a: string = null;
        var foo = 'foo';
        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", () => {
      var a: string, foo = 'foo';
        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", () => {
      var a: string, foo = 'foo';
        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });

    it("The 'toContain' matcher is for finding an item in an Array", () => {
        var a = ['foo', 'bar', 'baz'];
        expect(a).toContain('bar');
        expect(a).not.toContain('quux');
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", () => {
      var pi = 3.1415926, e = 2.78;
        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });

    it("The 'toBeGreaterThan' is for mathematical comparisons", () => {
      var pi = 3.1415926, e = 2.78;
        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });

    it("The 'toBeCloseTo' matcher is for precision math comparison", () => {
      var pi = 3.1415926, e = 2.78;
        expect(pi).not.toBeCloseTo(e, 1);
        expect(pi).toBeCloseTo(e, 0);
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", () => {
        var foo = () => {
            return 1 + 2;
        };
        var bar = () => {
            throw new Error();
        };
        expect(foo).not.toThrow();
        expect(bar).toThrow();
    });
});
