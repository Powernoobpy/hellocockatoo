import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css';

const Head=styled.h6`
  color:#fb9fa4;
  text-align: center;
`


export default class onlinetop extends Component {
    render() {
        return (
            <div className="Bg">
                <Head>Online boutique</Head>
            </div>
        )
    }
}
