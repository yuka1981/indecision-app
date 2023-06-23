import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="seletct option"
      onRequestClose={props.handleClearSelectedOption}
      className="modal"
    >
      <h3 className="modal__title">Select Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleClearSelectedOption}>
        OK
      </button>
    </Modal>
  </div>
);

export default OptionModal;
