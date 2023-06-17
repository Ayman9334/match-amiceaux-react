import React,{ useState } from 'react';
import '../css/acceuil.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';

export default function Home(props) {
    const [showDialog, setShowDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleShowDialog = (user) => {
        setSelectedUser(user);
        setShowDialog(true);
    };

    const handleHideDialog = () => {
        setShowDialog(false);
    };

    const onPageChange = (event) => {
        setCurrentPage(event.page);
    };

    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const displayedUsers = props.users.slice(startIndex, endIndex);

    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '150px', textAlign: 'end' , marginRight: '10px' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };
    return (
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <div className="card-box ribbon-box">
                    <div className="ribbon ribbon-primary">Members</div>
                    <div className="clearfix"></div>
                    <div className="inbox-widget">
                        {displayedUsers.map((user) => (
                            <div className="inbox-item" key={user.id}>
                                <div className="inbox-item-img">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle" alt="" />
                                </div>
                                <p className="inbox-item-author">{user.nom}</p>
                                <div className="inbox-item-date">
                                    <Button label="Voir plus" severity="success" rounded onClick={() => handleShowDialog(user)}/>
                                </div>
                            </div>
                        ))}
                    </div>
                <Paginator template={template2} first={startIndex} rows={rowsPerPage} totalRecords={props.users.length} onPageChange={(e) => onPageChange(e, 1)} className="d-flex justify-content-end" />
                </div>
            </div>
            <div className="col-md-8 col-sm-12">
                <div className="row d-flex align-items-center justify-content-center m-1">
                    <div className="col-sm-4">
                        <div className="card-box tilebox-one card shadow rounded-5"><i className="icon-layers float-right text-muted"></i>
                            <h6 className="text-muted text-uppercase text-center mt-0">Membres</h6>
                            <h2 className="text-center" data-plugin="counterup">{props.users.length}</h2>
                            {/* <span className="badge badge-custom">+11% </span><span className="text-muted">From previous period</span> */}
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card-box tilebox-one card shadow rounded-5"><i className="icon-paypal float-right text-muted"></i>
                            <h6 className="text-muted text-uppercase text-center mt-0">Matchs</h6>
                            <h2 className="text-center" data-plugin="counterup">{props.matchs.length}</h2>
                            {/* <span className="badge badge-danger">-29% </span><span className="text-muted">From previous period</span> */}
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card-box tilebox-one card shadow rounded-5"><i className="icon-rocket float-right text-muted"></i>
                            <h6 className="text-muted text-uppercase text-center mt-0">Clubs</h6>
                            <h2 className="text-center" data-plugin="counterup">{props.clubs.length}</h2>
                            {/* <span className="badge badge-custom">+89% </span><span className="text-muted">Last year</span> */}
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <h4 className="header-title mb-3">Matchs</h4>
                    <div className="table-responsive">
                        <table className="table table-striped text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Organisateur</th>
                                    <th>Categorie</th>
                                    <th>Date du match</th>
                                    <th>Statut</th>
                                    <th>Nombre de joueurs</th>
                                    <th>Lieu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.matchs.map((match)=>{
                                    return(
                                    <tr key={match.id}>
                                        <td>{match.id}</td>
                                        {props.users.map(us=>{
                                            return(us.id===match.organisateur_id? 
                                                <td>{us.nom}</td>:null)
                                            })}
                                        <td>{match.categorie}</td>
                                        <td>{match.match_date}</td>
                                        <td><span className="label label-info">{match.statut}</span></td>
                                        <td>{match.nembre_joueur}</td>
                                        <td>{match.lieu}</td>
                                    </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Dialog visible={showDialog} onHide={handleHideDialog} header="Informations supplémentaires" modal className="additional-info-dialog" footer={<Button label="Close" className="p-button-text" onClick={handleHideDialog} />} dismissableMask>
                {selectedUser && (
                    <>
                        <p>Nom : {selectedUser.nom}</p>
                        <p>Tel : {selectedUser.n_telephone}</p>
                        <p>Email : {selectedUser.email}</p>
                        <p>Adresse : {selectedUser.adresse}</p>
                        <p>Ville : {selectedUser.ville}</p>
                        <p>Région : {selectedUser.region}</p>
                        <p>Catégorie : {selectedUser.categorie}</p>
                        <p>Niveau : {selectedUser.niveau}</p>
                        <p>League : {selectedUser.league}</p>
                    </>
                )}
            </Dialog>
        </div>
    );
}
