import React from "react";
import { Button } from "react-bootstrap";

const EditModal = ({ text, onSubmit, onClose }) => (
    <div>
      <form onSubmit={onSubmit}>
        <input name="text" defaultValue={text} />
        <Button type="submit" variant="secondary">Save</Button>
        <Button type="button" onClick={onClose} variant="secondary">Close</Button>
      </form>
    </div>
  );

  export default EditModal;