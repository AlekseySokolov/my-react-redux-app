import React from 'react';
import {connect} from 'react-redux';
import * as newsAction from "../../../actions/newsAction";
import AxiosRequest from './axiosRequest';
import './news.css';

const News = ({newsState, newsAction}) => {

        return (
            <div className='newsContainer'><AxiosRequest axiosRequest={newsAction} />
                <ul className='newsList'>{newsState.map(obj => <li className='newsItem' key={obj.id}>{obj.title}</li>)}</ul>
            </div>
        )
}
const mapStateToProps = (state) => {
    return {
        newsState : state.newsState
    }
};

export default connect(mapStateToProps, newsAction)(News);