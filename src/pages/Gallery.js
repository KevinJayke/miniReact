import { useEffect,useState } from 'react';
const Gallery = () => {

    const [galleryArray,setGallery] = useState([]);

    const loadPicsum = () => {
        fetch("https://picsum.photos/v2/list?page=1&limit=6")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGallery(data);
            })
    }
    // charge la fonction loadPicsum grace à useEffect avec chargement de la page ( grace à "[]")
    useEffect(() => {
        loadPicsum();
    }, []);

    const ListImages = () => (
        <div className="row">
        {
            galleryArray.map((img)=> {
                return(
                    <img className="col-12 col-md-4 img-fluid mb-3" src="https://picsum.photos/id/0/5616/3744"/>
                )
            })
        }
        </div>
    )

    return (
        <div className="container-fluid">
            <h1>Gallery</h1>
                <ListImages />
        </div>
    )
}

export default Gallery