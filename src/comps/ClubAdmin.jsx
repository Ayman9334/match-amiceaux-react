import React from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Avatar } from "primereact/avatar"
import { useEffect, useRef, useState } from "react";
import axiosClient from '../configs/api/axios-config';
import { Badge } from 'primereact/badge';
import { useStateContext } from "../configs/context/ContextProvider";
import "../css/index.css";
import { Toast } from 'primereact/toast';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { SplitButton } from 'primereact/splitbutton';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { Messages } from 'primereact/messages';

const ClubAdmin = ({ clubinfos }) => {

  const { notification } = useStateContext();
  const [visible, setVisible] = useState(false);
  const [invitationInfos, setInvitationInfos] = useState([])
  const link = useRef(null);
  const code = useRef(null);

  // Click To Copy------------------------------------
  const copyText = (ref) => {
    const textToCopy = ref.current.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        notification.current.show({ severity: 'success', icon: 'fa fa-paste', summary: 'Success', detail: 'Copied', life: 3000 });
      })
      .catch((error) => {
        console.error('Error copying text:', error);
      });
  };

  // Club Invitation-------------------------------------
  useEffect(() => {
    window.effectCommands();
    axiosClient
      .get("/club/invitation")
      .then(({ data }) => {
        return setInvitationInfos(data)
      })
      .catch(() => (location.href = "/désole"))
  }, []);


  // Delete Club----------------------------------------------------------
  const deleteClub = (id) => {
    axiosClient
      .delete(`/club/suprimer/${id}`)
      .then(() => {
        location.reload();
      })
      .catch(() => (location.href = "/erreur de suppression"))
  };

  const acceptClub = (id) => {
    deleteClub(id);
    notification.current.show({ severity: 'success', summary: 'Success', detail: `Le club a été supprimé`, life: 3000 });
  };

  const rejectClub = () => { };
  const confirm2 = (id) => {
    confirmPopup({
      message: 'Do you want to delete this club?',
      icon: 'fa fa-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => acceptClub(id),
      reject: () => rejectClub()
    });
  };
  // End Delete Club-------------------------------------------------------

  // Update Club-------------------------------------------
  const [showDialog, setShowDialog] = useState(false);
  const [newClubName, setNewClubName] = useState('');

  const handleUpdateClubName = (id, nom) => {
    const send = { 'id': id, 'nom_club': nom }

    axiosClient
      .put(`/club/modifier/${id}`, send)
      .then(() => {
        notification.current.show({ severity: 'success', summary: 'Success', detail: 'Nom du club a été modifié avec succées', life: 3000 });
        location.reload();
      })
      .catch(() => (location.href = "/erreur de Modification"))
    setShowDialog(false);
  };

  // End Update Club---------------------------------------


  //-----------Accept & delete Invitation------------------
  const AcceptInvitation = (id) => {
    const accept = { 'acceptation': true, 'demandeId': id }
    axiosClient
      .post("/club/invitation", accept)
      .then(() => {
        notification.current.show({ severity: 'success', summary: 'Success', detail: 'La demande a été accepté avec succées', life: 3000 });
        location.reload();
      })
      .catch(({ response }) => {
        if (response && response.status == 403) {
            notification.current.show({ severity: 'error', summary: response.data.message, life: 3000 });
        }else if (response && response.status == 405){
          notification.current.show({ severity: 'warn', summary: response.data.message, life: 3000 });
        }
    });
};

  const deleteInvitation = (id) => {
    const refuse = { 'acceptation': false, 'demandeId': id }
    axiosClient
      .post("/club/invitation", refuse)
      .then(() => {
        notification.current.show({ severity: 'success', summary: 'Success', detail: 'La demande a été supprimé', life: 3000 });
        location.reload();
      })
      .catch(() => (location.href = "/erreur de suppression"))
  };

  // delete members
  const deleteMembre = (id) => {
    axiosClient
      .delete(`/club/exclure/${id}`)
      .then(() => {
        location.reload();
      })
      .catch(() => (location.href = "/erreur de suppression"))
  };

  // comfirmPopup Of Deleting Member
  const accept = (id) => {
    deleteMembre(id);
    notification.current.show({ severity: 'success', summary: 'Success', detail: `Le membre ${id} a été supprimé`, life: 3000 });
  };

  const reject = () => { };
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


  // Settings of the club----------------
  const items = [
    {
      label: 'Modifier le club',
      icon: 'fa fa-refresh',
      command: () => setShowDialog(true)
      // command: () => {
      //   notification.current.show({ severity: 'success', summary: 'Modifier le club', detail: 'Le club a été modifié' });
      // }
    },
    {
      label: 'Supprimer le club',
      icon: 'fa fa-trash',

      command: () => {
        confirm2(clubinfos.id)
      }
    },
    {separator: true},
    {
      label: 'Quitter le Club',
      icon: 'fa fa-sign-out',
      command: () => {
        // addMessages()
        QuitterClub()      
      }
    }
  ];

  // Quitter Club---------------------
  const QuitterClub = () => {
    axiosClient
          .delete("/club/exit")
          .then(() => {
            location.reload();
            notification.current.show({severity:'success', summary: 'Success', detail:'Vous avez quitté le club avec succées', life: 3000});
          })
          .catch(({ response }) => {
            if (response && response.status == 405) {
                notification.current.show({ severity: 'warn',sticky: true, summary: response.data.message, life: 5000 });
            }
        });
};

//   // Message error /Quitter Club
//   const msgs = useRef(null);
//   const addMessages = () => {
//     msgs.current.show([
//         { severity: 'warn', summary: 'Warning', detail: '', sticky: true, closable: true },
//     ]);
// };

  // regenerer le code-----------------------------
  const RegenererCode = () => {
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

  // Change Role---------------------------------------------------------
  const [selectedRole, setSelectedRole] = useState('');
  const roleOptions = [
    { label: 'Proprietaire', value: 'proprietaire' },
    { label: 'Coproprietaire', value: 'coproprietaire' },
    { label: 'Membre', value: 'membre' },
  ];
  const [editingMember, setEditingMember] = useState('');

  const editRole = (memberId) => {
    setEditingMember(memberId);
    setSelectedRole('');
  };

  const saveRole = (memberId) => {
    const newRole = selectedRole;
    ChangeRole(memberId, newRole);
    setEditingMember('');
  };

  const cancelEdit = () => {
    setEditingMember('');
  };

  const ChangeRole = (id, role) => {
    const send = { 'changeurId': id, 'nouveauRole': role }
    axiosClient
      .post("/club/changeroles", send)
      .then(() => {
        notification.current.show({ severity: 'success', summary: 'Success', detail: 'Le Role a été changé', life: 3000 });
        location.reload();
      })
      .catch(() => (location.href = "/Erreur!!"))
  };
  // End change role--------------------------------------


  return (
    <div className="container">
      <h1 className="text-center m-4">{clubinfos.nom_club}</h1>
      {/* <Messages ref={msgs} /> */}
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
                  <SplitButton className="splitbutton" label="Ajouter Membres" icon="fa fa-plus" onClick={() => setVisible(true)} model={items} severity="success" rounded />
                  <Dialog header="Il y a deux façons d'ajouter des membres, un code et un lien" visible={visible} onHide={() => setVisible(false)} className="dialog" dismissableMask>
                    <p className="text-muted text-center mb-4 mt-0">juste cliquer pour copier</p>
                    <div className="d-flex justify-content-between align-items-center rounded w-75-sm">
                      <span ref={link} className="text-end">Lien</span>
                      <Button icon="fa fa-copy" className="m-1" onClick={() => copyText(link)} rounded raised severity="info" label="Copier" />
                    </div>
                    <div className="d-flex justify-content-end">
                      <Button icon="fa fa-refresh" className="m-1" onClick={() => RegenererCode()} rounded raised label="Regenerate" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center rounded w-75-sm">
                      <span ref={code} className="text-end" id="code">{clubinfos.code}</span>
                      <Button icon="fa fa-copy" className="m-1" onClick={() => copyText(code)} rounded raised severity="info" label="Copier" />
                    </div>
                  </Dialog>

                  <Dialog header="Modifier le club" visible={showDialog} onHide={() => setShowDialog(false)} className="dialog" dismissableMask>
                    <div className="p-fluid">
                      <div className="p-field p-float-label">
                        <InputText id="newClubName" type="text" value={newClubName} onChange={(e) => setNewClubName(e.target.value)} />
                        <label htmlFor="newClubName">Nouveau nom du club</label>
                      </div>
                    </div>
                    <div className="p-dialog-footer">
                      <Button label="Annuler" onClick={() => setShowDialog(false)} className="p-button-text" />
                      <Button label="Enregistrer" onClick={()=>handleUpdateClubName(clubinfos.id, newClubName)} autoFocus />
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
                    {clubinfos.membres.map((member) => {
                      return <tr key={member.member_id}>
                        <td><span className="round">
                          <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                        </span></td>
                        <td>
                          {member.member_id === clubinfos.member_id ? <h6 className="text-start text-danger fw-bold">Moi</h6> : <h6 className="align-middle">{member.nom}</h6>}
                          {/* <small className="text-muted">{clubinfos.nom_club}</small> */}
                        </td>
                        <td className="d-flex align-self-center">{member.member_role}</td>
                        {member.member_id === clubinfos.member_id ? null :
                          <td>
                            {editingMember === member.member_id ? (
                              <div className="d-flex justify-content-end">
                                <Dropdown options={roleOptions} value={selectedRole} onChange={(e) => setSelectedRole(e.value)} placeholder="Select Role" className="m-1" />
                                <Button icon="fa fa-check" className="m-1" onClick={() => saveRole(member.member_id)} label="Save" rounded text raised severity="success" title="Save" aria-label="Save" />
                                <Button icon="fa fa-times" className="m-1" onClick={() => cancelEdit()} label="Cancel" rounded text raised severity="warning" title="Cancel" aria-label="Cancel" />
                              </div>
                            ) : (
                              <div className="d-flex justify-content-end">
                                <Toast ref={notification} />
                                <ConfirmPopup />
                                <Button icon="fa fa-edit" className="m-1" onClick={() => editRole(member.member_id)} label="Edit" rounded text raised severity="help" title="Edit" aria-label="Edit" />
                                <Button icon="fa fa-times" className="m-1" onClick={(event) => confirm1(event, member.member_id)} label="Supprimer" rounded text raised severity="danger" title="Réfuser" aria-label="Cancel" />
                              </div>
                            )}
                          </td>
                        }
                      </tr>
                    })}
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
              {invitationInfos.length ?
                invitationInfos.map(invite => <div className="row mb-2 border-rounded rounded-pill" key={invite.id}>
                  <div className="col-8 d-flex">
                    <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                    <h5 className="d-flex align-items-center mx-3">{invite.nom}</h5>
                  </div>
                  <div className="col-4 d-flex justify-content-end">
                    <Button onClick={() => { AcceptInvitation(invite.demandeId) }} icon="fa fa-check" rounded text raised severity="success" title="Accepter" aria-label="Check" />
                    <Button onClick={() => { deleteInvitation(invite.demandeId) }} icon="fa fa-times" rounded text raised severity="danger" title="Réfuser" aria-label="Cancel" />
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
