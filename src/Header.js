import { React } from 'react'
import './Header.css'

export default function Header(){
    return(
        <div className="headerCont">
            <h1>Agri<span id='cred'>Cred</span></h1>
            <div className="navBar">
                <ul>
                    <li>Credit Assessment</li>
                    <li>Finance Services</li>
                    <li>Market</li>
                    <li>Analysis & Report</li>
                </ul>
            </div>
            <div className="btns">
                <button>Sign in</button>
                <button id="signup">Sign up</button>
            </div>
        </div>
    )
}