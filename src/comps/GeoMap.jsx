import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import Control from "react-leaflet-custom-control";
import "leaflet/dist/leaflet.css";

const GeoMap = ({ position, setPosition }) => {
    const mapRef = useRef();

    const utilisatuerLocation = () => {
        mapRef.current.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            mapRef.current.flyTo(e.latlng, 15);
        })
    };

    const gererClickMap = (e) => {
        setPosition(e.latlng);
    };

    const PositionClique = () => {
        useMapEvents({
            click: gererClickMap
        });
        return null;
    };

    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={10} ref={mapRef}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position && <Marker position={position} />}
            <PositionClique />
            <Control position='bottomleft'>
                <button type="button" className="leaflet-bar leaflet-control-button" onClick={utilisatuerLocation}>
                    <i className="fa fa-location-arrow" />
                </button>
            </Control>
        </MapContainer>
    );
};

export default GeoMap;