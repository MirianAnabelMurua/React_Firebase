import React,{useState,useEffect} from "react"
import Producto from "../Components/Producto"
import firebase from "../Config/firebase"
import Spinner from 'react-bootstrap/Spinner'
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'

const styles = {

    container: {
        backgroundColor: "#F5F5F5",
        color: "blue",
        marginTop: "30px",
        width: "900px",
        paddingTop: "20px",
        paddingBottom: "20px"
    },
    button: {
        backgroundColor: "#646B6F",
        marginTop: "20px",
        marginLeft:"10px",
        width:"170px",
        color:"white"
    },
    h1:{
        textAlign:"center",
        marginTop:"10px",
        fontFamily:"kerning"        
    },
    badge:{
        backgroundColor:"#646B6F"        
    },
    spinner:{
        marginLeft:"400px"
    }
}

function DescriptionPage(props) {

    const id = props.match.params.id;
    const [producto,setProducto] = useState({});
    const [loading,setLoading] = useState(true);
    const [form,setForm] = useState({name:'',price:'',description:''})
    const [formAdd,setFormAdd] = useState({name:'',price:'',description:''})
    /*componentDidMount*/
    
    useEffect(
        ()=>{
            /*Consulto el documento producto de la coleccion de Firebase*/
            firebase.db.doc("productos/"+id)
            .get()
            .then(doc=>{
                console.log("Doc",doc)
                setProducto(doc)
                setLoading(false)
                setForm({name:doc.data().name,price:doc.data().price,description:doc.data().description})
            })
        },
        []
    )
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setForm({...form,[name]:value})
    }
    const handleChangeAdd = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setFormAdd({...formAdd,[name]:value})
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(form)
        firebase.db.doc("productos/"+id)
        /*Modifico en Firebase*/
        .set({
            name:form.name,
            price:form.price,
            description:form.description
            
        },{merge:true}) /*para que no pise todos los campos*/
        .then(doc=>{
            console.log("Doc",doc)
        })
        .catch(error=>{
            console.log("error",error)
        })
    }
    const handleSubmitAdd = (event)=>{
        event.preventDefault()
        console.log(formAdd)
        firebase.db.collection("productos")
        .add({
            name:formAdd.name,
            price:formAdd.price,
            description:formAdd.description
        })
        .then(doc=>{
            console.log("Doc Delete",doc)
        })
        .catch(error=>{
            console.log("error",error)
        })
    } /* Funcion borrar*/
    const handleDelete = (event)=>{
        event.preventDefault()
        firebase.db.doc("productos/"+id)
        .delete()
        .then(doc=>{
            console.log("Doc Add",doc)
        })
        .catch(error=>{
            console.log("error",error)
        })
    }
    if(loading){
        return (

            <>
            <Container style={styles.container}>   
            <Spinner animation="border" variant="primary"  style={styles.spinner} />
            </Container>     
            </>
        )
    }else{
        return(
            <div>
                <Producto id={producto.id} data={producto.data()}  verDetalle={false} extendida={true}/>
               
                <h1 style={styles.h1}>
                   
                Modificar o Eliminar un Producto <Badge variant="secondary"style={styles.badge}>Producto Existente</Badge>
                </h1>
                
                <Container style={styles.container}>
                    <form onSubmit={handleSubmit}>
                                             
                        <Form.Control  size="lg" type="text" placeholder="Ingrese el nombre del producto" name="name"value={form.name} onChange={handleChange} />
                        <br />
                        <Form.Control size="lg" type="number" placeholder="Ingrese el precio del producto"name="price" value={form.price} onChange={handleChange} />
                        <br />
                        <Form.Control size="lg" type="text" placeholder="Ingrese la descripcion del producto" name="description" value={form.description} onChange={handleChange}/>
                        
                        <Button variant="outline-primary"type="submit" value="Guardar"style={styles.button}>Guardar</Button>
                        <Button variant="outline-danger"onClick={handleDelete}style={styles.button}>Eliminar</Button>
                        
                    </form>
                </Container>

                <h1 style={styles.h1}>
                Agregar producto <Badge variant="secondary" style={styles.badge}>Nuevo Ingreso</Badge>
                </h1>                

                <Container style={styles.container}>
                    <form onSubmit={handleSubmitAdd}>

                        <Form.Control  size="lg"  placeholder="Ingrese el nombre del producto" type="text" name="name" value={formAdd.name} onChange={handleChangeAdd} />
                        <br />
                        <Form.Control size="lg"  placeholder="Ingrese el precio del producto" type="number" name="price" value={formAdd.price} onChange={handleChangeAdd} />
                        <br />
                        <Form.Control size="lg"  placeholder="Ingrese la descripcion del producto" type="text" name="description" value={formAdd.description} onChange={handleChangeAdd}/>
                           
                        <Button variant="outline-primary"type="submit" value="Guardar"style={styles.button}>Guardar</Button>
                        

                    </form>
                </Container>
            </div>
        )
    }
        
    
}
export default DescriptionPage;

