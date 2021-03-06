package jscbe.configuration

object DbConfiguration {
  private val config      = Configuration.getConfig
  def getUrl: String      = config.getString("app.db.url")
  def getUsername: String = config.getString("app.db.user")
  def getPassword: String = config.getString("app.db.password")
}
