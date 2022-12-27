import "./Album.css";
import { useSelector, useDispatch } from "react-redux";
import { AddAlbum, DeleteAlbum } from "./Redaxxx";
import { useState } from "react";
function Album() {
  const myalbum = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const [UserId, SeteUserid] = useState("");
  const [Id, SeteId] = useState("");
  const [Title, SeteTitle] = useState("title");
  const adduserid = (e) => {
    SeteUserid(e.target.value);
  };
  const addid = (e) => {
    SeteId(e.target.value);
  };
  const addtitle = (e) => {
    SeteTitle(e.target.value);
  };
  const handelclick = () => {
    dispatch(AddAlbum({ UserId: UserId, Id: Id, Title: Title }));
    window.alert("l'ajoute est fait ");
  };
  const deltalbum = (e) => {
    dispatch(DeleteAlbum(e));
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>userrId</th>
            <th>id</th>
            <th>title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myalbum.map((Album, index) => {
            return (
              <tr key={index}>
                <td>{Album.userId}</td>
                <td>{Album.id}</td>
                <td>{Album.title}</td>
                <td>
                  <button value="supprimer" onClick={() => deltalbum(Album.id)}>
                    supprimer
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="Userid"
          id=""
          aria-describedby="helpId"
          onChange={(e) => adduserid(e)}
          placeholder="User id"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="Id"
          id=""
          aria-describedby="helpId"
          onChange={(e) => addid(e)}
          placeholder=" id"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="Title"
          id="Title"
          aria-describedby="helpId"
          onChange={(e) => addtitle(e)}
          placeholder="Title"
        />
        <button className="btn btn-primary" onClick={() => handelclick()}>
          ajouter
        </button>
      </div>
    </div>
  );
}

export default Album;
