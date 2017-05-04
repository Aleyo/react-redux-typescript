import { Photos } from '../models/Photos';
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';

const photos = axios.get('https://jsonplaceholder.typicode.com/photos')
.then(function (response) {
    console.log(response);
})

.catch(function (error) {
    console.log(error);
});



export default photos;