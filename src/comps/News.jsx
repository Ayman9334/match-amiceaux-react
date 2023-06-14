import '../css/acceuil.css';
import Carrousel from './Carrousel';
const News = () => {


return (
<>
  
  {/* News Area */}
<section className="news-area">
  <div className="container">
    <div className="row">
    <div className="col-lg-3 d-none d-lg-block">
        <div className="row">
        <div class="col-sm-12 card rounded-5 mb-5">
          <div class="card-body">
            <u class="card-title">Inscription des clubs</u>
            <form className="mt-4">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
              </div>
              <button type="submit" class="btn btn-light">OK</button>
            </form>
            <div class="mt-2">
              <a href="#">*Mot de passe oublié </a>
              <br />
              <a href="#"> *S'inscrire</a>
            </div>
          </div>
        </div>
          <div className="col-sm-12 card rounded-5 mb-5">
            <u className="card-title text-underline">1ére visite</u>
            <div className="card-content p-3">
            <img src="view/resources/img/template/add1.jpg" className="img-fluid" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae accusantium, ducimus, quibusdam velit,</p>
            </div>
          </div>
          <div className="col-sm-12 ">
          <div className="card rounded-5 mb-5">
          <div className="bg-light text-center round-top pb-5">
            <u>Boutique en ligne</u>
          </div>
          <div className="pop-news">
                <div className="owl-carousel popular-slider">
                  <div className="popular-item">
                    <img src="view/resources/img/template/tshirt1.jpg" className="d-block w-100" alt="T-Shirt 1"/>
                      <div className="card-body">
                        <h5 className="card-title">T-Shirt Portugal</h5>
                        <p className="card-text">Description of the t-shirt.</p>
                      </div>
                  </div>
                  <div className="popular-item">
                    <img src="view/resources/img/template/tshirt2.jpeg" className="d-block w-100" alt="T-Shirt 2"/>
                      <div className="card-body">
                        <h5 className="card-title">England Shirts</h5>
                        <p className="card-text">Description of the t-shirt.</p>
                      </div>
                  </div>
                  <div className="popular-item">
                    <img src="view/resources/img/template/tshirt3.jpg" className="d-block w-100" alt="T-Shirt 3"/>
                      <div className="card-body">
                        <h5 className="card-title">T-Shirt PSG</h5>
                        <p className="card-text">Description of the t-shirt.</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary text-white round-bottom p-2">
                <p>Match amicaux</p>
                <h5 className="text-right">Boutique</h5>
              </div>
          </div>
          </div>
        </div>
      </div>

      <div className="col-lg-9 col-md-12">
        <div className="row">
          <div className="col-md-12 mb-3">
          <div class="container position-relative">
          <img src="/view/resources/img/template/gallerie/football-stadium-2.jpg" alt="Image" class="img-fluid card-img"/>
          <div className='position-absolute translate-middle card-img-overlay d-flex justify-content-center align-items-center'>
            <div class="row ">
              <div class="col-3">
                <a href="#" class="card-clickable text-center">
                  <img src="/view/resources/img/template/popular-9.jpg" class="card-img-top" alt="Card Image 1"/>
                  <p class="card-title text-white"><small>infos sports</small></p>
                </a>
              </div>
              <div class="col-3">
                <a href="#" class="card-clickable text-center">
                  <img src="/view/resources/img/template/popular-7.jpg" class="card-img-top" alt="Card Image 1"/>
                  <p class="card-title text-white"><small>Rencontres amicales</small></p>
                </a>
              </div>
              <div class="col-3">
                <a href="#" class="card-clickable text-center">
                  <img src="/view/resources/img/template/popular-4.jpg" class="card-img-top" alt="Card Image 1"/>
                  <p class="card-title text-white"><small>Galeries</small></p>
                </a>
              </div>
              <div class="col-3">
                <a href="#" class="card-clickable text-center">
                  <img src="/view/resources/img/template/gallerie/football-stadium-2.jpg" class="card-img-top" alt="Card Image 1"/>
                  <p class="card-title text-white"><small>inscription</small></p>
                </a>
              </div>
            </div>
          </div>
          <div class="image-footer">
              <h2>Image Title</h2>
              <p>Image description or additional information.</p>
            </div>
        </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="row">
              <div className="col-md-8">
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
                <div class="card shadow rounded-5 mb-3">
                  <div class="card bg-success round-top p-3">
                    <h5 class="card-title text-white">News</h5>
                  </div>
                  <div class="card-body">
                    <div id="newsCarousel" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="row">
                            <div class="col-sm-4">
                              <div class="card">
                                <div class="card-body">
                                  <h6>20/09/2023</h6>
                                  <img src="view/resources/img/template/popular-10.jpg" alt="Image 3" class="img-fluid"/>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="card">
                                <div class="card-body">
                                  <h6>20/09/2023</h6>
                                  <img src="view/resources/img/template/more-7.jpg" alt="Image 3" class="img-fluid"/>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="card">
                                <div class="card-body">
                                  <h6>20/09/2023</h6>
                                  <img src="view/resources/img/template/popular-9.jpg" alt="Image 3" class="img-fluid"/>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-sm-4">
                              <div class="card">
                                <div class="card-body">
                                  <h6>20/09/2023</h6>
                                  <img src="view/resources/img/template/more-2.jpg" alt="Image 3" class="img-fluid"/>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="card">
                                <div class="card-body">
                                  <h6>20/09/2023</h6>
                                  <img src="view/resources/img/template/popular-11.jpg" alt="Image 3" class="img-fluid"/>
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="card">
                                <div class="card-body">
                                  <h6>20/09/2023</h6>
                                  <img src="view/resources/img/template/more-2.jpg" alt="Image 3" class="img-fluid"/>
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#newsCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#newsCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card round-top mb-4">
                      <div class="card round-top bg-secondary text-white p-2">
                        <h6 class="card-title">GALERIE PHOTOS  <i className="fa fa-caret-right" /></h6>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="view/resources/img/template/more-2.jpg" class="img-fluid" alt="Photo 1" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="view/resources/img/template/more-2.jpg" class="img-fluid" alt="Photo 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="view/resources/img/template/more-2.jpg" class="img-fluid" alt="Photo 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="view/resources/img/template/more-2.jpg" class="img-fluid" alt="Photo 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="view/resources/img/template/more-2.jpg" class="img-fluid" alt="Photo 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="view/resources/img/template/more-2.jpg" class="img-fluid" alt="Photo 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="view/resources/img/template/more-2.jpg" class="img-fluid" alt="Photo 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="view/resources/img/template/more-2.jpg" class="img-fluid" alt="Photo 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="view/resources/img/template/more-2.jpg" class="img-fluid" alt="Photo 2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card mb-4 round-top">
                      <div class="card round-top bg-secondary text-white p-2">
                        <h6 class="card-title">GALERIE VIDEOS  <i className="fa fa-caret-right" /></h6>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="path/to/video1-thumbnail.jpg" class="img-fluid" alt="Video 1" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="path/to/video2-thumbnail.jpg" class="img-fluid" alt="Video 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="path/to/video2-thumbnail.jpg" class="img-fluid" alt="Video 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="path/to/video2-thumbnail.jpg" class="img-fluid" alt="Video 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="path/to/video2-thumbnail.jpg" class="img-fluid" alt="Video 2" />
                            </a>
                          </div>
                          <div class="col-4 p-0">
                            <a href="#">
                              <img src="path/to/video2-thumbnail.jpg" class="img-fluid" alt="Video 2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card rounded-5 mb-5">
                  <div class="round-top p-2 bg-light d-flex justify-content-between align-items-center">
                    <h5 class="card-title">Flux RSS</h5>
                    <i class="fa fa-wifi"></i>
                  </div>
                  <div class="card-body">
                    <div class="d-flex align-items-center p-2">
                      <div class="mr-2">12/09</div>
                      <div class="mr-2">|</div>
                      <div>Lorem ipsum dolor sit amet.</div>
                    </div>     
                    <div class="d-flex align-items-center p-2">
                      <div class="mr-2">12/09</div>
                      <div class="mr-2">|</div>
                      <div>Lorem ipsum dolor sit amet.</div>
                    </div> 
                    <div class="d-flex align-items-center p-2">
                      <div class="mr-2">12/09</div>
                      <div class="mr-2">|</div>
                      <div>Lorem ipsum dolor sit amet.</div>
                    </div>                
                  </div>                    
                </div>
                <div class="">
                  <a href="#">
                    <img src="view/resources/img/template/pub1.jpg" alt="Publicité" className="card rounded-5 mb-5 img-fluid"/>
                  </a>
                </div>
                <div class="">
                  <a href="#">
                    <img src="view/resources/img/template/pub2.jpg" alt="Publicité" className="card rounded-5 mb-5 img-fluid"/>
                  </a>
                </div>
            <div className="d-lg-none">
                <div className="col-sm-12 mb-5">
                  <div class="col-sm-12 card rounded-5 mb-5">
                    <div class="card-body">
                      <u class="card-title">Inscription des clubs</u>
                      <form className="mt-4">
                        <div class="form-group">
                          <label for="email">Email</label>
                          <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                        </div>
                        <div class="form-group">
                          <label for="password">Password</label>
                          <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
                        </div>
                        <button type="submit" class="btn btn-light">OK</button>
                      </form>
                      <div class="mt-2">
                        <a href="#">*Mot de passe oublié </a>
                        <br />
                        <a href="#"> *S'inscrire</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 card rounded-5 mb-5">
                  <u className="card-title text-underline">1ére visite</u>
                  <div className="card-content p-3">
                  <img src="view/resources/img/template/add1.jpg" className="img-fluid" alt="" />
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae accusantium, ducimus, quibusdam velit, cum provident nam dolor laborum optio culpa id fugit nemo laboriosam. Tempora quia nostrum est sequi aut.</p>
                  </div>
                </div>
            <div className="col-sm-12 ">
              <div className="card rounded-5 mb-5">
                <div className="bg-light text-center round-top pb-5">
                  <u>Boutique en ligne</u>
                </div>
              <div className="pop-news">
                <div className="owl-carousel popular-slider">
                  <div className="popular-item">
                    <img src="view/resources/img/template/tshirt1.jpg" className="d-block w-100" alt="T-Shirt 1"/>
                      <div className="card-body">
                        <h5 className="card-title">T-Shirt Portugal</h5>
                        <p className="card-text">Description of the t-shirt.</p>
                      </div>
                  </div>
                  <div className="popular-item">
                    <img src="view/resources/img/template/tshirt2.jpeg" className="d-block w-100" alt="T-Shirt 2"/>
                      <div className="card-body">
                        <h5 className="card-title">England Shirts</h5>
                        <p className="card-text">Description of the t-shirt.</p>
                      </div>
                  </div>
                  <div className="popular-item">
                    <img src="view/resources/img/template/tshirt3.jpg" className="d-block w-100" alt="T-Shirt 3"/>
                      <div className="card-body">
                        <h5 className="card-title">T-Shirt PSG</h5>
                        <p className="card-text">Description of the t-shirt.</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary text-white round-bottom p-2">
                <p>Match amicaux</p>
                <h5 className="text-right">Boutique</h5>
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
  </div>
</section>
  {/* End News Area */}
</>


)
}

export default News
