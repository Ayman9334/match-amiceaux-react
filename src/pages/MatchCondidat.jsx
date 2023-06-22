import React, { useEffect, useState } from "react";
import "../css/match.css";
import { useStateContext } from "../configs/context/ContextProvider";
import axiosClient from "../configs/api/axios-config";
import { Button } from "primereact/button";
import { AvatarGroup } from "primereact/avatargroup";
import { Avatar } from "primereact/avatar";
import Galerie from "../comps/Galerie";
import { Badge } from "primereact/badge";

const stockageLien = import.meta.env.VITE_API_BASE_URL + "storage/";
const MatchCondidat = () => {
    const { notification } = useStateContext();
    const [matchData, setmatchData] = useState([]);
    const [matchRole, setMatchRole] = useState();

    useEffect(() => {
        window.effectCommands();
        getMatchs();
    }, []);

    const getMatchs = () => {
        axiosClient.get("/match/participant").then(({ data }) => {
            console.log(data);
            setmatchData(data.matchs);
            setMatchRole(data.club_role);
        });
    };

    const ExtMembre = ({ matchMbr }) => {
        const extNbr = matchMbr - 5;
        if (extNbr > 0) {
            console.log(extNbr);
            return <Avatar label={`+${extNbr}`} shape="circle" size="large" className="text-white bg-primary" />;
        }
    };

    const FrDate = ({ matchDate }) => {
        const date = new Date(matchDate);
        return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    };

    const exitMatch = (matchId) => {
        axiosClient.get(`/match/exit/${matchId}`).then(() => {
            getMatchs();
            notification.current.show({ severity: "success", detail: "Tu as quitté le match avec succès", life: 5000 });
        });
    };

    return (
        <>
            <div className="container mes-matchs my-3 rounded border">
                <div className="mes-matchs-ctn">
                    {matchData.map((match, index) => (
                        <div className="match row" key={"match" + index}>
                            <div className="img-ctn col-sm-12 col-md-4">
                                {match.media ? (
                                    <img
                                        className="w-auto h-auto m-auto rounded border"
                                        src={stockageLien + match.media}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src="/view/resources/img/pas-d-image.png"
                                        alt=""
                                        className="w-auto h-auto m-auto rounded border"
                                    />
                                )}
                            </div>
                            <div className="info-box col-sm-6 col-md-4 col-lg-4 col-xl-3 m-auto">
                                <p>
                                    <strong>Date :</strong> {<FrDate matchDate={match.match_date?.slice(0, 10)} />}
                                </p>
                                <p>
                                    <strong>Temps :</strong> {match.match_date?.slice(11, 16) ?? null}
                                </p>
                                <p>
                                    <strong>Niveau :</strong> {match.niveau ?? null}
                                </p>
                                <p>
                                    <strong>Categorie :</strong> {match.categorie ?? null}
                                </p>
                                <p>
                                    <strong>Ligue :</strong> {match.ligue ?? null}
                                </p>
                            </div>
                            <div className="equipe-ctn d-flex col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                <div className="equipes m-auto">
                                    <div className="equipe">
                                        <p className="font-weight-bold">
                                            equipe A :{" "}
                                            <Badge value={match.matchMembres.equipeA.length} className="ml-2" />
                                        </p>
                                        {match.matchMembres.equipeA.length ? (
                                            <AvatarGroup>
                                                {match.matchMembres.equipeA.slice(0, 5).map((membre, index) => (
                                                    <Avatar
                                                        label={membre
                                                            .split(" ")
                                                            .map((x) => x.slice(0, 1))
                                                            .join("")}
                                                        size="large"
                                                        shape="circle"
                                                        key={"avatarA" + index}
                                                    />
                                                ))}
                                                <ExtMembre matchMbr={match.matchMembres.equipeA.length} />
                                            </AvatarGroup>
                                        ) : (
                                            <p className="text-mute">vide...</p>
                                        )}
                                    </div>
                                    <div className="equipe">
                                        <p className="font-weight-bold">
                                            equipe B :{" "}
                                            <Badge value={match.matchMembres.equipeB.length} className="ml-2" />
                                        </p>
                                        {match.matchMembres.equipeB.length ? (
                                            <AvatarGroup>
                                                {match.matchMembres.equipeB.slice(0, 5).map((membre, index) => (
                                                    <Avatar
                                                        label={membre
                                                            .split(" ")
                                                            .map((x) => x.slice(0, 1))
                                                            .join("")}
                                                        size="large"
                                                        shape="circle"
                                                        key={"avatarB" + index}
                                                    />
                                                ))}
                                                <ExtMembre matchMbr={match.matchMembres.equipeB.length} />
                                            </AvatarGroup>
                                        ) : (
                                            <p className="text-mute">vide...</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="actions-ctn col-xl-2">
                                <Button
                                    label="Allez sur la map"
                                    icon="fa fa-map-marker"
                                    onClick={() =>
                                        window.open(
                                            `https://www.google.com/maps?q=${match.latitude},${match.longitude}`,
                                            "_blank"
                                        )
                                    }
                                />
                                {((matchRole == "proprietaire" && match.avecClub) || !match.avecClub) && (
                                    <Button
                                        label="exit le match"
                                        icon="fa fa-cog"
                                        onClick={() => exitMatch(match.id)}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                    {!matchData.length && <p className="my-4">Tu ne fais pas partie du match</p>}
                </div>
            </div>
            <Galerie />
        </>
    );
};

export default MatchCondidat;
