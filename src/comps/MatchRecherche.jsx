import React, { useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import {Dialog} from 'primereact/dialog';

const MatchRecherche = () => {
    const [mapVisible, setMapVisible] = useState(false);

    const startContent = (
        <>
            <Button label="Ajoute filtre" icon="fa fa-plus" className="mr-2" />
        </>
    );

    const endContent = (
        <>
            <Button icon="fa fa-map-marker" label="Paris - 40km" className="mr-2" onClick={() => setMapVisible(true)} />
            <Dialog header="Header" className="dialog" visible={mapVisible} onHide={() => setMapVisible(false)}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </>
    );

    return (
        <div className='container my-4'>
            <Toolbar start={startContent} end={endContent} />
        </div>
    )
}

export default MatchRecherche
