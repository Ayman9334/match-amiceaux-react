import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';

export default function Clubs({clubs}) {
    const [expandedRows, setExpandedRows] = useState([]);

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <span className="vertical-align-middle ml-2 font-weight-bold line-height-3">{data.nom_club.toUpperCase()}</span>
            </React.Fragment>
        );
    };

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan={5}>
                    <div className="d-flex justify-content-end font-weight-bold w-full">Total Members : {data.members.length}</div>
                </td>
            </React.Fragment>
        );
    };

    const nameBodyTemplate = (rowData) => {
        return (
          <div>
            {rowData.members.map((member) => (
              <div key={member.utilisateur_id} className="d-flex align-items-center">
                <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                <span className="ml-3">{member.nom}</span>
              </div>
            ))}
          </div>
        );
      };
      const roleBodyTemplate = (rowData) => {
        return (
          <div>
            {rowData.members.map((member) => (
              <div key={member.utilisateur_id}>
                <span>{member.member_role}</span>
              </div>
            ))}
          </div>
        );
      };
      

    return (
        <div className="d-flex align-items-center justify-content-center mt-3">
            <DataTable value={clubs} rowGroupMode="subheader" groupRowsBy="nom_club"
                    sortMode="single" sortField="nom_club" sortOrder={1}
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }} style={{ backgroundColor: 'red'}}>
                <Column field="nom" header="Name" body={nameBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="role" header="Role" body={roleBodyTemplate} style={{ width: '20%' }}></Column>
                {/* <Column field="company" header="Company" style={{ width: '20%' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="date" header="Date" style={{ width: '20%' }}></Column> */}
            </DataTable>
        </div>
    );
}
        