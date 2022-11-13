import assert from "assert"
import { executeMain } from "@lib/index"

describe('main', function () {

  describe("executeMain",  () => {

    it( "should have been called", async () => {
      await executeMain()
      expect(executeMain).toBeDefined()
    });
  })


});

