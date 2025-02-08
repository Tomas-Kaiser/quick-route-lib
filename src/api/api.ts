import { mapToAddress } from "../common/utils/mapping";
import { ErrorResponse } from "../dto/ErrorResponse";
import { Address } from "../interfaces/interfaces";
import { Response } from "./../dto/Response";

/**
 *
 * @param endpoint the endpoint to fetch the address from external api
 * @returns an object containing the complete address details
 */
export const fuzzySearchApi = async (endpoint: string) => {
  try {
    const response = await fetch(`${endpoint}`);
    const data = await response.json();
    const address: Address = data.results.map((result: any) =>
      mapToAddress(result)
    );

    return new Response<Address>(address);
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw new ErrorResponse(
      "Something went wrong while fetching an address from external api."
    );
  }
};
