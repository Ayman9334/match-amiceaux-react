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
                    return sethasClub(false)
                }
                sethasClub(true)
                return setClubInfos(data)
            })
            .catch(() => (location.href = "/désole")) 
    }, []);

    const [club, sethasClub] = useState()
    const [clubInfos, setClubInfos] = useState([])

    return (
        <>{club?
            <MonClub clubInfos={clubInfos}/>:<CreeClub />
        }
        </>
    );
};

export default Club;

