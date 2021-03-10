import { navigate } from "gatsby";
import React from "react";
import "./errorPage.css";

export const ErrorPage = () => {
  return (
    <div className='errorPage'>
      <div className='err404'>404</div>
      <div className='errorMsg'>
        Maybe this page moved. Got deleted. Is hiding out in quarantine. Never
        existed in the first place.
        <p>
          Let's go{" "}
          <strong
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </strong>{" "}
          and try from there.
        </p>
      </div>
    </div>
  );
};
