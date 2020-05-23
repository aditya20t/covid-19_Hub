import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Axios from 'axios';
import styles from  './Countries.module.css';

class Countries extends Component{
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }
    componentDidMount(){
        Axios({
            method: "GET",
            url: "http://localhost:9000/world",
            headers: {
              "Content-Type": "application/json"
            }
          }).then( res => {
                const data =  res.data.message.Countries;
                console.log(data)
                this.setState({
                    users: data
                })
            })
          .catch((err) => {})
    }

    renderTableData() {
        return this.state.users.map((Countries, index) => {
           const { Country, TotalConfirmed, TotalRecovered, TotalDeaths } = Countries //destructuring
           return (
              <tr key={Country}>
                 <td>{Country}</td>
                 <td>{TotalConfirmed}</td>
                 <td>{TotalRecovered}</td>
                 <td>{TotalDeaths}</td>
              </tr>
           )
        })
     }

    render(){
        return(
            <div className={styles.body}>
                <h1 className={styles.title1}>Welcome To the Countries' Data</h1>
                <div>
                    <Table striped bordered hover className="table-dark w-75 ml-auto mr-auto">
                    <thead>
                    <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                    </Table>
                </div>
            </div>
            
        )
    }
}

export default Countries;