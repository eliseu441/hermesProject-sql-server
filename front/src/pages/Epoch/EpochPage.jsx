import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './EpochPage.css';
import API from '../../services/Infos/Infos'
import { DropdownList } from 'react-widgets';
import 'react-widgets/styles.css';
import { Carousel } from '3d-react-carousal';

function EpochPage() {
    const [author, setAuthor] = useState("MICHELANGELO");
    const [loading, setLoading] = useState(false);
    const [comboSculp, setComboSculp] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [slides, setSlides] = useState(false);



    useEffect(() => {




        //   callApis(10, 'MICHELANGELO')




    }, []);


    /*
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
    */





    return (
        <>
            {loading == true ?
                <div class='loader-background' >
                    <p>Loading Sculptures</p>
                    <div class="loader">
                    </div>

                </div>
                : <></>}


            <div class='page-epoch '>



                <div class='epoch-layer '>
                    <div class='epoch-img imgbc'>

                    </div>
                    <div class='epoch-year year-1'>
                        <p>BC.</p>
                    </div>
                    <div class='epoch-options options1'>


                        <div class='option-content'>
                            <p>SCULPTURES</p>
                        </div>

                        <div class='option-content'>
                            <p>PAINTINGS</p>
                        </div>

                        <div class='option-content'>
                            <p>INVENTIONS</p>
                        </div>

                        <div class='option-content'>
                            <p>BUILDINGS</p>
                        </div>




                    </div>
                </div>

                <div class='epoch-layer margin'>
                    <div class='epoch-options options2'>


                        <div class='option-content'>
                            <p>SCULPTURES</p>
                        </div>

                        <div class='option-content'>
                            <p>PAINTINGS</p>
                        </div>

                        <div class='option-content'>
                            <p>INVENTIONS</p>
                        </div>

                        <div class='option-content'>
                            <p>BUILDINGS</p>
                        </div>




                    </div>
                    <div class='epoch-year year-2'>
                        <p>I</p>
                    </div>

                    <div class='epoch-img imgI'>

                    </div>
                </div>


            </div>
            <div class="aviso">

                <h4>Atualmente a aplicação é focara para desktop, portanto ainda não ha portabilidade menor que 600px de largura por 400px de altura, um tamanho menos implicaria na perca da qualidade das imagens e experiencias.</h4>
            </div>

        </>
    )
}

export default EpochPage;