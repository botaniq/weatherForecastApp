import React from 'react';

class Period extends React.Component {

    render() {

        return (
            <div className="period">
                <h3 className="text-center">Please select period of weather</h3>
                <div className="period__list">
                    <div className="custom-control custom-radio period__item">
                        <input
                            type="radio"
                            id="period1"
                            name="period"
                            value="1"
                            className="custom-control-input"
                            onChange={this.props.handleRadio}
                            checked={this.props.period === '1'}
                        />
                        <label className="custom-control-label" htmlFor="period1">Now</label>
                    </div>
                    <div className="custom-control custom-radio period__item">
                        <input
                            type="radio"
                            id="period2"
                            name="period"
                            value="3"
                            className="custom-control-input"
                            onChange={this.props.handleRadio}
                        />
                        <label className="custom-control-label" htmlFor="period2">3 days</label>
                    </div>
                    <div className="custom-control custom-radio period__item">
                        <input
                            type="radio"
                            id="period3"
                            name="period"
                            value="7"
                            className="custom-control-input"
                            onChange={this.props.handleRadio}
                        />
                        <label className="custom-control-label" htmlFor="period3">7 days</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Period;
