import logo from "./logo.svg";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import UploadSection from "./UploadSection";
import ImageEditor from "./ImageEditor";

const newData = {
  canvasDimenssion: {
    height: 2000,
    width: 2000,
    advID: 12,
    thumbnailImageUrl: {
      image_path: 
        'https://self-biz.servepratham.com/uploads/user_templates/b8461e4435d2623ca72a20e075bee845.png',
      user_id: 12,
      meta_data: '{"templateType":"private"}',
      type: 'thumbnail',
      id: 21
    },
    updateTime: '2024-03-28T04:58:19.446Z'
  },
  canvasElement: [
    {
      type: 'BACKGROUND',
      xPos: 0,
      yPos: 0,
      height: 2000,
      width: 2000,
      scaleHeight: 2000,
      scaleWidth: 2000,
      alignPos: 'align-left',
      meta: { roundness: 0, backgroundColor: '#004AAD', uri: '' }
    },
    {
      type: 'IMAGE',
      xPos: 35,
      yPos: 15,
      height: 50,
      width: 50,
      scaleHeight: 266.015625,
      scaleWidth: 266.015625,
      alignPos: 'align-left',
      meta: {
        roundness: 100,
        backgroundColor: 'white',
        uri: 
          'https://self-biz.servepratham.com/uploads/user_templates/a0494d53628b1bf821d594a1f56a76cd.',
        uriId: 17,
        opacity: 1,
        rotation: 0
      }
    },
    {
      type: 'TEXT',
      xPos: 50,
      yPos: 315,
      height: 100,
      width: 190,
      scaleHeight: 100,
      scaleWidth: 304.296875,
      meta: {
        text: 'Gaurav websenor ',
        fontSize: 19,
        scaleFontSize: 30.4296875,
        fontWeight: '700',
        fontColor: '#ffffff',
        fontStyle: 'normal',
        textDecorationLine: 'none',
        textAlign: 'left'
      }
    }
  ],
};

const defaultData = {
  canvasDimenssion: {
    width: 500,
    height: 500,
    thumbnailImageUrl: null,
  },
  canvasElement: [
    {
      type: "BACKGROUND",
      xPos: 0,
      yPos: 0,
      height: 2000,
      width: 2000,
      scaleHeight: 2000,
      scaleWidth: 2000,
      alignPos: "align-left",
      meta: { roundness: 0, backgroundColor: "", uri: "" },
    },
  ],
}

function App() {
  const [images, setImages] = useState([]);
  const [editElements, setEditElements] = useState(defaultData);
  const [prev, setPrev] = useState(0);
  const [brightnessVal, setBrightnessVal] = useState(1);
  const [blurVal, setBlurVal] = useState(0);
  const [eleId, setEleId] = useState("");
  const [objToUpdate, setObjToUpdate] = useState(null);
  const [textField, setTextField] = useState(true);

  return (
    <React.Fragment>
      <div className="d-flex">
        <UploadSection
          images={images}
          setImages={setImages}
          setEditElements={setEditElements}
          editElements={editElements}
          eleId={eleId}
          objToUpdate={objToUpdate}
          setObjToUpdate={setObjToUpdate}
          setTextField={setTextField}
          textField={textField}
          setEleId={setEleId}
        />
        <ImageEditor
          editElements={editElements}
          setEleId={setEleId}
          eleId={eleId}
          setEditElements={setEditElements}
          setObjToUpdate={setObjToUpdate}
          objToUpdate={objToUpdate}
          setTextField={setTextField}
          textField={textField}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
