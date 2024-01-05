import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './EpochPage.css';
import API from '../../services/Infos/Infos'
import 'react-widgets/styles.css';

function EpochPage() {
    const [loading, setLoading] = useState(false);
    const [dataOptions, setDataOptions] = useState([]);
    const [modalImages, setModalImages] = useState([]);
    const [title, setTitle] = useState('');
    const [warning, setwarning] = useState('');
    const [century, setCentury] = useState('');
    const [choiceModal, setChoiceModal] = useState(0);




    useEffect(() => {




        setOptions()




    }, []);




    const setOptions = async () => {
        console.log(dataOptions.length)
        let epochOptions = await API.getEpochChoices().then(res => {
            setDataOptions(res)
        }).catch(console.error)
    }

    const openModal = async (id, cent) => {
        await setChoiceModal('')
        await setModalImages([])
        setLoading(true)
        setCentury(cent)


        if (id == 1) {
            let warningSculp = '*if you wanna see more sculptures click on the button above on the left'
            let choice = 'SCULPTURES PAGE'
            setwarning(warningSculp)
            setChoiceModal(choice)

            let epochOptions = await API.getImagesCentury({ century: cent, type: id }).then(res => {

                let concatImages = []
                let contadorImages = 0
                for (let el of res) {
                    console.log(el)
                    concatImages = [
                        ...concatImages[contadorImages] ? concatImages[contadorImages] : concatImages, <div >
                            <p class='subTitleModal'>{el.SCULPTURE}-{el.YEAR}</p>
                            <img class='' style={{ borderRadius: "20px" }} src={`/images/sculptures/${el.FILE_NAME}`} alt='' />
                        </div>
                    ]
                    contadorImages++
                }
                setModalImages(concatImages)

            }).catch(console.error)


        }
        if (id == 2) {
            let warningPainting = '*if you wanna see more paintings click on the button above on the left'
            let choice = 'PAINTINGS PAGE'
            setwarning(warningPainting)
            setChoiceModal(choice)
            let epochOptions = await API.getImagesCentury({ century: cent, type: id }).then(res => {
                let concatImages = []
                let contadorImages = 0
                for (let el of res) {
                    console.log(el)
                    concatImages = [
                        ...concatImages[contadorImages] ? concatImages[contadorImages] : concatImages, <div >
                            <p class='subTitleModal'>{el.PAINT_NAME}-{el.YEAR}</p>
                            <img class='' style={{ borderRadius: "20px" }} src={`/images/paintings/${el.FILE_NAME}`} alt='' />
                        </div>
                    ]
                    contadorImages++
                }
                setModalImages(concatImages)
                console.log(res)
            }).catch(console.error)


        }
        if (id == 3) {
            let warningBuilding = '*if you wanna see more buildings with a full list of them click on the button above on the left'
            let choice = 'BUILDINGS PAGE'
            setwarning(warningBuilding)
            setChoiceModal(choice)
            let epochOptions = await API.getImagesCentury({ century: cent, type: id }).then(res => {
                let concatImages = []
                let contadorImages = 0
                let title = ''
                for (let el of res) {

                    console.log(el)
                    if (title !== el.BUILD) {
                        concatImages = [
                            ...concatImages[contadorImages] ? concatImages[contadorImages] : concatImages, <div >
                                <p class='subTitleModal'>{el.BUILD}-{el.YEAR}</p>
                                <img class='' style={{ borderRadius: "20px" }} src={`/images/buildings/${el.PATH_NAME}`} alt='' />
                            </div>
                        ]

                        contadorImages++
                    } else {
                        concatImages = [
                            ...concatImages[contadorImages] ? concatImages[contadorImages] : concatImages, <div >
                                <img class='' style={{ borderRadius: "20px" }} src={`/images/buildings/${el.PATH_NAME}`} alt='' />
                            </div>
                        ]

                        contadorImages++
                    }
                    title = el.BUILD
                }
                setModalImages(concatImages)
                console.log(res)
            }).catch(console.error)

        }





        setLoading(false)

    }
    const openBC = async (cent) => {
        await setChoiceModal('')
        await setModalImages([])
        setLoading(true)
        setCentury(cent)


        let warningBuilding = '*if you wanna see more buildings with a full list of them click on the button above on the left'
        let choice = 'BUILDINGS PAGE'
        setwarning(warningBuilding)
        setChoiceModal(choice)
        let epochOptions = await API.getBCbuilds().then(res => {
            let concatImages = []
            let contadorImages = 0
            let title = ''
            for (let el of res) {

                console.log(el)
                if (title !== el.BUILD) {
                    concatImages = [
                        ...concatImages[contadorImages] ? concatImages[contadorImages] : concatImages, <div >
                            <p class='subTitleModal'>{el.BUILD}-{el.YEAR}</p>
                            <img class='' style={{ borderRadius: "20px" }} src={`/images/buildings/${el.PATH_NAME}`} alt='' />
                        </div>
                    ]

                    contadorImages++
                } else {
                    concatImages = [
                        ...concatImages[contadorImages] ? concatImages[contadorImages] : concatImages, <div >
                            <img class='' style={{ borderRadius: "20px" }} src={`/images/buildings/${el.PATH_NAME}`} alt='' />
                        </div>
                    ]

                    contadorImages++
                }
                title = el.BUILD
            }
            setModalImages(concatImages)
            console.log(res)
        }).catch(console.error)




        setLoading(false)

    }





    return (
        <>



            <div class='page-epoch '>
                <div class='epoch-layer '>
                    <div class='epoch-img imgbc'>

                    </div>
                    <div class='epoch-year'>
                        <p>BC.</p>
                    </div>
                    <div class='epoch-options optionsBC'>

                        <div class='display-none'>
                            <p>SCULPTURES</p>


                        </div>
                        <div class='display-none'>
                            <p>PAINTINGS</p>

                        </div>
                        <div 
                        onClick={e => openBC('XIII')}
                        data-bs-toggle="modal" data-bs-target="#modalEpoch"
                        class='option-content'>
                            <p>BUILDINGS</p>

                        </div>
                    </div>
                </div>




                <div class='epoch-layer margin'>

                    <div class='epoch-options optionsXIII'>
                        <div onClick={e => openModal(1, 'XIII')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].sculps[0].XIII_SCULP == true ? 'option-content' : 'display-none'}>
                            <p>SCULPTURES</p>

                        </div>
                        <div onClick={e => openModal(2, 'XIII')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].paints[0].XIII_PAINT == true ? 'option-content' : 'display-none'}>
                            <p>PAINTINGS</p>

                        </div>
                        <div onClick={e => openModal(3, 'XIII')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class='option-content'>
                            <p>BUILDINGS</p>

                        </div>
                    </div>

                    <div class='epoch-year '>
                        <p>XIII</p>
                    </div>
                    <div class='epoch-img imgXIII'></div>
                </div>

                <div class='epoch-layer margin'>

                    <div class='epoch-img imgXIV'></div>
                    <div class='epoch-year '>
                        <p>XIV</p>
                    </div>
                    <div class='epoch-options optionsXIV'>
                        <div onClick={e => openModal(1, 'XIV')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].sculps[0].XIV_SCULP == true ? 'option-content' : 'display-none'}>
                            <p>SCULPTURES</p>


                        </div>
                        <div onClick={e => openModal(2, 'XIV')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].paints[0].XIV_PAINT == true ? 'option-content' : 'display-none'}>
                            <p>PAINTINGS</p>

                        </div>
                        <div onClick={e => openModal(3, 'XIV')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class='option-content'>
                            <p>BUILDINGS</p>

                        </div>
                    </div>


                </div>


                <div class='epoch-layer margin'>

                    <div class='epoch-options optionsXV'>
                        <div onClick={e => openModal(1, 'XV')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].sculps[0].XV_SCULP == true ? 'option-content' : 'display-none'}>
                            <p>SCULPTURES</p>

                        </div>
                        <div onClick={e => openModal(2, 'XV')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].paints[0].XV_PAINT == true ? 'option-content' : 'display-none'}>
                            <p>PAINTINGS</p>

                        </div>
                        <div onClick={e => openModal(3, 'XV')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class='option-content'>
                            <p>BUILDINGS</p>

                        </div>
                    </div>

                    <div class='epoch-year '>
                        <p>XV</p>
                    </div>
                    <div class='epoch-img imgXV'></div>
                </div>

                <div class='epoch-layer margin'>

                    <div class='epoch-img imgXVI'></div>
                    <div class='epoch-year '>
                        <p>XVI</p>
                    </div>
                    <div class='epoch-options optionsXVI'>
                        <div onClick={e => openModal(1, 'XVI')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].sculps[0].XVI_SCULP == true ? 'option-content' : 'display-none'}>
                            <p>SCULPTURES</p>

                        </div>
                        <div onClick={e => openModal(2, 'XVI')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].paints[0].XVI_PAINT == true ? 'option-content' : 'display-none'}>
                            <p>PAINTINGS</p>

                        </div>
                        <div onClick={e => openModal(3, 'XVI')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class='option-content'>
                            <p>BUILDINGS</p>

                        </div>
                    </div>


                </div>


                <div class='epoch-layer margin'>

                    <div class='epoch-options optionsXVII'>
                        <div onClick={e => openModal(1, 'XVII')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].sculps[0].XVII_SCULP == true ? 'option-content' : 'display-none'}>
                            <p>SCULPTURES</p>

                        </div>
                        <div onClick={e => openModal(2, 'XVII')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].paints[0].XVII_PAINT == true ? 'option-content' : 'display-none'}>
                            <p>PAINTINGS</p>

                        </div>
                        <div onClick={e => openModal(3, 'XVII')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class='option-content'>
                            <p>BUILDINGS</p>

                        </div>
                    </div>

                    <div class='epoch-year '>
                        <p>XVII</p>
                    </div>
                    <div class='epoch-img imgXVII'></div>
                </div>


                <div class='epoch-layer margin'>

                    <div class='epoch-img imgXVIII'></div>
                    <div class='epoch-year '>
                        <p>XVIII</p>
                    </div>
                    <div class='epoch-options optionsXVIII'>
                        <div onClick={e => openModal(1, 'XVIII')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].sculps[0].XVIII_SCULP == true ? 'option-content' : 'display-none'}>
                            <p>SCULPTURES</p>

                        </div>
                        <div onClick={e => openModal(2, 'XVIII')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].paints[0].XVIII_PAINT == true ? 'option-content' : 'display-none'}>
                            <p>PAINTINGS</p>

                        </div>
                        <div onClick={e => openModal(3, 'XVIII')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class='option-content'>
                            <p>BUILDINGS</p>

                        </div>
                    </div>


                </div>


                <div class='epoch-layer margin'>

                    <div class='epoch-options optionsXIX'>
                        <div onClick={e => openModal(1, 'XIX')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].sculps[0].XIX_SCULP == true ? 'option-content' : 'display-none'}>
                            <p>SCULPTURES</p>

                        </div>
                        <div onClick={e => openModal(2, 'XIX')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class={dataOptions.length > 0 && dataOptions[0].paints[0].XIX_PAINT == true ? 'option-content' : 'display-none'}>
                            <p>PAINTINGS</p>

                        </div>
                        <div onClick={e => openModal(3, 'XIX')}
                            data-bs-toggle="modal" data-bs-target="#modalEpoch"
                            class='option-content'>
                            <p>BUILDINGS</p>

                        </div>
                    </div>

                    <div class='epoch-year '>
                        <p>XIX</p>
                    </div>
                    <div class='epoch-img imgXIX    '></div>
                </div>






            </div>

            <div class="modal fade " id="modalEpoch" tabindex="-2" aria-labelledby="modalEpochLabel" aria-hidden="true">

                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable .modal-xxl ">
                    {loading == true ?
                        <div class='loader-background' >
                            <p>Loading Modal</p>
                            <div class="loader">
                            </div>

                        </div>
                        : <div class="modal-content">
                            <div class="modal-header">
                                <div class="d-flex justify-content-between ps-3 col-9">
                                <Link to={choiceModal == 'SCULPTURES PAGE'? '/sculpPage' :choiceModal == 'BUILDINGS PAGE'? '/buildingsPage': choiceModal == 'PAINTINGS PAGE'?"/paintPage" : '/'} >
                                    <button class="btn button-return" data-bs-dismiss="modal" aria-label="Close"type="submit"><i class="bi bi-arrow-left"></i>{choiceModal}</button>
                                    </Link>
                                    <p class="modal-title-epoch " >{century ? century : <></>}</p>
                                    <div></div>
                                </div>

                                
                                <button type="button" id='closeModalEpoch' class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                               
                            </div>

                            <div class='modal-body p-1 '>

                                <p class='warning'>{warning}</p>

                                <div class='img-modal'>

                                    {modalImages ? modalImages : <></>}

                                </div>

                            </div>





                        </div>

                    }
                </div>
            </div>
            <div class="aviso">

                <h4>Atualmente a aplicação é focara para desktop, portanto ainda não ha portabilidade menor que 600px de largura por 400px de altura, um tamanho menos implicaria na perca da qualidade das imagens e experiencias.</h4>
            </div>

        </>
    )
}

export default EpochPage;