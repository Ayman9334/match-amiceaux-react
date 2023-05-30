import { useEffect, useState } from "react";
import MonClub from "../comps/MonClub";
import CreeClub from "../comps/CreeClub";
import axiosClient from "../api/axios-config";

const Club = () => {
    useEffect(() => {
        window.effectCommands();
        axiosClient
            .get("/club")
            .then(({ data, status }) => {
                if (status === 204) {
                    return sethasClub(<CreeClub />)
                }
                setClubInfos(data)
                return sethasClub(false)
            })
            .catch(() => (location.href = "/désole"))
    }, []);

    const [club, sethasClub] = useState(true)
    const [clubInfos, setClubInfos] = useState([])

    return <div style={{minHeight:'600px'}}>{club?club:<MonClub clubInfos={clubInfos} />}</div>;
};

export default Club;

