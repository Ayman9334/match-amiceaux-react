import React, { useRef, useState } from "react";
import "../css/match.css";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import { Badge } from "primereact/badge";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { TabView, TabPanel } from "primereact/tabview";
import { Panel } from "primereact/panel";
import MatchDemamde from "../comps/MatchDemamde";

const UtilisateurMatch = () => {
    const [matchData, setmatchData] = useState();
    const [showDlg, setShowDlg] = useState();

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

    return (
        <div className="container mes-matchs pt-3 vh-100">
            <MatchDemamde showDlg={showDlg} setShowDlg={setShowDlg} />
            <div className="mes-matchs-ctn">
                <div className="match row">
                    <div className="img-ctn col-sm-12 col-md-4">
                        <img
                            className="rounded m-auto border"
                            src="https://images.livemint.com/img/2022/12/15/600x338/SOCCER-WORLDCUP-MAR-POR-REPORT-841_1671101976712_1671101976712_1671101985209_1671101985209.JPG"
                            alt=""
                        />
                    </div>
                    <div className="info-box col-sm-6 col-md-4 col-lg-4 col-xl-3 m-auto">
                        <p>
                            <strong>Date :</strong> {matchData?.match_date?.slice(11, 16) ?? null}
                        </p>
                        <p>
                            <strong>Temps :</strong> {matchData?.match_date?.slice(11, 16) ?? null}
                        </p>
                        <p>
                            <strong>Niveau :</strong> {matchData?.niveau ?? null}
                        </p>
                        <p>
                            <strong>Categorie :</strong> {matchData?.categorie ?? null}
                        </p>
                        <p>
                            <strong>Ligue :</strong> {matchData?.ligue ?? null}
                        </p>
                    </div>
                    <div className="equipe-ctn col-sm-6 col-md-4 col-lg-4 col-xl-3 m-auto">
                        <div className="equipes">
                            <div className="equipe">
                                <p className="font-weight-bold">
                                    equipe A : <Badge value="9" className="ml-2" />
                                </p>

                                <AvatarGroup>
                                    <Avatar label="AE" size="large" shape="circle" />
                                    <Avatar label="NA" size="large" shape="circle" />
                                    <Avatar label="ME" size="large" shape="circle" />
                                    <Avatar label="ZM" size="large" shape="circle" />
                                    <Avatar label="ML" size="large" shape="circle" />
                                    <Avatar label="+4" shape="circle" size="large" className="text-white bg-primary" />
                                </AvatarGroup>
                            </div>
                            <div className="equipe">
                                <p className="font-weight-bold">
                                    equipe B : <Badge value="3" className="ml-2" />
                                </p>

                                <AvatarGroup>
                                    <Avatar label="AE" size="large" shape="circle" />
                                    <Avatar label="NA" size="large" shape="circle" />
                                    <Avatar label="ME" size="large" shape="circle" />
                                </AvatarGroup>
                            </div>
                        </div>
                    </div>
                    <div className="actions-ctn col-xl-2">
                        <Menu model={items} popup ref={menu} />
                        <Button label="Paramètre" icon="fa fa-cog" onClick={(e) => menu.current.toggle(e)} />
                        <Button label="Demandes" icon="fa fa-users" onClick={() => setShowDlg(true)}>
                            <Badge value="8" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UtilisateurMatch;
