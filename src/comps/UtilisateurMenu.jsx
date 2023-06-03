import { Avatar } from "primereact/avatar"
import { Menu } from "primereact/menu"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../configs/api/axios-config";
import { useStateContext } from "../configs/context/ContextProvider";


const Utilisateurmenu = () => {
    const menu = useRef(null);
    const navigate = useNavigate();
    const {setUser,setToken} = useStateContext()

    const onLogout = () => {
        axiosClient.post('/auth/logout')
            .then(() => {
                setUser({})
                setToken(null)
                location.href = '/'
            })
            .catch(() => {
                setUser({})
                setToken(null)
                location.href = '/'
            })
    }

    const items = [
        {
            label: <p className="font-weight-bold">utilisateur nom</p>,
        },
        {
            label: <><span className="fa fa-users" /> Mon Club </>,
            command: () => {
                navigate('/club')
            }
        },
        {
            label: <><span className="fa fa-cog" /> Paramètre</>,
            command: () => {
                navigate('/utilisateur/parametre')
            }
        },
        { separator: true },
        {
            label: <><span className="fa fa-sign-out" /> Se Déconnecter </>,
            command: () => onLogout()
        }
    ];
    return (
        <div>
            <Menu model={items} popup ref={menu} popupAlignment="right" />
            <Avatar className="shadow" image="https://sm.ign.com/t/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.300.jpg" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
        </div>
    )
}

export default Utilisateurmenu
