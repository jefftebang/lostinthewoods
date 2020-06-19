import React from "react";
import CardTemplate2 from "../../components/CardTemplate2";
import { MDBBtn } from "mdbreact";

const AlbumRow = ({
  album,
  handleDeleteAlbum,
  setShowForm,
  setIsEditing,
  setAlbumToEdit,
}) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <CardTemplate2 src={album.imgPath} title={album.title} />
      {sessionStorage.isAdmin === "true" && (
        <div className="card-footer text-center">
          <MDBBtn
            color="amber"
            className="text-white btn-md"
            onClick={() => {
              setShowForm(true);
              setIsEditing(true);
              setAlbumToEdit(album);
            }}
          >
            Edit
          </MDBBtn>
          <MDBBtn
            color="red darken-3"
            className="text-white btn-md"
            onClick={() => handleDeleteAlbum(album._id)}
          >
            Delete
          </MDBBtn>
        </div>
      )}
    </div>
  );
};

export default AlbumRow;
