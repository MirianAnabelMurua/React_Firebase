import { Container } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import Cards from '../Components/Cards'
import Card from '../Components/Card'

import image1 from "../assets/image1.jpg"
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const styles = {

    container: {
        backgroundColor: "#F5F5F5",
        color: "blue",
        marginTop: "30px",
        width: "850px",
        paddingTop: "20px",
        paddingBottom: "20px"


    },

    h1: {
        textAlign: "center",
        marginTop: "10px",
        fontFamily: "kerning"
    },
    badge: {
        backgroundColor: "crimson"
    },
    card: {
        width: "800px",
        marginBottom: "20px",
        color: "black",
        backgroundColor: "",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginLeft: "15px",
        borderWidth: "2px",
        borderColor: "crimson",
    },
}

function HomePage() {

    return (

        
            
            <div className="App">
                <Cards />
            </div>
    


        
    )



}
export default HomePage;

