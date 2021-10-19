import React, { useEffect } from "react";
import Aos from "aos";
import $ from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";

//css
import "./home.css";
import "aos/dist/aos.css";
//images
import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/menu.svg";
import plane from "../../assets/img/plane 1.png";
import scotland from "../../assets/img/coeur-removebg-preview 1.png";
import scrool from "../../assets/img/scroll.svg";
import strategy from "../../assets/img/lightbulb_-_copie-removebg-preview 1.png";
import design from "../../assets/img/smallear_-_copie-removebg-preview 1.png";
import londonborn from "../../assets/img/imageonline-co-overlayed-image-4.png";
import subaru from "../../assets/img/imageonline-co-overlayed-image (8).png";
import valeyo from "../../assets/img/film.png";
import wavy from "../../assets/img/wavy2.png";
import movie from "../../assets/img/imageonline-co-overlayed-image-2.png";
//icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Particle from "../../components/Particle";

const Home = () => {
  let words = document.getElementsByClassName("word");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    if (words) {
      let wordArray = [];
      let currentWord = 0;

      words[currentWord].style.opacity = 1;
      for (let i = 0; i < words.length; i++) {
        splitLetters(words[i]);
      }

      function changeWord() {
        let cw = wordArray[currentWord];
        let nw =
          currentWord === words.length - 1
            ? wordArray[0]
            : wordArray[currentWord + 1];
        for (let i = 0; i < cw.length; i++) {
          animateLetterOut(cw, i);
        }

        for (let i = 0; i < nw.length; i++) {
          nw[i].className = "letter behind";
          nw[0].parentElement.style.opacity = 1;
          animateLetterIn(nw, i);
        }

        currentWord =
          currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
      }

      function animateLetterOut(cw, i) {
        setTimeout(function () {
          cw[i].className = "letter out";
        }, i * 80);
      }

      function animateLetterIn(nw, i) {
        setTimeout(function () {
          nw[i].className = "letter in";
        }, 340 + i * 80);
      }

      function splitLetters(word) {
        let content = word.innerHTML;
        word.innerHTML = "";
        let letters = [];
        for (let i = 0; i < content.length; i++) {
          let letter = document.createElement("span");
          letter.className = "letter";
          letter.innerHTML = content.charAt(i);
          word.appendChild(letter);
          letters.push(letter);
        }

        wordArray.push(letters);
      }
      changeWord();
      setInterval(changeWord, 4000);
    }
  }, [words]);

  useEffect(() => {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() < 100) {
          //-navbar-----scrolltop---fixed---jquery--/
          $(".planewrap").removeClass("navbar-scroll");
        } else {
          $(".planewrap").addClass("navbar-scroll");
        }
      });
    });
    $(document).ready(function () {
      $(".open-menu").on("click", function () {
        $(".overlay").addClass("open");
      });

      $(".close-menu").on("click", function () {
        $(".overlay").removeClass("open");
      });
    });
  }, []);

  return (
    <>
      <main>
        <div className="cd-index cd-main-content">
          {/* <!----LEFT-BAR-------> */}

          <div className="left-bar-section">
            <div className="left-content-inner d-flex justify-content-between flex-column h-100">
              <div className="logo-section">
                <a href="/">
                  <img
                    src={logo}
                    style={{ margin: "14px 0px 0px 0px" }}
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
              </div>

              <div className="link-section text-center d-none d-md-block d-sm-none">
                <a href="#about">À propos</a>
              </div>

              <div className="copyright-section text-center">
                <p>© Samira HOUACINE</p>
              </div>
            </div>
          </div>

          {/* <!----LEFT-BAR-------> */}

          {/* <!----RIGHT-BAR-------> */}
          <div className="right-bar-section">
            <div className="right-content-inner d-flex justify-content-between flex-column h-100">
              <div className="ham-section d-flex justify-content-center">
                <span className="open-menu">
                  <img src={menu} className="img-fluid" alt="menu" />
                </span>
              </div>

              <div className="link-section text-center d-none d-md-block d-sm-none">
                <a href="/contact">Contactez-moi</a>
              </div>
              <div className="social-links">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/samira-houacine/"
                >
                  <FaLinkedinIn />
                </a>
                <a target="blank" href="https://fr-fr.facebook.com/">
                  <FaFacebookF />
                </a>

                <a target="blank" href="https://twitter.com/?lang=fr">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* <!----RIGHT-BAR-------> */}

          {/* <!----nav-------> */}
          <section className="nav-section overlay">
            <div className="close-menu">
              <svg
                width="23.312"
                height="23.32"
                fill="#fff"
                viewBox="0 0 1000 1000"
              >
                <path d="M945.7 989.4L10 53.8 54.3 9.4 990 945.1l-44.3 44.3z" />
                <path d="M10 946.2L945.7 10.6 990 54.9 54.3 990.6 10 946.2z" />
              </svg>
            </div>
            <div className="container">
              <div className="row m-200">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="navcolumn" id="nav-column-first">
                        <h2>Page d'accueil</h2>
                        <a className="cd-btn" href="/">
                          Accueil
                        </a>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="navcolumn" id="nav-column-second">
                        <h2>Mes projets</h2>
                        <a
                          target="blank"
                          className="cd-btn"
                          href="https://thirsty-brattain-bcadf7.netlify.app/"
                        >
                          Restaurant
                        </a>
                        <a
                          target="blank"
                          className="cd-btn"
                          href="https://sans-gluten.netlify.app/"
                        >
                          Gluten Free
                        </a>
                        <a
                          target="blank"
                          className="cd-btn"
                          href="https://happy-jackson-5629e7.netlify.app/"
                        >
                          What watch
                        </a>
                        <a
                          target="blank"
                          className="cd-btn"
                          href="https://samira-houacine-portfolio.netlify.app"
                        >
                          Portfolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Particle />
          </section>

          {/* <!----nav-------> */}

          <div className="wrapper">
            <div className="banner">
              <div className="planewrap">
                <img
                  id="plane"
                  className="planey"
                  src={plane}
                  width="100%"
                  alt="plane"
                />
              </div>
              <Particle style={{ zindex: 1000 }} />
              <div className="bannersplat">
                <div className="scotty">
                  {/* <img src={scotland} width="" height="" alt="scotland" /> */}
                </div>
                <div className="fluid"></div>
                <div className="fluiddark"></div>
                <div className="text">
                  <h1>
                    <span className="word d-flex justify-content-center">
                      {/* Venez */} Embarquez
                    </span>
                    <span className="word d-flex justify-content-center">
                      {/* decouvrir */} avec
                    </span>
                    <span className="word d-flex justify-content-center">
                      {/* mon */} moi
                    </span>
                    {/* <span className="word d-flex justify-content-center">
                      univers!
                    </span> */}
                  </h1>
                </div>
              </div>
              <Particle />
              <div className="scroll-indicator">
                <img src={scrool} className="img-fluid" alt="scrool" />
              </div>
            </div>

            <section className="about-section">
              <div className="container-fluid px-sm-0 p-0">
                <div className="row d-flex  justify-content-center">
                  <div className="col-md-7">
                    <div className="abouttext" id="about" data-aos="fade-up">
                      <h2>Salut, Je m'appelle Samira</h2>
                      <p>
                        En 2020, j'ai décidé d'entamer un processus de
                        reconversion professionnelle dans la programmation
                        informatique, véritable passion depuis plusieurs années.
                        <br />
                        J'ai plus de trois ans d'expérience dans le secteur de
                        la biologie et de l'enseignement.
                        <br />
                        Mes expériences précédentes, mon esprit d’équipe, le
                        goût du challenge, l’envie de bien faire et ma facilité
                        d'adaptation sont des atouts pour mener à bien les
                        projets futurs en développement web
                        <br />
                        #FULLSTACK
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="wavy-g"></div>

            <section className="about-wrapper">
              <div className="container">
                <div className="row d-flex  justify-content-center">
                  <div className="col-md-10">
                    <div className="row" id="bootstrap-over">
                      <div className="col-md-6">
                        <div
                          className="strategy text-right"
                          data-aos="fade-left"
                        >
                          <div className="about-icon">
                            <div className="circle-shape "></div>
                            <img
                              src={strategy}
                              className="img-fluid img-fluid-small img-fluid-small-left"
                              width=""
                              height=""
                              alt="strategy"
                            />
                          </div>

                          <div className=""></div>
                          <h3 className="heading heading-left">
                            Capacité
                            <br />
                            d'pprendrentissage
                          </h3>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="design text-left" data-aos="fade-right">
                          <div className="about-icon">
                            <div className="circle-shape"></div>
                            <img
                              src={design}
                              className="img-fluid img-fluid-small"
                              width=""
                              height=""
                              alt="design"
                            />
                          </div>

                          <h3 className="heading">Sens de l'écoute</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="row d-flex  justify-content-center">
              <div className="col-md-7">
                <div
                  className="abouttext abouttext-marging-small "
                  id="about"
                  data-aos="fade-up"
                >
                  <h2 className="abouttext-small">Mes projets</h2>
                </div>
              </div>
            </div>
            <section className="work-bg">
              <div className="container">
                <div className="work work1">
                  <div
                    className="row  d-flex align-items-center"
                    id="bootstrap-over"
                  >
                    <div className="col-md-5 col-sm-6 col-12">
                      <div className="workpic" data-aos="fade-right">
                        <div className="big-circle-shape"></div>
                        <img
                          src={londonborn}
                          className="img-fluid"
                          width=""
                          height=""
                          alt="restaurant"
                        />
                      </div>
                    </div>

                    <div className="col-md-5 offset-md-1 col-sm-12 offset-sm-0">
                      <div className="workintro">
                        <div
                          className="worktext text-right"
                          data-aos="fade-left"
                        >
                          <h3>Restaurant</h3>
                          <p>
                            <br />
                            Application qui vous recommande des recettes
                            sur-mesure selon vos goûts, elle est realisé avec
                            l'API themealdb, Javascript, CSS et HTML
                            <br />
                            Le but de ce projet est de faire un CRUD
                          </p>
                          <a
                            target="blank"
                            className="cd-btn"
                            href="https://thirsty-brattain-bcadf7.netlify.app//"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="work work2">
                  <div
                    className="row d-flex align-items-center"
                    id="bootstrap-over"
                  >
                    <div
                      className="col-md-5 offset-md-1 col-sm-12 offset-sm-0"
                      id="first"
                    >
                      <div className="workintro" data-aos="fade-right">
                        <div className="worktext">
                          <h3 className="worktext-top"> Gluten Free</h3>
                          <p>
                            Mini réseau social pour les personnes intolérantes
                            au gluten
                            <br /> Le projet est réalisé avec React, Sass,
                            NodeJS, Express, ORM et MySQL
                            <br /> Le but de ce projet est de faire une
                            application complete avec un back-end (API REST ) et
                            un front-end (React)
                          </p>
                          <a
                            target="blank"
                            className="cd-btn"
                            href="https://sans-gluten.netlify.app/"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-5 col-sm-6 col-12 offset-md-1"
                      id="second"
                    >
                      <div className="workpic" data-aos="fade-left">
                        <div className="big-circle-shape big-media"></div>
                        <img
                          src={subaru}
                          className="img-fluid big-img"
                          width=""
                          height=""
                          alt="sans gluten"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="work work3">
                  <div
                    className="row d-flex align-items-center"
                    id="bootstrap-over"
                  >
                    <div className="col-md-5 col-sm-6 col-12" id="third">
                      <div className="workpic" data-aos="fade-right">
                        <div className="big-circle-shape"></div>
                        <img
                          src={valeyo}
                          className="img-fluid"
                          width=""
                          height=""
                          alt="valyeo"
                        />
                      </div>
                    </div>

                    <div
                      className="col-md-5 offset-md-1 col-sm-12 offset-sm-0"
                      id="forth"
                    >
                      <div className="workintro" data-aos="fade-left">
                        <div className="worktext text-right">
                          <h3 className="worktext-top">What watch</h3>
                          <p>
                            Application mobile [PWA - Progressive Web App] avec
                            HTML, CSS & Javascript <br />
                            <br />
                            Le but est de créer une application qu'on peut
                            télécharger sur android sans passer par un language
                            particulier
                          </p>
                          <a
                            target="blank"
                            className="cd-btn"
                            href="https://happy-jackson-5629e7.netlify.app/"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work work4">
                  <div
                    className="row  d-flex align-items-center"
                    id="bootstrap-over"
                  >
                    <div className="col-md-5 col-sm-6 col-12">
                      <div className="workpic" data-aos="fade-right">
                        <div className="big-circle-shape"></div>
                        <img
                          src={movie}
                          className="img-fluid"
                          width=""
                          height=""
                          alt="london"
                        />
                      </div>
                    </div>

                    <div className="col-md-5 offset-md-1 col-sm-12 offset-sm-0">
                      <div className="workintro">
                        <div
                          className="worktext text-right"
                          data-aos="fade-left"
                        >
                          <h3>Portfolio</h3>
                          <p>
                            Portfolio simple en utilisant React et Sass
                            <br />
                            Le but de ce projet est d'apprendre React et
                            d'approfondire mes connaissances en Sass
                          </p>
                          <a
                            target="blank"
                            className="cd-btn"
                            href="https://samira-houacine-portfolio.netlify.app"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="workclose">
              <img
                src={wavy}
                className="img-fluid"
                width=""
                height=""
                alt="wave"
              />
            </div>

            <section className="contact-wrapper">
              <div className="contact-text" data-aos="fade-right">
                <h1>
                  Arrivés à la <br /> destination,{" "}
                  <a className="cd-btn cd-btn-white" href="/contact">
                    Contactez-moi
                  </a>
                </h1>
              </div>
              <Particle />
              <div className="bannersplat">
                <div className="scotty">
                  {/* <img src={scotland} width="" height="" alt="scotland" /> */}
                </div>
                <div className="fluid"></div>
                <div className="fluiddark"></div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
