import { useEffect, useState } from "react";
import axiosClient from "../configs/api/axios-config";
import { Avatar } from "primereact/avatar";
import { Divider } from "primereact/divider";
import { useNavigate } from "react-router-dom";

const stockageLien = import.meta.env.VITE_API_BASE_URL + "storage/";

const MatchsTable = ({ matchsdata }) => {
    const navigate = useNavigate();

    const ChangerDate = ({ dateString }) => {
        const date = new Date(dateString);
        const jour = date.getDate();
        const mois = date.toLocaleString("default", { month: "short" });
        return (
            <>
                <span>{jour}</span>
                {mois}
            </>
        );
    };

    return (
        <>
            <div className="container match-cartes">
                <div className="row">
                    {matchsdata.length ? (
                        matchsdata.map((x) => (
                            <div
                                className="col-lg-4 col-md-6 mb-4"
                                onClick={() => navigate(`/match/affiche-match/${x.id}`)}
                                key={x.id + "match-cart"}
                            >
                                <article className="card card-style2">
                                    <div className="card-img border-bottom bg-light">
                                        <img
                                            className="rounded-top"
                                            src={
                                                x.media !== null
                                                    ? stockageLien + x.media
                                                    : "/view/resources/img/pas-d-image.png"
                                            }
                                        />
                                        <div className="date">
                                            <ChangerDate dateString={x.match_date} />
                                        </div>
                                    </div>
                                    <div className="card-body py-3">
                                        <div className="d-flex align-items-center">
                                            <Avatar label="AE" className="mr-2" size="large" shape="circle" />
                                            <span className="font-weight-bold">{x.organisateur_nom}</span>
                                        </div>
                                        <Divider />
                                        <div className="border py-2 px-3 rounded bg-light">
                                            <p>
                                                <strong>Numbre de joueur :</strong> {x.nembre_joueur * 2}
                                            </p>
                                            <p>
                                                <strong>Place valable :</strong> 4
                                            </p>
                                            <p>
                                                <strong>Temps :</strong> {x.match_date.slice(11, 16)}
                                            </p>
                                            <p>
                                                <strong>Niveau :</strong> {x.niveau}
                                            </p>
                                            <p>
                                                <strong>Categorie :</strong> {x.categorie}
                                            </p>
                                            <p>
                                                <strong>Ligue :</strong> {x.ligue}
                                            </p>
                                            <p>
                                                <strong>Distance :</strong> {x.distance}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <span className="fa fa-map-marker" /> {x.lieu}{" "}
                                        {x.lieu2 !== null && <>({x.lieu2})</>}
                                    </div>
                                </article>
                            </div>
                        ))
                    ) : (
                        <p className="ml-4 my-4" style={{fontSize:'16px'}}>there is no match with this specific informations</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default MatchsTable;
