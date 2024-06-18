import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";
import * as responseHandler from "../helpers/responseHandler";
import { responseCode } from "../helpers/responseCode";
import { validationError } from "../helpers/types";

const formatZodErrors = (zodError: ZodError): validationError[] => {
  const formattedErrors = zodError.issues.map((issue: any) => {
    return {
      path: issue.path.join("."),
      message: issue.message,
    };
  });

  return formattedErrors;
};

const validateSchema = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = formatZodErrors(err);
        responseHandler.responseWithValidationErrors(
          res,
          responseCode.BAD_REQUEST,
          errors
        );
      }
      next(err);
    }
  };
};

export default validateSchema;
