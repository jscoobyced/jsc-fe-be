package jscbe.models.http

case class ResponseData(message: String, insertedKey: Int)

case class SuccessResponse(data: ResponseData) extends AbstractResponse[ResponseData](data = Some(data), error = None)
