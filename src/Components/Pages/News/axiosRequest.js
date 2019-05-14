import React, {Component} from 'react';
import axios from 'axios';


class AxiosRequest extends Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.props.axiosRequest(res.data.slice(0, 10))
            })
            .catch(() => {
                this.props.axiosRequest([{id : 1, title: 'Something went wrong'}])
            })
    }

    render() {
        return (
            <></>
        )
    }

}

export default AxiosRequest;