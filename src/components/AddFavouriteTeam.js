import { useState, useEffect } from 'react';
import axios from 'axios';

import './Form/Form.css';

const AddFavouriteTeam = () => {
  const [teamName, setTeamName] = useState('');

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}favteam?name=${teamName}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Pick your favourite teams</h1>
        <div className="form-inputs">
          <label className="form-label">Enter the Team's Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Team Name Ex:real madrid"
            value={teamName}
            onChange={handleTeamNameChange}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Get Team
        </button>
      </form>
    </div>
  );
};

export default AddFavouriteTeam;
