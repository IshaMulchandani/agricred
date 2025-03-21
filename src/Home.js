import { React } from 'react'
import './Home.css'
import Header from './Header'
import homeimg1 from './Assets/Frame 41.jpg'

export default function Home(){
    return(
        <div className="homeCont">
            <Header/>
            <div className="page">
                <div className="sec1">
                    <div className="textSec">
                        <div className="info">
                            <h1>Analytical layer of the agricultural sector <span id="smalltxt">for smarter growth.</span></h1>
                            <p>Creditworthiness is assessed by evaluating farm income, debt, and crop performance. Satellite tech and machine learning help predict risks, improving decision-making and farm stability.</p>
                        </div>
                        <div className="sec1-btns">
                            <button className="login-btn" id="login-btn1">Agribusiness Login</button>
                            <button className="login-btn" id="login-btn2">Investor Login</button>
                        </div>
                    </div>
                    <div className="imgSec">
                        <img src={homeimg1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}