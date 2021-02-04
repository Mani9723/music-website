import React from 'react'
import {Link} from 'react-router-dom'
import BackgroundSlider from 'react-background-slider'
import vienna1 from '../images/vienna1.jpg'
import vienna2 from '../images/vienna2.jpg'
import aso from '../images/aso.jpg'
import london from '../images/london.jpg'
import './MainBody.css'
import '../App.css'

function MainBody() {
    return (
        <>
        <div className="main-body-container">
            <h1 className='heading'>Discover the instruments </h1>
            <Link to="/" className="chevron"><i class="fas fa-chevron-down"></i></Link>
            <BackgroundSlider
                images={[vienna1, london,vienna2,aso]}
                duration={6}
                transition={2}
            />
        </div>
        </>
    )
}

export default MainBody
