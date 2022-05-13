import React from 'react'

const LocationCard = ({image, name}) => {

    return (
          <div className='locationView' style={{
              backgroundImage: `url(${image})`}}>
              <div className='locationFader'>
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