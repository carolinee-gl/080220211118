import React from 'react';
import '../../App.css';

const Reviews = () => {
    return (
        <div className="reviews">
        <header className="reviewsHeader">
         <h4>Последние отзывы</h4>
          <a className="reviewsLink" href="">Все отзывы</a>
          <div className="reviewsImages">
            <div className="reviewsImage reviewsLikesImage">131</div>
            <div className="reviewsImage reviewsCommentsImage">14</div>
          </div>
        </header>
      </div>
    ) }

    export default Reviews;