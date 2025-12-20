import Info from "./card/Info"
import About from "./card/About"
import Interests from "./card/Interests"
import Footer from "./card/Footer"




export default function Card(){
    return(
            <article className='card'>
                <Info />
                <About />
                <Interests />
                <Footer />
            </article>
    )
}