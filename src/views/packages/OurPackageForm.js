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

const OurPackageForm = ({
  showForm,
  setShowForm,
  handleSaveOurPackage,
  ourPackageToEdit,
  isEditing,
}) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState([""]);
  const [price, setPrice] = useState("");
  const [packageCover, setPackageCover] = useState("");
  const [imageFile, setImageFile] = useState({});

  return (
    <Modal isOpen={showForm} toggle={() => setShowForm(!showForm)}>
      <ModalHeader toggle={() => setShowForm(!showForm)}>
        {isEditing ? "Edit Package" : "Add Package"}
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            placeholder="Package Name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={isEditing ? ourPackageToEdit.name : ""}
          />
        </FormGroup>
        <FormGroup>
          <Label>Contents:</Label>
          <Input
            placeholder="Insert contents here"
            onChange={(e) => setContent(e.target.value)}
            defaultValue={isEditing ? ourPackageToEdit.content : ""}
          />
        </FormGroup>
        <FormGroup>
          <Label>Price:</Label>
          <Input
            placeholder="Package Price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={isEditing ? ourPackageToEdit.price : ""}
          />
        </FormGroup>
        <FormGroup>
          <Label>Package Cover Photo:</Label>
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
            const formData = new FormData();
            formData.append("image", imageFile);
            let apiOptions = {
              method: "POST",
              body: formData,
            };
            fetch("https://cap3backend.herokuapp.com/admin/upload", apiOptions)
              .then((res) => res.json())
              .then((res) => {
                handleSaveOurPackage(name, content, price, res);
                setName("");
                setContent([]);
                setPrice("");
                setPackageCover("");
              });
          }}
        >
          {isEditing ? "Update Package" : "Save Package"}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default OurPackageForm;
