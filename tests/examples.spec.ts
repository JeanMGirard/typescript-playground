import assert from "assert"
import {Example} from "@/lib";


describe('assert', function () {

  describe( "comparisons", () => {
    test( "equal", () => {
      assert.equal(( 2 + 2 ), 4 );
      assert.equal(( 0 + 0 ), 0 );
    });
  })


  describe( "error", () => {
    it( "(throws) should return an error", () => {
      assert.throws(
        () => { throw new Error("it blowed up") },
        { name: "Error", message: "it blowed up" }
      );
    });
  });

});

describe('expect', () => {
  let spy: jest.SpyInstance<void, []>

  afterEach(() => {
    spy?.mockRestore()
  })

  it('truthy / falsy', () => {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
  });

  it('should have been called (spyOn)', () => {
    spy = jest.spyOn(Example.prototype, 'execute');

    Example.prototype.execute()
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockReset();
    expect(spy).toHaveBeenCalledTimes(0)
  });


});

