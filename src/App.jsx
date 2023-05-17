import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPrincipal from "./templates/LayoutPrincipal";
import Acceuil from "./pages/Acceuil";
import Inscription from "./pages/Inscription";
import Trouvmatch from "./pages/Trouvmatch";
import Nopage from "./pages/Nopage";
import CreeMatch from "./pages/CreeMatch";
import { useStateContext } from "./context/ContextProvider";
import { Toast } from 'primereact/toast';

function App() {

    const { token, notification } = useStateContext();

    return (
        <BrowserRouter>
            <Toast ref={notification} />
            <Routes>
                <Route path="/" element={<LayoutPrincipal />}>
                    <Route index element={<Acceuil />} />
                    <Route path="/trouve-match" element={<Trouvmatch />} />
                    {token ? <>
                        <Route path="/cree-match" element={<CreeMatch />} />
                        {/* <Route path="/mon-club" element={} /> */}
                    </> : <>
                        <Route path="/inscription" element={<Inscription />} />
                    </>}
                </Route>
                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
