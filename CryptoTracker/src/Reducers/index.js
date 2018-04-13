//
//  Index.js
//  CryptoTracker
//
//  Created by William Williams on 3/22/18.
//  Copyright © 2018 DSC. All rights reserved.
//
import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';

export default combineReducers({
    crypto: CryptoReducer
});