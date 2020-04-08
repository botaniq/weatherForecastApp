import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Main from '~p/main'
import Forecast from '~p/forecast'
import {ENDPOINTS} from './constants';

import { updateCity } from '~a/search';
import { addItem } from '~a/history';
import { updatePeriod, setWeather, updateSuccessFetch, setTemperature } from '~a/period';

class App extends React.Component {
    componentDidMount() {
        this.fetchWeather();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.store.period.period !== this.props.store.period.period) {
            this.fetchWeather();
        }
    }

    searchHandler = event => {
        const {value: city} = event.target;
        this.props.updateCity(city);
    }

    periodHandler = period => {
        this.props.updatePeriod(period);
    }

    updateWeather = (city, weather, temperature) => {
        this.props.updateCity(city);
        this.props.setWeather(weather);
        this.props.setTemperature(temperature);
    }

    fetchWeather = event => {
        let {period} = this.props.store.period;
        let {city} = this.props.store.search;
        let {history} = this.props.store.history;
        let lastCity = '';

        if (history.length > 0) {
            lastCity = history[history.length - 1].city;
        }

        if (lastCity === city) return;

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
                this.props.addItem({
                    city,
                    weather,
                    temperature,
                    id: `f${(~~(Math.random()*1e8)).toString(16)}`
                });
                })
            .catch(e => {
                this.props.setWeather([]);
                this.props.updateSuccessFetch(true);
                console.log(e);
            }); // Not found weather
    }

    render() {
        console.log(this.props.store.history);
        return (
            <main>
                <Switch>
                    <Route exact path="/" render={() =>
                        <Main
                            {...this.props}
                            updateWeather = {this.updateWeather}
                            fetchWeather = {this.fetchWeather}
                            searchHandler = {this.searchHandler}
                            periodHandler = {this.periodHandler}
                        />
                    } />
                    <Route path="/forecastThreeDays" render={() =>
                        <Forecast
                            {...this.props}
                            periodHandler = {this.periodHandler}
                        />
                    } />
                    <Route exact path="/forecastWeek" render={() =>
                        <Forecast
                            {...this.props}
                            periodHandler = {this.periodHandler}
                        />
                    } />
                </Switch>
            </main>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        updateCity: (value) => {
            dispatch( updateCity(value) )
        },
        addItem: (obj) => {
            dispatch( addItem(obj) )
        },
        updatePeriod: (value) => {
            dispatch( updatePeriod(value) )
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
