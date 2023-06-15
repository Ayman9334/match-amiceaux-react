import { createContext, useContext, useRef, useState } from "react";
import axiosClient from "../api/axios-config";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const notification = useRef();

    if (token) {
        axiosClient
            .get("/check-token")
            .then(({ data }) => {
                setUser(data);
            })
            .catch(() => {
                localStorage.removeItem("ACCESS_TOKEN");
                location.reload();
            });
    }

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                notification,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
