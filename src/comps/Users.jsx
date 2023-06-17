import React, { useState, useEffect, useRef } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { useStateContext } from '../configs/context/ContextProvider';
import axiosClient from '../configs/api/axios-config';
import { Toast } from 'primereact/toast';

export default function Users({users}) {
    const membres = users;
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [niveaues] = useState(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
    const [leagues] = useState(['L1','L2','N1','N2','N3','CDF','CDL','TDC',]);

    const getSeverity = (niveau) => {
        switch (niveau) {
            case 'A1':
                return 'danger';

            case 'A2':
                return 'warning';

            case 'B1':
                return 'info';

            case 'B2':
                return null;

            case 'C1':
                return 'success';
        
            case 'C2':
                return 'success';        }
    };
    useEffect(() => {
            initFilters();
    }, []);

    const formatDate = (value) => {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        // const hours = date.getHours().toString().padStart(2, '0');
        // const minutes = date.getMinutes().toString().padStart(2, '0');
        // const seconds = date.getSeconds().toString().padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      };
      
    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        const _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            nom: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            ville: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            created_at: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            n_telephone: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            niveau: { value: null, matchMode: FilterMatchMode.CONTAINS },
            league: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="d-flex justify-content-between">
                <Button type="button" icon="fa fa-ban" label="Clear" outlined onClick={clearFilter} />
                <span className="p-input-icon-left">
                    <i className="fa fa-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Recherche par mot-clé" title='juste nom et ville'/>
                </span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="d-flex align-items-center gap-2">
                <span>{rowData.ville}</span>
            </div>
        );
    };

    const NomBodyTemplate = (rowData) => {
        return (
            <div className="d-flex align-items-center gap-2">
                <Avatar className="shadow" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" size="large" onClick={(e) => menu.current.toggle(e)} shape="circle" />
                {/* <img alt={rowData.nom} src={`${rowData.logo}`} width="32" /> */}
                <span className="ml-3">{rowData.nom}</span>
            </div>
        );
    };

    const filterClearTemplate = (options) => {
        return <Button type="button" icon="fa fa-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="fa fa-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };

    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center">Filter par ville</div>;
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.created_at);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const n_telephoneBodyTemplate = (rowData) => {
        return rowData.n_telephone;
    };

    const niveauBodyTemplate = (rowData) => {
        return <Tag value={rowData.niveau} severity={getSeverity(rowData.niveau)} />;
    };

    const niveauFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={niveaues} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={niveauItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const niveauItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const leagueBodyTemplate = (rowData) => {
        return rowData.league;
    };

    const leagueFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={leagues} onChange={(e) => options.filterCallback(e.value, options.index)} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <>
            <Toast ref={toast} />
            <ConfirmPopup />
          <div className="action-buttons d-flex ">
            <Button icon="fa fa-trash" className="p-button-danger ml-2" onClick={(event) => ClickDelete(event,rowData.id)} label="Supprimer" rounded text raised severity="danger"/>
          </div></>
        );
      };
      
    const header = renderHeader();


      // delete members
      const { notification } = useStateContext();
      const toast = useRef(null);
  const deleteMembre = (id) => {
    axiosClient
      .delete(`/members/${id}`)
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
  const ClickDelete = (event, id) => {
    console.log(id)
    confirmPopup({
      target: event.currentTarget,
      message: 'Do you want to delete this member?',
      icon: 'fa fa-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => accept(id),
      reject
    });
  };

    return (
        <div className="card">
            <DataTable value={membres} paginator showGridlines rows={5} loading={loading} dataKey="id"
                filters={filters} globalFilterFields={['nom', 'ville', 'n_telephon', 'created_at']} header={header}
                emptyMessage="Aucun membre trouvé.">
                <Column field="nom" header="Nom" filter filterPlaceholder="Recherche par nom" body={NomBodyTemplate} style={{ minWidth: '12rem' }} />
                <Column header="Ville" filterField="ville" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
                    filter filterPlaceholder="Recherche par ville" filterClear={filterClearTemplate}
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                <Column header="N° de telephone" filterField="n_telephone" style={{ minWidth: '10rem' }} body={n_telephoneBodyTemplate} filter />
                <Column header="Date de rejoindre" filterField="created_at" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column field="niveau" header="Niveau" showFilterMatchModes={false} filterMenuStyle={{ width: '5rem' }} style={{ minWidth: '8rem' }} body={niveauBodyTemplate} filter filterElement={niveauFilterTemplate} />
                <Column field="league" header="league"  showFilterMatchModes={false} style={{ minWidth: '2rem' }} body={leagueBodyTemplate} filter filterElement={leagueFilterTemplate} />
                <Column header="Actions" body={actionBodyTemplate}  style={{ width: '10rem', textAlign: 'center' }} />
            </DataTable>
        </div>
    );
}
