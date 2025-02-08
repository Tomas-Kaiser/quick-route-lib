import dotenv from "dotenv";

export const getApiConfig = (encodedQuery: string) => {
  dotenv.config();

  const BASE_URL = "https://api.tomtom.com/search/2/search";
  const EXT = ".json";
  const API_KEY = process.env.API_KEY;
  const COUNTRY_SET = "AU";
  const LIMIT = "1";

  return `${BASE_URL}/${encodedQuery}${EXT}?key=${API_KEY}&countrySet=${COUNTRY_SET}&limit=${LIMIT}`;
};
