import clsx from "clsx";
import React, { useState } from "react";

const Text = ({
  setEditElements,
  editElements,
  eleId,
  objToUpdate,
  textField,
  setTextField,
  setObjToUpdate,
}) => {
  const [fontSizeVal, setFontSizeVal] = useState(16);
  const handleText = () => {
    const newEle = {
      type: "TEXT",
      xPos: 30,
      yPos: 30,
      height: 100,
      width: 190,
      scaleHeight: 100,
      scaleWidth: 190,
      meta: {
        backgroundColor: "transparent",
        text: "Add a Text",
        fontSize: 19,
        scaleFontSize: 19,
        fontWeight: "400",
        fontColor: "black",
        fontStyle: "normal",
        textDecorationLine: "none",
        textAlign: "left",
      },
    };
    setEditElements({
      ...editElements,
      canvasElement: [...editElements?.canvasElement, newEle],
    });
  };

  const handleBold = () => {
    const font = document.getElementById(eleId);
    if (font.style.fontWeight === "bold") {
      font.style.fontWeight = "400";
    } else {
      font.style.fontWeight = "bold";
    }
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: { ...clone?.meta, fontWeight: font.style.fontWeight },
    };
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (editElements?.canvasElement[i]?.id == clone?.id) {
        newArr.push(updatedObj);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setObjToUpdate(updatedObj);
    setEditElements({ ...editElements, canvasElement: newArr });
  };

  const handleItalic = () => {
    const font = document.getElementById(eleId);
    if (font.style.fontStyle === "italic") {
      font.style.fontStyle = "normal";
    } else {
      font.style.fontStyle = "italic";
    }
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: { ...clone?.meta, fontStyle: font.style.fontStyle },
    };
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (editElements?.canvasElement[i]?.id == clone?.id) {
        newArr.push(updatedObj);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setObjToUpdate(updatedObj);
    setEditElements({ ...editElements, canvasElement: newArr });
  };

  const handleUnderline = () => {
    const font = document.getElementById(eleId);
    if (font.style.textDecoration === "underline") {
      font.style.textDecoration = "none";
    } else {
      font.style.textDecoration = "underline";
    }
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: { ...clone?.meta, textDecoration: font.style.textDecoration },
    };
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (editElements?.canvasElement[i]?.id == clone?.id) {
        newArr.push(updatedObj);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setObjToUpdate(updatedObj);
    setEditElements({ ...editElements, canvasElement: newArr });
  };

  const handleTextAlign = (value) => {
    const font = document.getElementById(eleId);
    font.style.textAlign = value;
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: { ...clone?.meta, textAlign: font.style.textAlign },
    };
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (editElements?.canvasElement[i]?.id == clone?.id) {
        newArr.push(updatedObj);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setObjToUpdate(updatedObj);
    setEditElements({ ...editElements, canvasElement: newArr });
  };

  const handleTextCase = (value) => {
    const font = document.getElementById(eleId);
    font.style.textTransform = value;
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: { ...clone?.meta, textTransform: font.style.textTransform },
    };
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (editElements?.canvasElement[i]?.id == clone?.id) {
        newArr.push(updatedObj);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setObjToUpdate(updatedObj);
    setEditElements({ ...editElements, canvasElement: newArr });
  };

  const handleTextColor = (e) => {
    const font = document.getElementById(eleId);
    font.style.color = e.target.value;
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: { ...clone?.meta, fontColor: font.style.color },
    };
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (editElements?.canvasElement[i]?.id == clone?.id) {
        newArr.push(updatedObj);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setObjToUpdate(updatedObj);
    setEditElements({ ...editElements, canvasElement: newArr });
  };

  const handleFontSize = (e) => {
    setFontSizeVal(e.target.value);
    const font = document.getElementById(eleId);
    font.style.fontSize = `${e.target.value}px`;
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: {
        ...clone?.meta,
        fontSize: e.target.value,
        scaleFontSize: e.target.value,
      },
    };
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (editElements?.canvasElement[i]?.id == clone?.id) {
        newArr.push(updatedObj);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setObjToUpdate(updatedObj);
    setEditElements({ ...editElements, canvasElement: newArr });
    // const filterArr = editElements.canvasElement?.filter(
    //   (e, i) => i !== clone.id
    // );
    // setEditElements({
    //   ...editElements,
    //   canvasElement: [...filterArr, clone],
    // });
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-4">
        {eleId && objToUpdate?.type === "TEXT" ? (
          <React.Fragment>
            <div>
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => {
                  setTextField(false);
                  document.getElementById(eleId).focus();
                  document.getElementById(eleId).select();
                }}
              >
                Change Text
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => handleBold()}
              >
                B
              </button>
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => handleItalic()}
              >
                I
              </button>
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => handleUnderline()}
              >
                U
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => handleTextAlign("left")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-align-left"
                >
                  <line x1="21" x2="3" y1="6" y2="6" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                  <line x1="17" x2="3" y1="18" y2="18" />
                </svg>
              </button>
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => handleTextAlign("center")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-align-center"
                >
                  <line x1="21" x2="3" y1="6" y2="6" />
                  <line x1="17" x2="7" y1="12" y2="12" />
                  <line x1="19" x2="5" y1="18" y2="18" />
                </svg>
              </button>
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => handleTextAlign("right")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-align-right"
                >
                  <line x1="21" x2="3" y1="6" y2="6" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                  <line x1="21" x2="7" y1="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => handleTextCase("uppercase")}
              >
                AA
              </button>
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => handleTextCase("capitalize")}
              >
                Aa
              </button>
              <button
                className={clsx("bg-blue-500 p-3 rounded text-white")}
                onClick={() => handleTextCase("lowercase")}
              >
                aa
              </button>
            </div>
            <div className="flex gap-4">
              <p>Pick color</p>
              <input
                type="color"
                onChange={(e) => handleTextColor(e)}
                defaultValue={objToUpdate.meta.fontColor || "black"}
              />
            </div>
            <div>
              <p>{`font Size: ${
                objToUpdate.meta.fontSize || fontSizeVal
              }px`}</p>
              <input
                type="range"
                min={0}
                max={100}
                step={0.5}
                value={objToUpdate.meta.fontSize || fontSizeVal}
                onChange={(e) => {
                  handleFontSize(e);
                }}
              />
            </div>
          </React.Fragment>
        ) : (
          <div>
            <button
              className="bg-blue-500 p-3 rounded text-white"
              onClick={() => {
                handleText();
              }}
            >
              Add Text
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Text;
