import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import "./css/index.css";

const Loading = () => {
  return (
    // <div className="loading-container">
    //   <ProgressSpinner className="loading-spinner" />
    // </div>
    <div className="loading-container">
      <img src="/view/resources/img/GIF2.gif" alt="Loading" className="loading-spinner" />
    </div>
  );
};

export default Loading;
