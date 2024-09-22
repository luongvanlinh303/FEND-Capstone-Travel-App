const saveTripData = async (url = "", data = {}) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: data.destination,
        startDate: data.departureDate,
        endDate: data.endingDate,
        temperature: data.temperature,
        humidity: data.humidity,
      }),
    });

    if (!response.ok) {
      throw new Error(`POST request failed with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("There was an error with your POST request:", error);
    throw error;
  }
};

export { saveTripData };
