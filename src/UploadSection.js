import clsx from "clsx";
import React, { useRef, useState } from "react";
import { ChromePicker, CirclePicker, SketchPicker } from "react-color";
import Text from "./editor-functions/Text";
import Background from "./editor-functions/Background";
import Media from "./editor-functions/Media";
import html2canvas from "html2canvas";

const UploadSection = ({
  images,
  setImages,
  setEditElements,
  editElements,
  eleId,
  setObjToUpdate,
  objToUpdate,
  setEleId,
  textField,
  setTextField,
}) => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleDownload = () => {
    const downloadEle = document.getElementById("customImage");
    html2canvas(downloadEle).then((canvas) => {
      const generatedImg = canvas.toDataURL("image/png");
      fetch(generatedImg)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "file name", { type: "image/png" });
          console.log(file, URL.createObjectURL(file));
        });
      var a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "myfile.png";
      a.click();
    });
  };

  return (
    <React.Fragment>
      <div className="md:flex flex-col gap-10 hidden">
        <div className="flex items-start gap-4">
          <button
            className="bg-blue-500 p-3 rounded text-white"
            onClick={() => setSelectedTab(selectedTab === "Text" ? "" : "Text")}
          >
            Text
          </button>
          <button
            className="bg-blue-500 p-3 rounded text-white"
            onClick={() =>
              setSelectedTab(selectedTab === "Media" ? "" : "Media")
            }
          >
            Media
          </button>
          <button
            className="bg-blue-500 p-3 rounded text-white"
            onClick={() =>
              setSelectedTab(selectedTab === "Background" ? "" : "Background")
            }
          >
            Background
          </button>
        </div>
        <div className="d-grid">
          {selectedTab === "Background" && (
            <Background
              editElements={editElements}
              setEditElements={setEditElements}
            />
          )}
          {selectedTab === "Media" && (
            <Media
              images={images}
              setImages={setImages}
              editElements={editElements}
              setEditElements={setEditElements}
              eleId={eleId}
              objToUpdate={objToUpdate}
              setObjToUpdate={setObjToUpdate}
            />
          )}
          {selectedTab === "Text" && (
            <Text
              editElements={editElements}
              setEditElements={setEditElements}
              eleId={eleId}
              objToUpdate={objToUpdate}
              setTextField={setTextField}
              textField={textField}
              setObjToUpdate={setObjToUpdate}
            />
          )}
        </div>
        <div className="flex gap-4 items-center">
          <button
            className="bg-blue-500 p-3 rounded text-white mt-4"
            onClick={() => {
              handleDownload();
            }}
          >
            Save
          </button>
          <button
            className="bg-blue-500 p-3 rounded text-white mt-4"
            onClick={() => {
              setEleId("");
            }}
          >
            Deselect All
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadSection;
