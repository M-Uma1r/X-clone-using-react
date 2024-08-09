import React from "react";
import "./following.css";

export default function Following() {
  return (
    <div>
      <div className="following">
        <button className="following-btn-1">For you</button>
        <button className="following-btn-2">
          Following
          <div className="under"></div>
        </button>
      </div>
    </div>
  );
}
