import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Main from '~p/main'
import Forecast from '~p/forecast'
import {ENDPOINTS} from './constants';

import { updateCity } from '~a/search';
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

    fetchWeather = event => {
        let {period} = this.props.store.period;
        let {city} = this.props.store.search;


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
                })
            .catch(e => {
                this.props.setWeather([]);
                this.props.updateSuccessFetch(true);
                console.log(e);
            }); // Not found weather
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" render={() =>
                        <Main
                            {...this.props}
                            fetchWeather = {this.fetchWeather}
                            searchHandler = {this.searchHandler}
                            periodHandler = {this.periodHandler}
                        />
                    } />
                    <Route path="/forecastThreeDays" render={() =>
                        <Forecast
                            {...this.props}
                        />
                    } />
                    <Route exact path="/forecastWeek" render={() =>
                        <Forecast
                            {...this.props}
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
