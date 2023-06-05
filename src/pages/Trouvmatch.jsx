import { useEffect, useState } from "react";
import MatchsTable from "../comps/matchsTable";
import Galerie from "../comps/Galerie";
import MatchRecherche from "../comps/MatchRecherche";

const Trouvmatch = () => {
    useEffect(() => {
        window.effectCommands();
    }, []);


    return (
        <div>
            <MatchRecherche />
            {/* <MatchsTable /> */}
            <Galerie />
        </div>
    );
};

export default Trouvmatch;
