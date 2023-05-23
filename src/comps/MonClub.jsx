// import { useStateContext } from "../context/ContextProvider"

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Avatar } from "primereact/avatar"
import { useRef, useState } from "react";


const MonClub = (props) => {
  const [visible, setVisible] = useState(false);
  // const {notification} = useStateContext()

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
  console.log(props.clubInfos)
  return (
    <div className="container">
      <h1 className="text-center m-4">{props.clubInfos.nom_club}</h1>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-8 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Membres du Club</h5>
                  <small className="fw-100 mb-5">Nombres du membres : {props.clubInfos.members_number}</small>
                </div>
                <div className="card flex justify-content-center">
                  {/* <button className="btn waves-effect waves-light btn btn-info hidden-sm-down text-white">Ajouter Membres</button> */}
                    <Button label="Ajouter Membres" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                    <Dialog header="Il y a deux façons d'ajouter des membres, un code et un lien" visible={visible} onHide={() => setVisible(false)}
                        style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                          <ul>
                            <li ref={link} onClick={()=>copyText(link)}>link</li>
                            <li ref={code} onClick={()=>copyText(code)}>code</li>
                          </ul>
                    </Dialog>
                </div>
              </div>
              <div className="table-responsive mt-3 no-wrap">
                <table className="table vm no-th-brd pro-of-month mb-0">
                  <thead>
                    <tr>
                      <th colSpan="2" className="text-center">Player Name</th>
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
                      <td className="d-flex justify-content-around">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-trash-o"></i></a>
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
                        <a href=""><i className="fa fa-trash-o"></i></a>
                      </td>
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



export default MonClub
