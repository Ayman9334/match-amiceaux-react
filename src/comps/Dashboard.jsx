import React, { useEffect, useState } from 'react';
import "../css/dash.css";
import { Avatar } from "primereact/avatar"
import Daw from './Daw';
import axiosClient from '../configs/api/axios-config';

const Dashboard = () => {

    useEffect(() => {
        window.effectCommands();
        axiosClient
            .get("/members")
            .then((data) => {
                setUserInfos(data.data)
            })
            .catch(() => (location.href = "/désole"))
    }, []);

    const [userInfos, setUserInfos] = useState([])

  return (
    <div className="content">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="profile-user-box card-box bg-success">
                    <div className="row">
                        <div className="col-sm-6">
                            <span className="float-left mr-3">
                            <Avatar className="shadow" image="https://sm.ign.com/t/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.300.jpg" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                                </span>
                            <div className="media-body text-white">
                                <h4 className="mt-1 mb-1 font-18">Admin</h4>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="text-right">
                                <button type="button" className="btn btn-light waves-effect"><i className="mdi mdi-account-settings-variant mr-1"></i> Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                 <Daw userInfos={userInfos}/> 
            </div>
        </div>
    </div>
</div>  );
};

export default Dashboard;
