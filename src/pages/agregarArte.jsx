import React, { useState } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Dropzone from "react-dropzone";
import { Row, Col, FormGroup, Card } from "reactstrap";
import { Button } from "react-bootstrap";
import "../css/billing.css";

const AgregarArte = ({ profile }) => {
  const [form, setForm] = useState({});
  let history = useHistory();

  const [selectedFiles, setselectedFiles] = useState([]);

  const handleChange = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const deleteImg = (img) => {
    console.log("deleting img", img);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
    const storage = firebase.storage();
    const uploadTask = storage
      .ref(`images/${form.nombre + selectedFiles[0].name}`)
      .put(selectedFiles[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        // Error function ...
        console.error(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(form.nombre + selectedFiles[0].name)
          .getDownloadURL()
          .then((url) => {
            const db = firebase.firestore();
            console.log(form);
            db.collection("artworks")
              .add({
                artistID: profile.userID,
                artista: profile.firstName + profile.lastName,
                categoria: form.categorias,
                fecha_de_elaboracion: new Date(),
                name: form.nombre,
                url,
              })
              .then(function (docRef) {
                history.push("/portfolio");
              });
          });
      }
    );
  };

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );

    setselectedFiles(files);
  }

  return (
    <React.Fragment>
      <body className="body">
        <form id="myform" onSubmit={submit}>
          <header>Nueva Arte</header>
          <div className="area">
            <div className="row">
              <input
                type="text"
                name="nombre"
                id="phone"
                onChange={handleChange}
              />
              <label for="nombre">Nombre</label>
            </div>
            <div className="row">
              <div className="col2">
                <input type="number" name="precio" onChange={handleChange} />
                <label for="precio">Precio</label>
              </div>
              <div className="col2 selectdiv">
                <select
                  id="categorias"
                  name="categorias"
                  onChange={handleChange}
                >
                  <option disabled selected value>
                    {" "}
                    Seleciona Una Categoria{" "}
                  </option>
                  <option value="Realismo">Realismo</option>
                  <option value="Impresionismo">Impresionimso</option>
                  <option value="abstracto">Abstracto</option>
                  <option value="surrealismo">Surrealismo</option>
                  <option value="pop">POP</option>
                </select>
                <label for="categoria">Categoria</label>
              </div>
            </div>
            <div className="row">
              <FormGroup>
                <Dropzone
                  accept="image/*"
                  onDrop={(acceptedFiles) => {
                    handleAcceptedFiles(acceptedFiles);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className="dropzone">
                      <div
                        className="dz-message needsclick"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <div
                          className="dz-message needsclick"
                          style={{
                            heigth: 100,
                            textAllign: "center",
                            position: "relative",
                          }}
                        >
                          <div className="mb-3">
                            <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                          </div>
                          <h4>Click o arastra tu arte aqui</h4>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>
                <div className="dropzone-previews mt-3" id="file-previews">
                  {selectedFiles.map((f, i) => {
                    return (
                      <Card
                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                        key={i + "-file"}
                      >
                        <div className="p-2">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <img
                                data-dz-thumbnail=""
                                height="80"
                                className="avatar-sm rounded bg-light"
                                alt={f.name}
                                src={f.preview}
                              />
                            </Col>
                            <Col>
                              <p className="mb-0">
                                <strong>{f.formattedSize}</strong>
                              </p>
                            </Col>
                            <Col className="col-auto">
                              <i
                                className="text-danger mdi mdi-close font-size-18 mr-3"
                                id="deletetooltip"
                                onClick={() => deleteImg(f)}
                              ></i>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </FormGroup>
            </div>
          </div>
          <div className="area">
            <div className="ckeckarea">
              <input
                type="checkbox"
                name="checkbox1"
                id="checkbox1"
                onclick="autofilling(this.form)"
              />
              <label for="checkbox1">
                Estoy de acuerdo con la polica de la empresa.
              </label>
            </div>
          </div>
          <div className="black_border flex_row row">
            <input type="submit" value="Agregar" className="btnEnviar" />
          </div>
        </form>
      </body>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(AgregarArte);
