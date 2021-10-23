/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import TitleApp from '../components/TitleApp';
import CurrentWeather from '../components/CurrentWeather';
import TodayWeather from '../components/TodayWeather';
import NextDays from '../components/NextDays';
import OtherCities from '../components/OtherCities';
import Footer from '../components/Footer';
import SkeletonWeatherContent from '../components/SkeletonWeatherContent';
import createJWT from '../utils/createJWT';
import { getCurrentInfo, getDailyInfo, getListCities, getOtherCitiesInfo, getThreeHourlyInfo } from '../utils/getInfoWeather';
import '../styles/Home.css';
import '../styles/mediaQueris.css';

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

  const handleGetInfoWeather = async (coor) => {
    const currentData = await getCurrentInfo(coor); //Get Current Info Weather
    const threeHourlyData = await getThreeHourlyInfo(coor); //Get Three-hourly Info Weather
    const dailyData = await getDailyInfo(coor); //Get Daily Info Weather

    setCurrentInfo(currentData);
    setThreeHourlyInfo(threeHourlyData);
    setNext12Days(dailyData);
  };
  const getInfoCities = async () => {
    const citiesData = await getOtherCitiesInfo(); //Get Cities Info Weather
    setCitiesInfo(citiesData);
  };
  const handleSearchCity = async (city) => {
    const cities = await getListCities(city);
    setCities(cities);
    console.log(cities);
  };
  const resetWeatherInfo = () => {
    setCurrentInfo([]);
    setThreeHourlyInfo([]);
    setNext12Days([]);
  };

  return (
    <div className='container'>
      <div className='box-left'>
        <TitleApp />
        <Search
          city={city}
          cities={cities}
          setCity={setCity}
          handleSearchCity={handleSearchCity}
          handleGetInfoWeather={handleGetInfoWeather}
          resetWeatherInfo={resetWeatherInfo}
        />
        {
          Object.keys(currentInfo).length > 0 ? <CurrentWeather currentInfo={currentInfo} /> : <SkeletonWeatherContent />
        }
      </div>
      <div className='box-right'>
        <div className='box-title-section'>
          <span className='title-section'>Informe Meteorológico Completo</span>
        </div>
        <TodayWeather threeHourlyInfo={threeHourlyInfo} />
        <NextDays next12Days={next12Days} />
        <OtherCities citiesInfo={citiesInfo} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
