import React from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Avatar } from "primereact/avatar"
import { useEffect, useRef, useState } from "react";
import axiosClient from '../configs/api/axios-config';
import { Badge } from 'primereact/badge';
import { useStateContext } from "../configs/context/ContextProvider";
import { useClickOutside } from 'primereact/hooks';
import "../css/index.css";
import { Toast } from 'primereact/toast';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { SplitButton } from 'primereact/splitbutton';


const ClubAdmin = ({clubinfos}) => {
  const { notification } = useStateContext();
  const [visible, setVisible] = useState(false);
  const [invitationInfos, setInvitationInfos] = useState([])
  const link = useRef(null);
  const code = useRef(null);

  const copyText = (ref) => {
    const textToCopy = ref.current.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        notification.current.show({severity:'success', icon:'fa fa-paste', summary: 'Success', detail:'Copied', life: 3000});
      })
      .catch((error) => {
        console.error('Error copying text:', error);
      });
  };  

  console.log(clubinfos)
  useEffect(() => {
    window.effectCommands();
    axiosClient
        .get("/club/invitation")
        .then(({ data }) => {
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
            location.reload();
          })
        .catch(() => (location.href = "/erreur de suppression")) 
  };
  
  const overlayRef = useRef(null);
  useClickOutside(overlayRef, () => {
    setVisible(false);});


  const accept = (id) => {
    deleteMembre(id);
    notification.current.show({severity:'success', summary: 'Success', detail:`Le membre ${id} a été supprimé`, life: 3000});
  };

  const reject = () => {};
  const confirm1 = (event, id) => {
    confirmPopup({
        target: event.currentTarget,
        message: 'Do you want to delete this member?',
        icon: 'fa fa-info-circle',
        acceptClassName: 'p-button-danger',
        accept: () => accept(id),
        reject
    });
};

const items = [
  {
      label: 'Ajouter',
      icon: 'fa fa-pencil',
      command: () => {
          notification.current.show({ severity: 'info', summary: 'Ajouter', detail: 'Data Added' });
      }
  },
  {
      label: 'Modifier le club',
      icon: 'fa fa-refresh',
      command: () => {
          notification.current.show({ severity: 'success', summary: 'Modifier le club', detail: 'Le club a été modifié' });
      }
  },
  {
      label: 'Supprimer le club',
      icon: 'fa fa-trash',
      command: () => {
          notification.current.show({ severity: 'error', summary: 'Supprimer le club', detail: 'Le club a été suppeimé' });
      }
  },
  {
      label: 'React Website',
      icon: 'fa fa-external-link',
      command: () => {
          window.location.href = 'https://facebook.github.io/react/';
      }
  }
];

// regenerer le code
const RegenererCode=() => {
  axiosClient
      .get("/club/regenerercode")
      .then(response => {
        const newCode = response.data.club_code;
        const CodeCurr = document.getElementById('code');
        if (CodeCurr) {
          CodeCurr.innerHTML = newCode;
        }
        notification.current.show({ severity: 'success', summary: 'Nouveau code', detail: 'Code régénéré ;)' });
      })
      .catch(() => (location.href = "/désole")) 
};


return (
    <div className="container">
      <h1 className="text-center m-4">{clubinfos.nom_club}</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <div className="d-flex split justify-content-between">
                <div className="d-flex">
                  <h5 className="card-title mr-2">Membres du Club</h5>
                  <Badge value={clubinfos.members_number}></Badge>
                </div>
                <div className="d-flex justify-content-center">
                  <Toast ref={notification} />
                  <SplitButton className="splitbutton" label="Ajouter Membres" icon="fa fa-plus" onClick={()=>setVisible(true)} model={items} severity="success" rounded />
                  <Dialog header="Il y a deux façons d'ajouter des membres, un code et un lien" visible={visible} ref={overlayRef} onHide={() => setVisible(false)} className="dialog">
                    <p className="text-muted text-center mb-4 mt-0">juste cliquer pour copier</p>
                    <div className="d-flex justify-content-between align-items-center rounded w-75-sm">
                      <span ref={link} className="text-end">Lien</span>
                      <Button icon="fa fa-copy" className="m-1" onClick={()=>copyText(link)} rounded raised severity="info" label="Copier"/>
                    </div>
                    <div className="d-flex justify-content-end">
                    <Button icon="fa fa-refresh" className="m-1" onClick={()=>RegenererCode()} rounded raised label="Regenerate"/>
                    </div>
                    <div className="d-flex justify-content-between align-items-center rounded w-75-sm">
                      <span ref={code} className="text-end" id="code">{clubinfos.code}</span>
                      <Button icon="fa fa-copy" className="m-1" onClick={()=>copyText(code)} rounded raised severity="info" label="Copier"/>
                    </div>
                  </Dialog>
                </div>
              </div>
              <div className="table-responsive mt-3 no-wrap">
                <table className="table vm no-th-brd pro-of-month mb-0">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-start">Nom du joueur</th>
                      <th className="text-start">Role</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {clubinfos.membres.map((member)=>{return <tr key={member.member_id}>
                    <td><span className="round">
                          <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                        </span></td>
                      <td>
                      {member.member_id === clubinfos.member_id ?<h6 className="text-start text-danger fw-bold">Moi</h6>:<h6 className="align-middle">{member.nom}</h6>}
                        {/* <small className="text-muted">{clubinfos.nom_club}</small> */}
                      </td>
                      <td className="d-flex align-self-center">{member.member_role}</td>
                      {member.member_id === clubinfos.member_id ? null :
                      <td>
                        <Toast ref={notification} />
                        <ConfirmPopup />
                        <div className="d-flex justify-content-end">
                          <Button icon="fa fa-edit" className="m-1" rounded text raised severity="help" label="Editer" aria-label="Update" />
                          <Button icon="fa fa-times" className="m-1" onClick={(event) => confirm1(event, member.member_id)} label="Supprimer" rounded text raised severity="danger" title="Réfuser" aria-label="Cancel" />
                        </div>
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
                    <h4 className="card-title mb-0 align-self-center mr-2">Les Demandes</h4>
                    <Badge value={invitationInfos.length} severity="danger"></Badge>
                </div>
                {invitationInfos.length? 
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
