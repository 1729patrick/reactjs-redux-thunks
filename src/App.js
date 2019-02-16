import React, { Component } from 'react';
import { connect } from "react-redux";
import { thunkFetchData } from './actions/app'

class App extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        // console.log(this.props);

        const { data } = this.props;

        return (
            <div>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{ item.joke }</li>
                    ))}
                </ul>
        </div>
    )
    }
}

const mapsStateToProps = (state) => {
    // console.log('map', state);

    return {
        data: state.fetched,
        error: state.fethcedError,
        isFetching: state.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchData: () => dispatch(thunkFetchData())
    }
};

export default connect(mapsStateToProps, mapDispatchToProps) (App);
