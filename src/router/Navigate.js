import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MyCookies from '../cookie/MyCookies';
export default class Home extends Component{
    render(){
        return(
            MyCookies.getCookie('name').length === 0 ?
            <Redirect to="/login"/>:
            <Redirect to="/home"/>
        )
    }
}