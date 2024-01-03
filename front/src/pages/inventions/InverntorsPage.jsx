import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './InverntorsPage.css';
import API from '../../services/Infos/Infos'

function SculpPage() {
    const [loading, setLoading] = useState(false);
    //  const [sidebar, setSidebar] = useState(false);
    const [layers, setLayers] = useState(false);



    useEffect(() => {
          callApis()




    }, []);



    const callApis = async (id_author, name) => {
        setLoading(true)
        await setLayers([])
        let paints = await API.getInventors().then(res => {
            console.log(res)
            let layers = []
            let contadorLayer = 0
            for (let el of res) {
                console.log(el.FILE_NAME)
                layers = [
                    ...layers[contadorLayer] ? layers[contadorLayer] : layers, 
                    <div class='inventor-layer'  style={{
                        backgroundImage: `url(/images/${el.FILE_NAME}/wallpaper_final.png)`,
                        backgroundSize: '101%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: '100%',
                        animation: `${el.ID}s ease-in slide-layers`
                        }}>
                    <img src={`/images/${el.FILE_NAME}/logo_final.png`} class='logo-inventor' />
                    <p class='description-iventors'>{el.DESCRIPTION}</p>

                    </div>
                    
                    
                    
                ]
                console.log(layers)
                contadorLayer++
            }
            setLayers(layers)
        }).catch(console.error)




        setLoading(false)
    }





    return (
        <>
            {loading == true ?
                <div class='loader-background' >
                    <p>Loading Page</p>
                    <div class="loader">
                    </div>

                </div>
                : <></>}


            <div class='page-inverntors row'>

                <div class='inventor-layer-intro'>

                    <p class='intro-iventors'>Humanity's inventions, like the barometer, have played a crucial role in our progress. The barometer, measuring atmospheric pressure, revolutionized weather forecasting and navigation. Such innovations showcase our ability to understand and adapt to the world around us, below you can see these and other inventions of human history</p>

                </div>
                {layers && loading == false ?
                        layers
                        : <></>}







            </div>



            <div class="aviso">

                <h4>Atualmente a aplicação é focara para desktop, portanto ainda não ha portabilidade menor que 600px de largura por 400px de altura, um tamanho menos implicaria na perca da qualidade das imagens e experiencias.</h4>
            </div>

        </>
    )
}

export default SculpPage;