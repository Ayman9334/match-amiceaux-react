import { useEffect, useState } from "react";
import MatchsTable from "../comps/MatchsTable";
import Galerie from "../comps/Galerie";
import MatchRecherche from "../comps/MatchRecherche";
import axiosClient from "../configs/api/axios-config";

const Trouvmatch = () => {
    useEffect(() => {
        window.effectCommands();

        axiosClient
            .post("/match/affiche-matchs", chercheForm)
            .then(({data}) => setMatchsdata(data))
            .catch((err) => {
                console.log(err)
                // (window.location = "/nous-somme-desoleeee")
            });
    }, []);

    const [chercheForm, setChercheForm] = useState({
        latitude: 48.8566,
        longitude: 2.3522,
        lieu: "Paris",
        range: 8,
    });

    const [matchsdata, setMatchsdata] = useState([]);

    return (
        <div>
            <MatchRecherche chercheForm={chercheForm} setChercheForm={setChercheForm} setMatchsdata={setMatchsdata}/>
            <MatchsTable matchsdata={matchsdata}/>
            <Galerie />
        </div>
    );
};

export default Trouvmatch;
