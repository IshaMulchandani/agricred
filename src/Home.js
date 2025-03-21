import { React } from 'react'
import './Home.css'
import Header from './Header'
import homeimg1 from './Assets/Frame 41.jpg'
import homeimg2 from './Assets/Frame 40.png'
import icon1 from './Assets/icon1.jpg'
import icon2 from './Assets/icon2.jpg'
import icon3 from './Assets/icon3.png'
import icon4 from './Assets/icon4.png'
import icon5 from './Assets/icon5.png'
import icon6 from './Assets/icon6.png'
import sat_img from './Assets/sat_img.png'
import sec5_img1 from './Assets/sec5_img1.png'
import sec5_img2 from './Assets/sec5_img2.png'
import sec5_img3 from './Assets/sec5_img3.png'

export default function Home(){
    const investorClick=()=>{
        let invBtn=document.getElementById('investor-btn')
        let bizBtn=document.getElementById('business-btn')
        let invinfo=document.getElementById('investorTxt')
        let bizinfo=document.getElementById('businessTxt')
        invBtn.style.backgroundColor='rgba(0,255,0,0.3)'
        invBtn.style.border='2px solid green'
        bizBtn.style.backgroundColor='white'
        bizBtn.style.border='1px solid grey'
        invinfo.style.display='block'
        bizinfo.style.display='none'
    }

    const businessClick=()=>{
        let invBtn=document.getElementById('investor-btn')
        let bizBtn=document.getElementById('business-btn')
        let invinfo=document.getElementById('investorTxt')
        let bizinfo=document.getElementById('businessTxt')
        bizBtn.style.backgroundColor='rgba(0,255,0,0.3)'
        bizBtn.style.border='2px solid green'
        invBtn.style.backgroundColor='white'
        invBtn.style.border='1px solid grey'
        bizinfo.style.display='block'
        invinfo.style.display='none'
    }
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
                <div className="sec2">
                    <div className="sec2-1">
                        <h1>How does it work?</h1>
                        <img src={homeimg2} alt="" />
                    </div>
                    <div className="sec2-2">
                        <div className="home2-btns">
                            <button id='investor-btn' onClick={investorClick} >For Investors</button>
                            <button id='business-btn' onClick={businessClick}>For AgriBusiness</button>
                        </div>
                        <div className="infoSec" >
                            <div className="investors">
                                <div className="line"></div>
                                <div className="investorTxt" id='investorTxt'>
                                    <div id="info1">
                                        <h3>1. Register</h3>
                                        <p>Register as an investor by providing your basic contact details and completing identity verification. Gain instant access to investment opportunities.</p>
                                    </div>
                                    <div id="info2">
                                        <h3>2. Investment Opportunities</h3>
                                        <p>Access curated investment opportunities, powered by data and advanced technology.</p>
                                    </div>
                                    <div id="info3">
                                        <h3>3. Risk Assessment</h3>
                                        <p>Our platform offers comprehensive risk assessment and profiling tools to help investors make informed decisions.</p>
                                    </div>
                                    <div id="info4">
                                        <h3>4. Risk Management</h3>
                                        <p>Ensures a secure investment experience with clear legal agreements and robust risk management strategies.</p>
                                    </div>
                                </div>
                                <div className="businessTxt" id='businessTxt'>
                                    <div id="info1">
                                        <h3>1. Registration</h3>
                                        <p>Uses satellite imagery and AI to gather financial data, crop history, and farm conditions for a hassle-free digital loan application.</p>
                                    </div>
                                    <div id="info2">
                                        <h3>2. Profile Review</h3>
                                        <p>Efficient profile review and approval process for fast and smooth loan approval.</p>
                                    </div>
                                    <div id="info3">
                                        <h3>3. Risk Assessment</h3>
                                        <p>Comprehensive risk assessment followed by quick disbursement for timely financial support.</p>
                                    </div>
                                    <div id="info4">
                                        <h3>4. Support</h3>
                                        <p>Continuous support and real-time progress tracking to ensure smooth and successful outcomes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec3">
                    <h1>What Agricred offers</h1>
                    <h5>Streamlines and accelerates the growth of agricultural finance.</h5>
                    <div className="offers">
                        <div className="offer" id="offer1">
                            <img src={icon1} alt="" />
                            <h4>24 Hrs Disbursal to Seller</h4>
                        </div>
                        <div className="offer" id="offer2">
                            <img src={icon2} alt="" />
                            <h4>100% Truly Digital Platform</h4>
                        </div>
                        <div className="offer" id="offer3">
                            <img src={icon3} alt="" />
                            <h4>Flexible Repayment for Buyers</h4>
                        </div>
                        <div className="offer" id="offer4">
                            <img src={icon4} alt="" />
                            <h4>Collateral Free Financing</h4>
                        </div>
                        <div className="offer" id="offer5">
                            <img src={icon5} alt="" />
                            <h4>Best Discounting Rates</h4>
                        </div>
                        <div className="offer" id="offer6">
                            <img src={icon6} alt="" />
                            <h4>AI Credit Risk Evaluation</h4>
                        </div>
                    </div>
                </div>
                <div className="sec4">
                    <div className="sec4-1">
                        <h2>Global Coverage</h2>
                        <p>Agricred leverages satellite imagery to gather comprehensive, real-time data from farms across the globe. This technology allows us to monitor farm conditions, track crop health, soil quality, weather patterns, and more, regardless of the location. It ensures that farmers from all over the world can benefit from accurate, timely insights</p>
                    </div>
                    <div className="sec4-img">
                        <img src={sat_img} alt="" />
                    </div>
                </div>
                <div className="sec5">
                    <div className="sec5-img" id="sec5-img1">
                        <h3>Instant Information Support</h3>
                        <img src={sec5_img1} alt="" />
                    </div>
                    <div className="sec5-img" id="sec5-img2">
                        <h3>Access to financial services marketplace</h3>
                        <img src={sec5_img2} alt="" />
                    </div>
                    <div className="sec5-img" id="sec5-img3">
                        <h3>AI-Driven credit risk evaluation</h3>
                        <img src={sec5_img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}