import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import img_1 from './img/img_1_teste.png';
import img_2 from './img/img_2_teste.png';
import img_3 from './img/img_3_teste.png';
import moldura from './img/moldura_final.png';
import moldura_texto from './img/moldura_texto.png';
import pergaminho from './img/pergaminho.png';
function Home() {

    const [expandIntro, setExpandIntro] = useState(true);





    return (
        <>
            <div className="page-home">
                <div class="header">
                    <div class='hide-intro' onClick={e => setExpandIntro(!expandIntro)} style={{ display: expandIntro == true ? 'none' : 'flex' }}>
                        <p>This project was designed as an experience for people who wanted to see and understand a little more about the great painters, buildings and sculptors who have passed through our history, the navigation is a tour guided by the options you choose, so i recommend that you select other paths from this home page again after find the end.</p>
                    </div>

                    <img src={pergaminho} onClick={e => setExpandIntro(!expandIntro)} class={expandIntro ? 'info-intro' : 'info-intro expandido'} />
                </div>

                <div className="row frame-intro ">
                    <div class='back-moldure-clip'></div>
                    <div class='back-moldure'></div>
                    <div class="d-flex justify-content-center  moldura-home " >

                        <img src={moldura} alt='' class="moldura-h" />


                    </div>
                    <div class="d-flex justify-content-center  mt-5 img1" >
                        <img src={img_1} alt='' class="img-d-1" width="100" />

                    </div>
                    
                    <div class="d-flex justify-content-start  img2" >
                        
                    <Link to="/epoch" >
                        <img src={img_2} alt='' class="img-d-2" width="100" />
                        </Link>
                    </div>
                    
                    <div class="d-flex justify-content-start row  img3" >
                    <Link to="/types" >
                        <img src={img_3} alt='' class="img-d-3" width="100" />
                    </Link> 
                    </div>

                    <h3 class='frame-text-bottom text-frame-1'> <p><img src={moldura_texto} alt='' class="moldura_texto" width="" />ART TYPES</p> </h3>
                    <h3 class='frame-text-bottom text-frame-2'> <p><img src={moldura_texto} alt='' class="moldura_texto" width="" />EPOCH</p> </h3>
                    <h3 class='frame-text-bottom text-frame-3'> <p><img src={moldura_texto} alt='' class="moldura_texto" width="" />ARTISTS</p></h3>


                </div>

            </div>
            <div class="aviso">

                <h4>Para melhor entender a construção do projeto o conteudo foi feito primeiramente exclusivamente para desktop/tablets por levar em conta as complexidades e detalhes que cada obra de arte pode conter.</h4>
            </div>

        </>
    )
}

export default Home;