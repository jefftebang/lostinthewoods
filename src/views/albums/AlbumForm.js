import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

// This component will receive props, and will use the "Key names" of the props received.

const AlbumForm = ({
  showForm,
  setShowForm,
  handleSaveAlbum,
  setAlbumToEdit,
  setIsEditing,
  albumToEdit,
  isEditing,
}) => {
  // We created these states to temporarily save the data/ information from our input fields.
  const [title, setTitle] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [imageFile, setImageFile] = useState({});

  // In our modal, the initial value of isOpen is false. (Which is the default value of showForm.)

  // When a user clicks the add button, the state will change. showForm is not equal to true.

  // Since there is a state change (showForm), the app will re-render.
  return (
    <Modal
      isOpen={showForm}
      toggle={() => {
        setShowForm(!showForm);
        setAlbumToEdit({});
        setIsEditing(false);
      }}
    >
      <ModalHeader
        toggle={() => {
          setShowForm(!showForm);
        }}
      >
        {isEditing ? "Edit Album" : "Add Album"}
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Title:</Label>
          <Input
            placeholder="Title"
            // We used this function (onChange) to capture the data we need
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={isEditing ? albumToEdit.title : ""}
          />
        </FormGroup>
        <FormGroup>
          <Label>Album Cover:</Label>
          <Input
            type="file"
            placeholder="Album Cover"
            className="border"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </FormGroup>
        <Button
          color="success"
          block
          onClick={() => {
            // This function came from the Locations.js and we received it as a prop.
            // This function expects 2 arguments.
            // The arguments name and location came from the state of this component.

            const formData = new FormData();
            formData.append("image", imageFile);
            let apiOptions = {
              method: "POST",
              body: formData,
            };
            fetch("https://cap3backend.herokuapp.com/admin/upload", apiOptions)
              .then((res) => res.json())
              .then((res) => {
                handleSaveAlbum(title, res);
                setTitle("");
                setImgPath("");
              });
          }}
        >
          {isEditing ? "Update Album" : "Save Album"}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default AlbumForm;
