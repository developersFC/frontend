import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import './FavTeam.css';
import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
// import { Modal } from 'react-bootstrap';
// import BootstrapTable from 'react-bootstrap-table-next';
import { Table } from 'react-bootstrap';

class FavTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showRank: false,
      arrOfMatch: [],
      teamId: '541',
      rank: [],
    };
  }

  handleModal = () => {
    this.setState({ show: !this.state.show });
  };
  handleRanking = () => {
    this.setState({ showRank: !this.state.showRank });
  };

  getTeamId = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}getteams`)
      .then((res) => {
        console.log(res);
        this.setState({
          teamId: res.data[0],
        });
        console.log(this.state.teamId);
      });
  };
  getRank = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}favstanding`)
      .then((res) => {
        console.log(res);
        this.setState(
          {
            rank: res.data,
          },
          this.handleRanking()
        );
        console.log(this.state.rank);
      });
  };

  getMatchesFav = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}favmatches?teamId=${this.state.teamId}`
      )
      .then((res) => {
        console.log(res);
        this.setState(
          {
            arrOfMatch: res.data,
          },
          this.handleModal()
        );
        console.log(this.state.arrOfMatch);
      });
  };
  render() {
    return (
      <div className="bodyFav">
        <Card
          style={{
            marginTop: 15,
          }}
        >
          <CardContent>
            <Grid container justify="center" alignItems="center" spacing={4}>
              <Grid item>
                <img
                  style={{ width: 85 }}
                  src="https://www.realmadrid.com/img/horizontal_940px/comunicado-oficial_20201229035034.jpg"
                  alt=""
                />
              </Grid>
              <Grid item>
                <Typography variant="h5">Real Madrid</Typography>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <Grid container justify="center">
              <Button
                onClick={this.getMatchesFav}
                variant="outlined"
                color="secondary"
              >
                Upcoming match
              </Button>
              <Button
                onClick={this.getRank}
                style={{ marginLeft: 5 }}
                variant="outlined"
                color="primary"
              >
                Ranking
              </Button>
            </Grid>
          </CardActions>

          <Container className="testcontainer">
            {this.state.arrOfMatch && (
              <Row>
                <Col>
                  {/* <Modal className="style" show={this.state.show}>
                  <Modal.Header
                    onClick={() => {
                      this.handleModal();
                    }}
                  > */}
                  {/* <Modal.Title>Upcoming Match</Modal.Title>
                  </Modal.Header>
                  <Modal.Body> */}
                  {/* <br></br> */}

                  <>
                    <h2>Upcoming Match</h2>
                    <Table className="trt" responsive="sm">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>leagus</th>
                          <th>Team 1</th>
                          <th>team 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.arrOfMatch.map((match) => {
                          return (
                            <tr>
                              <td>{new Date(match.date).toDateString()}</td>
                              <td>{match.league}</td>
                              <td>{match.homeTeam}</td>
                              <td>{match.awayTeam}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    {/* <h1 style={{ color: 'red' }}>
                      {' '}
                      {new Date(match.date).toDateString()} {match.league}{' '}
                      {match.homeTeam} {match.awayTeam}{' '}
                    </h1> */}
                  </>
                  {/* </Modal.Body> */}
                  {/* <Modal.Footer>
              <Button    variant="outlined" color="primary" onClick={() => {this.handleModal()}}>
                Close
              </Button>

            </Modal.Footer> */}
                  {/* <button
                  className="botClose1"
                  onClick={() => {
                    this.handleModal();
                  }}
                >
                  Close
                </button> */}
                  {/* </Modal> */}
                </Col>
              </Row>
            )}
            <Row>
              <Col className="secondCol">
                {/* <Modal className="style" show={this.state.showRank}>
                  <Modal.Header
                    onClick={() => {
                      this.handleRanking();
                    }}
                  > */}
                {/* <Modal.Title>Ranking</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="tableFav"> */}
                <h2>Ranking</h2>
                <div className="bodyx">
                  <tr className="favC">
                    <th className="ETc">#</th>
                    <th className="ETc">rank</th>
                    <th className="ETc">team</th>
                    <th className="ETc">points</th>
                  </tr>
                  {this.state.rank.map((item, i) => {
                    return (
                      <>
                        <tr className="favC">
                          <td className="ETc1">{i + 1}</td>
                          <td className="ETc1">{item.rank}</td>
                          <td className="ETc1">{item.name}</td>
                          <td className="ETc1">{item.points}</td>
                        </tr>
                      </>
                    );
                  })}
                </div>
                {/* </Modal.Body> */}
                {/* <Modal.Footer>
              <Button className="botClose"   variant="outlined" color="primary" onClick={() => {this.handleRanking()}}>
                Close
              </Button>

            </Modal.Footer> */}
                {/* <button
                  className="botClose"
                  onClick={() => {
                    this.handleRanking();
                  }}
                >
                  Close
                </button> */}
                {/* </Modal> */}
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}

export default FavTeam;

// import React, { Component } from 'react';
// import axios from 'axios';

// import './FavTeam.css';

// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Grid,
//   Typography,
// } from '@material-ui/core';
// import { Modal, Table } from 'react-bootstrap';

// class FavTeam extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false,
//       showRank: false,
//       teams: [],
//       standing: [],
//       matches: [],
//     };
//   }

//   handleModal = () => {
//     this.setState({ show: !this.state.show });
//   };
//   handleRanking = () => {
//     this.setState({ showRank: !this.state.showRank });
//   };
//   // handleData = (teams, standings, matches) => {
//   //   this.setState({ teams: teams });
//   //   this.setState({ standing: standings });
//   //   this.setState({ matches: matches });
//   // };

//   render() {
//     // let teams = [];
//     // let standings = [];
//     // let matches = [];

//     // axios
//     //   .get(`${process.env.REACT_APP_SERVER_URL}favleague`)
//     //   .then((res) => {
//     //     teams = res.data;
//     //     axios
//     //       .get(`${process.env.REACT_APP_SERVER_URL}favstanding`)
//     //       .then((res) => {
//     //         standings = res.data;
//     //         axios
//     //           .get(`${process.env.REACT_APP_SERVER_URL}favmatches?`)
//     //           .then((res) => {
//     //             matches = res.data;
//     //             return (
//     //               <>
//     //                 {console.log(standings)}
//     <div className="hero-container">
//       <img
//         src="https://www.photoshop-library.com/wp-content/uploads/edd/2020/09/%D8%B5%D9%88%D8%B1%D8%A9-%D8%AE%D9%84%D9%81%D9%8A%D8%A9-%D9%85%D9%84%D8%B9%D8%A8-%D9%83%D8%B1%D8%A9-%D9%82%D8%AF%D9%85-JBG.jpg"
//         alt=""
//         id="coverimg"
//       />
//       {/* {this.props.favTeams.map((favteam) => {
//                         axios
//                           .get(`${process.env.REACT_APP_SERVER_URL}favleague`)
//                           .then((resfavleague) => {
//                             axios
//                               .get(`${process.env.REACT_APP_SERVER_URL}favstanding`)
//                               .then((resfavstanding) => {
//                                 standings.push(resfavstanding.data);
//                                 // this.handleStanding(resfavstanding.data);
//                                 axios
//                                   .get(
//                                     `${process.env.REACT_APP_SERVER_URL}favmatches?teamId=${favteam.id}`
//                                   )
//                                   .then((resfavmatches) => {
//                                     matches.push(resfavmatches.data);
//                                     this.handleData(standings, matches);
//                                     // this.handleMatches(resfavmatches.data);
//                                   })
//                                   .catch((err) => {
//                                     console.log(err);
//                                   });
//                               })
//                               .catch((err) => {
//                                 console.log(err);
//                               });
//                           })
//                           .catch((err) => {
//                             console.log(err);
//                           });
//                       })} */}
//       {/*
//                       {teams.map((favteam) => {
//                         return ( */}
//       {/* <div> */}
//       <Card
//         style={{
//           marginTop: 15,
//         }}
//       >
//         <CardContent>
//           <Grid
//             container
//             justify="center"
//             alignItems="center"
//             spacing={4}
//           >
//             <Grid item>
//               <img
//                 style={{ width: 85 }}
//                 src="https://www.realmadrid.com/img/horizontal_940px/comunicado-oficial_20201229035034.jpg"
//                 alt=""
//               />
//             </Grid>
//             <Grid item>
//               <Typography variant="h5">
//                 {favteam.name}
//               </Typography>
//             </Grid>
//           </Grid>
//         </CardContent>

//         <CardActions>
//           <Grid container justify="center">
//             <Button
//               onClick={this.handleModal}
//               variant="outlined"
//               color="secondary"
//             >
//               Upcoming match
//             </Button>
//             <Button
//               onClick={this.handleRanking}
//               style={{ marginLeft: 5 }}
//               variant="outlined"
//               color="primary"
//             >
//               Ranking
//             </Button>
//             <Button
//               style={{ marginLeft: 5 }}
//               variant="outlined"
//               color="primary"
//             >
//               Delete
//             </Button>
//           </Grid>
//         </CardActions>

//         {/* {matches.map((match) => { */}
//           return (
//             <Modal
//               className="style"
//               show={this.state.show}
//             >
//               <Modal.Header
//                 onClick={() => {
//                   this.handleModal();
//                 }}
//               >
//                 <Modal.Title>Upcoming Match</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <br></br>
//                 Realmadrid 4 - 4 Realmadrid
//                 <br></br>
//                 <br></br>
//               </Modal.Body>

//               <button
//                 className="botClose1"
//                 onClick={() => {
//                   this.handleModal();
//                 }}
//               >
//                 Close
//               </button>
//             </Modal>
//           );
//         })}

//         {standings.map((standing) => {
//           <Modal
//             className="style"
//             show={this.state.showRank}
//           >
//             <Modal.Header
//               onClick={() => {
//                 this.handleRanking();
//               }}
//             >
//               <Modal.Title>Ranking</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Table className="table" responsive="sm">
//                 <div className="desForm">
//                   Football / Soccer Club World Ranking
//                 </div>
//                 <thead className="theadTableFAV">
//                   <tr>
//                     <th>#</th>
//                     <th>Table heading</th>
//                     <th>Table heading</th>
//                     <th>Table heading</th>
//                   </tr>
//                 </thead>
//                 <tbody className="tbodyTableFAV">
//                   <tr>
//                     <td>1</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                   </tr>
//                   <tr>
//                     <td>2</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                   </tr>
//                   <tr>
//                     <td>3</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                   </tr>

//                   <tr>
//                     <td>4</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                   </tr>

//                   <tr>
//                     <td>5</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                   </tr>
//                   <tr>
//                     <td>6</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                   </tr>
//                   <tr>
//                     <td>7</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                     <td>Table cell</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Modal.Body>
//             <button
//               className="botClose"
//               onClick={() => {
//                 this.handleRanking();
//               }}
//             >
//               Close
//             </button>
//           </Modal>;
//         })}
//       </Card>
//     </div>
//                         );
//   })
// }
//                     </div >
//                   </>
//                 );
//               })
//       //         .catch((err) => {
//       //           console.log(err);
//       //         });
//       //     })
//       //     .catch((err) => {
//       //       console.log(err);
//       //     });
//       // })
//       // .catch((err) => {
//       //   console.log(err);
//       // });

//     // return <></>;

//     // this.handleData(teams, standings, matches);
//   }
// }

// export default FavTeam;
