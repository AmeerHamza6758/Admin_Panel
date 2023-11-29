// Cards.js
import React from 'react';
import './Cards.css';
import { CardsData } from '../../Data/Data';
import CustomCard from '../card/CustomCard'; // Renamed the import to CustomCard

function Cards() {
  return (
    <div className='Cards'>
      {CardsData.map((CardsData, id) => {
        return (
          <div className='parentContainer' key={id}>
            <CustomCard
              title={CardsData.title}
              color={CardsData.color}
              barValue={CardsData.barValue}
              value={CardsData.value}
              png={CardsData.png}
              series={CardsData.series}
            />

          </div>
        );
      })}
    </div>
  );
}

export default Cards;
