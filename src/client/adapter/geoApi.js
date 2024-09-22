const getGeoDestination = async (location) => {
  const USER_NAME = "luongvanlinh";
  const endpoint = `http://api.geonames.org/searchJSON?formatted=true&q=${location}&username=${USER_NAME}&style=full`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(
        `Error fetching data: ${response.status} ${response.statusText}`
      );
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error("Error in getGeoDestination:", error);
    return null;
  }
};

export { getGeoDestination };
