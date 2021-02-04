import React from 'react'
import "./InstrumentCards.css"
import AudioPlayer from "react-h5-audio-player";

import clarinet from "../images/instruments/clarinet.jpg"
import piccolo from "../images/instruments/piccolo.jpg"
import flute from "../images/instruments/flute.jpg"
import oboe from "../images/instruments/oboe.jpg"
import bassclarinet from "../images/instruments/bassclarinet.jpg"
import basson from "../images/instruments/basson.jpg"
import violin from "../images/instruments/violin.jpg"
import viola from "../images/instruments/viola.jpg"
import cello from "../images/instruments/cello.jpg"
import doublebass from "../images/instruments/doublebass.jpg"
import harp from "../images/instruments/harp.jpg"

import trumpet from "../images/instruments/trumpet.jpg"
import frenchhorn from "../images/instruments/frenchhorn.jpg"
import trombone from "../images/instruments/trombone.jpg"
import basstrombone from "../images/instruments/basstrombone.jpg"
import euphonium from "../images/instruments/euphonium.jpg"
import tuba from "../images/instruments/tuba.jpg"



import CardItem from "./CardItem"

function InstrumentCards() {
    
    return (
        <>
            <div className='cards'>
                <h1>Instruments</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <div className='woodwinds'>
                            <h2 className="section-names">Woodwinds</h2>
                            <ul className='cards__items' >
                                <CardItem
                                    src={piccolo}
                                    text='Place Holder for Audio'
                                    label='Piccolo'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={flute}
                                    text='Place Holder for Audio'
                                    label='Flute'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={clarinet}
                                    text='Place Holder for Audio'
                                    label='Clarinet'
                                    path='/instruments'
                                />
                            </ul>

                            <ul className='cards__items'>
                                <CardItem
                                    src={oboe}
                                    text='Place Holder for Audio'
                                    label='Oboe'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={basson}
                                    text='Place Holder for Audio'
                                    label='Basson'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={bassclarinet}
                                    text='Place Holder for Audio'
                                    label='Bass Clarinet'
                                    path='/instruments'
                                />
                            </ul>
                        </div>
                        <div className='strings'>
                            <h2 className='section-names'>Strings</h2>
                            <ul className='cards__items' >
                                <CardItem
                                    src={violin}
                                    text='Place Holder for Audio'
                                    label='Violins'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={viola}
                                    text='Place Holder for Audio'
                                    label='Viola'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={cello}
                                    text='Place Holder for Audio'
                                    label='Cello'
                                    path='/instruments'
                                />
                            </ul>

                            <ul className='cards__items'>
                                <CardItem
                                    src={doublebass}
                                    text='Place Holder for Audio'
                                    label='Double Bass'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={harp}
                                    text='Place Holder for Audio'
                                    label='Harp'
                                    path='/instruments'
                                />
                            </ul>
                        </div>
                        <div className='brass'>
                            <h2 className='section-names'>Brass</h2>
                            <ul className='cards__items' >
                                <CardItem
                                    src={frenchhorn}
                                    text='Place Holder for Audio'
                                    label='French Horns'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={trumpet}
                                    text='Place Holder for Audio'
                                    label='Trumpets'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={trombone}
                                    text='Place Holder for Audio'
                                    label='Trombone'
                                    path='/instruments'
                                />
                            </ul>

                            <ul className='cards__items'>
                                <CardItem
                                    src={basstrombone}
                                    text='Place Holder for Audio'
                                    label='Bass Trombone'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={euphonium}
                                    text='Place Holder for Audio'
                                    label='Euphonium'
                                    path='/instruments'
                                />
                                <CardItem
                                    src={tuba}
                                    text='Place Holder for Audio'
                                    label='Tuba'
                                    path='/instruments'
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstrumentCards
