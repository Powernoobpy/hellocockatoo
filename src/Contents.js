import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Acolum=styled.div`
font-size:150%;
color:#fb9fa4;
`

const Bcolum=styled.p`
font-size:80%;
color:#fb9fa4;
`

export default class Contents extends Component {
    render() {
        return (
            <div classname="container">
                <div classname="row">
                    <div classname="col-1">
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-3">
                                <Acolum>OFFICIAL</Acolum>
                                <Acolum>FINALIST</Acolum>
                                <Acolum>AT ETSY</Acolum>
                                <Acolum>DESIGN AWARDS</Acolum>
                            </div>
                        <div className="col-3">
                            <Bcolum>
                            Collage is a contemporary product design 
                            boutique that creates original and unique objects, 
                            experimenting with different materials, shapes, 
                            textures and colors. We create a wide variety of 
                            hand-crafted objects, from decorative and utility 
                            accessories to jewelry, while constantly evolving 
                            to offer unique products for a design-savvy 
                            clientele.
                            </Bcolum>
                        </div>
                        <div className="col-3">
                            <Bcolum>
                            All prices are in Canadian (CAD) currency. To 
                            accommodate our clients outside of Canada, we 
                            offer different shipping costs and methods, at the 
                            best available price, but you need to get in touch
                            first. Please contact us for international shipping 
                            costs, personalized orders or for a pick up, we'll 
                            be happy to create a specific listing for you.
                            </Bcolum>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
