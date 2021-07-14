import { useAuth0 } from '@auth0/auth0-react';
import { config, useSpring, animated } from 'react-spring';

import { Button } from '../Button/Button';
import Form from '../Form/Form';

import '../../App.css';
import './HeroSection.css';

import video from '../../videos/video-2.mp4';
import { useState } from 'react';

const HeroSection = () => {
  const [findclicked, setFindClicked] = useState(false);
  const [addclicked, setAddClicked] = useState(false);

  const { isAuthenticated } = useAuth0();

  const handleClick = () => setFindClicked(!findclicked);
  const handleAdd = () => setAddClicked(!addclicked);

  const show = useSpring({
    to: { opacity: 100 },
    from: { opacity: 0 },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const hide = useSpring({
    to: { opacity: 0 },
    from: { opacity: 100 },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>Golden Goal</h1>
      <p>Explore Teams and Matches from around the globe</p>
      <div className="herobtns">
        <Button
          onClick={handleClick}
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn-large"
        >
          Find Leagues
        </Button>
        {isAuthenticated && (
          <Button
            onClick={handleAdd}
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn-large"
          >
            Add Teams
          </Button>
        )}
      </div>
      {findclicked && (
        <animated.div style={findclicked ? show : hide}>
          <Form findOrAdd="find" />
        </animated.div>
      )}
      {addclicked && (
        <animated.div style={addclicked ? show : hide}>
          <Form findOrAdd="add" />
        </animated.div>
      )}
    </div>
  );
};

export default HeroSection;
