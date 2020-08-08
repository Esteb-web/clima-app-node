const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=704197033ab1d897c1f973856a758847&units=metric`);

    return resp;
}

module.exports = {
    getClima
}