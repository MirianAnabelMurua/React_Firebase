import React, { useState } from "react"
import firebase from "../Config/firebase"
import { useHistory } from "react-router-dom"
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'

const styles = {

    container: {
        width: "550px",
        backgroundColor: "#F5F5F5",
        color: "white",
        marginTop: "30px",
        height: "450px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft:"10px",
        

    },
    button: {
        backgroundColor: "#646B6F",
        marginTop: "20px",
        marginLeft: "85px",
        width:"300px",
        color:"white"

    },
    h1: {
        textAlign: "center",
        marginTop: "10px",
        marginBottom: "10px",
        fontFamily: "kerning",
        color:"#646B6F"
    },
    label: {
        marginLeft: "5px",
        color:"#646B6F"
    },
    badge: {
        marginBottom: "10px",


    },
    card:{
        width: "500px",
        height: "380px",
        marginBottom:"20px",
        color: "crimson",
        backgroundColor:"",
        borderWidth:"2px",
        borderColor:"646B6F",
        paddingLeft:"10px",
        paddingRight:"10px",
        marginLeft:"15px",
         
    },
    control:{
        backgroundColor:"#FDEDEC"
    }
}


function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' })
    const history = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
        firebase.auth.signInWithEmailAndPassword(form.email, form.password)
            .then(data => {
                console.log("Login Ok", data)
                history.push("/admin")
            })
            .catch(error => {

                console.log("Error", error.code)
                /*setAlert({variant:"danger",text:"Los datos ingresados son incorectos, Intente nuevamente."})*/
                alert("Los datos ingresados son incorrectos")
            })
    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log(name, value)
        setForm({ ...form, [name]: value })
    }

    return (

        <Container style={styles.container}>
            <Card style={styles.card}>
                <h1 style={styles.h1}>

                    Formulario de Ingreso <Badge variant="secondary" style={styles.badge}></Badge>
                </h1>

                <form onSubmit={handleSubmit}>

                    <Form.Label style={styles.label}>Email</Form.Label>
                    <Form.Control style={styles.control}size="lg" type="email" placeholder="Ingrese su correo electronico" name="email" value={form.email} onChange={handleChange} />
                    <br />
                    <Form.Label style={styles.label}>Password</Form.Label>
                    <Form.Control style={styles.control} size="lg" type="password" placeholder="Ingrese su clave" name="password" value={form.password} onChange={handleChange} />
                    <br />

                    <Button variant="outline-primary" type="submit" value="Guardar" style={styles.button}>Ingresar</Button>

                </form>
            </Card>
        </Container>
    )

}
export default LoginPage;
