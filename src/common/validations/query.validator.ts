import Joi from "joi";

export const validateQuery = (query: string) => {
  const { error, value } = QueryValidator.validate(query);
  if (error) {
    throw `Invalid query: ${error.details[0].message}`;
  }
  return encodeURIComponent(value);
};

const QueryValidator = Joi.string()
  .trim()
  .min(3)
  .max(200)
  .pattern(/^[a-zA-Z0-9\s\-_,.]*$/) // Allow alphanumeric characters, spaces, and some punctuation
  .required();
