import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
const Gallery = () => {

    const [galleryArray, setGallery] = useState([]);
    const [page, setPage] = useState(2)

    const loadPicsum = () => {
        fetch("https://picsum.photos/v2/list?page=" + page + "&limit=6")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGallery(data);
            })
    }
    // charge la fonction loadPicsum grace à useEffect avec chargement de la page ( grace à "[]")
    useEffect(() => {
        loadPicsum();
    }, [page]);

    const ListImages = () => (
        <div className="row">
            {
                galleryArray.map((img) => {
                    const urlImg = "https://picsum.photos/id/" + img.id + "/640/420"
                    return (
                        <div key={img.id} className="col-12 col-md-4">
                            <label className="text-center">{img.author}</label>
                            <a href={img.url} target="_blank">
                                <img className="img-fluid mb-3" src={urlImg} />
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )

    return (
        <div className="container-fluid">
            <h1>Gallery</h1>
            <ListImages />
            <Pagination page={page} setPage={setPage} />
        </div>
    )
}

export default Gallery