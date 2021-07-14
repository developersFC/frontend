import { useState } from 'react';

import LeagueStandingForm from '../LeagueStanding/LeagueStandingForm';
import AddFavouriteTeam from '../AddFavouriteTeam';
import Table from '../Table';

import './Form.css';

const Form = ({ findOrAdd }) => {
  const [products, setProducts] = useState(['s']);

  return (
    <div className="form-container">
      {findOrAdd === 'find' && (
        <>
          <div className="form-content-left">
            <Table products={products} />
          </div>
          <LeagueStandingForm setProducts={setProducts} />
        </>
      )}
      {findOrAdd === 'add' && (
        <>
          <div className="form-content-left">
            <h1>Find you favourite teams</h1>
          </div>
          <AddFavouriteTeam/>
        </>
      )}
    </div>
  );
};

export default Form;
