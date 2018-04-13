//
//  FetchCoinData.js
//  CryptoTracker
//
//  Created by William Williams on 3/22/18.
//  Copyright © 2018 DSC. All rights reserved.
//
import axios from 'axios';
import { apiBaseURL } from '../Utils/Constants';
import {FETCHING_COIN_DATA, 
    FETCHING_COIN_DATA_SUCCESS, 
    FETCHING_COIN_DATA_FAIL} from '../Utils/ActionTypes';

export default function FetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        const instance = axios.create({
            baseURL: '{apiBaseURL}/v1/ticker/?limit=10',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
          });

        return instance.get("http://api.coinmarketcap.com/v1/ticker/?limit=10")
            .then(res => {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log('There has been a problem with your fetch operation: ' + err.message);

                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err});
            });
    }
}