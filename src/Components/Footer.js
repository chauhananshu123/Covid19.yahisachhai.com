import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>

            <footer className="page-footer font-small footer">

                <div className="footer-copyright text-center py-3">© 2020 Copyright :
                    <Link to="#" className="footer_link"> Covid-19 | Yahi-sach-hai | Ens</Link>
                </div>


            </footer>

        </>
    )
}
export default Footer;