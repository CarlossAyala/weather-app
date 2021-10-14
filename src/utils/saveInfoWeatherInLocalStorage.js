function saveInfoWeatherInLocalStorage(infoWeather) {
  //Convertir de String a arreglo para localStorage
  localStorage.setItem('infoWeather', JSON.stringify(infoWeather));
}

export default saveInfoWeatherInLocalStorage;
