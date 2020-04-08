import React from "react"
import { Link } from 'react-router-dom'
import Period from "~c/period"

class ForecastThreeDays extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <h2>Weather forecast for 3 days</h2>
                <Period {...this.props}/>
                <Link to='/'>To main page</Link>
            </div>
        );
    }
}

export default ForecastThreeDays;
