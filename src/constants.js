const API_KEY = '3c3674a3c13a0084561b70150037e575';

const ENDPOINTS = {
    getWeather(city, period) {
        return period === '1'
            ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            : `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&cnt=${period}&appid=${API_KEY}`;
    },
    getImg(icon) {
        return `https://openweathermap.org/img/w/${icon}.png`;
    }
}

export {ENDPOINTS};
