/* eslint-disable consistent-return */
import createJWT from './createJWT';

const BASE_URL = 'https://weather-app-own.herokuapp.com/https://fnw-us.foreca.com';

async function getJWT() {
  let tokenW;

  //Revisamos los valores de LocalStore
  if (localStorage.getItem('tokenW') === null) {
    await createJWT();
    getJWT();
  } else {
    tokenW = localStorage.getItem('tokenW');
  }
  return tokenW;
}

export async function getInfoCities(city) {
  const token = await getJWT();
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    //Información del la latitud y lingtud en base al nombre de la ciudad
    const requestDataCitiesInfo = `${BASE_URL}/api/v1/location/search/${city}&lang=es`;
    const resCitiesData = await fetch(requestDataCitiesInfo, requestOptions);
    const dataCities = await resCitiesData.json();

    return dataCities.locations;
  } catch (error) {
    return (error);
  }
}

export async function getInfoCity(id) {
  const token = await getJWT();
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    //Información del la latitud y lingtud en base al nombre de la ciudad
    const requestDataCityInfo = `${BASE_URL}/api/v1/location/${id}&lang=es`;
    const resDataCity = await fetch(requestDataCityInfo, requestOptions);
    const dataCity = await resDataCity.json();
    const location = {
      lon: dataCity.lon,
      lat: dataCity.lat,
    };
    return location;
  } catch (error) {
    return (error);
  }
}

//Solo se usa al principio de la apliación
export async function getDailyAndCurrentData({ lon, lat }, setInfoWeather) {
  const token = await getJWT();
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    //Información del clima
    const requestWeather = `${BASE_URL}/api/v1/current/${lon},${lat}&tempunit=C&windunit=KMH&lang=es`;
    const resWeatherInfo = await fetch(requestWeather, requestOptions);
    const dataWeather = await resWeatherInfo.json();
    //Información del clima en la semana
    const requestWeatherDaily = `${BASE_URL}/api/v1/forecast/daily/${lon},${lat}&periods=7`;
    const resWeatherInfoDaile = await fetch(requestWeatherDaily, requestOptions);
    const dataWeatherDaily = await resWeatherInfoDaile.json();

    //Información de la Ciudad
    const requestCity = `${BASE_URL}/api/v1/location/${lon},${lat}&lang=en`;
    const resCityInfo = await fetch(requestCity, requestOptions);
    const dataCity = await resCityInfo.json();

    const infoCountry = dataCity.timezone.split('/');

    const data = {
      codeImg: dataWeather.current.symbol,
      temp: dataWeather.current.temperature,
      climatePhrase: dataWeather.current.symbolPhrase,
      feelsLike: dataWeather.current.feelsLikeTemp,
      windSpeed: dataWeather.current.windSpeed,
      precipProb: dataWeather.current.precipProb,
      cloudiness: dataWeather.current.cloudiness,
      ubication: `${dataCity.name} - ${dataCity.adminArea} - ${infoCountry[1]}`,
      forecast: dataWeatherDaily.forecast,
    };
    setInfoWeather(data);

  } catch (error) {
    return (error);
  }
}
