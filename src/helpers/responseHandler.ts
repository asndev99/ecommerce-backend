import { responseMessages } from "./responseMessage";
import { responseCode } from "./responseCode";
import { Response } from "express"; // Assuming you're using Express
import { validationError } from "./types";

export const handleError = (res: Response, err: any) => {
  let errorMessage = err.message || responseMessages.INTERNAL_SERVER_ERROR;
  return res
    .status(err.status || 500)
    .send({ success: false, message: errorMessage, payload: null });
};

export const responseWithData = (
  res: Response,
  data: any,
  message = "",
  status = responseCode.OK,
  token: string | null = null
) => {
  return res.status(status || 200).send({
    success: true,
    message: message,
    payload: data,
    token: token ? token : undefined,
  });
};

export const responseWithValidationErrors = (
  res: Response,
  statusCode: number,
  errors: validationError[]
) => {
  return res.status(statusCode).json({
    success: false,
    message: errors[0].message,
    path: errors[0].path,
    payload: null,
  });
};
