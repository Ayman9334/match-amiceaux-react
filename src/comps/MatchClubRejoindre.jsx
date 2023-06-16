import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Avatar } from "primereact/avatar";
import { useStateContext } from "../configs/context/ContextProvider";

const MatchClubRejoindre = ({ clubMembres, afficheDlg, setAfficheDlg, membresSelecte, clubInv }) => {
    const { user } = useStateContext();
    const [checkboxes, setCheckboxes] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckboxes([...checkboxes, value]);
        } else {
            setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
        }
    };

    const EnvData = () => {
        console.log(checkboxes);
        clubInv(checkboxes);
    };

    return (
        <Dialog
            header={`Envoyer une club invitation a l'equipe ${membresSelecte?.equipe}`}
            visible={afficheDlg}
            onHide={() => setAfficheDlg(false)}
        >
            <div>
                <div>
                    {clubMembres.map((clubMembre, index) => (
                        <div className="d-flex mb-2 bg-light p-2 rounded border" key={index + "mtchMbr"}>
                            <input
                                type="checkbox"
                                className="mr-2"
                                value={clubMembre.membre_id}
                                onChange={handleCheckboxChange}
                            />
                            <div className="d-flex align-items-center">
                                <Avatar className="mr-2" label="AE" shape="circle" size="large" />{" "}
                                {user.id == clubMembre.membre_id ? (
                                    <span className="text-danger">Moi</span>
                                ) : (
                                    <span>{clubMembre.nom}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="d-flex mt-4">
                    <button className="m-auto btn btn-success" onClick={EnvData}>
                        Envoyer l'Invitation
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default MatchClubRejoindre;
