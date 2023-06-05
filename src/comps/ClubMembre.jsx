import React from "react";
import { Avatar } from "primereact/avatar";
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import axiosClient from '../configs/api/axios-config';
import { useStateContext } from "../configs/context/ContextProvider";
import { useRef, useState } from 'react';
import { ConfirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';


const ClubMembre=({clubinfos})=>{

  const { notification } = useStateContext();
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);
  const buttonEl = useRef(null);

  const QuitterClub = () => {
    axiosClient
          .delete("/club/exit")
          .then(() => {
            location.reload();
            notification.current.show({severity:'success', summary: 'Success', detail:'Vous avez quitté le club avec succées', life: 3000});
          })
        .catch(() => (location.href = "/erreur")) 
  };

  const accept = () => {
    QuitterClub()
  };

  const reject = () => {};


return(
<div className="container">
<h1 className="text-center m-4">{clubinfos.nom_club}</h1>
<div className="row d-flex justify-content-center align-items-center">
  <div className="col-lg-8 d-flex">
    <div className="card w-100">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h5 className="card-title mr-2">Membres du Club</h5>
            <Badge value={clubinfos.members_number}></Badge>
          </div>
          <Toast ref={toast} />
            <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)} 
                message="Êtes-vous sûr(e) de vouloir quitter le club ?" acceptClassName='p-button-danger' icon="fa fa-exclamation-triangle" accept={accept} reject={reject} />
            <div className="d-flex justify-content-center">
                <Button ref={buttonEl} onClick={() => setVisible(true)} icon="fa fa-sign-out" rounded text raised severity="danger" label="Quitter" />
            </div>          
        </div>
        <div className="table-responsive mt-3 no-wrap">
          <table className="table vm no-th-brd pro-of-month mb-0">
            <thead>
              <tr>
                <th colSpan="2" className="text-center">Nom du joueur</th>
                <th className="text-start">Role</th>
              </tr>
            </thead>
            <tbody>
              {clubinfos.membres.map((membre)=>{return <tr key={membre.id}>
              <td><span className="round">
                    <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                  </span></td>
                <td>
                    {membre.member_id === clubinfos.member_id ?<h6 className="align-middle text-danger fw-bold">Moi</h6>:<h6 className="align-middle">{membre.nom}</h6>}
                    {/* <small className="text-muted">{clubinfos.nom_club}</small> */}
                </td>
                <td>{membre.member_role}</td>
                <td className="d-flex justify-content-center">??</td>
              </tr>})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<br /><br /><br /><br />
</div>
)
}

export default ClubMembre;