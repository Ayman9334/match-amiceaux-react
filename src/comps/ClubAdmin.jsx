import React from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Avatar } from "primereact/avatar"
import { useEffect, useRef, useState } from "react";
import axiosClient from '../api/axios-config';
import { Badge } from 'primereact/badge';
import { useStateContext } from "../context/ContextProvider";

const ClubAdmin = (props) => {
  const { notification } = useStateContext();
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



//-----------Accept & delete Invitation------------------
const AcceptInvitation = (id) => {
const accept={'acceptation':true, 'demandeId':id}
axiosClient
      .post("/club/invitation", accept)
      .then(() => {
        notification.current.show({severity:'success', summary: 'Success', detail:'La demande a été accepté avec succées', life: 3000});
        location.reload();
      })
      .catch(() => (location.href = "/Ooops")) 
};

const deleteInvitation = (id) => {
  const refuse={'acceptation':false, 'demandeId':id}
  axiosClient
        .post("/club/invitation", refuse)
        .then(() => {
          notification.current.show({severity:'success', summary: 'Success', detail:'La demande a été supprimé', life: 3000});
          location.reload();
        })
      .catch(() => (location.href = "/erreur de suppression")) 
};

const deleteMembre = (id) => {
    axiosClient
          .delete(`/club/exclure/${id}`)
          .then(() => {
            notification.current.show({severity:'success', summary: 'Success', detail:'Le membre a été supprimé', life: 3000});
            location.reload();
          })
        .catch(() => (location.href = "/erreur de suppression")) 
  };
  


return (
    <div className="container">
      <h1 className="text-center m-4">{props.clubinfos.nom_club}</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <h5 className="card-title mr-2">Membres du Club</h5>
                  <Badge value={props.clubinfos.members_number}></Badge>
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.clubinfos.membres.map((member)=>{return <tr key={member.club_member.member_id}>
                    <td><span className="round">
                          <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                        </span></td>
                      <td>
                      {member.club_member.member_id === props.clubinfos.member_id ?<h6 className="align-middle text-danger fw-bold">Moi</h6>:<h6 className="align-middle">{member.nom}</h6>}
                        <small className="text-muted">{props.clubinfos.nom_club}</small>
                      </td>
                      <td>{member.club_member.member_role}</td>
                      {member.club_member.member_id === props.clubinfos.member_id ? null :
                      <td className="d-flex justify-content-center">
                        <Button icon="fa fa-edit" rounded severity="help" title="Editer" aria-label="Update" />
                        <Button icon="fa fa-times" onClick={()=>{deleteMembre(member.club_member.member_id)}} rounded severity="danger" title="Réfuser" aria-label="Cancel" />
                      </td>}
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
                {!invitation? 
                    invitationInfos.map(invite=> <div className="row mb-2 border-rounded rounded-pill" key={invite.id}>
                      <div className="col-8 d-flex">
                      <Avatar className="shadow" image={invite.logo} size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                        <h5 className="d-flex align-items-center mx-3">{invite.nom}</h5>
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <Button onClick={()=>{AcceptInvitation(invite.demandeId)}} icon="fa fa-check" rounded text raised severity="success" title="Accepter" aria-label="Check" />
                        <Button onClick={()=>{deleteInvitation(invite.demandeId)}} icon="fa fa-times" rounded text raised severity="danger" title="Réfuser" aria-label="Cancel" />
                      </div>
                    </div>) : <div className="text-center">Il n'y a aucune demande</div>}
                </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}



export default ClubAdmin
