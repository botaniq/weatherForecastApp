import React from "react"
import {Link} from 'react-router-dom'
import Search from "~c/search"
import Period from "~c/period";
import History from "~c/history";

class Main extends React.Component {
    render() {
        let {city} = this.props.store.search;

        return(
           <div className="weather-app container">
               <Search
                   city={city}
                   submitAction={this.props.fetchWeather}
                   handleInput={this.props.searchHandler}
               />
               <div className="weather-app__content">
                   <Period {...this.props}/>

                   <h3 className="text-center">Please select period of weather</h3>
                   <div className="d-flex justify-content-around">
                       <Link onClick={() => this.props.periodHandler(3)} to='/forecastThreeDays'>Three Days</Link>
                       <Link onClick={() => this.props.periodHandler(7)} to='/forecastWeek'>Week</Link>
                   </div>
                   <History {...this.props}/>
               </div>
           </div>
        )

    }
}

export default Main;



