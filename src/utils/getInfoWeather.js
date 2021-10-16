const BASE_URL = 'https://fnw-us.foreca.com/';

export async function getCurrentInfoWeather({ lon, lat }) {
  const httpRequest = `${BASE_URL}api/v1/current/${lon},${lat}`;

  try {
    const res = await fetch(httpRequest);
    const info = await res.json();
    console.log(info);
    return info;
  } catch (error) {
    return (error);
  }
}

export async function getDailyInfoWeather() {
  console.log('hi');
}
