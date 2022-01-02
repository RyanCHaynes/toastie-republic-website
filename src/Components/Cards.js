import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Environments!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Demo.jpg'
              text='Explore environments and develop relationships with a wide cast of characters'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/Demo.jpg'
              text='Travel through the City in the Clouds'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Demo.jpg'
              text='Set Sail on Uncharted oil oceans'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/Demo.jpg'
              text='Blast the Baddies with an array of weapons'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Demo.jpg'
              text='Ride through the Forgotten Rails'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
