import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import GeoMap from "./GeoMap";
import Select from "react-select";
import axiosClient from "../configs/api/axios-config";
import axios from "axios";
import { useStateContext } from "../configs/context/ContextProvider";

const kmenum = [
    { value: 2, label: "2 km" },
    { value: 4, label: "4 km" },
    { value: 8, label: "8 km" },
    { value: 16, label: "16 km" },
];

const MatchRecherche = ({ chercheForm, setChercheForm, setMatchsdata }) => {
    const { notification } = useStateContext();

    const [mapVisible, setMapVisible] = useState(false);
    const [position, setPosition] = useState(null);
    const [range, setRange] = useState(4);

    useEffect(() => {
        axiosClient
            .get("/matchenum")
            .then(({ data }) => setEnums(data))
            .catch(() => (location.href = "/error-404"));
    }, []);

    const [enums, setEnums] = useState({
        categories: [],
        niveaus: [],
        regions: [],
        leagues: [],
    });

    const setSelectMatch = (e, choices) => {
        setChercheForm({
            ...chercheForm,
            [choices.name]: e.map((x) => x.value),
        });
    };

    const getLocation = () => {
        if (!position)
            return notification.current.show({
                severity: "error",
                summary: "vous devez choisir le lieu de match sur la map",
                life: 3000,
            });
        const { lat, lng } = position;
        let formattedAddr;

        axios
            .get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
            .then(({ data }) => {
                const { address } = data;
                if (address.country !== "France")
                    return notification.current.show({
                        severity: "error",
                        summary: "nous ne prenons en charge que les emplacements en france",
                        life: 3000,
                    });

                formattedAddr = [address.state, address.road, address.city, address.town];
                formattedAddr = formattedAddr.filter((x) => x != undefined).join(", ");

                setChercheForm({
                    ...chercheForm,
                    latitude: lat,
                    longitude: lng,
                    lieu: formattedAddr,
                    range: range,
                });
                setMapVisible(false);
            })
            .catch(() => {
                return notification.current.show({
                    severity: "error",
                    summary: "en a un probleme, essayer plus tard",
                    life: 3000,
                });
            });
    };

    const getnouveauFiltre = () =>{
        axiosClient
            .post("/match/affiche-matchs", chercheForm)
            .then(({data}) => setMatchsdata(data))
            .catch(() => (window.location = "/nous-somme-desole"));
    } 

    return (
        <div className="container my-4">
            <h5 className="mr-4">Filtrer avec : </h5>
            <div className="bg-light border row py-3 mt-2 px-3 rounded mx-1">
                <div className="col-12 col-md-6">
                    <Select
                        className="mb-2"
                        name="niveaux"
                        id="niveaux"
                        options={enums.niveaus}
                        placeholder="Niveaus"
                        onChange={setSelectMatch}
                        isMulti
                    />
                    <Select
                        className="mb-2"
                        name="categories"
                        id="categories"
                        options={enums.categories}
                        placeholder="Categories"
                        onChange={setSelectMatch}
                        isMulti
                    />
                </div>
                <div className="col-12 col-md-6">
                    <Select
                        className="mb-2"
                        name="ligues"
                        id="ligues"
                        options={enums.leagues}
                        placeholder="ligues"
                        onChange={setSelectMatch}
                        isMulti
                    />
                </div>

                <Divider />

                <div className="col-12 col-md-6 d-flex align-items-center">
                    <button className="btn btn-primary mr-2" onClick={() => setMapVisible(true)}>
                        <span className="fa fa-map-marker" />
                    </button>
                    <p>
                        {chercheForm.lieu} - {chercheForm.range}km
                    </p>
                </div>

                <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
                    <button className="btn btn-primary mr-2" onClick={getnouveauFiltre}>
                        <span className="fa fa-search" />
                    </button>
                </div>

                <Dialog
                    header="Choisissez la zone que vous souhaitez rechercher"
                    className="dialog"
                    visible={mapVisible}
                    onHide={() => setMapVisible(false)}
                >
                    <Select
                        name="categorie"
                        id="categories"
                        options={kmenum}
                        defaultValue={kmenum[1]}
                        className="basic-single mt-2 mb-4"
                        placeholder="Votre categories"
                        onChange={(e) => setRange(e.value)}
                        required
                    />
                    <div style={{ height: "300px" }}>
                        <GeoMap position={position} setPosition={setPosition} range={range} />
                    </div>
                    <div className="w-100 d-flex mt-4">
                        <button className="btn btn-success m-auto p-2" onClick={getLocation}>
                            Submit
                        </button>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};

export default MatchRecherche;
