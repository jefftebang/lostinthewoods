import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import AlbumRow from "./AlbumRow";
import AlbumForm from "./AlbumForm";
import Loading from "../../components/Loading";
import { MDBBtn } from "mdbreact";

const Albums = (props) => {
  const [albums, setAlbums] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [albumToEdit, setAlbumToEdit] = useState({});
  const [indexToEdit, setIndexToEdit] = useState("");
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cap3backend.herokuapp.com/admin/albums")
      .then((res) => res.json())
      .then((res) => {
        setAlbums(res);
        setIsLoading(false);
      });
  }, []);

  const handleSaveAlbum = (title, imgPath) => {
    setIsLoading(true);

    if (isEditing) {
      let editingTitle = title;
      let editingImgPath = imgPath;

      if (title === "") editingTitle = albumToEdit.title;
      if (imgPath === "") editingImgPath = albumToEdit.imgPath;

      const apiOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: albumToEdit._id,
          title: editingTitle,
          imgPath: editingImgPath,
        }),
      };

      fetch("https://cap3backend.herokuapp.com/admin/updatealbum", apiOptions)
        .then((res) => res.json())
        .then((res) => {
          let newAlbums = albums.map((album) => {
            if (album._id === albumToEdit._id) {
              return res;
            }
            return album;
          });
          setAlbums(newAlbums);
          setIsLoading(false);
        });
    } else {
      let apiOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          imgPath,
        }),
      };

      fetch("https://cap3backend.herokuapp.com/admin/addalbum", apiOptions)
        .then((res) => res.json())
        .then((res) => {
          setIsLoading(false);
          setAlbums([...albums, res]);
        });
    }
    setShowForm(false);
    setAlbumToEdit({});
    setIndexToEdit("");
    setIsEditing(false);
  };

  const handleDeleteAlbum = (id) => {
    let apiOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    };

    fetch("https://cap3backend.herokuapp.com/admin/deletealbum", apiOptions)
      .then((res) => res.json())
      .then((res) => {
        const newAlbums = albums.filter((album) => {
          return album._id != id;
        });
        setAlbums(newAlbums);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-center py-5 teal-text font-weight-bold mt-5">
        Gallery
      </h1>
      {sessionStorage.isAdmin === "true" && (
        <div className="text-center">
          <MDBBtn
            color="dark-green"
            className="rounded-0"
            onClick={() => setShowForm(!showForm)}
          >
            Add Photo
          </MDBBtn>
        </div>
      )}
      <div>
        <AlbumForm
          showForm={showForm}
          setShowForm={setShowForm}
          handleSaveAlbum={handleSaveAlbum}
          albumToEdit={albumToEdit}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setAlbumToEdit={setAlbumToEdit}
        />
        <div className="d-flex justify-content-center flex-wrap">
          {albums.map((album) => {
            return (
              <AlbumRow
                key={album._id}
                album={album}
                handleDeleteAlbum={handleDeleteAlbum}
                setShowForm={setShowForm}
                setIsEditing={setIsEditing}
                setAlbumToEdit={setAlbumToEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Albums;
