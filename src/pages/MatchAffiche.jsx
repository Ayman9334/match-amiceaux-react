import React, { useEffect, useState } from "react";
import "../css/match.css";
import axiosClient from "../configs/api/axios-config";
import { Avatar } from "primereact/avatar";
import { Divider } from "primereact/divider";

const MatchAffiche = () => {
    useEffect(() => {
        window.effectCommands();
    }, []);

    const [matchData, setMatchData] = useState();

    return (
        <div className="container affiche-match py-4">
            <div className="row">
                <div className="col-md-7">
                    <div className="slider-area affiche-match-slide w-100 h-auto py-0 rounded overflow-hidden border">
                        <div className="owl-carousel owl-slider">
                            <div className="slider-content">
                                <img
                                    src="/view/resources/img/template/gallerie/football-stadium-2.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="slider-content">
                                <img
                                    src="/view/resources/img/template/gallerie/basketball-2.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="slider-content">
                                <img
                                    src="/view/resources/img/template/gallerie/rugby-1.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="project-info-box border rouded  bg-light">
                        <h5 className="pb-3">Candidats de match :</h5>
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column">
                                <div className="py-3">
                                    <strong>Club A:</strong>
                                </div>
                                <div className="flex-fill">
                                    <div className="mb-2 d-flex align-items-center">
                                        <Avatar label="AE" className="mr-2" size="large" shape="circle" />
                                        <span>Ayman El mimouni</span>
                                    </div>
                                    <div className="mb-2 d-flex align-items-center">
                                        <Avatar label="AE" className="mr-2" size="large" shape="circle" />
                                        <span>Ayman El mimouni</span>
                                    </div>
                                    <div className="mb-2 d-flex align-items-center">
                                        <Avatar label="AE" className="mr-2" size="large" shape="circle" />
                                        <span>Ayman El mimouni</span>
                                    </div>
                                    <div className="mb-2 d-flex align-items-center">
                                        <Avatar label="AE" className="mr-2" size="large" shape="circle" />
                                        <span>Ayman El mimouni</span>
                                    </div>
                                </div>

                                <div>
                                    <b> Rejoindre :</b>
                                </div>
                                <div className="mt-2 mb-3 d-flex align-items-center">
                                    <button className="btn btn-success p-1 mr-4">Individuel</button>
                                    <button className="btn btn-success p-1">Comme club</button>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex flex-column">
                                <div className="py-3">
                                    <strong>Club A:</strong>
                                </div>
                                <div className="flex-fill">
                                    <div className="mb-2 d-flex align-items-center">
                                        <Avatar label="AE" className="mr-2" size="large" shape="circle" />
                                        <span>Ayman El mimouni</span>
                                    </div>
                                    <div className="mb-2 d-flex align-items-center">
                                        <Avatar label="AE" className="mr-2" size="large" shape="circle" />
                                        <span>Ayman El mimouni</span>
                                    </div>
                                    <div className="mb-2 d-flex align-items-center">
                                        <Avatar label="AE" className="mr-2" size="large" shape="circle" />
                                        <span>Ayman El mimouni</span>
                                    </div>
                                </div>

                                <div>
                                    <b> Rejoindre :</b>
                                </div>
                                <div className="mt-2 mb-3 d-flex align-items-center">
                                    <button className="btn btn-success p-1 mr-4">Individuel</button>
                                    <button className="btn btn-success p-1">Comme club</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="project-info-box mt-0 border rouded  bg-light">
                        <h5>DESCRIPTION :</h5>
                        <p className="mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, illo. Similique dolor
                            impedit, fuga temporibus, consectetur mollitia eos doloribus non suscipit odio itaque aut
                            voluptatibus ea nisi explicabo obcaecati ut? Neque, enim reiciendis? Quasi, dolores modi
                            sint voluptate neque repudiandae unde asperiores autem? Dolor eveniet consequuntur,
                            similique consequatur esse consectetur quae totam explicabo ab non, quasi aliquam.
                            Perspiciatis, ut eius.
                        </p>
                    </div>
                    {/* / project-info-box */}
                    <div className="project-info-box border rouded bg-light">
                        <p>
                            <strong>Date :</strong> {matchData?.match_date.slice(0, 10)}
                        </p>
                        <p>
                            <strong>Temps :</strong> {matchData?.match_date.slice(11, 16)}
                        </p>
                        <p>
                            <strong>Niveau :</strong> {matchData?.niveau}
                        </p>
                        <p>
                            <strong>Categorie :</strong> {matchData?.categorie}
                        </p>
                        <p>
                            <strong>Ligue :</strong> {matchData?.ligue}
                        </p>
                        <p>
                            <strong>Distance :</strong> {matchData?.distance}
                        </p>
                    </div>

                    {/* <div className="project-info-box mt-0 mb-0">
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
                    </div> */}
                </div>
                {/* / column */}
            </div>
        </div>
    );
};

export default MatchAffiche;
