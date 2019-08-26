import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css';

const Head=styled.h1`
  font-size :800% ;
  text-align: left;
  color:#fb9fa4;
  line-height: .8;
`
const Home=styled.img`
    with: 300%;
    heigh: auto;
`

export default class Header extends Component {
    render() {
        return (
            <div>
                <Head>PRODUCT</Head>
                <Head>DESIGN</Head>   
                <Home src="/images/home3.jpg"/>
            </div>
            
        )
    }
}