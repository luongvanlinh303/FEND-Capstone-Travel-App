export async function getImageURL(city, country) {
  const PIXABAY_KEY = "46122801-868c9844fdaf9a64fc5455f46";

  const queryCity = `&q=${city}&image_type=photo&pretty=true&category=places`;
  const queryCountry = `&q=${country}&image_type=photo&pretty=true&category=places`;
  const cityEndpoint =
    "https://pixabay.com/api/?key=" + PIXABAY_KEY + queryCity;
  const countryEndpoint =
    "https://pixabay.com/api/?key=" + PIXABAY_KEY + queryCountry;

  try {
    let response = await fetch(cityEndpoint);
    if (response.ok) {
      let jsonRes = await response.json();
      if (jsonRes.totalHits === 0) {
        // If not, display pictures for the country
        response = await fetch(countryEndpoint);
        if (response.ok) {
          jsonRes = await response.json();
          return jsonRes.hits[0].largeImageURL;
        }
      }
      return jsonRes.hits[0].largeImageURL;
    }
  } catch (error) {
    console.log(error);
  }
}
