import React,{useState} from "react"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'


const styles = {
    card:{
    width:"90%",
    height: "200px",
    marginBottom:"20px",
    color: "black",
    borderWidth:"2px",
    borderColor:"#646B6F",
          
    },
    button:{
        marginLeft:"5px",
        backgroundColor: "#646B6F",
        width:"170px"
       
    },
    link:{
        color:"#FFFFFF",
        textDecoration:"none"
    },
    container:{
        backgroundColor:"#F5F5F5",
         color:"blue",
         marginTop: "30px",
         paddingLeft:"150px",
         height:"250px",
         paddingTop:"20px",
         paddingBottom:"20px",
           
     }
}
function Producto(props){
    
    const {data} = props
    const verDetalle = (props.verDetalle!==false?true:false);
    const extendida = (props.extendida==true?true:false)
    const id = props.id
    const {price,name,description}=props.data
    const [mensaje,setMensaje]=useState("")

    const comprar = ()=>{
        
        if(data.stock-1==0){
            setMensaje("No hay stock")

        }else{
            setMensaje("Gracias por su compra")
          
        }
    }

    return(

        <Container style={styles.container}>
        <Card style={styles.card}>
            <Card.Body>
                <Card.Title>{price} - {name}</Card.Title>
                {
                    extendida && 
                    <>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </>
                }
                <Button style={styles.button} variant="primary" onClick={comprar}>Comprar</Button>
                {
                    verDetalle && 
                    <Button style={styles.button} variant="primary"><Link style={styles.link} to={"/producto/"+id}>Descripciòn</Link></Button>
                }
                
            </Card.Body>
            {mensaje}
        </Card>
        </Container>
        
    )
}
export default Producto;

