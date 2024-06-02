import { responseMessages } from "./responseMessage";
import { responseCode } from "./responseCode";
import { Response } from "express"; // Assuming you're using Express

export const handleError = (res: Response, err: any) => {
  let errorMessage = err.message || responseMessages.INTERNAL_SERVER_ERROR;
  return res
    .status(err.status || 500)
    .send({ result: false, message: errorMessage, payload: null });
};

export const responseWithData = (
  res: Response,
  data: any,
  message = "",
  status = responseCode.OK,
  token = null
) => {
  return res.status(status || 200).send({
    result: true,
    message: message,
    payload: data,
    token: token ? token : undefined,
  });
};
