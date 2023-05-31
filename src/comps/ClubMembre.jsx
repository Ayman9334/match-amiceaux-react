import React from "react";
import { Avatar } from "primereact/avatar";
import { Badge } from 'primereact/badge';

const ClubMembre=(props)=>{



return(
<div className="container">
<h1 className="text-center m-4">{props.clubinfos.nom_club}</h1>
<div className="row d-flex justify-content-center align-items-center">
  <div className="col-lg-8 d-flex">
    <div className="card w-100">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h5 className="card-title mr-2">Membres du Club</h5>
            <Badge value={props.clubinfos.members_number}></Badge>
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
              {props.clubinfos.membres.map((member)=>{return <tr key={member.club_member.id}>
              <td><span className="round">
                    <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                  </span></td>
                <td>
                    {member.club_member.member_id === props.clubinfos.member_id ?<h6 className="align-middle text-danger fw-bold">Moi</h6>:<h6 className="align-middle">{member.nom}</h6>}
                    <small className="text-muted">{props.clubinfos.nom_club}</small>
                </td>
                <td>{member.club_member.member_role}</td>
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