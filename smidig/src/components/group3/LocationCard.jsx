import React from 'react'

const LocationCard = ({image, name}) => {

    return (
          <div className='cardView' style={{
              backgroundImage: `url(${image})`}}>
              <div className='fader'>
                <div className='locationDescription'>
                  <p>{name}</p>
                  <div className='locationIcon'></div>
                </div>
              </div>
            </div>
    )
  }
  
  LocationCard.propTypes = {
  }
  
  export default LocationCard