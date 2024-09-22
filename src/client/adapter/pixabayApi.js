const getImageURL = async (city) => {
  const PIXABAY_KEY = "46122801-868c9844fdaf9a64fc5455f46";
  const endpoint = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${city}&image_type=photo&pretty=true&category=places`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(
        `Error fetching image: ${response.status} ${response.statusText}`
      );
    }

    const jsonResponse = await response.json();

    if (jsonResponse.hits && jsonResponse.hits.length > 0) {
      return jsonResponse.hits[0].largeImageURL;
    } else {
      throw new Error("No image found for the specified city.");
    }
  } catch (error) {
    console.error("Error in getImageURL:", error);
    return null;
  }
};

export { getImageURL };
