import Info from "./card/Info"
import About from "./card/About"
import Interests from "./card/Interests"
import Footer from "./card/Footer"




export default function Card({ person }) {
      return (
        <div className="card">
          <Info person={person} />
              <div className="card-content">
                  <About about={person.about} />
                  <Interests interests={person.interests} />
              </div>
          <Footer />
        </div>
      )
}