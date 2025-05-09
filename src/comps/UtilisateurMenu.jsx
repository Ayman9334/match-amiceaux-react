import { Avatar } from "primereact/avatar"
import { Menu } from "primereact/menu"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../configs/api/axios-config";
import { useStateContext } from "../configs/context/ContextProvider";
import { useEffect } from "react";
import { useState } from "react";


const Utilisateurmenu = () => {
    const menu = useRef(null);
    const navigate = useNavigate();
    const {setUser,setToken} = useStateContext()
    const [Admin, sethasAdmin] = useState()
    const [User, setcurrentUser] = useState()

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

    useEffect(() => {
        window.effectCommands();
        axiosClient
            .get("/check-token")
            .then(( {data} ) => {
                if(data.role === "admin"){
                    sethasAdmin(data)
                }
                setcurrentUser(data.nom)
            })
            .catch(() => (location.href = "/désole"))
    }, []);

    const items = [
        {
            label: <p className="font-weight-bold">{User}</p>,
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



    const newit = {
        label: <><span className="fa fa-user-secret" /> Dashboard </>,
        command: () => {
            navigate('/dashboard')
        }
    }
    if(Admin){
        items[1]=newit;
    }

    return (
        <div>
            <Menu model={items} popup ref={menu} popupAlignment="right" />
            <Avatar className="shadow" label={User?.split(" ").map(x => x.slice(0,1)).join("")} size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
        </div>
    )
}

export default Utilisateurmenu
