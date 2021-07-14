import React, { Component } from 'react'
import '../../App.css';
import axios from 'axios';
import { Table } from 'react-bootstrap'
import './LiveScore.css'

export class LiveScore extends Component {
    constructor() {
        super()
        this.state = {
            liveMatchArr: [],

        }
    }
    liveScore = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}live`).then((res) => {
            this.setState({
                liveMatchArr: res.data,
            });

            console.log(this.state.liveMatchArr);

        });
    };

    render() {
        console.log(this.state.liveMatchArr);
        return (

            <>

                <button onClick={this.liveScore}>Click</button>

                {this.state.liveMatchArr.map(match => {

                    return <>
                        {/* <Table striped bordered hover responsive="sm"> */}
                            <tr>
                                <th>Team 1</th>
                                <th>Time</th>
                                <th>Team 2</th>
                                <th>Reaslt</th>
                            </tr>
                            <tr>
                                <td>{match.home}</td>
                                <td>{match.elapsed}</td>
                                <td>{match.away}</td>
                                <td>{match.homeGoals} - {match.awayGoals}</td>
                            </tr>
                        {/* </Table>  */}

                     </> 
                })
                }

            </>

        )
    }
}

export default LiveScore
