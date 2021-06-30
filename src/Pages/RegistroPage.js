import React, { useState } from "react"
import firebase from "../Config/firebase"
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
const styles = {

    container: {
        backgroundColor: "#F5F5F5",
        color: "blue",
        marginTop: "30px",
        width: "550px",
        height: "550px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "5px",
    },
    button: {
        backgroundColor: "#646B6F",
        marginTop: "20px",
        marginLeft: "90px",
        width:"300px",
        color:"white"

    },
    h1: {
        textAlign: "center",
        marginTop: "10px",
        fontFamily: "kerning",
        color:"#646B6F"
    },
    label: {

        marginLeft: "5px",
        color:"#646B6F"
    },
    badge: {
        marginBottom: "10px"

    },
    card:{
        width: "500px",
        height: "525px",
        marginBottom:"20px",
        borderWidth:"2px",
        backgroundColor:"",
        paddingLeft:"10px",
        paddingRight:"10px",
        marginLeft:"20px",
        borderWidth:"2px",
        borderColor:"c#646B6F", 
        color:"#646B6F"
    },
    control:{
        backgroundColor:"#FDEDEC"
    }
}

function RegistroPage() {
    const [form, setForm] = useState({ nombre: '', apellido: '', email: '', password: '' })
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
        firebase.auth.createUserWithEmailAndPassword(form.email, form.password)
            .then(data => {
                console.log("Registro", data.user.uid)
                firebase.db.collection("usuarios")
                    .add({
                        nombre: form.nombre,
                        apellido: form.apellido,
                        email: form.email,
                        userId: data.user.uid
                    })
                    .then(data => {
                        console.log(data);
                        
                    })
                    .catch(error => {
                        console.log("Error add", error)
                        
                    })
            })
            .catch(error => {
                console.log("Error", error)
                
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

                    Formulario de Registro <Badge variant="secondary" style={styles.badge}></Badge>
                </h1>

                <Form onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Label style={styles.label}>Nombre  </Form.Label>
                        <Form.Control style={styles.control}size="lg" type="text" name="nombre" value={form.nombre} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label style={styles.label}>Apellido</Form.Label>
                        <Form.Control style={styles.control}size="lg" type="text" name="apellido"  value={form.apellido} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label style={styles.label}>Email</Form.Label>
                        <Form.Control style={styles.control}size="lg" type="email" name="email" value={form.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label style={styles.label}>Password</Form.Label>
                        <Form.Control style={styles.control}size="lg" type="password" name="password" value={form.password} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="outline-primary" type="submit" style={styles.button}>Registrarse</Button>
                </Form>
            </Card>
        </Container>
    )

}
export default RegistroPage;
