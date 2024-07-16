import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
const Landling = () => {
  var [email, setemail] = React.useState("");

 var HandleChangeValue = (e) => {
    setemail(e.target.value);
  };

  const HandleFormValue = (e) => {
    console.log(email);
  };
 
  return (
    <>
   
      <div className="l-main-div">
        <div className="l-bg-img"></div>
        <span className="l-logo-p">
          <h1 className="l-logo">NETFLIX</h1>
        </span>

        <hr className="l-mt-10" />
        <Link className="l-btn-signin" to={"/sign-in"}>
          Sign In
        </Link>

        <div className="l-mt-3">Unlimited Movies,TV shows and more</div>
        <div className="l-mt-5">Watch anywhere. Cancel anytime.</div>

        <p className="l-p-1">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form action="/sign-up" onSubmit={HandleFormValue}>
          <input
            id="input-email"
            type="text"
            placeholder="Email Address"
            name="email"
            onChange={HandleChangeValue}
          />
          <input className="input-email" type="submit" value="Get Started" />
        </form>

        <div>
          {" "}
          <h1 className="heading-p2 l-all-headings">Enjoy on your TV.</h1>
          <p className="l-pg-2 l-2views">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
          <video
            className="pg-video-1 l-2in1"
            width="420"
            height={"auto"}
            controls
          >
            <source
              src="https://www.youtube.com/watch?v=rUyrekdj5xs"
              type="video/mp4"
            />
            Your Browser Do Not support.
          </video>
        </div>
        <hr className="line-2" />

        <div>
          <h1 className="heading-p3 l-all-headings l-2and4-h">
            Download your shows to watch offline.
          </h1>
          <p className="pg-3 l-2and4">
            Save your favourites easily and always have something to watch.
          </p>
          <video
            className="pg-video-2 right-videos"
            width="420"
            height={"auto"}
            controls
          >
            <source
              src="https://www.youtube.com/watch?v=0wiSMPJ64uA"
              type="video/mp4"
            />
            Your Browser Do Not support.
          </video>
        </div>
        <hr className="line-3" />

        <div>
          <h1 className="heading-p4 l-all-headings">Watch everywhere.</h1>
          <p className="l-pg-4 l-2views">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
          <video className="pg-video-3 " width="420" height={"auto"} controls>
            <source
              src="https://www.youtube.com/watch?v=hpwnlr-ZHB0"
              type="video/mp4"
            />
            Your Browser Do Not support.
          </video>
        </div>
        <hr className="line-4" />

        <div>
          <h1 className="heading-p5 l-all-headings l-2and4-h">
            Create profiles for children.{" "}
          </h1>
          <p className="pg-5 l-2and4">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
          <video
            className="pg-video-4 right-videos"
            width="420"
            height={"auto"}
            controls
          >
            <source
              src="https://www.youtube.com/watch?v=EQFxWI9axtI"
              type="video/mp4"
            />
            Your Browser Do Not support.
          </video>
        </div>
      </div>
     
    </>
  );
};

export default Landling;
