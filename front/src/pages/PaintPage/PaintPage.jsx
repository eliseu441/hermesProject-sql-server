import React, { useState, useEffect } from "react";
import API from '../../services/Infos/Infos'
import { DropdownList } from 'react-widgets';
import 'react-widgets/styles.css';

import napoleon from './img/sidebar_napoleao.png';
function PaintPage() {
    const [page, setPage] = useState(1);
    const [paints, setPaints] = useState([]);
    const [indexes, setIndexes] = useState([8, 7, 6, 5, 4, 3]);
    const [sidebar, setSidebar] = useState(false);
    const [comboAuthor, setComboAuthor] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        callApis()





    }, []);



    const callApis = async (id_author) => {


        setLoading(true)
        let page = 1
        setPage(1)
        const pageIndexes = [
            [8, 9, 7, 6, 5, 4],
            [7, 8, 9, 7, 6, 5],
            [6, 7, 8, 9, 7, 6],
            [5, 6, 7, 8, 9, 7],
            [4, 5, 6, 7, 8, 9],
            [3, 4, 5, 6, 7, 8],
        ];

        if (page >= 0 && page <= pageIndexes.length + 1) {
            const newIndexValues = pageIndexes[page - 1];
            for (let i = 0; i < indexes.length; i++) {
                setIndexes(newIndexValues)
            }
        }
        let paints = await API.getAllArts({ id: id_author }).then(e => {
            setPaints(e)

        }).catch(console.error)
        let combo = await API.getPaintersCombo().then(e => {
            setComboAuthor(e)

        }).catch(console.error)

        setLoading(false)

    }





    const changePage = async (side) => {
        if (page > 1 && page < paints.length && side == 1) {
            await setPage(page - 1)


            const arrayIndexes = [
                [4, 5, 6, 7, 8, 9],
                [5, 6, 7, 8, 9, 3],
                [6, 7, 8, 9, 4, 3],
                [7, 8, 9, 5, 4, 3],
                [8, 9, 6, 5, 4, 3],
                [8, 7, 6, 5, 4, 3],


            ];

            const pageIndexes = arrayIndexes.reverse();

            if (page >= 2 && page <= pageIndexes.length + 1) {
                const newIndexValues = pageIndexes[page - 1];

                for (let i = 0; i < pageIndexes.length; i++) {
                    setIndexes(newIndexValues);
                }
            }




        } if (page > -1 && page < paints.length - 1 && side == 2) {
            await setPage(page + 1);
            const pageIndexes = [
                [8, 9, 7, 6, 5, 4],
                [7, 8, 9, 7, 6, 5],
                [6, 7, 8, 9, 7, 6],
                [5, 6, 7, 8, 9, 7],
                [4, 5, 6, 7, 8, 9],
                [3, 4, 5, 6, 7, 8],
            ];

            if (page >= 0 && page <= pageIndexes.length + 1) {
                const newIndexValues = pageIndexes[page - 1];
                for (let i = 0; i < indexes.length; i++) {
                    setIndexes(newIndexValues)
                }
            }

        }
    }

    return (
        <>

            {loading == true ?
                <div class='loader-background' >
                    <div class="loader d-flex justify-content-center">
                    <p>Loading Images</p>
                    </div>

                </div>
                : <></>
            }
            <div class='paint-page '>

                <img src={napoleon} width='100' class={sidebar == false ? "logo-sidebar-authors" : "logo-sidebar-authors logo-expanded"} onClick={e => setSidebar(!sidebar)} />


                <div className={sidebar == false ? "sidebar-authors-border" : "sidebar-authors-border side-expanded-background-paint"}>
                </div>
                <div className={sidebar == false ? "sidebar-authors" : "sidebar-authors side-expanded"}>
                    <div class='choose-author'>
                        <p>author    </p>
                        {sidebar == true ?
                            <DropdownList
                                defaultValue="SANDRO BOTICELLI"
                                data={comboAuthor ? comboAuthor : ['']}
                                dataKey='ID'
                                textField='NAME'
                                onChange={e => callApis(e.ID)}
                            />
                            : <></>}
                    </div>
                </div>




                <div class="cover">
                    <div class="book">
                        <label for="page-1" class="book__page page-1 page_format" onClick={e => changePage(1)}>
                            <div class="page__content">
                                <h2 class="page__content-author mt-4">PICTURE BOOK BY:<br></br> {paints.length > 1 ? paints[0].NAME : 'SANDRO BOTICELLI'}</h2>

                                <p class="page__content-credits">
                                    Instructions:
                                    <span class='mt-4'>2- Click on book sheet to see the next image</span>
                                    <span class='mt-2'>3- you can filter artists by clicking on napoleon</span>
                                </p>
                            </div>
                        </label>





                        {paints[1] ? <label class={page > 1 ? "book__page page-2 next-page" : "book__page page-2"} style={{ zIndex: indexes[1] }} >
                            <div class={page < 2 ? "book__page-front2 page_format" : "book__page-front page_format prev-page"}>
                                <div>
                                    <img src={paints.length > 2 ? `/images/paintings/${paints[0].FILE_NAME}` : ''} width='100' class='book-img' />
                                    <p class="book-author">{paints.length > 2 ? `${paints[0].PAINT_NAME}` : ''}</p>
                                </div>
                            </div>
                            <div class="book__page-back2 page_format">
                                <div>
                                    <img src={paints.length > 2 ? `/images/paintings/${paints[1].FILE_NAME}` : ''} width='100' class='book-img col-12' />
                                    <p class="book-author">{paints.length > 2 ? `${paints[1].PAINT_NAME}` : ''}</p>
                                </div>

                            </div>
                        </label> : <></>}
                        <label class={page > 2 ? "book__page page-2 next-page" : "book__page page-2"} style={{ zIndex: indexes[2] }} >
                            <div class={page < 3 ? "book__page-front2 page_format" : "book__page-front page_format prev-page"}>
                                <div>
                                    <img src={paints.length > 2 ? `/images/paintings/${paints[2].FILE_NAME}` : ''} width='100' class='book-img' />
                                    <p class="book-author">{paints.length > 2 ? `${paints[2].PAINT_NAME}` : ''}</p>
                                </div>
                            </div>
                            <div class="book__page-back2 page_format">
                                <div>
                                    <img src={paints.length > 2 ? `/images/paintings/${paints[3].FILE_NAME}` : ''} width='100' class='book-img col-12' />
                                    <p class="book-author">{paints.length > 2 ? `${paints[3].PAINT_NAME}` : ''}</p>
                                </div>

                            </div>
                        </label>: <></>
                        {paints[5] ? <label class={page > 3 ? "book__page page-2 next-page" : "book__page page-2"} style={{ zIndex: indexes[3] }} >
                            <div class={page < 4 ? "book__page-front2 page_format" : "book__page-front page_format prev-page"}>
                                <div>
                                    <img src={paints.length > 2 ? `/images/paintings/${paints[4].FILE_NAME}` : ''} width='100' class='book-img' />
                                    <p class="book-author">{paints.length > 2 ? `${paints[4].PAINT_NAME}` : ''}</p>
                                </div>
                            </div>
                            <div class="book__page-back2 page_format">
                                <div>
                                    <img src={paints.length > 2 ? `/images/paintings/${paints[5].FILE_NAME}` : ''} width='100' class='book-img col-12' />
                                    <p class="book-author">{paints.length > 2 ? `${paints[5].PAINT_NAME}` : ''}</p>
                                </div>

                            </div>
                        </label> : <></>}








                        <label for="page-5" onClick={e => changePage(2)} class="book__page page-3 page_format" style={{ zIndex: -1 }}>
                            <p class="page__content-credits">

                                <span class=' m-3'>At the moment these are all the paintings we have relating to this artist.</span>
                            </p>
                        </label>








                    </div>
                </div>
            </div>

            <div class="aviso">

                <h4>Atualmente a aplicação é focara para desktop, portanto ainda não ha portabilidade menor que 600px de largura por 400px de altura, um tamanho menos implicaria na perca da qualidade das imagens e experiencias.</h4>
            </div>

        </>
    )
}

export default PaintPage;