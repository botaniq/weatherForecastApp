import React from "react"
import Dates from "~c/date";
import List from "~c/list";

export default class extends React.Component {
    render() {
        let {weather, temperature, successFetch, period} = this.props.store.period;

        return (
            <>
                {successFetch
                    ? (
                        <div>
                            <Dates
                                period={period} />
                            <List
                                period={period}
                                weather={weather}
                                temperature={temperature} />
                        </div>
                    )
                    : <div className="text-center">Loading...</div>}
            </>
        )
    }
}
