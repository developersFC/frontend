import { useState, useEffect } from 'react';
import axios from 'axios';

import '../Form/Form.css';

const LeagueStandingForm = ({ setProducts }) => {
  const [countryCode, setCountryCode] = useState('');
  const [leagues, setLeagues] = useState([]);
  const [leagueId, setLeagueId] = useState('39');
  const [leagueStandings, setLeagueStandings] = useState([]);

  const handleProductsChange = () => {
    setProducts(leagueStandings);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleleaguesChange = (data) => {
    setLeagues(data);
  };

  const handleleagueIdChange = (e) => {
    setLeagueId(e.target.value);
  };

  const handleleagueStandingsChange = (data) => {
    setLeagueStandings(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}leagues?code=${countryCode}`)
      .then((res) => {
        handleleaguesChange(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}rank?league=${leagueId}`)
      .then((res) => {
        handleleagueStandingsChange(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [leagueId]);

  useEffect(() => {
    handleProductsChange();
  }, [leagueStandings]);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Find the standings of your favourite league</h1>
        <div className="form-inputs">
          <label className="form-label">
            Choose a country to get it's leagues
          </label>
          <input
            className="form-input"
            type="text"
            name="country"
            placeholder="Country Code Ex: jo"
            value={countryCode}
            onChange={handleCountryCodeChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <button className="form-input-btn" type="submit">
          Get Leagues
        </button>
        <div className="form-inputs">
          <label className="form-label" for="cars">
            Then Choose a League
          </label>

          <select
            value={leagueId}
            onChange={handleleagueIdChange}
            className="form-input"
            name="cars"
            id="cars"
          >
            {leagues.map((league) => {
              return <option value={league.id}>{league.name}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default LeagueStandingForm;
