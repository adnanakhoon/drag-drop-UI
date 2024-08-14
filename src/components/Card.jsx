import React, { useState } from 'react';
import Modal from 'react-modal';
import './Card.css'; // Import the CSS file

const Card = ({ content }) => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderContent = () => {
    if (showMore) {
      return (
        <>
          {content.substring(0, content.length / 2)}...
          <button className="read-more-btn" onClick={openModal}>
            Read More
          </button>
        </>
      );
    } else {
      return `${content.substring(0, content.length / 2)}...`;
    }
  };

  return (
    <div className="card">
      <p>{renderContent()}</p>
      <button className="toggle-btn" onClick={toggleShowMore}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detailed Text"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Card Details</h2>
        <p>{content}</p>
        <button className="close-modal-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Card;
