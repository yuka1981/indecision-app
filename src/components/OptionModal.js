import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="seletct option"
      onRequestClose={props.handleClearSelectedOption}
    >
      <h3>Select Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedOption}>OK</button>
    </Modal>
  </div>
);

export default OptionModal;
