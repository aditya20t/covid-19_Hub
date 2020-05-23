import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Axios from 'axios';
import styles from  './States.module.css';

class States extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }
    componentDidMount(){
        Axios({
            method: "GET",
            url: "http://localhost:9000/states",
            headers: {
              "Content-Type": "application/json"
            }
          }).then( res => {
                const data =  res.data.message;
                console.log(data)
                this.setState({
                    users: data
                })
            })
          .catch((err) => {})
    }

    renderTableData() {
        return this.state.users.map((States, index) => {
           const { state, confirmed, active, recovered, deaths } = States //destructuring
           console.log(state);
           return (
              <tr key = {state}>
                 <td><a href={'/district/' + state}  className = {styles.state }>{state}</a></td>
                 <td>{confirmed}</td>
                 <td>{active}</td>
                 <td>{recovered}</td>
                 <td>{deaths}</td>
              </tr>
           )
        })
     }

    render(){
        return(
            <div className={styles.body}>
                <h1 className={styles.title1}>Welcome To the Indian State's Data</h1>
                <h4 className={styles.title2}>Click on the State to view thier District's Data</h4>
                <div>
                    <Table striped bordered hover className="table-dark w-75 ml-auto mr-auto">
                    <thead>
                    <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Active</th>
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


export default States;