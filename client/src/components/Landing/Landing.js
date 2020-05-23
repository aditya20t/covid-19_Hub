import React, {Component} from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import {Table, Image} from 'react-bootstrap';
import Axios from 'axios';
import styles from  './Landing.module.css';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }
    componentDidMount(){
        Axios({
            method: "GET",
            url: "http://localhost:9000/",
            headers: {
              "Content-Type": "application/json"
            }
          }).then( res => {
                const data =  res.data.message.Global;
                console.log(data)
                this.setState({
                    users: data
                })
            })
          .catch((err) => {})
    }

    render() {
        return(
            <div className={styles.Body}>
                <h1>Welcome to the Data World of Covid-19</h1>
                <img src={`${process.env.PUBLIC_URL}/assets/images/world.png`} className={styles.world} />
                    <Table striped bordered hover className={styles.Table1}>
                        <thead>
                            <tr>
                            <th>Total Confirmed</th>
                            <th>New Confirmed</th>
                            <th>Total Death</th>
                            <th>Total Recovered</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{this.state.users.TotalConfirmed}</td>
                            <td>{this.state.users.NewConfirmed}</td>
                            <td>{this.state.users.NewDeaths}</td>
                            <td>{this.state.users.NewRecovered}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className='btn-group' className={styles.button}>
                    <BrowserRouter>
                    <a href='/world'>
                        <button className="btn btn-primary" href="/world">Countries' Data</button>
                    </a>
                    <a href='/states'>
                         <button className="btn btn-danger" href="/states">Indian State's Data</button>
                    </a>
                        
                    </BrowserRouter>
                    </div>
                    
            </div>
            
        );
    }
}

export default Landing;