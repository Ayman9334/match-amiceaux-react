// import { useStateContext } from "../context/ContextProvider"
import React from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Avatar } from "primereact/avatar"
import { useEffect, useRef, useState } from "react";
import axiosClient from '../api/axios-config';
import { Badge } from 'primereact/badge';

const MonClub = (props) => {

  const [visible, setVisible] = useState(false);
  const [invitation, sethasInvitation] = useState()
  const [invitationInfos, setInvitationInfos] = useState([])
  const link = useRef(null);
  const code = useRef(null);

  const copyText = (ref) => {
    const textToCopy = ref.current.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Copied');
      })
      .catch((error) => {
        console.error('Error copying text:', error);
      });
  };  

  useEffect(() => {
    window.effectCommands();
    axiosClient
        .get("/club/invitation")
        .then(({ data, status }) => {
            if (status === 204) {
                return sethasInvitation(false)
            }
            sethasInvitation(true)
            return setInvitationInfos(data)
        })
        .catch(() => (location.href = "/désole")) 
}, []);

useEffect(() => {
  window.effectCommands();
  axiosClient
      .get("/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => (location.href = "/oOps")) 
}, []);

const [users, setUser] = useState([])

console.log(users)
return (
    <div className="container">
      <h1 className="text-center m-4">{props.clubInfos.nom_club}</h1>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-8 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <h5 className="card-title mr-2">Membres du Club</h5>
                  <Badge value={props.clubInfos.members_number}></Badge>
                </div>
                <div className="card flex justify-content-center">
                    <Button label="Ajouter Membres" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                    <Dialog header="Il y a deux façons d'ajouter des membres, un code et un lien" visible={visible} onHide={() => setVisible(false)}
                        style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                          <p className="text-muted">juste cliquer pour copier</p>
                          <ul className="list-inline ">
                            <li ref={link} onClick={()=>copyText(link)}>Lien</li>
                            <li ref={code} onClick={()=>copyText(code)}>Code</li>
                          </ul>
                    </Dialog>
                </div>
              </div>
              <div className="table-responsive mt-3 no-wrap">
                <table className="table vm no-th-brd pro-of-month mb-0">
                  <thead>
                    <tr>
                      <th colSpan="2" className="text-center">Nom du joueur</th>
                      <th className="text-start">Role</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr key={props.clubInfos.id}>
                    <td><span className="round">
                          <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                        </span></td>
                      <td>
                        <h6>{props.clubInfos.membres[0].nom}</h6><small className="text-muted">{props.clubInfos.nom_club}</small>
                      </td>
                      <td>{props.clubInfos.role}</td>
                      <td className="d-flex justify-content-center">
                        <a href=""><Button icon="fa fa-edit" rounded severity="help" title="Editer" aria-label="Update" /></a>
                        <a href=""><Button icon="fa fa-times" rounded severity="danger" title="Supprimer" aria-label="Cancel" /></a>
                      </td>
                    </tr>
                    {props.clubInfos.membres.slice(1).map((member)=>{return <tr key={props.clubInfos.id}>
                    <td><span className="round">
                          <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                        </span></td>
                      <td>
                        <h6 className="align-middle">{member.nom}</h6><small className="text-muted">{props.clubInfos.nom_club}</small>
                      </td>
                      <td>{props.clubInfos.role}</td>
                      <td className="d-flex justify-content-around">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><Button icon="fa fa-times" rounded severity="danger" title="Réfuser" aria-label="Cancel" /></a>
                      </td>
                    </tr>})}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
                <div className="d-flex mb-4 no-block">
                    <h2 className="card-title mb-0 align-self-center">Les Demandes</h2>
                </div>
                {invitation? 
                    invitationInfos.map((invite)=>{return <div className="row mb-2 border-rounded rounded-pill" key={invitationInfos.id}>
                      <div className="col-8 d-flex">
                      <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                        <h5 className="d-flex align-items-center mx-3">{users.filter((user) => user.id === invite.utilisateur_id).map(user=>{return user.nom})}</h5>
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <Button icon="fa fa-check" rounded text raised severity="success" title="Accepter" aria-label="Check" />
                        <Button icon="fa fa-times" rounded text raised severity="danger" title="Réfuser" aria-label="Cancel" />
                      </div>
                    </div>}) : <div className="text-center ">There is no request</div>}
                </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}



export default MonClub
