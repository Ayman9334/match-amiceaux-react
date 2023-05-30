import axiosClient from "../api/axios-config";
import { useState } from "react";
import React, { useRef } from 'react';
import { useStateContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";



const CreeClub = () => {
    const [code, setCode] = useState()
    const navigate = useNavigate()
    const { notification } = useStateContext();

    const submitClub = (e) => {
        e.preventDefault();
        axiosClient
            .post("/club", nomclub)
            .then(() => {
                location.reload();
                showSuccess()
            })
            .catch(() => { (location.href = "/Oooops") });

    };

    const [nomclub, setNomClub] = useState()
    const setInfoClub = (e) =>
        setNomClub({
            [e.target.name]: e.target.value,
        });

    const submitInvitation = (e) => {
        e.preventDefault();
        axiosClient
            .get(`/club/invitation/${code}`)
            .then(() => {
                notification.current.show({severity:'success', summary: 'Success', detail:'La demande a été envoyée avec succès', life: 3000});
                navigate("/");
            })
            .catch(({ response }) => {
                if (response && response.status == 403) {
                    notification.current.show({ severity: 'error', summary: response.data.message, life: 3000 });
                    navigate("/");
                }
            });

    };



    const showSuccess = () => {
        notification.current.show({ severity: 'success', summary: 'Le club a été ajouté avec succès', life: 3000 });
    }


    return (
        <>
            <div className="row m-5">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="no-block">
                                <div className="d-flex justify-content-center mb-5">
                                    <h2 className="card-title fw-bold text-black mb-0">Créer un Club</h2>
                                </div>
                                <div className="card d-flex justify-content-center p-5 m-5">
                                    <form className="d-flex flex-column gap-2" onSubmit={submitClub}>
                                        <span className="p-float-label mb-3">
                                            <input id="value" name="nom_club" onChange={setInfoClub} className="form-control " />
                                            <label htmlFor="input_value">Nom du Club</label>
                                        </span>
                                        <button type="submit" label="Submit" className="btn btn-primary">Creé Club</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex mb-4 no-block">
                                <h2 className="card-title mb-0 align-self-center">Rejoindre un club</h2>
                            </div>
                            <form onSubmit={submitInvitation}>
                                <div className="row g-2">
                                    <div className="col-auto">
                                        <span className="p-float-label">
                                            <input id="value" name="club_code" onChange={(e) => setCode(e.target.value)} className="form-control " />
                                            <label htmlFor="input_value">Code du Club</label>
                                        </span>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-success">Envoyer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CreeClub;