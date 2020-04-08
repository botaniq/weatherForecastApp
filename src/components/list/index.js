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
        const {weather = [], temperature} = this.props;

        // console.log(weather);

        return (
            <ul className="list">
                {weather.map((item, index) => (
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
