import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { TabView, TabPanel } from "primereact/tabview";
import { Panel } from "primereact/panel";

const MatchDemamde = ({ showDlg, setShowDlg }) => {
    
    return (
        <div>
            <Dialog header="Demandes En Attente" visible={showDlg} onHide={() => setShowDlg(false)}>
                <div className="demandes-ctn">
                    <TabView>
                        <TabPanel header="Equipe A">
                            <div className="demande bg-light rounded border mb-2">
                                <div className="d-flex align-items-center">
                                    <Avatar label="AE" size="large" shape="circle" className="mr-3" />
                                    <p>Ayman Elmimouni</p>
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
                                    />
                                    <Button
                                        icon="fa fa-times"
                                        rounded
                                        text
                                        severity="danger"
                                        title="Réfuser"
                                        aria-label="Cancel"
                                    />
                                </div>
                            </div>

                            <Panel
                                header={
                                    <div className="d-flex font-weight-normal">
                                        <div className="d-flex align-items-center w-100">
                                            <span className="fa fa-users mr-1" />
                                            <p className="mr-1">Itihad Taroudant</p>
                                            <Button
                                                icon="fa fa-check"
                                                rounded
                                                text
                                                severity="success"
                                                title="Accepter"
                                                aria-label="Check"
                                            />
                                            <Button
                                                icon="fa fa-times"
                                                rounded
                                                text
                                                severity="danger"
                                                title="Réfuser"
                                                aria-label="Cancel"
                                            />
                                        </div>
                                    </div>
                                }
                                className="border rounded bg-light mb-2"
                                toggleable
                            >
                                <div className="d-flex align-items-center mb-1">
                                    <Avatar label="AE" size="large" shape="circle" className="mr-3" />
                                    <p>Ayman Elmimouni</p>
                                </div>
                                <div className="d-flex align-items-center mb-1">
                                    <Avatar label="AE" size="large" shape="circle" className="mr-3" />
                                    <p>Ayman Elmimouni</p>
                                </div>
                            </Panel>
                        </TabPanel>
                        <TabPanel header="Equipe B">
                            <p className="m-0">no invites here</p>
                        </TabPanel>
                    </TabView>
                </div>
            </Dialog>
        </div>
    );
};

export default MatchDemamde;
