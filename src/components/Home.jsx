import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Foryou from "./Foryou";
import Following from "./Following";
import "./home.css";
import "./XTwitterPost.css";

export default function Home() {
  const [tweet, setTweet] = useState("");
  const maxCharacters = 280;

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = () => {
    if (tweet.length > 0 && tweet.length <= maxCharacters) {
      console.log("Tweet posted:", tweet);
      setTweet(""); // Clear the input after posting
    }
  };
  return (
    <div className="d-inline">
      <div className="left">
        <Sidebar />
      </div>
      <div className="mid">
        <div className="foryoubox">
          <Foryou />
          {/* <Following/> */}
        </div>
        <div className="mainbox">
          <div className="xtwitter-post-container">
            <div className="profile-picture">
              <img
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
                alt="Profile"
              />
            </div>
            <div className="tweet-box">
              <textarea
                className="tweet-input"
                value={tweet}
                onChange={handleTweetChange}
                placeholder="What is happening?"
                maxLength={maxCharacters}
              />
              <div className="twbtn"><button className="tweet-input-btn"><i className="fa fa-solid fa-earth-americas"></i>Everyone can reply</button></div>
              <div className="tweet-footer">
                <div className="icons">
                  <i className="fa fa-image"></i>
                  <i className="fa fa-gif"></i>
                  <i className="fa fa-poll"></i>
                  <i className="fa fa-smile"></i>
                  <i className="fa fa-calendar"></i>
                  <i className="fa fa-location-arrow"></i>
                </div>
                <div className="tweet-actions">
                  <span
                    className={`char-counter ${
                      tweet.length > maxCharacters - 20 ? "warn" : ""
                    }`}
                  >
                    {maxCharacters - tweet.length}
                  </span>
                  <button
                    className="tweet-button"
                    onClick={handleTweetSubmit}
                    disabled={
                      tweet.length === 0 || tweet.length > maxCharacters
                    }
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
