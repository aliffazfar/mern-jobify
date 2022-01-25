import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  const defaultError = {
    StatusCoded: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: 'Something went wrong, try again later',
  }
  res.status(defaultError.StatusCode).json({ msg: err })
}

export default errorHandlerMiddleware
