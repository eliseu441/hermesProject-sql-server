import React, { useState, useEffect } from "react";
import API from '../../services/Infos/Infos'
import { DropdownList } from 'react-widgets';
import 'react-widgets/styles.css';
import cesar from '/layout/sculp/cesar_boust_nobackground.png';
import Slider from "react-slick";

function SculpPage() {
    const [author, setAuthor] = useState("MICHELANGELO");
    const [loading, setLoading] = useState(false);
    const [comboSculp, setComboSculp] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [slides, setSlides] = useState(false);



    useEffect(() => {
        callApis(10, 'MICHELANGELO')
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
    const callApis = async (id_author, name) => {
        setLoading(true)
        setAuthor(name)
        let paints = await API.getSculpCarousel({ id: id_author }).then(res => {
            console.log(res)
            let slidesFinal = []
            let contadorSlides = 0
            for (let el of res) {
                console.log(el)
                slidesFinal = [
                    ...slidesFinal[contadorSlides] ? slidesFinal[contadorSlides] : slidesFinal, <img src={`/images/sculptures/${el.FILE_NAME}`} alt={`${el.ID_INDEX}`} />
                ]
                console.log(slides)
                contadorSlides++
            }
            setSlides(slidesFinal)
        }).catch(console.error)
        console.log(slides)


        let combo = await API.getSculptorsCombo().then(e => {
            setComboSculp(e)

        }).catch(console.error)
        setLoading(false)
    }






    return (
        <>
            {loading == true ?
                <div class='loader-background' >
                    <div class="loader d-flex justify-content-center">
                    <p>Loading sculptures</p>
                    </div>

                </div>
                : <div >
                    <div class='wallpaper-sculp'></div>


                    <div class='slide-cesar'>


                        <div className={sidebar == false ? "header-cesar " : "header-cesar side-expanded-background"} >
                            <p data-aos="fade-left" data-aos-duration="2000" >Sculptures are one of the most realistic ways we have for visualizing someone, just like Cesar bust there have been many others throughout history, below you will see a list of them. Clicking on Cesar bust you you will have access to search filters.</p>
                            <img src={cesar} class="logo-header-cesar"  onClick={e => setSidebar(!sidebar)} data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1500"/>
                            <div class='combo-sidebar '>
                                <p >Author:</p>
                                {sidebar == true && loading == false && comboSculp.length > 1 ?
                                    <DropdownList
                                        defaultValue=""
                                        data={comboSculp ? comboSculp : ['']}
                                        dataKey='ID'
                                        textField='NAME'
                                        value={author}
                                        onChange={e => callApis(e.ID, e.NAME)}
                                    />
                                    : <></>}
                            </div>
                        </div>

                    </div>
                    <div class='page-sculp'>
                        <div class='carousel' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1500">


                            {slides && loading == false ?

                                <div  >
                                <div class="button-right" onClick={e => nextImage(1)}></div>
                                <div class="button-left" onClick={e => nextImage(2)}></div>
                                    <p class='culpTitle'>{author}</p>
                                    <div className="slider-container">
                                    <Slider {...settings}>

                                    {slides}
                                    </Slider>
                                </div>
                                </div>
                                : <></>}
                        </div>
                    </div>



                    <div class="aviso">

                        <h4>Atualmente a aplicação é focara para desktop, portanto ainda não ha portabilidade menor que 600px de largura por 400px de altura, um tamanho menos implicaria na perca da qualidade das imagens e experiencias.</h4>
                    </div>
                </div>}



        </>
    )
}

export default SculpPage;