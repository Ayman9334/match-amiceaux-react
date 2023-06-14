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
                            Technology
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-toggle="tab" href="#busi">
                            Business
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-toggle="tab" href="#spor">
                            Sports
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Tab panes */}
                    <div class="card shadow rounded-5 mb-3">
              <div class="bg-success round-top p-3">
                <h5 class="card-title text-white">Rencontre amicale</h5>
              </div>
              <div class="card-body">
                <div class="row mb-3 mt-0">
                  <div class="col">
                    <button class="btn btn-light">Proposer un match</button>
                  </div>
                  <div class="col">
                    <button class="btn btn-light">Dernière minute</button>
                  </div>
                  <div class="col">
                    <button class="btn btn-light">Rechercher un match</button>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-md-7 ">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className='col'>
                        <img src="view/resources/img/template/Real_Madrid.png" class="img-fluid w-75 h-auto" alt="Club A"/>
                        <h5 class="card-title text-center">Club A</h5>
                      </div>
                      <div className="col">
                        <h1 className='text-green text-center'>VS</h1>
                      </div>
                      <div className='col'>
                        <img src="view/resources/img/template/FC_Barcelona.png" class="img-fluid w-75 h-auto" alt="Club B"/>
                        <h5 class="card-title text-center">Club C</h5>
                      </div>
                    </div>
                    <hr />
                    <div className='text-center'>2023-05-25</div>
                  </div>
                  <div class="col-md-5">
                    <table>
                        <tr>
                          <td className='m-2'>2023-05-25 </td>
                          <td>Club A VS Club C</td>
                        </tr>
                        <hr />
                        <tr>
                          <td className='m-2'>2023-05-25 </td>
                          <td>Club A VS Club C</td>
                        </tr>
                        <hr />
                        <tr>
                          <td className='m-2'>2023-05-25 </td>
                          <td>Club A VS Club C</td>
                        </tr>
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
                                    src="view/resources/img/template/popular-1.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-2.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-3.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-4.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-5.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-6.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-7.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-8.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-9.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-10.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-11.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
                                    src="view/resources/img/template/popular-12.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                              <div className="img-content">
                                <p>
                                  <a href="#">
                                    These sentences are selected from various online
                                    news....
                                  </a>
                                </p>
                                <ul className="list-unstyled list-inline">
                                  <li className="list-inline-item">FOOD</li>
                                  <li className="list-inline-item">
                                    September 24, 2017
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
