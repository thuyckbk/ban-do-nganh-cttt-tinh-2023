import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faShareNodes } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img className="mx-3" width="60px" height="60px" src="https://data.govone.vn/Layout/gserver/img/logo.png" alt="" />
                        <span>BẢN ĐỒ NGANH TTTT TỈNH NĂM 2023</span>
                    </a>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success me-1" type="submit">Search</button>
                        <button className="btn btn-outline-success me-1" type="submit"><FontAwesomeIcon icon={faShareNodes} /></button>
                        <button className="btn btn-outline-success me-1" type="submit"><FontAwesomeIcon icon={faEnvelope} /></button>
                    </form>
                </div>
            </nav>
        </>
    )

}
export default Header;