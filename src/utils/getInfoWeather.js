/* eslint-disable consistent-return */
import createJWT from './createJWT';

const BASE_URL = 'https://weather-app-own.herokuapp.com/https://fnw-us.foreca.com';

async function getJWT() {
  let tokenW;

  //Revisamos los valores de LocalStore
  if (localStorage.getItem('tokenW') === null) {
    tokenW = [];
  } else {
    tokenW = localStorage.getItem('tokenW');
  }
  return tokenW;
}

export async function getListCities(city) {
  const token = await getJWT();
  if (token === null) {
    await createJWT();
    await getJWT();
  }
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
    return error;
  }
}

export async function getInfoCityById(id) {
  const token = await getJWT();
  if (token === null) {
    await createJWT();
    await getJWT();
  }
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    //Información del la latitud y lingtud en base al id de la ciudad
    const requestDataCityInfo = `${BASE_URL}/api/v1/location/${id}&lang=es`;
    const resDataCity = await fetch(requestDataCityInfo, requestOptions);
    const dataCity = await resDataCity.json();
    const location = {
      lon: dataCity.lon,
      lat: dataCity.lat,
    };

    return location;
  } catch (error) {
    return error;
  }
}

export async function getCurrentInfo({ lon, lat }) {
  const token = await getJWT();
  if (token === null) {
    await createJWT();
    await getJWT();
  }
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    //Obtener Info Weather
    const urlCurrentWeather = `${BASE_URL}/api/v1/current/${lon},${lat}&tempunit=C&windunit=KMH&lang=es`;
    const resWeatherInfo = await fetch(urlCurrentWeather, requestOptions);
    const dataWeather = await resWeatherInfo.json();
    //Obtener nombre de la Ciudad
    const urlLocationInfo = `${BASE_URL}/api/v1/location/${lon},${lat}&lang=es`;
    const resLocationrInfo = await fetch(urlLocationInfo, requestOptions);
    const dataLocation = await resLocationrInfo.json();
    //Se agrega el nombre de la Ciudad + País
    dataWeather.current.city = `${dataLocation.name}, ${dataLocation.country}`;

    return dataWeather.current;
  } catch (error) {
    console.log(error);
  }
}

export async function getThreeHourlyInfo({ lon, lat }) {
  const token = await getJWT();
  if (token === null) {
    await createJWT();
    await getJWT();
  }
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    const urlThreeHourlyWeather = `${BASE_URL}/api/v1/forecast/3hourly/${lon},${lat}&periods=11&dataset=standard`;
    const resWeatherInfo = await fetch(urlThreeHourlyWeather, requestOptions);
    const dataWeather = await resWeatherInfo.json();

    return dataWeather.forecast;
  } catch (error) {
    console.log(error);
  }
}

export async function getDailyInfo({ lon, lat }) {
  const token = await getJWT();
  if (token === null) {
    await createJWT();
    await getJWT();
  }
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    const urlDailyWeather = `${BASE_URL}/api/v1/forecast/daily/${lon},${lat}&periods=13`;
    const resWeatherInfo = await fetch(urlDailyWeather, requestOptions);
    const dataWeather = await resWeatherInfo.json();

    //Elimina la fecha actual
    dataWeather.forecast.shift();

    return dataWeather.forecast;
  } catch (error) {
    console.log(error);
  }
}

export async function getOtherCitiesInfo() {
  const token = await getJWT();
  if (token === null) {
    await createJWT();
    await getJWT();
  }
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const cities = [
    {
      name: 'Nueva York, Estados Unidos',
      lon: -74.005973816,
      lat: 40.714267731,
      src: '../assets/bg-img-1.png',
    },
    {
      name: 'Singapur, Singapur',
      lon: 103.855834961,
      lat: 1.293055654,
      src: '../assets/bg-img-2.png',
    },
    {
      name: 'Londres, Inglaterra',
      lon: -0.125532746,
      lat: 51.508415222,
      src: '../assets/bg-img-3.png',
    },
  ];

  try {
    const infoWeatherCities = await Promise.all(
      cities.map(async (city) => {
        const urlCurrentWeather = `${BASE_URL}/api/v1/current/${city.lon},${city.lat}&lang=es`;
        const resWeatherInfo = await fetch(urlCurrentWeather, requestOptions);
        const dataWeather = await resWeatherInfo.json();
        dataWeather.current.srcBg = `${city.src}`;
        dataWeather.current.cityName = `${city.name}`;
        return dataWeather;
      }),
    );

    return infoWeatherCities;
  } catch (error) {
    console.log(error);
  }
}
