import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Main.css';
import moldura from './img/moldura_final-removebg-preview.png';
import pergaminho from './img/pergaminho.png';
import Preloader from "../../layout/preLoader/PreLoader";
import Slider from "react-slick";
function Main() {

    const [expandIntro, setExpandIntro] = useState(true);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const nextImage = (side) => {
        console.log(side)
        var passSlide = side == 1 ? document.querySelector(".slick-next") : document.querySelector(".slick-prev")
        passSlide.click()
    }
    const redirect = (side) => {
           var goPage = document.querySelector(".slick-current .imgSlider")
          goPage.click()

    }
    return (
        <>
            {isLoading ? <Preloader /> : (
                <div>

                    <div className="page-home" data-aos="zoom-in" >
                        <div class="button-right" onClick={e => nextImage(1)}></div>
                        <div class="button-left" onClick={e => nextImage(2)}></div>
                        <div class="header " >
                            <div class='hide-intro' onClick={e => setExpandIntro(!expandIntro)} style={{ display: expandIntro == true ? 'none' : 'flex' }}>
                                <p>This project was designed as an experience for people who wanted to see and understand a little more about the great painters, buildings and sculptors who have passed through our history, the navigation is a tour guided by the options you choose, so i recommend that you select other paths from this home page again after find the end.</p>
                            </div>
                            <img src={pergaminho} onClick={e => setExpandIntro(!expandIntro)} class={expandIntro ? 'info-intro' : ' expandido'} />


                        </div>


                        <div className="row frame-intro ">

                            <div class=" moldura-home " >
                                <div className="redirectarea" onClick={e => redirect()}></div>
                                <div className="slider-container">
                                    <Slider {...settings}>

                                        <Link to="/paintPage" >
                                            <div class='imgSlider slide1 '>
                                                <h1 class='imgTitle d-flex justify-content-center align-items-center'>PAINTINGS</h1>
                                            </div>
                                        </Link>
                                        <Link to="/buildingsPage" >
                                            <div class='imgSlider slide2 '>
                                                <h1 class='imgTitle d-flex justify-content-center align-items-center'>BUILDINGS</h1>
                                            </div>
                                        </Link>
                                        <Link to="/epoch" >
                                            <div class='imgSlider slide3 '>
                                                <h1 class='imgTitle d-flex justify-content-center align-items-center'>CENTURYS</h1>
                                            </div>
                                        </Link>
                                        <Link to="/SculpPage" >
                                            <div class='imgSlider slide4 '>
                                                <h1 class='imgTitle d-flex justify-content-center align-items-center'>SCULPTURES</h1>
                                            </div>
                                        </Link>
                                        <Link to="/artists" >
                                            <div class='imgSlider slide5 '>
                                                <h1 class='imgTitle d-flex justify-content-center align-items-center'>ARTISTS</h1>
                                            </div>
                                        </Link>
                                    </Slider>
                                </div>
                                <img src={moldura} alt='' class="moldura-h" />


                            </div>



                        </div>

                    </div>
                    <div class="aviso">

                        <h4>Para melhor entender a construção do projeto o conteudo foi feito primeiramente exclusivamente para desktop/tablets por levar em conta as complexidades e detalhes que cada obra de arte pode conter.</h4>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Main;