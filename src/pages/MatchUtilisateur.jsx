import React, { useRef, useState } from "react";
import "../css/match.css";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import { Badge } from "primereact/badge";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import MatchDemamde from "../comps/MatchDemamde";
import Galerie from "../comps/Galerie";
import { useEffect } from "react";
import axiosClient from "../configs/api/axios-config";
import { useStateContext } from "../configs/context/ContextProvider";

const stockageLien = import.meta.env.VITE_API_BASE_URL + "storage/";

const MatchUtilisateur = () => {
    const { notification } = useStateContext();
    const [showDlg, setShowDlg] = useState();
    const [matchData, setmatchData] = useState([]);
    const [demandes, setDemandes] = useState([]);

    useEffect(() => {
        window.effectCommands();
        axiosClient.get("/match/affiche-user-matchs").then(({ data }) => {
            setmatchData(data);
        });
    }, []);

    const menu = useRef();

    const items = [
        {
            label: "Modifier",
            icon: "fa fa-wrench",
            command: () => {
                //
            },
        },
        {
            label: "Suprimer",
            icon: "fa fa-trash-o",
            command: () => {
                //
            },
        },
    ];

    const FrDate = ({ matchDate }) => {
        const date = new Date(matchDate);
        return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    };

    const ExtMembre = ({ matchMbr }) => {
        const extNbr = matchMbr - 5;
        if (extNbr > 0) {
            return <Avatar label={`+${extNbr}`} shape="circle" size="large" className="text-white bg-primary" />;
        }
    };

    const afficheDMs = (Matchdemandes) => {
        setDemandes(Matchdemandes);
        setShowDlg(true);
    };

    const demandeManage = (decision, id) => {
        axiosClient
            .get(`/match/accepter-invitation/${decision}/${id}`)
            .then(() => window.location.reload())
            .catch(({ response }) => {
                if (response && response.status == 403) {
                    notification.current.show({ severity: "error", summary: response.data.message, life: 5000 });
                }
            });
    };

    return (
        <>
            <div className="container mes-matchs my-3 rounded border">
                <MatchDemamde
                    showDlg={showDlg}
                    setShowDlg={setShowDlg}
                    demandes={demandes}
                    setDemandes={setDemandes}
                    demandeManage={demandeManage}
                />
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
                                                        label={membre.nom
                                                            .split(" ")
                                                            .map((x) => x.slice(0, 1))
                                                            .join("")}
                                                        size="large"
                                                        shape="circle"
                                                        key={"avatarA" + index}
                                                    />
                                                ))}
                                                <ExtMembre matchMbr={match.matchMembres.equipeA} />
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
                                                        label={membre.nom
                                                            .split(" ")
                                                            .map((x) => x.slice(0, 1))
                                                            .join("")}
                                                        size="large"
                                                        shape="circle"
                                                        key={"avatarA" + index}
                                                    />
                                                ))}
                                                <ExtMembre matchMbr={match.matchMembres.equipeB} />
                                            </AvatarGroup>
                                        ) : (
                                            <p className="text-mute">vide...</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="actions-ctn col-xl-2">
                                <Menu model={items} popup ref={menu} />
                                <Button label="Paramètre" icon="fa fa-cog" onClick={(e) => menu.current.toggle(e)} />
                                <Button label="Demandes" icon="fa fa-users" onClick={() => afficheDMs(match.demandes)}>
                                    <Badge value={match.demandes.equipeA.length + match.demandes.equipeB.length} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Galerie />
        </>
    );
};

export default MatchUtilisateur;
