export async function getCountryInfo(countryCode) {
  const COUNTRY_LAYER_KEY = "53aa409ba8cf78f58a03d55906b01fdd";

  const endpoint = `https://api.countrylayer.com/v2/alpha/${countryCode}?access_key=${COUNTRY_LAYER_KEY}`;

  try {
    const res = await fetch(endpoint);
    if (res.ok) {
      const data = await res.json();
      return {
        name: data.name,
        flag: data.flag,
      };
    }
  } catch (error) {
    console.log(error);
  }
}
