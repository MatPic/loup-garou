import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import Button from "../components/Button";


const Start = () => {
  const { user } = useSession();
  return (
    <div>
      <Button>
        <Link to="/create" onClick={() => createGame(user)}> Nouvelle partie</Link>
      </Button>
      <br />
      <Button>
        <Link to="/join">
          Rejoindre une partie
        </Link>
      </Button>
    </div>
  );
};

export default Start;
