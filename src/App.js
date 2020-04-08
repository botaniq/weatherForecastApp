import React from 'react';
import { connect } from 'react-redux';
import Search from '~c/Search';
import Period from '~c/Period';
import Dates from '~c/Date';
import List from '~c/List';
import {ENDPOINTS} from './constants';

import { updateCityValue, updatePeriodValue, setWeather, updateSuccessFetch, setTemperature } from './data/actions/actions.js';


class App extends React.Component {

    componentDidMount() {
        this.fetchWeather();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.store.reducers.period !== this.props.store.reducers.period) {
            this.fetchWeather();
        }
    }

    searchHandler = event => {
        const {value: city} = event.target;
        this.props.updateCityValue(city);
    }

    periodHandler = event => {
        const {value: period} = event.target;
        this.props.updatePeriodValue(period);
    }

    fetchWeather = event => {
        let {city, period} = this.props.store.reducers;

        if (event) event.preventDefault();

        if (city === '') {
            this.props.setWeather([]);
            this.props.updateSuccessFetch(true);

            return;
        }

        this.props.updateSuccessFetch(false);

        fetch(ENDPOINTS.getWeather(city, period))
            .then(response => response.ok ? response : Promise.reject('Not found weather'))
            .then(response => response.json())
            .then(({list, weather, main}) => {
                if(list) {
                    return {
                        weather: list.map( item => {
                            return item.weather[0];
                        }),
                        temperature: list.map( item => {
                            return item.temp.day;
                        })
                    }
                } else if (weather) {
                    return {
                        weather: weather,
                        temperature: [main.temp]
                    }
                }
            })
            // .then(result => console.log(result))
            .then(({weather, temperature}) => {
                this.props.setWeather(weather);
                this.props.updateSuccessFetch(true);
                this.props.setTemperature(temperature);
                // this.setState({temperature})
                })
            .catch(e => {
                this.props.setWeather([]);
                this.props.updateSuccessFetch(true);
                console.log(e);
            }); // Not found weather
    }

    render() {
        let {city, period, weather, successFetch, temperature} = this.props.store.reducers;

        return (
            <div className="weather-app">
                <Search
                    city={city}
                    submitAction={this.fetchWeather}
                    handleInput={this.searchHandler}
                />
                <div className="weather-app__content">
                    {/*<Period*/}
                    {/*    handleRadio={this.periodHandler}*/}
                    {/*    period={period}*/}
                    {/*/>*/}
                    {successFetch
                        ? <div>
                            <Dates
                                period={period} />
                            <List
                                weather={weather}
                                temperature={temperature} />
                        </div>

                        : <div className="text-center">Loading...</div>}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        updateCityValue: (value) => {
            dispatch( updateCityValue(value) )
        },
        updatePeriodValue: (value) => {
            dispatch( updatePeriodValue(value) )
        },
        setWeather: (array) => {
            dispatch( setWeather(array) )
        },
        updateSuccessFetch: (bool) => {
            dispatch( updateSuccessFetch(bool) )
        },
        setTemperature: (array) => {
            dispatch( setTemperature(array) )
        }
    })
)(App);
