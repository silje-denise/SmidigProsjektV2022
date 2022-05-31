import React from 'react';

const GameCard = ({color1, color2, name, description, numberOfStars, gameCardIllustration}) => {
  return (
    <div className='gameCardView' style={{
        backgroundImage: `linear-gradient(-60deg, ${color1}, ${color2})`}}>
            <div className='gameCardIllustartion'style={{
              backgroundImage: `url(${gameCardIllustration})`}}></div>
            <div className='starContainer'>
                <p>{numberOfStars}</p>
                <div className='star'></div>
            </div>
        
          <div className='gameCardDescription'>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <div className='gameIcon'></div>
            </div>
      </div>
  );
}

export default GameCard;