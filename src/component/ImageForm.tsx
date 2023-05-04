import axios from "axios";
import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import NoProfileImg from "../assets/noProfile.png";

const FileUploadContainer = styled.div``;

const FileUploadForm = styled.form``;

const FileInput = styled.input`
  display: none;
`;

const BlankImage = styled.img`
  width: 200px;
`;

const UploadedImage = styled.img`
  width: 200px;
  height: 200px;
  border: 0.5px solid #ddd;
  border-radius: 50%;
`;

type UploadImage = {
  file: File;
  thumbnail: string;
  type: string;
};

const ImageForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadImage | null>(null);
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const uploadProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    // const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  const showImage = useMemo(() => {
    if (!imageFile && imageFile == null) {
      return <BlankImage onClick={handleClickFileInput} src={NoProfileImg} />;
    }
    return (
      <UploadedImage
        src={imageFile.thumbnail}
        alt={imageFile.type}
        onClick={handleClickFileInput}
      />
    );
  }, [imageFile]);

  return (
    <FileUploadContainer>
      {showImage}
      <FileUploadForm>
        <FileInput
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          ref={fileInputRef}
          onChange={(event) => uploadProfile(event)}
        />
      </FileUploadForm>
    </FileUploadContainer>
  );
};

export default ImageForm;
