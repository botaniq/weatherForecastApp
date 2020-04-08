import React from 'react';

export default class extends React.Component {
    render() {
        const {city, handleInput, submitAction} = this.props;

        return (

            <form onSubmit={submitAction}>
                <h1 className="alert alert-success">Weather in {city} ☺</h1>
                <div className="form-group row justify-content-center align-items-center search">
                    <label htmlFor="city" className="col-form-label label">City:</label>
                    <div className="col-sm-2">
                        <input
                            type="text"
                            className="form-control input"
                            id="city"
                            placeholder="City"
                            onChange={handleInput}
                            value={city}
                            onBlur={submitAction}
                        />
                    </div>
                    <button className="btn btn-primary">Fetch</button>
                </div>

            </form>
        )
    }
}
