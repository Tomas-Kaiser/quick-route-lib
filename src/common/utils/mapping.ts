export const mapToAddress = (result: any) => {
  return {
    streetNumber: result.address.streetNumber,
    streetName: result.address.streetName,
    municipality: result.address.municipality,
    countrySecondarySubdivision: result.address.countrySecondarySubdivision,
    countrySubdivision: result.address.countrySubdivision,
    country: result.address.country,
    countryCode: result.address.countryCode,
    postalCode: result.address.postalCode,
  };
};
