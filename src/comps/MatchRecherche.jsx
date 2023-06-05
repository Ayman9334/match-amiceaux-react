import React, { useEffect, useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import GeoMap from './GeoMap';
import Select from 'react-select'
import axiosClient from '../configs/api/axios-config';

const MatchRecherche = () => {
    const [mapVisible, setMapVisible] = useState(false);
    const [position, setPosition] = useState(null)
    const [range, setRange] = useState(4)

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

    const [chercheForm, setChercheForm] = useState({
        niveau: [],
        categorie: [],
        ligue: [],
    })

    const [kmenum] = useState([
        { value: 2, label: '2 km' },
        { value: 4, label: '4 km' },
        { value: 8, label: '8 km' },
        { value: 16, label: '16 km' },
    ])


    const setSelectMatch = (e, choices) => {
        setChercheForm({
            ...chercheForm,
            [choices.name]: e.map( x=> x.value),
        });
    };

    const startContent = (
        <>
            <h5 className='mr-4'>filtrer avec : </h5>
            <Button label="Ajoute filtre" icon="fa fa-plus" className="mr-2" />
        </>
    );



    return (
        <div className='container my-4' style={{ minHeight: '500px' }}>
            <h5 className='mr-4'>Filtrer avec : </h5>
            <div className='bg-light border row py-3 mt-2 px-3 rounded mx-1'>
                <div className='col-12 col-md-6'>
                    <Select
                        className='mb-2'
                        name="niveaus"
                        id="niveaus"
                        options={enums.niveaus}
                        placeholder="Niveaus"
                        onChange={setSelectMatch}
                        isMulti
                    />
                    <Select
                        className='mb-2'
                        name="categories"
                        id="categories"
                        options={enums.categories}
                        placeholder="Categories"
                        onChange={setSelectMatch}
                        isMulti
                    />
                </div>
                <div className='col-12 col-md-6'>
                    <Select
                        className='mb-2'
                        name="leagues"
                        id="leagues"
                        options={enums.leagues}
                        placeholder="Niveaus"
                        onChange={setSelectMatch}
                        isMulti
                    />
                </div>
                <Divider />
                <div className='col-12 d-flex align-items-center'>
                    <button className="btn btn-primary mr-2" onClick={() => setMapVisible(true)}><span className='fa fa-map-marker' /> Zone de recherche</button><p>Paris - {range}km</p>
                </div>
                <Dialog header="Choisissez la zone que vous souhaitez rechercher" className="dialog" visible={mapVisible} onHide={() => setMapVisible(false)}>
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
                    <div style={{ height: '300px' }}>
                        <GeoMap position={position} setPosition={setPosition} range={range} />
                    </div>
                    <div className='w-100 d-flex mt-4'>
                        <button className='btn btn-success m-auto p-2'>Submit</button>
                    </div>
                </Dialog>
            </div>
        </div>

    )
}

export default MatchRecherche
