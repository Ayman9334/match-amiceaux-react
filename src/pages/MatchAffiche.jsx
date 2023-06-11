import React from "react";
import "../css/match.css";

const MatchAffiche = () => {
    return (
        <div className="container affiche-match py-4">
            <div className="row">
                <div className="col-md-7">
                    <img
                        src="https://www.bootdey.com/image/400x300/FFB6C1/000000"
                        alt="project-image"
                        className="rounded"
                    />
                    <div className="project-info-box">
                        <p>
                            <b>Categories:</b> Design, Illustration
                        </p>
                        <p>
                            <b>Skills:</b> Illustrator
                        </p>
                    </div>
                    {/* / project-info-box */}
                </div>
                {/* / column */}
                <div className="col-md-5">
                    <div className="project-info-box mt-0">
                        <h5>PROJECT DETAILS</h5>
                        <p className="mb-0">
                            Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit
                            porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit
                            laoreet, quam nisi tincidunt tortor.
                        </p>
                    </div>
                    {/* / project-info-box */}
                    <div className="project-info-box">
                        <p>
                            <b>Client:</b> CUPCAKE CO
                        </p>
                        <p>
                            <b>Date:</b> 14.02.2020
                        </p>
                        <p>
                            <b>Designer:</b> James Doe
                        </p>
                        <p>
                            <b>Tools:</b> Illustrator
                        </p>
                        <p className="mb-0">
                            <b>Budget:</b> $500
                        </p>
                    </div>
                    {/* / project-info-box */}
                    <div className="project-info-box mt-0 mb-0">
                        <p className="mb-0">
                            <span className="fw-bold mr-10 va-middle hide-mobile">Share:</span>
                            <a href="#x" className="btn btn-xs btn-facebook btn-circle btn-icon mr-5 mb-0">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#x" className="btn btn-xs btn-twitter btn-circle btn-icon mr-5 mb-0">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#x" className="btn btn-xs btn-pinterest btn-circle btn-icon mr-5 mb-0">
                                <i className="fab fa-pinterest" />
                            </a>
                            <a href="#x" className="btn btn-xs btn-linkedin btn-circle btn-icon mr-5 mb-0">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </p>
                    </div>
                    {/* / project-info-box */}
                </div>
                {/* / column */}
            </div>
        </div>
    );
};

export default MatchAffiche;
