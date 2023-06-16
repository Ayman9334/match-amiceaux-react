import { useState } from 'react';
import '../css/acceuil.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Home(props) {
    const [showDialog, setShowDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleShowDialog = (user) => {
        setSelectedUser(user);
        setShowDialog(true);
    };

    const handleHideDialog = () => {
        setShowDialog(false);
    };

    return (
        <div className="row">
            <div className="col-md-4 col-sm-12">
                {/* <div className="card-box">
                <h4 className="header-title mt-0">Personal Information</h4>
                <div className="panel-body">
                    <p className="text-muted font-13">Hye, I’m Johnathan Doe residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you want.</p>
                    <hr/>
                    <div className="text-left">
                        <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">Johnathan Deo</span></p>
                        <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(+12) 123 1234 567</span></p>
                        <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">coderthemes@gmail.com</span></p>
                        <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">USA</span></p>
                        <p className="text-muted font-13"><strong>Languages :</strong> <span className="m-l-5"><span className="flag-icon flag-icon-us m-r-5 m-t-0" title="us"></span> <span>English</span> </span><span className="m-l-5"><span className="flag-icon flag-icon-de m-r-5" title="de"></span> <span>German</span> </span><span className="m-l-5"><span className="flag-icon flag-icon-es m-r-5" title="es"></span> <span>Spanish</span> </span><span className="m-l-5"><span className="flag-icon flag-icon-fr m-r-5" title="fr"></span> <span>French</span></span>
                        </p>
                    </div>
                    <ul className="social-links list-inline mt-4 mb-0">
                        <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
                    </ul>
                </div>
            </div> */}

                <div className="card-box ribbon-box">
                    <div className="ribbon ribbon-primary">Members</div>
                    <div className="clearfix"></div>
                    <div className="inbox-widget">
                        {props.users.map((user) => (
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
                            <h2 className="text-center" data-plugin="counterup">46</h2>
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
                {/* <div className="card-box">
                    <h4 className="header-title mb-3">Matchs</h4>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Project Name</th>
                                    <th>Start Date</th>
                                    <th>Due Date</th>
                                    <th>Status</th>
                                    <th>Assign</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Adminox Admin</td>
                                    <td>01/01/2015</td>
                                    <td>07/05/2015</td>
                                    <td><span className="label label-info">Work in Progress</span></td>
                                    <td>Coderthemes</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Adminox Frontend</td>
                                    <td>01/01/2015</td>
                                    <td>07/05/2015</td>
                                    <td><span className="label label-success">Pending</span></td>
                                    <td>Coderthemes</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Adminox Admin</td>
                                    <td>01/01/2015</td>
                                    <td>07/05/2015</td>
                                    <td><span className="label label-pink">Done</span></td>
                                    <td>Coderthemes</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Adminox Frontend</td>
                                    <td>01/01/2015</td>
                                    <td>07/05/2015</td>
                                    <td><span className="label label-purple">Work in Progress</span></td>
                                    <td>Coderthemes</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Adminox Admin</td>
                                    <td>01/01/2015</td>
                                    <td>07/05/2015</td>
                                    <td><span className="label label-warning">Coming soon</span></td>
                                    <td>Coderthemes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
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
