import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Axios from 'axios';
import styles from  './District.module.css';

class Districts extends Component{
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount(){
        Axios({
            method: "GET",
            url: `http://localhost:9000/district/${this.props.match.params._state}`,
            headers: {
              "Content-Type": "application/json"
            }
          }).then( res => {
                var Data1 = res.data.message;
                const data =  res.data.message;
                for(let i=0; i<data.length;i++){
                    if(data[i].state == this.props.match.params._state){
                        Data1 = data[i];
                    }
                }
                this.setState({
                    users: Data1.districtData,
                    state: this.props.match.params._state
                })
            })
          .catch((err) => {})
    }

    renderTableData() {
        return this.state.users.map((Districts, index) => {
           const {district, confirmed, recovered, deceased} = Districts //destructuring
           return (
              <tr key={district}>
                 <td>{district}</td>
                 <td>{confirmed}</td>
                 <td>{recovered}</td>
                 <td>{deceased}</td>
              </tr>
           )
        })
     }

    render(){
        return(
            <div className={styles.body}>
                <h1 className={styles.title1}>Welcome To the Countries' Data</h1>
                <h3 className={styles.title2}>You are viewing {this.props.match.params._state}'s Data</h3>
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

export default Districts;