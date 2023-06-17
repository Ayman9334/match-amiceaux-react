import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { TabView, TabPanel } from "primereact/tabview";
import { Panel } from "primereact/panel";

const MatchDemamde = ({ showDlg, setShowDlg, demandes, setDemandes, demandeManage }) => {
    const closeDlg = () => {
        setDemandes([]);
        setShowDlg(false);
    };

    return (
        <div>
            <Dialog header="Demandes En Attente" visible={showDlg} onHide={closeDlg}>
                <div className="demandes-ctn">
                    <TabView>
                        <TabPanel header="Equipe A">
                            {demandes.equipeA != null &&
                                demandes.equipeA?.map((demande, index) =>
                                    demande.invitation_type == "solo" ? (
                                        <div key={index + "dm"} className="demande bg-light rounded border mb-2">
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    label={demande.demandeur
                                                        .split(" ")
                                                        .map((x) => x.slice(0, 1))
                                                        .join("")}
                                                    size="large"
                                                    shape="circle"
                                                    className="mr-3"
                                                />
                                                <p>{demande.demandeur}</p>
                                            </div>
                                            <div className="d-flex">
                                                <Button
                                                    className=""
                                                    icon="fa fa-check"
                                                    rounded
                                                    text
                                                    severity="success"
                                                    title="Accepter"
                                                    aria-label="Check"
                                                    onClick={() => demandeManage("accepter", demande.id)}
                                                />
                                                <Button
                                                    icon="fa fa-times"
                                                    rounded
                                                    text
                                                    severity="danger"
                                                    title="Réfuser"
                                                    aria-label="Cancel"
                                                    onClick={() => demandeManage("refuser", demande.id)}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <Panel
                                            key={index + "dm"}
                                            header={
                                                <div className="d-flex font-weight-normal">
                                                    <div className="d-flex align-items-center w-100">
                                                        <span className="fa fa-users mr-1" />
                                                        <p className="mr-1">{demande.clubNom}</p>
                                                        <Button
                                                            icon="fa fa-check"
                                                            rounded
                                                            text
                                                            severity="success"
                                                            title="Accepter"
                                                            aria-label="Check"
                                                            onClick={() => demandeManage("accepter", demande.id)}
                                                        />
                                                        <Button
                                                            icon="fa fa-times"
                                                            rounded
                                                            text
                                                            severity="danger"
                                                            title="Réfuser"
                                                            aria-label="Cancel"
                                                            onClick={() => demandeManage("refuser", demande.id)}
                                                        />
                                                    </div>
                                                </div>
                                            }
                                            className="border rounded bg-light mb-2"
                                            toggleable
                                        >
                                            {demande.demandeurs.map((demandeur, index2) => (
                                                <div
                                                    key={index + index2 + "dmd"}
                                                    className="d-flex align-items-center mb-1"
                                                >
                                                    <Avatar
                                                        label={demandeur
                                                            .split(" ")
                                                            .map((x) => x.slice(0, 1))
                                                            .join("")}
                                                        size="large"
                                                        shape="circle"
                                                        className="mr-3"
                                                    />
                                                    <p>{demandeur}</p>
                                                </div>
                                            ))}
                                        </Panel>
                                    )
                                )}

                            {!demandes.equipeA?.length && <p className="m-0">no invites here</p>}
                        </TabPanel>

                        <TabPanel header="Equipe B">
                            {demandes.equipeB != null &&
                                demandes.equipeB?.map((demande, index) =>
                                    demande.invitation_type == "solo" ? (
                                        <div key={index + "dm"} className="demande bg-light rounded border mb-2">
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    label={demande.demandeur
                                                        .split(" ")
                                                        .map((x) => x.slice(0, 1))
                                                        .join("")}
                                                    size="large"
                                                    shape="circle"
                                                    className="mr-3"
                                                />
                                                <p>{demande.demandeur}</p>
                                            </div>
                                            <div className="d-flex">
                                                <Button
                                                    className=""
                                                    icon="fa fa-check"
                                                    rounded
                                                    text
                                                    severity="success"
                                                    title="Accepter"
                                                    aria-label="Check"
                                                    onClick={() => demandeManage("accepter", demande.id)}
                                                />
                                                <Button
                                                    icon="fa fa-times"
                                                    rounded
                                                    text
                                                    severity="danger"
                                                    title="Réfuser"
                                                    aria-label="Cancel"
                                                    onClick={() => demandeManage("refuser", demande.id)}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <Panel
                                            key={index + "dm"}
                                            header={
                                                <div className="d-flex font-weight-normal">
                                                    <div className="d-flex align-items-center w-100">
                                                        <span className="fa fa-users mr-1" />
                                                        <p className="mr-1">{demande.clubNom}</p>
                                                        <Button
                                                            icon="fa fa-check"
                                                            rounded
                                                            text
                                                            severity="success"
                                                            title="Accepter"
                                                            aria-label="Check"
                                                            onClick={() => demandeManage("accepter", demande.id)}
                                                        />
                                                        <Button
                                                            icon="fa fa-times"
                                                            rounded
                                                            text
                                                            severity="danger"
                                                            title="Réfuser"
                                                            aria-label="Cancel"
                                                            onClick={() => demandeManage("refuser", demande.id)}
                                                        />
                                                    </div>
                                                </div>
                                            }
                                            className="border rounded bg-light mb-2"
                                            toggleable
                                        >
                                            {demande.demandeurs.map((demandeur, index2) => (
                                                <div
                                                    key={index + index2 + "dmd"}
                                                    className="d-flex align-items-center mb-1"
                                                >
                                                    <Avatar
                                                        label={demandeur
                                                            .split(" ")
                                                            .map((x) => x.slice(0, 1))
                                                            .join("")}
                                                        size="large"
                                                        shape="circle"
                                                        className="mr-3"
                                                    />
                                                    <p>{demandeur}</p>
                                                </div>
                                            ))}
                                        </Panel>
                                    )
                                )}

                            {!demandes.equipeB?.length && <p className="m-0">no invites here</p>}
                        </TabPanel>
                    </TabView>
                </div>
            </Dialog>
        </div>
    );
};

export default MatchDemamde;
