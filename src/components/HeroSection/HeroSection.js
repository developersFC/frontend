import { Button } from '../Button/Button';

import '../../App.css';
import './HeroSection.css';

import video from '../../videos/video-2.mp4';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>Golden Goal</h1>
      <p>Explore Teams and Matches from around the globe</p>
      <div className="herobtns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn-large"
        >
          Find Leagues
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn-large"
        >
          Add Teams
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
