import Modal from "react-modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function MainInfo() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'center'
    },
    overlay: {zIndex: 1000}
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  Modal.setAppElement(document.querySelector('#root'));

  return (
    <div className="main-info">
      <p>Інформація про ділянку:</p>
      Кадастровий номер: 2120480100:10:001:0400
      <br/>
      Площа: 2,9606 га
      <br/>
      Периметр: 768,95 м
      <br/>
      Кадастровий план земельної ділянки: <button className="open-modal-button" onClick={openModal}>Переглянути</button>
      <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button className="button-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img className="plan-image" src={require('../assets/images/plan.jpg')} alt=""/>
      </Modal>
      <br/>
    </div>
  )
}

export default MainInfo;
