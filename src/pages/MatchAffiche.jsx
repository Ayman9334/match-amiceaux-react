import React, { useEffect, useState } from "react";
import "../css/match.css";
import axiosClient from "../configs/api/axios-config";
import { Avatar } from "primereact/avatar";
import { useNavigate, useParams } from "react-router-dom";
import MatchClubRejoindre from "../comps/MatchClubRejoindre";
import { useStateContext } from "../configs/context/ContextProvider";
import { Message } from "primereact/message";
import { Divider } from "primereact/divider";

const stockageLien = import.meta.env.VITE_API_BASE_URL + "storage/";

const MatchAffiche = () => {
    const { notification, token } = useStateContext();

    const [matchData, setMatchData] = useState();
    const [afficheDlg, setAfficheDlg] = useState();
    const [membresSelecte, setMembresSelecte] = useState({
        InvType: "club",
    });
    const { matchId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axiosClient
            .get(`/match/affiche-match/${matchId}`)
            .then(({ data }) => setMatchData(data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (matchData) window.effectCommands();
    }, [matchData]);

    const FrDate = () => {
        if (!matchData?.match_date) return null;
        const date = new Date(matchData.match_date.slice(0, 10));
        return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    };

    const _setmembresSelecte = (equipe) => {
        setMembresSelecte({ ...membresSelecte, equipe });
        setAfficheDlg(true);
    };

    const axiosConf = (data) => {
        axiosClient
            .post(`/match/envoyer-invitation/${matchData.id}`, data)
            .then(() => {
                notification.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: "Vous avez envoyer une invitation a ce match",
                    life: 3000,
                });
                navigate("/");
            })
            .catch(({ response }) => {
                if (response && response.status == 403) {
                    notification.current.show({ severity: "error", summary: response.data.message, life: 5000 });
                }
                console.log(response.data.message);
            });
    };

    const clubInv = (InvClub) => {
        const dataEnv = { ...membresSelecte, InvClub };
        axiosConf(dataEnv);
    };

    const soloInv = (equipe) => {
        const dataEnv = { InvType: "solo", equipe };
        axiosConf(dataEnv);
    };

    return (
        matchData && (
            <div className="container affiche-match py-4">
                {matchData.clubAdmin && (
                    <MatchClubRejoindre
                        clubMembres={matchData.clubMembres}
                        afficheDlg={afficheDlg}
                        setAfficheDlg={setAfficheDlg}
                        membresSelecte={membresSelecte}
                        clubInv={clubInv}
                    />
                )}
                <div className="row">
                    <div className="col-md-7">
                        <div className="slider-area w-100 h-auto p-0">
                            <div className="owl-carousel owl-slider border rounded overflow-hidden">
                                {matchData.medias.length ? (
                                    matchData.medias.map((media, index) => (
                                        <div className="slider-content" key={index + "media"}>
                                            <div className="img-container bg-light">
                                                <img
                                                    src={stockageLien + media}
                                                    alt=""
                                                    className="mh-100 mw-100 w-auto h-auto"
                                                />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="slider-content">
                                        <div className="img-container bg-light">
                                            <img
                                                src="/view/resources/img/pas-d-image.png"
                                                alt=""
                                                className="mh-100 mw-100 w-auto h-auto"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="project-info-box border rouded  bg-light">
                            {token ? (
                                <>
                                    <h5 className="pb-3">Candidats de match :</h5>
                                    <div className="row">
                                        <div className="col-lg-6 d-flex flex-column">
                                            <div className="py-3">
                                                <strong>Club A:</strong>
                                            </div>
                                            <div className="flex-fill">
                                                {matchData.matchMembres.equipeA.length ? (
                                                    matchData.matchMembres.equipeA.map((matchMembre) => (
                                                        <div className="mb-2 d-flex align-items-center">
                                                            <Avatar
                                                                label={matchMembre
                                                                    ?.split(" ")
                                                                    .map((x) => x.slice(0, 1))
                                                                    .join("")}
                                                                className="mr-2"
                                                                size="large"
                                                                shape="circle"
                                                            />
                                                            <span>{matchMembre}</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="text-muted mb-3">vide...</p>
                                                )}
                                            </div>

                                            <div>
                                                <b> Rejoindre :</b>
                                            </div>
                                            <div className="mt-2 mb-3 d-flex align-items-center">
                                                <button
                                                    className="btn btn-success p-1 mr-4"
                                                    onClick={() => soloInv("A")}
                                                >
                                                    Individuel
                                                </button>
                                                {matchData.clubAdmin && (
                                                    <button
                                                        className="btn btn-success p-1"
                                                        onClick={() => _setmembresSelecte("A")}
                                                    >
                                                        Comme club
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex flex-column">
                                            <div className="py-3">
                                                <strong>Club B:</strong>
                                            </div>
                                            <div className="flex-fill">
                                                {matchData.matchMembres.equipeB.length ? (
                                                    matchData.matchMembres.equipeB.map((matchMembre) => (
                                                        <div className="mb-2 d-flex align-items-center">
                                                            <Avatar
                                                                label={matchMembre
                                                                    .split(" ")
                                                                    .map((x) => x.slice(0, 1))
                                                                    .join("")}
                                                                className="mr-2"
                                                                size="large"
                                                                shape="circle"
                                                            />
                                                            <span>{matchMembre}</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="text-muted mb-3">vide...</p>
                                                )}
                                            </div>

                                            <div>
                                                <b> Rejoindre :</b>
                                            </div>
                                            <div className="mt-2 mb-3 d-flex align-items-center">
                                                <button
                                                    className="btn btn-success p-1 mr-4"
                                                    onClick={() => soloInv("B")}
                                                >
                                                    Individuel
                                                </button>
                                                {matchData.clubAdmin && (
                                                    <>
                                                        <button
                                                            className="btn btn-success p-1"
                                                            onClick={() => _setmembresSelecte("B")}
                                                        >
                                                            Comme club
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Message text="connectez-vous pour envoyer une invitation à ce match" />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="project-info-box mt-0 border rouded  bg-light">
                            <div className="d-flex align-items-center pb-1">
                                <Avatar
                                    label={matchData.organisateur
                                        .split(" ")
                                        .map((x) => x.slice(0, 1))
                                        .join("")}
                                    className="mr-2"
                                    size="large"
                                    shape="circle"
                                />
                                <span className="font-weight-bold">{matchData.organisateur}</span>
                            </div>
                            <Divider />
                            <h5>DESCRIPTION :</h5>
                            <p className="mt-2">{matchData.description ?? null}</p>
                        </div>
                        {/* / project-info-box */}
                        <div className="project-info-box border rouded bg-light">
                            <p>
                                <strong>Date :</strong> {<FrDate />}
                            </p>
                            <p>
                                <strong>Temps :</strong> {matchData.match_date?.slice(11, 16) ?? null}
                            </p>
                            <p>
                                <strong>Niveau :</strong> {matchData.niveau ?? null}
                            </p>
                            <p>
                                <strong>Categorie :</strong> {matchData.categorie ?? null}
                            </p>
                            <p>
                                <strong>Ligue :</strong> {matchData.ligue ?? null}
                            </p>
                            <p>
                                <strong>Lieu :</strong> {matchData.lieu ?? null}{" "}
                                {matchData.lieu2 ? <>({matchData.lieu2})</> : null}
                            </p>
                            <p>
                                <strong>Jouer de chaque equipe :</strong> {matchData.nembre_joueur ?? null}
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
        )
    );
};

export default MatchAffiche;
