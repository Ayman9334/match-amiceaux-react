import { Link } from 'react-router-dom';
import '../css/acceuil.css';
import { Divider } from 'primereact/divider';

const News = () => {


  return (
    <>
      {/* News Area */}
      <section className="news-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="latest-news">
                    <div className="tab-box d-flex justify-content-between">
                      <div className="sec-title">
                        <h5>Dernières nouvelles</h5>
                      </div>
                      {/* Nav tabs */}
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" data-toggle="tab" href="#tech">
                            Football
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-toggle="tab" href="#busi">
                            Rugby
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-toggle="tab" href="#spor">
                            Basketball
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Tab panes */}
                    <div className="card mb-3">
                      <div className="card-header bg-red">
                        <h5 className="card-title text-white">Rencontre amicale</h5>
                      </div>
                      <div className="card-body">
                        <div className="row mb-3 mt-0">
                          <div className="col">
                            <button className="btn btn-light"><Link to="/match/cree-match">Proposer un match</Link></button>
                          </div>
                          <div className="col">
                            <button className="btn btn-light">Dernière minute</button>
                          </div>
                          <div className="col">
                            <button className="btn btn-light"><Link to={"/match/trouve-match"}>Rechercher un match</Link></button>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-md-7 ">
                            <div className="row d-flex justify-content-center align-items-center">
                              <div className='col'>
                                <img src="view/resources/img/template/Real_Madrid.png" className="img-fluid w-75 h-auto" alt="Club A" />
                                <h5 className="card-title text-center">Club A</h5>
                              </div>
                              <div className="col">
                                <h1 className='text-green text-center'>VS</h1>
                              </div>
                              <div className='col'>
                                <img src="view/resources/img/template/FC_Barcelona.png" className="img-fluid w-75 h-auto" alt="Club B" />
                                <h5 className="card-title text-center">Club C</h5>
                              </div>
                            </div>
                            <Divider/>
                            <div className='text-center'>2023-05-25</div>
                          </div>
                          <div className="col-md-5">
                            <table>
                              <thead></thead>
                              <tbody>
                              <tr>
                                <td className='m-2'>2023-05-25 </td>
                                <td>Club A VS Club C</td>
                              </tr>
                              <Divider type="dashed"/>
                              <tr>
                                <td className='m-2'>2023-05-25 </td>
                                <td>Club A VS Club C</td>
                              </tr>
                              <Divider type="dashed"/>
                              <tr>
                                <td className='m-2'>2023-05-25 </td>
                                <td>Club A VS Club C</td>
                              </tr>
                              </tbody>
                              <tfoot></tfoot>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pop-news">
                    <div className="sec-title">
                      <h5>Les plus populaires</h5>
                    </div>
                    <div className="owl-carousel popular-slider">
                      <div className="popular-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular1.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">PSG</p>
                                <p>
                                  La rupture de Mbappé avec le P.S.G. s'aggrave et devient une guerre des mots
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular2.webp"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">TRANSFERS</p>
                                <p>
                                  Indifférence' à Madrid, 'tristesse' à Dortmund - comment est perçue la signature de Bellingham
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular3.webp"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">PREMIER LEAGUE</p>
                                <p>
                                  Jour de la révélation du calendrier de la Premier League et autres dates clés de la saison 2023/24 dévoilées
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular4.webp"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">LA LIGA</p>
                                <p>
                                  "Un joueur de top" - Kroos accueille l'arrivée de Bellingham au Real Madrid.
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular5.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">Actu Angleterre</p>
                                <p>
                                  Manchester City : au sommet de l'Europe, Guardiola a déjà programmé son départ
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular6.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">Actu Transferts</p>
                                <p>
                                  Manchester United : le Qatar en passe de racheter les Red Devils !
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="popular-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular7.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">Actu Transferts</p>
                                <p>
                                  Mercato : le Real change ses plans pour Mbappé !
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular8.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">Actu italie</p>
                                <p>
                                  Roma : Mourinho a pris sa décision
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular9.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">Actu Transferts</p>
                                <p>
                                  Mercato : Al-Hilal sort le grand jeu pour Neymar !
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular10.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">Actu Champion's League</p>
                                <p>
                                  Bougés, les Citizens arrachent leur première Ligue des Champions ! - Débrief et NOTES des joueurs (Man City 1-0 Inter)
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular11.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">Journal Des Transferts</p>
                                <p>
                                  Journal des Transferts : accord Thuram-Liverpool, la nouvelle piste de l'OM, surprise à Toulouse, Traoré quitte Rennes...
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pop-box">
                              <div className="pop-img">
                                <a href="#">
                                  <img
                                    src="view/resources/img/template/popular12.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p className="text-muted">Actu Ligue 1</p>
                                <p>
                                  PSG : la nouvelle révolution, Messi... Les petites piques de Leonardo
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">Football</li>
                                  <li className="list-inline-item">
                                    12 Juin 2023
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="follow-widget">
                    <div className="sec-title">
                      <h5>Rejoignez nous</h5>
                    </div>
                    <ul className="list-unstyled clearfix">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                          <p>44,410</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                          <p>31,219</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-rss" />
                          <p>11,209</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                          <p>19,323</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus" />
                          <p>29,559</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-youtube" />
                          <p>56,717</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="add-widget">
                    <img
                      src="view/resources/img/template/add1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="add-layer text-center">
                      <p>Best Template For Your Online News</p>
                      <a href="#">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="tab-widget">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#recent"
                        >
                          Recent
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#popular">
                          Popular
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#comment">
                          Comment
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="recent"
                        role="tabpanel"
                      >
                        <div className="rec-item d-flex">
                          <div className="rec-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/lt-sm-6.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                These sentences are selected from various online
                                news.
                              </a>
                            </p>
                            <span>20 Seconds ago</span>
                          </div>
                        </div>
                        <div className="rec-item d-flex">
                          <div className="rec-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/lt-sm-11.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                These sentences are selected from various online
                                news.
                              </a>
                            </p>
                            <span>4 minutes ago</span>
                          </div>
                        </div>
                        <div className="rec-item d-flex">
                          <div className="rec-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/lt-sm-7.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                These sentences are selected from various online
                                news.
                              </a>
                            </p>
                            <span>47 minutes ago</span>
                          </div>
                        </div>
                        <div className="rec-item d-flex">
                          <div className="rec-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/lt-sm-4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                These sentences are selected from various online
                                news.
                              </a>
                            </p>
                            <span>1 Hours ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="popular" role="tabpanel">
                        <div className="pop-item d-flex">
                          <div className="pop-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/lt-sm-3.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                These sentences are selected from various online
                                news.
                              </a>
                            </p>
                            <ul className="list-unstyled list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pop-item d-flex">
                          <div className="pop-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/lt-sm-8.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                These sentences are selected from various online
                                news.
                              </a>
                            </p>
                            <ul className="list-unstyled list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pop-item d-flex">
                          <div className="pop-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/lt-sm-9.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                These sentences are selected from various online
                                news.
                              </a>
                            </p>
                            <ul className="list-unstyled list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pop-item d-flex">
                          <div className="pop-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/lt-sm-12.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                These sentences are selected from various online
                                news.
                              </a>
                            </p>
                            <ul className="list-unstyled list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="comment" role="tabpanel">
                        <div className="com-item d-flex">
                          <div className="com-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/com-1.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                <span>James</span>: Nesciunt quaerat ipsam fugiat
                                impedit dignissimos unde...
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="com-item d-flex">
                          <div className="com-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/com-2.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                <span>Mary</span>: Nesciunt quaerat ipsam fugiat
                                impedit dignissimos unde...
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="com-item d-flex">
                          <div className="com-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/com-1.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                <span>John</span>: Nesciunt quaerat ipsam fugiat
                                impedit dignissimos unde...
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="com-item d-flex">
                          <div className="com-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/com-2.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                <span>Anna</span>: Nesciunt quaerat ipsam fugiat
                                impedit dignissimos unde...
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="com-item d-flex">
                          <div className="com-img">
                            <a href="#">
                              <img
                                src="view/resources/img/template/com-1.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="img-content">
                            <p>
                              <a href="#">
                                <span>Maxx</span>: Nesciunt quaerat ipsam fugiat
                                impedit dignissimos unde...
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* End News Area */}
    </>


  )
}

export default News
