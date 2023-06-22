import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPrincipal from "./templates/LayoutPrincipal";
import Acceuil from "./pages/Acceuil";
import Inscription from "./pages/Inscription";
import Trouvmatch from "./pages/Trouvmatch";
import Nopage from "./pages/Nopage";
import { useStateContext } from "./configs/context/ContextProvider";
import { Toast } from "primereact/toast";
import Club from "./pages/Club";
import React, { useEffect } from "react";
import MatchCree from "./pages/MatchCree";
import MatchAffiche from "./pages/MatchAffiche";
import Dashboard from "./comps/Dashboard";
import MatchUtilisateur from "./pages/MatchUtilisateur";
import MatchCondidat from "./pages/matchCondidat";
import Loading from "./comps/Loading";
import "./css/index.css";

function App() {
    const { token, notification, setLoader } = useStateContext();
    useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, []);

    return (
        <div className="app-container">
            <Loading />
            <BrowserRouter>
                <Toast ref={notification} />
                <Routes>
                    <Route path="/" element={<LayoutPrincipal />}>
                        <Route index element={<Acceuil />} />
                        <Route path="/match/trouve-match" element={<Trouvmatch />} />
                        <Route path="/match/affiche-match/:matchId" element={<MatchAffiche />} />
                        {token ? (
                            <>
                                <Route path="/match/cree-match" element={<MatchCree />} />
                                <Route path="/match/mes-matchs" element={<MatchUtilisateur />} />
                                <Route path="/match/condidat" element={<MatchCondidat />} />
                                <Route path="/club" element={<Club />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                            </>
                        ) : (
                            <>
                                <Route path="/inscription" element={<Inscription />} />
                            </>
                        )}
                        <Route path="*" element={<Nopage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
