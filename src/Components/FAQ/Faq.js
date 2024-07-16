import React from 'react';
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import './Faq.css'

const Faq = () => {
    return (
        <>
            <div className='faq-nav'>
                <span className="l-logo-p">
                    <h1 className="l-logo">NETFLIX</h1>
                </span>
                <Link className="l-btn-signin" to={"/sign-in"}>
                    Sign In
                </Link>
            </div>


            <div className='faq-page'>
                <div className='home-arrow-main'>
                    <BiArrowBack id='back-icon' />
                    <Link id='back-home' to={'/'}>Back to Home</Link>
                </div>
                <div>
                    <h1 className='heading-1'>What is Netflix?</h1>
                    <img className='faq-img' src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png" alt="" />
                    <p className='faq-para'>Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device.   </p>
                    <p className='faq-para'>You can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.</p>
                    <p className='faq-para'>If you're already a member and would like to learn more about using Netflix, visit Getting started with Netflix.</p>
                </div>
                <hr className='faq-hr' />

                <div>
                    <h1 className='heading-1'>TV Shows & Movies</h1>
                    <img className='faq-img' src="https://help.nflxext.com/396a2a39-8d34-4260-b07a-6391fe04ded5_what_is_netflix_2_en.png" alt="" />
                    <p className='faq-para'>Netflix content varies by region and may change over time. You can watch from a wide variety of award-winning Netflix Originals, TV shows, movies, documentaries, and more.</p>
                    <p className='faq-para'>The more you watch, the better Netflix gets at recommending TV shows and movies we think you’ll enjoy.</p>
                </div>
                <hr className='faq-hr' />

                <div>
                    <h1 className='heading-1'>Supported Devices</h1>
                    <img className='faq-img' src="https://help.nflxext.com/7ac9b493-ae69-431a-923d-3cb8a79d7e63_what_is_netflix_3_en.png" alt="" />
                    <p className='faq-para'>You can watch Netflix through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance.

                    </p>
                    <p className='faq-para'>Need help getting set up? Search our Help Center for the manufacturer of the device you're using.</p>
                </div>
                <hr className='faq-hr' />

                <div>
                    <h1 className='heading-1'>Plans and Pricing</h1>
                    <img className='faq-img' src="https://help.nflxext.com/b3e9e3a3-20ff-4974-87d4-162e0a547768_what_is_netflix_4_en.png" alt="" />
                    <p className='faq-para'>Each Netflix plan determines the number of devices you can watch Netflix on at the same time and if you prefer to view in Standard Definition (SD), High Definition (HD), or Ultra High Definition (UHD). </p>
                    <p className='faq-para'>Compare our plans and pricing to decide which one is right for you. You can easily change your plan or cancel online at any time.
                    </p>
                </div>
                <hr className='faq-hr' />

                <div>
                    <h1 className='heading-1'>Get Started!</h1>
                    <img className='faq-img' src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png" alt="" />
                    <p className='faq-para'>Follow these easy steps to start watching Netflix today:</p>
                    <ol>
                        <li className='faq-lists'>Visit netflix.com/signup.</li>
                        <li className='faq-lists'>Choose the plan that’s right for you.</li>
                        <li className='faq-lists'>Create an account by entering your email address and creating a password.</li>
                        <li className='faq-lists'>Enter a payment method. As a Netflix member, you are charged once a month on the date you signed up. </li>
                    </ol>
                </div>
                <hr className='faq-hr' />

            </div>
        </>
    );
}

export default Faq;
