import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo_alexandre from '../../sass/elements/img/types/logo_alexandre.png';
import logo_planador from '../../sass/elements/img/types/logo_planador.png';
import van_gogh from '../../sass/elements/img/types/van_gogh.jpg';
import notre_dame from '../../sass/elements/img/types/notre_dame.png';
import API from '../../services/Infos/Infos'
function Types() {

    const [stopcube, setStopcube] = useState(true);
    const [indexIcon, setIndexIcon] = useState(-1);
    const [indexText, setIndexText] = useState(-1);

    const [inventionsDesc, setInventions] = useState('');
    const [sculpturesDesc, setSculptures] = useState('');
    const [artDesc, setArt] = useState('');
    const [buildingsDesc, setBuildings] = useState('');
    useEffect(() => {

        API.getTypes().then(d => {

            for (let el of d) {
                if (el.TYPE == "SCULPTURES") {
                    setSculptures(el.TYPE_DESCRIPTION)
                }
                if (el.TYPE == "BUILDINGS") {
                    setBuildings(el.TYPE_DESCRIPTION)
                }
                if (el.TYPE == "PAINTINGS") {
                    setArt(el.TYPE_DESCRIPTION)
                }
                if (el.TYPE == "INVENTIONS") {
                    setInventions(el.TYPE_DESCRIPTION)
                }
            }


        }).catch(console.error)
        return


    }, []);




    const openCube = async (obj) => {
        if (obj == 'cube') {
            setStopcube(false)
            setTimeout(
                async function () {
                    setIndexIcon(1)
                }, 3000
            );
            setTimeout(
                async function () {
                    setIndexText(3)
                }, 6000
            );
        }
    }




    return (
        <>
            <div class='fixed-cube' >
                <div class='group-texts' style={{ zIndex: indexText }}>
                    <Link to="/buildingsPage" >
                    <div class='buildings-text'><p>{buildingsDesc}</p></div>
                    </Link>
                    <Link to="/sculpPage" >
                        <div class='sculp-text'><p>{sculpturesDesc}</p></div>
                    </Link>
                    <Link to="/inventions" >
                    <div class='invention-text'><p>{inventionsDesc}</p></div>
                    </Link>
                    <Link to="/paintPage" >
                        <div class='art-text'><p>{artDesc}</p></div>
                    </Link>
                </div>
                <div class="loading" onClick={e => openCube('cube')}>


                    <div class={stopcube ? "cube" : "cube cube-stopped"}>
                        <div class="side front"></div>
                        <div class="side back"></div>
                        <div class="side top"></div>
                        <div class="side bottom"></div>
                        <div class="side left"></div>
                        <div class="side right"></div>
                        { }
                    </div>
                    <img class='sculp' src={logo_alexandre} onClick={e => openCube('sculp')} style={{ display: stopcube ? "none" : "block", zIndex: indexIcon }} />

                    <img class='inventions' src={logo_planador} style={{ display: stopcube ? "none" : "block", zIndex: indexIcon }} />
                    <img class='art' src={van_gogh} style={{ display: stopcube ? "none" : "block", zIndex: indexIcon }} />
                    <img class='buildings' src={notre_dame} style={{ display: stopcube ? "none" : "block", zIndex: indexIcon }} />
                </div>

            </div>


            <div class="aviso">

        <h4>Atualmente a aplicação é focara para desktop, portanto ainda não ha portabilidade menor que 600px de largura por 400px de altura, um tamanho menos implicaria na perca da qualidade das imagens e experiencias.</h4>
            </div>
        </>
    )
}

export default Types;