import React from "react"

export default class extends React.Component {
    render() {
        let {history} = this.props.store.history;

        console.log(history);

        return (
            <>
                <h4 className="text-center">History</h4>
                <ul className="list">
                    {history.map((item, index) => (
                            <li onClick={() => {
                                this.props.updateWeather(item.city, item.weather, item.temperature)
                            }} key={item.id} className="list__item history__item">
                                <span>{item.city}</span>
                            </li>
                        )
                    )}
                </ul>
            </>
        )
    }
}
