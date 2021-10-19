/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import TitleApp from '../components/TitleApp';
import Search from '../components/Search';
import { getCurrentInfo, getDailyInfo, getListCities, getOtherCitiesInfo, getThreeHourlyInfo } from '../utils/getInfoWeather';
import createJWT from '../utils/createJWT';
import WeatherContent from '../components/WeatherContent';
import TodayWeather from '../components/TodayWeather';
import ThisWeekWeather from '../components/ThisWeekWeather';
import OtherCities from '../components/OtherCities';
import Footer from '../components/Footer';
import '../styles/Home.css';
import SkeletonWeatherContent from '../components/SkeletonWeatherContent';

const Home = () => {
  const [city, setCity] = useState('');
  const [currentInfo, setCurrentInfo] = useState({});
  const [threeHourlyInfo, setThreeHourlyInfo] = useState([]);
  const [next12Days, setNext12Days] = useState([]);
  const [citiesInfo, setCitiesInfo] = useState([]);
  const [cities, setCities] = useState([]);

  //Obtener lat lon del usuario y obtener un JWT
  useEffect(() => {
    createJWT();

    const httpRequest = `https://freegeoip.app/json/?apikey=${process.env.LOCATION_API_KEY}`;

    //Obtiene las coordenadas del usuario al ingresar a la página
    fetch(httpRequest)
      .then((res) => res.json())
      .then((data) => {
        const coordinates = {
          lon: data.longitude,
          lat: data.latitude,
        };
        handleGetInfoWeather(coordinates);
        getInfoCities();
      })
      .catch((err) => console.log(err));

  }, []);

  async function handleGetInfoWeather(coor) {
    const currentData = await getCurrentInfo(coor); //Get Current Info Weather
    const threeHourlyData = await getThreeHourlyInfo(coor); //Get Three-hourly Info Weather
    const dailyData = await getDailyInfo(coor); //Get Daily Info Weather

    setCurrentInfo(currentData);
    setThreeHourlyInfo(threeHourlyData);
    setNext12Days(dailyData);
  }
  async function getInfoCities() {
    const citiesData = await getOtherCitiesInfo(); //Get Cities Info Weather
    setCitiesInfo(citiesData);
  }

  async function handleSearchCity(city) {
    const cities = await getListCities(city);
    setCities(cities);
    console.log(cities);
  }
  //Notas
  /* {
    Object.keys(infoWeather).length > 0 ? 'infoWeather' : 'Cacio'
  } */

  return (
    <div className='container'>
      <TitleApp />
      <Search
        city={city}
        cities={cities}
        setCity={setCity}
        handleSearchCity={handleSearchCity}
        handleGetInfoWeather={handleGetInfoWeather}
      />
      {
        Object.keys(currentInfo).length > 0 ? <WeatherContent currentInfo={currentInfo} /> : <SkeletonWeatherContent />
      }
      <TodayWeather threeHourlyInfo={threeHourlyInfo} />
      <ThisWeekWeather next12Days={next12Days} />
      <OtherCities citiesInfo={citiesInfo} />
      <Footer />
    </div>
  );
};

export default Home;

