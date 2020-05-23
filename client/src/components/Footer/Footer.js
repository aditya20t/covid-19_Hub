import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom";
import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
        <footer className="page-footer font-small bg-dark">

            <div className="container text-center">
        
                <div className="row">
            
                    <div className="col-md-12 py-5  ">
                        <div className="mb-5 flex-center">
                        <BrowserRouter>
                            <a className="gplus-ic" href="mailto:aditya001tomar@gmail.com">
                                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="li-ic" href="https://www.linkedin.com/in/adad20">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="li-ic" href="https://www.github.com/adad20">
                                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                        </BrowserRouter>
                            
                        </div>
                        
                        <button type="button" className="btn btn-secondary"><i className="fab fa-github" ></i><a href="https://www.github.com/adad20/covid-19_Hub"> Contribute Here</a></button>
                    </div>
                </div>
                <h4 className={styles.para}>Made with ❤ by Aditya</h4>
            </div>
 
        </footer>
        );
    }
}


export default Footer;