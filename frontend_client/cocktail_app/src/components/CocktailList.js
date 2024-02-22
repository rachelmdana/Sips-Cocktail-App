import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CocktailCard from './CtailCard';
import '../styles/Drinks.css';

function CocktailList({ title, cocktail }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="cocktail-container">
      <div className="cocktail-list">
        <h2 className="cocktail-list-title">{title}</h2>
        {isMobile && (
          <Carousel showThumbs={false} showStatus={false}>
            {cocktail && cocktail.length > 0 && cocktail.map((item, index) => (
              <div key={index}>
                <CocktailCard cocktail={item} />
              </div>
            ))}
          </Carousel>
        )}
        {!isMobile && (
          <>
            {cocktail && cocktail.length > 0 && cocktail.map((item, index) => (
              <div key={index}>
                <CocktailCard cocktail={item} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default CocktailList;