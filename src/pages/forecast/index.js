import React from "react"
import { Link } from 'react-router-dom'
import Period from "~c/period"

class ForecastThreeDays extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <h2>Weather forecast in {this.props.store.search.city} for {this.props.store.period.period} days</h2>
                <Period {...this.props}/>
                <Link onClick={() => this.props.periodHandler(1)} to='/'>To main page</Link>
            </div>
        );
    }
}

export default ForecastThreeDays;
