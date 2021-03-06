package jscbe.configuration

import jscbe.BaseTest

class ConfigurationSpec extends BaseTest {
  describe("A Configuration") {
    it("should be loaded") {
      assert(!Configuration.getConfig.isEmpty)
    }
    it("should support all data types") {
      val config = Configuration.getConfig
      assert(config.getString("app.test.string") == "string")
      assert(config.getInt("app.test.number") == 1)
      assert(config.getBoolean("app.test.boolean"))
    }
  }
}
