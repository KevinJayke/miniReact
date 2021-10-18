import Caroussel from "../components/Caroussel"

const Home = () => { 
    return (
<div className="container-fluid">
        <div className="row">
          <div className="col">
            <Caroussel/>
          </div>
          <div className="col">
            Du texte
          </div>
        </div>
      </div>
)
}

export default Home