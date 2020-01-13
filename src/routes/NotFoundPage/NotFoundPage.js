import React from 'react';
import './NotFoundPage.css';
// import image from '../../resources/image';
//TODO style page with image

export default function NotFoundPage(props) {
    return (
        <div className='NotFoundPage__container'>
                <div className='NotFoundPage__div'>
                    <h1 className="NotFoundPage_404">404</h1>
                    <span className='NotFoundPage__subtext'>Sorry, this page does not exist.</span>
                    <button className="NotFoundPage__home-btn" onClick={()=> props.history.push('/topics')}>Go Home</button>
                {/* <img src={astronaut} className='NotFoundPage__astronaut' alt='astronaut lost in space' /> */}
            </div>
            {/* <a className='attribution' href="https://www.freepik.com/free-photos-vectors/people">People vector created by grmarc - www.freepik.com</a> */}
        </div>

    );
}