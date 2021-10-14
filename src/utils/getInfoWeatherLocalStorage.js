function getInfoWeatherLocalStorage() {
  let infoWeather;
  if (localStorage.getItem('infoWeather') === null) {
    infoWeather = [];
  } else {
    infoWeather = JSON.parse(localStorage.getItem('infoWeather'));
  }

  return infoWeather;
}

export default getInfoWeatherLocalStorage;
