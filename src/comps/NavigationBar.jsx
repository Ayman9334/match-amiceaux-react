import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import { useStateContext } from "../context/ContextProvider";
import { useState } from "react";
import Utilisateurmenu from "./UtilisateurMenu";

const NavigationBar = () => {
    const { token } = useStateContext()
    const [auth] = useState(token ? true : false)



    return (
        <>
            {/* Top Bar */}
            <section className="top-bar" id="btt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="bar-left">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <i className="fa fa-calendar" />
                                        26/04/2023
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fa fa-cloud" />
                                        Paris, 19°C
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">Publicité</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="apropos.html">A propos</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="bar-social text-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fa fa-rss" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Top Bar */}
            {/* Logo Area */}
            <section className="logo-area d-flex align-items-center">
                <div className="container">
                    <div className="sub-logo-area">
                        <div className="logo">
                            <Link to="/">
                                <img
                                    src="/view/resources/img/logo-match.png"
                                    className="h-100 p-2"
                                />
                            </Link>
                        </div>
                        <div>
                            <div className="searchbar text-right">
                                {auth ? <Utilisateurmenu /> : <>
                                    <Link to={"/inscription"} onClick={() => exitpopup.current.click()}>
                                        <u className="m-2">Créer un compte</u>
                                    </Link>
                                    <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#loginModal"
                                        className="btn btn-success descktop-btn"
                                    >
                                        <span className="fa fa-user" /> Se Connecter
                                    </a>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Logo Area */}

            {!auth && <LoginPopup />}



            <section className="menu-area">

                {/* /.modal */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-menu">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <Link to="/">ACCUEIL</Link>
                                    </li>
                                    {/* <li className="list-inline-item">
                                        <a>
                                            FONCTIONNEMENT <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="dropdown list-unstyled">
                                            <li>
                                                <a href="reglement.html">Réglement </a>
                                            </li>
                                            <li>
                                                <a>
                                                    Documents <i className="fa fa-angle-right" />
                                                </a>
                                                <ul className="dropdown-sub list-unstyled">
                                                    <li>
                                                        <a href="accueil.html">Attestation 1 </a>
                                                    </li>
                                                    <li>
                                                        <a href="accueil.html">Attestation 2 </a>
                                                    </li>
                                                    <li>
                                                        <a href="accueil.html">Attestation 3 </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="faq.html">Faq</a>
                                            </li>
                                            <li>
                                                <a href="news.html">News</a>
                                            </li>
                                            <li>
                                                <a href="apropos.html">A propos</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li className="list-inline-item mega-vd">
                                        <a>
                                            VIDEOS <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="v-gallery">
                                            <li className="row">
                                                <div className="col-md-12">
                                                    <div className="mega-vd-slider owl-carousel">
                                                        <div className="mg-item">
                                                            <div className="mg-img">
                                                                <img
                                                                    src="/view/resources/img/template/popular-10.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="#">
                                                                    <i className="fa fa-play" />
                                                                </a>
                                                            </div>
                                                            <div className="mg-content">
                                                                <p>
                                                                    <a href="#">
                                                                        These sentences are selected from various online
                                                                        news.
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mg-item">
                                                            <div className="mg-img">
                                                                <img
                                                                    src="/view/resources/img/template/popular-7.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="#">
                                                                    <i className="fa fa-play" />
                                                                </a>
                                                            </div>
                                                            <div className="mg-content">
                                                                <p>
                                                                    <a href="#">
                                                                        These sentences are selected from various online
                                                                        news.
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mg-item">
                                                            <div className="mg-img">
                                                                <img
                                                                    src="/view/resources/img/template/popular-8.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="#">
                                                                    <i className="fa fa-play" />
                                                                </a>
                                                            </div>
                                                            <div className="mg-content">
                                                                <p>
                                                                    <a href="#">
                                                                        These sentences are selected from various online
                                                                        news.
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mg-item">
                                                            <div className="mg-img">
                                                                <img
                                                                    src="/view/resources/img/template/popular-11.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="#">
                                                                    <i className="fa fa-play" />
                                                                </a>
                                                            </div>
                                                            <div className="mg-content">
                                                                <p>
                                                                    <a href="#">
                                                                        These sentences are selected from various online
                                                                        news.
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mg-item">
                                                            <div className="mg-img">
                                                                <img
                                                                    src="/view/resources/img/template/popular-5.jpg"
                                                                    alt=""
                                                                />
                                                                <a href="#">
                                                                    <i className="fa fa-play" />
                                                                </a>
                                                            </div>
                                                            <div className="mg-content">
                                                                <p>
                                                                    <a href="#">
                                                                        These sentences are selected from various online
                                                                        news.
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li className="list-inline-item mega-mnu">
                                        <a>
                                            SPORTS <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="mega-menu">
                                            <li className="row">
                                                <div className="col-md-3">
                                                    <div className="mega-cat">
                                                        <div className="sec-title">
                                                            <h5>Categories</h5>
                                                        </div>
                                                        <div className="cat-content">
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <a href="#">Sports collectifs</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Sports individuels</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Sports d&apos;hiver</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Sports nautiques</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Sports occasionnels</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Loisirs</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Défis</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-lat">
                                                        <div className="sec-title">
                                                            <h5>Dernières nouvelles</h5>
                                                        </div>
                                                        <div className="lat-box d-flex">
                                                            <div className="lat-img">
                                                                <a href="#">
                                                                    <img
                                                                        src="/view/resources/img/template/lt-sm-6.jpg"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="img-content">
                                                                <p>
                                                                    <a href="#">It is usually composed sentences</a>
                                                                </p>
                                                                <span>20 Seconds ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="lat-box d-flex">
                                                            <div className="lat-img">
                                                                <a href="#">
                                                                    <img
                                                                        src="/view/resources/img/template/lt-sm-11.jpg"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="img-content">
                                                                <p>
                                                                    <a href="#">It is usually composed sentences</a>
                                                                </p>
                                                                <span>20 Seconds ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="lat-box d-flex">
                                                            <div className="lat-img">
                                                                <a href="#">
                                                                    <img
                                                                        src="/view/resources/img/template/lt-sm-9.jpg"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="img-content">
                                                                <p>
                                                                    <a href="#">It is usually composed sentences</a>
                                                                </p>
                                                                <span>20 Seconds ago</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-pop">
                                                        <div className="sec-title">
                                                            <h5>Nouvelles populaires</h5>
                                                        </div>
                                                        <div className="pop-box d-flex">
                                                            <div className="pop-img">
                                                                <a href="#">
                                                                    <img
                                                                        src="/view/resources/img/template/lt-sm-4.jpg"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="img-content">
                                                                <p>
                                                                    <a href="#">It is usually composed sentences</a>
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
                                                        <div className="pop-box d-flex">
                                                            <div className="pop-img">
                                                                <a href="#">
                                                                    <img
                                                                        src="/view/resources/img/template/lt-sm-7.jpg"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="img-content">
                                                                <p>
                                                                    <a href="#">It is usually composed sentences</a>
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
                                                        <div className="pop-box d-flex">
                                                            <div className="pop-img">
                                                                <a href="#">
                                                                    <img
                                                                        src="/view/resources/img/template/lt-sm-8.jpg"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="img-content">
                                                                <p>
                                                                    <a href="#">It is usually composed sentences</a>
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
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-glry">
                                                        <div className="sec-title">
                                                            <h5>Gallery images</h5>
                                                        </div>
                                                        <div className="glry-box">
                                                            <img
                                                                src="/view/resources/img/template/lt-sm-1.jpg"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="/view/resources/img/template/lt-sm-2.jpg"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="/view/resources/img/template/lt-sm-3.jpg"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="/view/resources/img/template/lt-sm-5.jpg"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="/view/resources/img/template/lt-sm-10.jpg"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="/view/resources/img/template/lt-sm-12.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li className="list-inline-item">
                                        <Link
                                            to={"/trouve-match"}
                                        >
                                            <span className="fa fa-search" />{" "}
                                            RECHERCHER UN MATCH
                                        </Link>
                                    </li>

                                    {auth && <>
                                        <li className="list-inline-item">
                                            <Link to="/cree-match">CRÉER UN MATCH</Link>
                                        </li>
                                    </>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Menu Area */}
            {/* Mobile Menu */}
            <section className="mobile-menu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mobile-menu">

                                <nav id="dropdown">
                                    <div className="logo-area-mobile">
                                        <Link to="/">
                                            <img src="/view/resources/img/logo-match.png" alt="" width={150} style={{margin:0}}/>
                                        </Link>
                                        <div>
                                            {!auth && <a
                                                    href="#"
                                                    data-toggle="modal"
                                                    data-target="#loginModal"
                                                    className="btn btn-success"
                                                >
                                                    <span className="fa fa-user" /> Se Connecter
                                                </a>}
                                        </div>
                                    </div>

                                    <div className="searchbar text-right">

                                    </div>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to='/'>Accueil</Link>
                                        </li>
                                        <li>
                                            <Link to='/cree-match'>Creer un Match</Link>
                                        </li>
                                        <li>
                                            <a>Fonctionnement</a>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="04-about-us.html">Réglement</a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Documents <i className="fa fa-angle-right" />
                                                    </a>
                                                    <ul className="dropdown-sub list-unstyled">
                                                        <li>
                                                            <a href="05-category-one.html">Attestation 1 </a>
                                                        </li>
                                                        <li>
                                                            <a href="06-category-two.html">Attestation 2 </a>
                                                        </li>
                                                        <li>
                                                            <a href="07-category-three.html">Attestation 3 </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>Sports</a>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">Sports collectifs</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sports individuels</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sports d&apos;hiver</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sports nautiques</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sports occasionnels</a>
                                                </li>
                                                <li>
                                                    <a href="#">Loisirs</a>
                                                </li>
                                                <li>
                                                    <a href="#">Défis</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Politics</a>
                                        </li>
                                        <li>
                                            <a href="#">Faq</a>
                                        </li>
                                        <li>
                                            <a href="#">Aide</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Mobile Menu */}
        </>

    )
}

export default NavigationBar
