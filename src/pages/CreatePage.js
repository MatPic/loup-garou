import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import { useMasterGame, addPlayer } from '../services/MasterGame';
import styled from "styled-components";
import Input from '../components/Input';

const Code = styled.p`
  width: 100%;
  display: block;
  font-size: 1.5em;
  color: #888;
  font-weight:bold;
`;

const ReductButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid steelblue;
  padding: 1em 1em;
  cursor: pointer;
  color: steelblue;
  transition: all .3s;
  white-space: nowrap;
  text-decoration: none;
  font-size: 1em;
  margin: 10px;
  margin-top: 0;
  
  & a {
    color: steelblue;
  }
  
  &:hover {
    background-color: steelblue;
    color: white;
    & a {
      color: white;
    }
  }
`;

const Form = styled.form`
  display: inline-flex;
  width: 100%;
`;

const AddPlayerForm = () => {
  const [value, setValue] = useState('');
  const { game } = useMasterGame();
    console.log("master game id", game.id);
    console.log("master game set ", game.players);
    console.log("master game", game);

  const handleSubmit = e => {
    e.preventDefault();
    value && addPlayer(value, game);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Ajouter le nom d'un joueur..."
        onChange={e => setValue(e.target.value)}
      />
      <ReductButton>+</ReductButton>
    </Form>
  );
};

const CreatePage = (props) => {
  const { game } = useMasterGame();
  const players = game.players || [];

  return (
    <div>
      <p>Identifiant de la partie :</p>
      <Code>{game.code}</Code>
      <div>
        {players.map((player, index) => (
          <div key={index}>
            {player.name}
          </div>
        ))}
      </div>
      <p>Ajouter un joueur à la partie :</p>
      <AddPlayerForm/>
      <Link to="/night">
          <Button>Démarrer la partie</Button>
      </Link>
    </div>
  );
};

export default CreatePage;
