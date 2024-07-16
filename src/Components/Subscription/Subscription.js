import React from 'react';
import './Subscription.css'
const Subscription = () => {
    return (
        <div>
            <h1 className='sub-heading'>Subscription</h1>

            <div className="sub-card-main">
                <div className='sub-card sub-card1'>
                    <h4 className='sub-cards'>$49</h4>
                    <p className='sub-cards'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>


                <div className='sub-card'>
                    <h4 className='sub-cards'>$249</h4>
                    <p className='sub-cards'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>


                <div className='sub-card'>
                    <h4 className='sub-cards'>$999</h4>
                    <p className='sub-cards'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    );
}

export default Subscription;
