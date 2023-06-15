import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPrincipal from "./templates/LayoutPrincipal";
import Acceuil from "./pages/Acceuil";
import Inscription from "./pages/Inscription";
import Trouvmatch from "./pages/Trouvmatch";
import Nopage from "./pages/Nopage";
import { useStateContext } from "./configs/context/ContextProvider";
import { Toast } from 'primereact/toast';
import Club from "./pages/Club";
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import MatchCree from "./pages/MatchCree";
import MatchAffiche from "./pages/MatchAffiche";
import Dashboard from "./comps/Dashboard";


function App() {

    const { token, notification } = useStateContext();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate data loading or any asynchronous operation
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);
    
    return (
        <div className="app-container">
        {loading ? <Loading /> : 
        <BrowserRouter>
            <Toast ref={notification} />
            <Routes>
                <Route path="/" element={<LayoutPrincipal />}>
                    <Route index element={<Acceuil />} />
                    <Route path="/match/trouve-match" element={<Trouvmatch />} />
                    <Route path="/match/affiche-match/:matchId" element={<MatchAffiche />} />
                    {token ? <>
                        <Route path="/match/cree-match" element={<MatchCree />} />
                        <Route path="/club" element={<Club />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </> : <>
                        <Route path="/inscription" element={<Inscription />} />
                    </>}
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>}
        </div>
    );
}

export default App;
