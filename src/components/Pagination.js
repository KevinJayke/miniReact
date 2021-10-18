const Pagination = ({page, setpage}) => {

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">{page+1}</a></li>
                <li className="page-item"><a className="page-link" href="#">{page+2}</a></li>
                <li className="page-item"><a className="page-link" href="#">{page+3}</a></li>
                <li className="page-item">
                    <a className="page-link" onClick={() => setpage(page+1) } href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination