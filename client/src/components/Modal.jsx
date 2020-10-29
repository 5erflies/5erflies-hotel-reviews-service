import React from 'react';
import ReactDOM from 'react-dom';
import reactModal from 'react-modal';
import TotalRating from './TotalRating';
import Ratings from './Ratings';
import ReviewList from './ReviewList';
import { ModalCloseButton, StyledModal, Overlay, ScrollableReviewList, StyledEntireModal, LeftSideFlex } from './style.jsx'

function Modal(props) {
  const {
    show, closeModal, totalRating, averageRatings, reviews,
  } = props;
  const modal = (
    <>
      <StyledEntireModal centered>
        <Overlay show={show} onClick={closeModal} />
        <StyledModal show={show}>
          <LeftSideFlex>
            <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
            <TotalRating totalRating={totalRating} />
            <Ratings averageRatings={averageRatings} show={show} />
          </LeftSideFlex>
          <ScrollableReviewList>
            <ReviewList reviews={reviews} show={show} />
          </ScrollableReviewList>
        </StyledModal>
      </StyledEntireModal>

    </>
  );
  return ReactDOM.createPortal(
    modal, document.getElementById('modalRoot'),
  );
}

export default Modal;
