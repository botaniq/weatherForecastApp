import React from 'react';
import {ENDPOINTS} from '../../constants';

function toCelsius(kelvin) {
    let celsius = kelvin - 273.15;
    return celsius.toFixed(1);
}

export default class extends React.Component {

    renderEmptyMessage() {
        return (
            <div>
                The search did not give results
            </div>
        )
    }

    renderWeather() {
        const {weather = [], temperature, period} = this.props;

        // console.log(weather);
        // console.log(weather.length);

        let weatherDays = [];

        switch (period) {
            case 1:
                weatherDays.push(weather[0]);
                break;
            case 3:
                weatherDays.push(weather[0], weather[1], weather[2]);
                break;
            case 7:
                weatherDays = weather;
                break;
            default:
                weatherDays.push(weather[0]);
        }

        return (
            <ul className="list">
                {weatherDays.map((item, index) => (
                        <li key={index} className="list__item">
                            <span className="temperature">{toCelsius(temperature[index])}</span>
                            <span className="celsius"><sup> 0</sup>C</span>
                            <img src={ENDPOINTS.getImg(item.icon)} alt="" className="list__img"/>
                            <span>{item.description}</span>
                        </li>
                    )
                )}
            </ul>
        );
    }

    render() {
        const {weather = []} = this.props;

        return (
            <div className="list">
                {weather.length > 0
                    ? this.renderWeather()
                    : this.renderEmptyMessage()}
            </div>
        );
    }

}
