import React from 'react';
import {connect} from 'react-redux';
import * as newsAction from "../../../actions/newsAction";
import AxiosRequest from './axiosRequest';

const News = ({newsState, newsAction}) => {

        return (
            <div><AxiosRequest axiosRequest={newsAction} />
                <ul>{newsState.map(obj => <li key={obj.id}>{obj.title}</li>)}</ul>
            </div>
        )
}
const mapStateToProps = (state) => {
    return {
        newsState : state.newsState
    }
};

export default connect(mapStateToProps, newsAction)(News);