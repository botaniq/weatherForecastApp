import React from 'react';

export default class extends React.Component {

    render() {
        let today = new Date(),
            periodDate =  new Date();

        let todayDay = today.getDate(),
            todayMonth = today.getMonth() + 1,
            todayYear = today.getFullYear();

        switch(this.props.period) {
            case 1:
                return (
                    <div className="dates">
                        <div className="text-center alert alert-warning">
                            {`${todayDay > 9 ? todayDay : '0' + todayDay}.${todayMonth > 9 ? todayMonth : '0' + todayMonth}.${todayYear}`}
                        </div>
                    </div>
                )
            case 3:
                periodDate.setDate(periodDate.getDate() + 3);
                break;
            case 7:
                periodDate.setDate(periodDate.getDate() + 7);
                break;
            default:
                break;
        }

        let day = periodDate.getDate(),
            month = periodDate.getMonth() + 1,
            year = periodDate.getFullYear();

        return (
            <div className="dates">
                <div className="text-center alert alert-warning">
                    {`${todayDay > 9 ? todayDay : '0' + todayDay}.${todayMonth > 9 ? todayMonth : '0' + todayMonth}.${todayYear} `}
                    -
                    {` ${day > 9 ? day : '0' + day}.${month > 9 ? month : '0' + month}.${year}`}
                </div>
            </div>
        )
    }
}
