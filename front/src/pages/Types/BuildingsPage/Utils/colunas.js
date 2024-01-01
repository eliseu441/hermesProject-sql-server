
const headerStyle = { filter: 'blur(0.3px)', textAlign: 'center', height: '40px',  width: 'auto',fontFamily: 'Lucida Sans', cursor: 'pointer', verticalAlign: 'middle', borderBottomWidth: '2px', color: 'white', }
const colunas = {



    ID: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'ID',
        text: 'ID',
        sort: true,
    },
    BUILD: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'BUILD',
        text: 'BUILD',
        sort: true,
    },
    YEAR: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'YEAR',
        text: 'YEAR',
        sort: true,
    }
    ,
     COUNTRY: {
        headerStyle: { borderTopRightRadius: '1vh', filter: 'blur(0.3px)', textAlign: 'center', height: '40px',  width: 'auto',fontFamily: 'Lucida Sans', cursor: 'pointer', verticalAlign: 'middle', borderBottomWidth: '2px', color: 'white', },
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'COUNTRY',
        text: 'COUNTRY',
        sort: true,
    }  
    
}
export default colunas;