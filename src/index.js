import React from 'react'
import ReactDOM from 'react-dom'
import mikiyasImage from './images/MikiyasMebrate.jpg'

const rootElemenet = document.querySelector('#root')

const imgStyle = {width: '200px', height: '200px' }
const main = (
    <div className='m-4'>
        <img style={imgStyle} className='img-fluid rounded-circle mt-3' src={mikiyasImage} alt='mikiyas' />
        <div className='h4' >Mikiyas Mebrate</div>
        <p className='fw-light mt-3'>Junier Developer, Ethiopia</p>
        <div className='mt-5 h5'>SKILLS</div>
        <div>
            <button className='btn btn-primary m-1'>HTML</button>
            <button className='btn btn-primary m-1'>CSS</button>
            <button className='btn btn-primary m-1'>JavaScript</button>
            <button className='btn btn-primary m-1'>React</button>
            <button className='btn btn-primary m-1'>Python</button>
            <button className='btn btn-primary m-1'>Django</button>
            <button className='btn btn-primary m-1'>MySQL</button>
            <button className='btn btn-primary m-1'>Git</button>
            <button className='btn btn-primary m-1'>GitHub</button>
        </div>
        <div className='mt-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
            </svg>
            <span className='fw-normal ms-1'>Joined on Mar, 2020</span>
        </div>
    </div>
)

const screenSize = {height: '100vh'}
const app = (
    <div style={screenSize} className='m-3 bg-light'>
        {main}
    </div>
)
ReactDOM.render(app, rootElemenet)