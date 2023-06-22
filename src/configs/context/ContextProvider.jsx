import { createContext, useContext, useEffect, useRef, useState } from "react";
import axiosClient from "../api/axios-config";

const StateContext = createContext({
    currentUser: null,
    token: null,
    user: null,
    setUser: () => {},
    setToken: () => {},
    setLoader: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const notification = useRef();

    useEffect(() => {
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
    }, []);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    const setLoader = (bool) => {
        const loader = document.getElementById("loading-container");
        if (bool) {
            loader.classList = "loading-container";
        } else {
            loader.classList = "loading-container d-none";
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
                setLoader,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
