import React, { Component } from 'react'
import '../../App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap'
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

            <div className="body">
                <div className='body2'>
                    <Button className="btnLive" onClick={this.liveScore}>Refresh</Button>
                    {this.state.liveMatchArr != [] && (
                        <tr className="tableLive">
                            <th className="liveScoreTh">Team 1</th>
                            <th className="liveScoreTh">Time</th>
                            <th className="liveScoreTh">Team 2</th>
                            <th className="liveScoreTh">Result</th>
                        </tr>
                    )}
                    {this.state.liveMatchArr.map(match => {

                        return <>

                            <tr className="tableLive">
                                <td className="liveScoreTd">{match.home}</td>
                                <td className="liveScoreTd">{match.elapsed}</td>
                                <td className="liveScoreTd">{match.away}</td>
                                <td className="liveScoreTd">{match.homeGoals} - {match.awayGoals}</td>
                            </tr>


                        </>
                    })
                    }
                </div>
            </div>

        )
    }
}

export default LiveScore
