
import React from 'react';
import Match from './Match';

function MatchList(props) {

    const oneMatch = props.matchData.map((match) =>{

    return (
      <Match
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />
    );
  });

    return (
      <section className="PlayerList MatchList">
        {oneMatch}
      </section>
    );
  
    }
export default MatchList;