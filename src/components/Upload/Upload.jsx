import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { ReactComponent as UploadFile } from "../../assets/images/upload-file.svg";
import AttachedFile from "../AttachedFile/AttachedFile";
import { Title, SubTitle, UploadDocumentArea, InputFile } from "./styles";

const UploadDocument = (props) => {
  const { handleHash } = props;

  const [uploading, setUploading] = useState(false);

  const [file, setFile] = useState({});

  const [attached, setAttached] = useState(false);

  const [dragging, setDragging] = useState(false);

  const [attachmentError, setAttachError] = useState(false);

  const hiddenFileInput = React.useRef(null);

  const handleCloseAttachedFile = () => {
    setAttached(false);
    setFile({});
    handleHash(``);
  };

  const handleClick = async (e) => {
    if (isFacebookApp()) document.getElementById("dragndrop").removeAttribute("accept");
    if (!attached) hiddenFileInput.current?.click();
  };

  const uploadFile = async (fileToUpload) => {
    try {
      setUploading(true);
      setFile(fileToUpload);
      setAttached(true);
      setAttachError(false);
      setUploading(false);
    } catch (err) {
      setAttachError(true);
      setAttached(false);
      setFile({});
      setUploading(false);
    }
  };

  const isFacebookApp = () => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1 ) || (ua.indexOf("Instagram") > -1);
 };

  const handleChange = (e) => {
    if (attached) return;
    if (!e.target.files?.length) return;
    const selectedFile = e.target.files[0];
    uploadFile(selectedFile);
  };

  const handleDragOver = (e) => {
    setDragging(true);
    if (attached) return;
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    setDragging(true);
    if (attached) return;
    e.preventDefault();
  };
  const handleDragLeave = (e) => {
    setDragging(false);
    if (attached) return;
    e.preventDefault();
  };
  const handleDrop = (e) => {
    setDragging(false);
    if (attached) return;
    if (!e.dataTransfer.files.length) return;

    e.preventDefault();

    const draggedFile = e.dataTransfer.files[0];

    uploadFile(draggedFile);
  };

  const renderNotAttached = (uploadingDocument, error) => {
    return uploadingDocument ? (
      <CircularProgress />
    ) : (
      <>
        {error ? (
          <Alert severity="error">
            Houve um erro ao salvar o documento. Por favor, tente novamente.
          </Alert>
        ) : null}
        <UploadFile />
        <InputFile
          type="file"
          accept=".pdf"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
        <Title>Anexo de documentos</Title>
        <SubTitle>Somente arquivos com a extensão .pdf</SubTitle>
      </>
    );
  };

  const renderAttached = (fileName) => {
    return (
      <>
        <Title>Documento Anexado</Title>
        <AttachedFile
          handleClose={handleCloseAttachedFile}
          fileName={fileName}
        />
      </>
    );
  };

  return (
    <UploadDocumentArea
      id="dragndrop"
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      attached={attached}
      dragging={dragging}
    >
      {attached
        ? renderAttached(file.name)
        : renderNotAttached(uploading, attachmentError)}
    </UploadDocumentArea>
  );
};

export { UploadDocument };
