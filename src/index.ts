import { fuzzySearchApi } from "./api/api";
import { validateQuery } from "./common/validations/query.validator";
import { ErrorResponse } from "./dto/ErrorResponse";
import { getApiConfig } from "./common/configs/apiConfig";

/**
 *
 * @param query incomplete address details
 * @returns an object containing the complete address details
 */
export function fuzzySearch(query: string) {
  let encodedQuery;
  try {
    encodedQuery = validateQuery(query);
  } catch (error) {
    throw new ErrorResponse(error);
  }

  return fuzzySearchApi(getApiConfig(encodedQuery));
}
