import React, { Component } from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBIcon, MDBContainer } from 'mdbreact';
import Footer from '../Footer/Footer';

import './AboutUs.css'

// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';


export class Compare extends Component {
  render() {
    return (
      <div>
      <div className="aboutUsDiv">

        <div class="all">
          <div class="img-wrapper">
            <Card className="cards">
              <Card.Img variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U01TXFQ08MQ-c2d29b951a77-512" className='img' />
              <Card.Body>
                <Card.Title>Mohammad Lababneh</Card.Title>
                <Card.Text>
                Mechanical Engineer graduated from (JUST university)                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush"><ListGroupItem>Software Developer</ListGroupItem></ListGroup>
              <Card.Body>
                <MDBContainer className="MDBContainer">

                  <a href="https://github.com/mohammad-lababneh" className='a' className="fb-ic mr-3"  target="_blank">
                    <MDBIcon className="MDBIcon" fab icon="facebook-f" />
                  </a>
                  <a href="https://github.com/mohammad-lababneh" className='a' className="tw-ic mr-3" target="_blank">
                    <MDBIcon className="MDBIcon" fab icon="twitter" />
                  </a>
                  <a href="https://www.linkedin.com/in/mohammad-lababneh-74755b1b0" className='a' className="li-ic mr-3" target="_blank">
                    <MDBIcon className="MDBIcon" fab icon="linkedin-in" />
                  </a>
                  <a href="https://github.com/mohammad-lababneh" className='a' className="git-ic mr-3" target="_blank">
                    <MDBIcon className="MDBIcon" fab icon="github" />
                  </a>
                </MDBContainer>

              </Card.Body>
            </Card>

          </div>
        </div>









        <div class="all">

          <Card className="cards">
            <Card.Img variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U01RY3TCY11-7c15bdd95f8d-512" className='img' />


            <Card.Body>
              <Card.Title >Thaer Braizat</Card.Title>
              <Card.Text>
               computer engineer.
               <br/> 
               likes online games, all sport games, and interested in web development
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush"><ListGroupItem>Software Developer</ListGroupItem></ListGroup>
            <Card.Body>
              <MDBContainer className="MDBContainer">
                <a href="#!" className="fb-ic mr-3">
                  <MDBIcon className="MDBIcon" fab icon="facebook-f" target="_blank" />
                </a>
                <a href="#!" className="tw-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="twitter" />
                </a>
                <a href="https://www.linkedin.com/in/thaer-braizat-a7b513200/" className="li-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="linkedin-in" />
                </a>
                <a href="https://github.com/thaerbraizat" className="git-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="github" />
                </a>
              </MDBContainer>

            </Card.Body>
          </Card>
        </div>




        <div class="all">

          <Card className="cards">
            <Card.Img variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U01UM9UPGQY-ddd5b98f8cc8-512" className='img' />


            <Card.Body>
              <Card.Title>Qasem Mohammad </Card.Title>
              <Card.Text>
              Media and press from Arab Open University (AOU)
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush"><ListGroupItem>Software Developer</ListGroupItem></ListGroup>
            <Card.Body>
              <MDBContainer className="MDBContainer">
                <a href="#!" className="fb-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="facebook-f" />
                </a>
                <a href="#!" className="tw-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="twitter" />
                </a>
                <a href="#!" className="li-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="linkedin-in" />
                </a>
                <a href="#!" className="git-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="github" />
                </a>
              </MDBContainer>

            </Card.Body>
          </Card>
        </div>


        <div class="all">

          <Card className="cards">
            <Card.Img variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U01SAFN4JUR-99c2bd50d725-512" className='img' />


            <Card.Body>
              <Card.Title>Saif Momani </Card.Title>
              <Card.Text>

             Software Engineering from 
 University of Petra
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush"><ListGroupItem>Software Developer</ListGroupItem></ListGroup>
            <Card.Body>
              <MDBContainer className="MDBContainer">
                <a href="#!" className="fb-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="facebook-f" />
                </a>
                <a href="#!" className="tw-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="twitter" />
                </a>
                <a href="https://www.linkedin.com/in/smomani/" className="li-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="linkedin-in" />
                </a>
                <a href="https://github.com/saif317" className="git-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="github" />
                </a>
              </MDBContainer>

            </Card.Body>
          </Card>
        </div>



        <div class="all">

          <Card className="cards">
            <Card.Img variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U01SV448ZB3-839684d6e331-512" className='img' />
            <Card.Body>
              <Card.Title>Nedal Alashqar</Card.Title>
              <Card.Text>
                Management Information Systems
              </Card.Text>
              <Card.Text>
                Zarqa University 
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush"><ListGroupItem>Software Developer</ListGroupItem></ListGroup>
            <Card.Body>
              <MDBContainer className="MDBContainer">
                <a href="#!" className="fb-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="facebook-f" />
                </a>
                <a href="#!" className="tw-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="twitter" />
                </a>
                <a href="https://www.linkedin.com/in/nedal-alashqar-721b60153/" className="li-ic mr-3" target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="linkedin-in" />
                </a>
                <a href="https://github.com/Nedalalashqar" className="git-ic mr-3 " target="_blank">
                  <MDBIcon className="MDBIcon" fab icon="github" />
                </a>
              </MDBContainer>

            </Card.Body>
          </Card>
        </div>

      </div>
      <Footer/>

      </div>

    );

  }

}

export default Compare
