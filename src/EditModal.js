import React from "react";

const EditModal = ({ text, onSubmit, onClose }) => (
    <div>
      <form onSubmit={onSubmit}>
        <input name="text" defaultValue={text} />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );

  export default EditModal;