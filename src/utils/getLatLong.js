//Obtener la Lat y Long del usuario
async function getLatLong() {
  let coordinates;
  const httpRequest = `https://freegeoip.app/json/?apikey=${process.env.LOCATION_API_KEY}`;

  try {
    const res = await fetch(httpRequest);
    const info = await res.json();
    coordinates = {
      lat: info.latitude,
      lon: info.longitude,
    };
    return coordinates;
  } catch (error) {
    return (error);
  }

}

export default getLatLong;
