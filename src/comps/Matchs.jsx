import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Matchs = (props) => {
    console.log(props.matchs)
  const renderStatusLabel = (rowData) => {
    const statusClassName =
      rowData.statut === 'indisponible'
        ? 'p-tag p-tag-danger'
        : rowData.statut === 'disponible'
        ? 'p-tag p-tag-success'
        : 'p-tag p-tag-warning';

    return <span className={statusClassName}>{rowData.statut}</span>;
  };

  const renderOrganisateur = (rowData) => {
    const organisateur = props.users.find((user) => user.id === rowData.organisateur_id);

    return <span>{organisateur ? organisateur.nom : '-'}</span>;
  };

  return (
    <div className="card-box">
      <DataTable
        value={props.matchs}
        className="p-datatable-striped"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 20]}
        emptyMessage="No matchs found."
      >
        <Column field="id" header="#" sortable />
        <Column field="organisateur_id" header="Organisateur" body={renderOrganisateur} sortable />
        <Column field="categorie" header="Categorie" sortable />
        <Column field="match_date" header="Date du match" sortable />
        <Column field="statut" header="Statut" body={renderStatusLabel} sortable /> 
        <Column field="nembre_joueur" header="Nombre de joueurs" sortable />
        <Column field="lieu" header="Lieu" sortable />
        <Column field="niveau" header="Niveau" sortable />
        <Column field="ligue" header="League" sortable />
        <Column field="description" header="Description" sortable />
      </DataTable>
    </div>
  );
};

export default Matchs;
