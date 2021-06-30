import React, { useState, useEffect } from "react"
import Producto from "../Components/Producto"
import firebase from "firebase"
import Spinner from 'react-bootstrap/Spinner'
import { Container } from 'react-bootstrap'


const styles = {

    container: {
        backgroundColor: "",
        color: "blue",
        marginTop: "30px",
        width: "900px",
        paddingTop: "20px",
        paddingBottom: "20px"


    },
    button: {
        backgroundColor: "crimson",
        marginTop: "20px",
        marginLeft: "10px"

    },
    h1: {
        textAlign: "center",
        marginTop: "10px"

    },
    badge: {
        backgroundColor: "red"
    },
    spinner: {
        marginLeft: "400px"
    }
}

function AdminPage() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    /*componentDidMount*/

    useEffect(
        () => {
            /*Indico Coleccion donde quiero trabajar*/
            firebase.db.collection("productos")
                /*Consulto Elementos*/
                .get()
                /*querySnapdhot me devuelve una coleccion de obj tipo firebase*/
                .then(querySnapshot => {
                    console.log(querySnapshot.docs)
                    /*Con setproducto almacenamos en productos lo que tiene querySnapshot*/
                    setProductos(querySnapshot.docs);
                    setLoading(false);
                    console.log("productos", querySnapshot.docs)

                })
        },

    )

    if (loading) {
        return (
            <>
                <Container style={styles.container}>
                    <Spinner animation="border" variant="primary" style={styles.spinner} />
                </Container>
            </>
        )
    } else {
        return (
            /*Con producto.data el componente recibe las propiedades */
            <div>


                {productos.map(producto => <Producto id={producto.id} data={producto.data()} />)}

            </div>
        )
    }


}
export default AdminPage;