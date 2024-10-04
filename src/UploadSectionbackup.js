import clsx from "clsx";
import React, { useRef, useState } from "react";
import { ChromePicker, CirclePicker, SketchPicker } from "react-color";
import Text from "./editor-functions/Text";
import Background from "./editor-functions/Background";
import Media from "./editor-functions/Media";

const UploadSection = ({
  images,
  setImages,
  setEditElements,
  editElements,
  eleId,
  setObjToUpdate,
  objToUpdate,
}) => {
  console.log(objToUpdate, editElements);
  // const imgRef = useRef();
  // const [prev, setPrev] = useState(90);
  // const [brightnessVal, setBrightnessVal] = useState(1);
  // const [blurVal, setBlurVal] = useState(0);
  // const [scaleVal, setScaleVal] = useState(0);
  // const [roundnessVal, setRoundnessVal] = useState(0);
  // const [rotateVal, setRotateVal] = useState(0);

  // const handleImageSelect = (e) => {
  //   const selectedImage = e.target.files[0];
  //   if (selectedImage) {
  //     setImages([...images, URL.createObjectURL(selectedImage)]);
  //   }
  //   const newEle = {
  //     type: "IMAGE",
  //     subtype: "footer_image",
  //     xPos: 20,
  //     yPos: 20,
  //     height: 100,
  //     width: 100,
  //     scaleHeight: 50,
  //     scaleWidth: 450,
  //     alignPos: "align-left",
  //     meta: {
  //       roundness: 0,
  //       backgroundColor: "white",
  //       uri: URL.createObjectURL(selectedImage),
  //       localFile: selectedImage,
  //     },
  //   };
  //   setEditElements({
  //     ...editElements,
  //     canvasElement: [...editElements?.canvasElement, newEle],
  //   });
  // };

  // const BaW = () => {
  //   const image = document.getElementById(eleId);
  //   if (image) {
  //     if (image.style.filter !== "") {
  //       if (image.style.filter.includes("grayscale")) {
  //         if (image.style.filter.includes("grayscale(1)")) {
  //           image.style.filter = `${image.style.filter.replace(
  //             "grayscale(1)",
  //             "grayscale(0)"
  //           )}`;
  //         } else {
  //           image.style.filter = `${image.style.filter.replace(
  //             "grayscale(0)",
  //             "grayscale(1)"
  //           )}`;
  //         }
  //       } else {
  //         image.style.filter = `${image.style.filter} grayscale(1)`;
  //       }
  //     } else {
  //       image.style.filter = "grayscale(1)";
  //     }
  //   }
  // };

  // const rotate = (val) => {
  //   if (rotateVal == 0) {
  //     setPrev(prev + val);
  //   } else {
  //     setPrev(prev + val + parseInt(rotateVal));
  //   }
  //   console.log(prev, rotateVal);
  //   const image = document.getElementById(eleId);
  //   if (image) {
  //     image.style.transform = `rotate(${
  //       rotateVal == 0 ? prev : prev + parseInt(rotateVal)
  //     }deg)`;
  //   }
  // };

  // const handleBrightness = (e) => {
  //   setBrightnessVal(e.target.value);
  //   const image = document.getElementById(eleId);
  //   if (image) {
  //     if (image.style.filter !== "") {
  //       if (image.style.filter.includes("brightness")) {
  //         image.style.filter = `${image.style.filter.replace(
  //           `brightness(${brightnessVal}`,
  //           `brightness(${e.target.value}`
  //         )}`;
  //       } else {
  //         image.style.filter = `${image.style.filter} brightness(${e.target.value})`;
  //       }
  //     } else {
  //       image.style.filter = `brightness(${e.target.value})`;
  //     }
  //   }
  // };

  // const handleBlur = (e) => {
  //   setBlurVal(e.target.value);
  //   const image = document.getElementById(eleId);
  //   if (image) {
  //     if (image.style.filter !== "") {
  //       if (image.style.filter.includes("blur")) {
  //         image.style.filter = `${image.style.filter.replace(
  //           `blur(${blurVal}`,
  //           `blur(${e.target.value}`
  //         )}`;
  //       } else {
  //         image.style.filter = `${image.style.filter} blur(${e.target.value})`;
  //       }
  //     } else {
  //       image.style.filter = `blur(${e.target.value})`;
  //     }
  //   }
  // };

  // const handleScale = (e) => {
  //   setScaleVal(e.target.value);
  //   const image = document.getElementById(eleId);
  //   if (image) {
  //     if (image.style.transform !== "") {
  //       if (image.style.transform.includes("scale")) {
  //         image.style.transform = `${image.style.transform.replace(
  //           `scale(${scaleVal}`,
  //           `scale(${e.target.value}`
  //         )}`;
  //       } else {
  //         image.style.transform = `${image.style.transform} scale(${e.target.value})`;
  //       }
  //     } else {
  //       image.style.transform = `scale(${e.target.value})`;
  //     }
  //   }
  // };

  // const handleRadius = (e) => {
  //   setRoundnessVal(e.target.value);
  //   const image = document.getElementById(eleId);
  //   if (image) {
  //     image.style.borderRadius = `${e.target.value}%`;
  //   }
  // };

  // const handleRotate = (e) => {
  //   setRotateVal(e.target.value);
  //   const image = document.getElementById(eleId);
  //   if (image) {
  //     if (image.style.transform !== "") {
  //       if (image.style.transform.includes("rotate")) {
  //         image.style.transform = `${image.style.transform.replace(
  //           `rotate(${rotateVal}`,
  //           `rotate(${e.target.value}`
  //         )}`;
  //       } else {
  //         image.style.transform = `${image.style.transform} rotate(${e.target.value}deg)`;
  //       }
  //     } else {
  //       image.style.transform = `rotate(${e.target.value}deg)`;
  //     }
  //   }
  // };

  // const handleText = () => {
  //   const newEle = {
  //     type: "TEXT",
  //     subtype: "name_text",
  //     xPos: 30,
  //     yPos: 30,
  //     height: 100,
  //     width: 100,
  //     scaleHeight: 100,
  //     scaleWidth: 100,
  //     meta: {
  //       backgroundColor: "transparent",
  //       text: "Add a text",
  //       fontSize: 16,
  //       fontWeight: "400",
  //       fontColor: "black",
  //     },
  //   };
  //   setEditElements({
  //     ...editElements,
  //     canvasElement: [...editElements?.canvasElement, newEle],
  //   });
  // };

  // const handleBold = () => {
  //   const font = document.getElementById(eleId);
  //   if (font.style.fontWeight === "bold") {
  //     font.style.fontWeight = "400";
  //   } else {
  //     font.style.fontWeight = "bold";
  //   }
  // };

  // const handleItalic = () => {
  //   const font = document.getElementById(eleId);
  //   if (font.style.fontStyle === "italic") {
  //     font.style.fontStyle = "normal";
  //   } else {
  //     font.style.fontStyle = "italic";
  //   }
  // };

  // const handleUnderline = () => {
  //   const font = document.getElementById(eleId);
  //   if (font.style.textDecoration === "underline") {
  //     font.style.textDecoration = "none";
  //   } else {
  //     font.style.textDecoration = "underline";
  //   }
  // };

  // const handleTextLeft = () => {
  //   const font = document.getElementById(eleId);
  //   font.style.textAlign = "left";
  // };

  // const handleTextCenter = () => {
  //   const font = document.getElementById(eleId);
  //   font.style.textAlign = "center";
  // };

  // const handleTextRight = () => {
  //   const font = document.getElementById(eleId);
  //   font.style.textAlign = "right";
  // };

  // const handleUpperCase = () => {
  //   const font = document.getElementById(eleId);
  //   font.style.textTransform = "uppercase";
  // };

  // const handleCapitalize = () => {
  //   const font = document.getElementById(eleId);
  //   font.style.textTransform = "capitalize";
  // };

  // const handleLowerCase = () => {
  //   const font = document.getElementById(eleId);
  //   font.style.textTransform = "lowercase";
  // };

  // const handleTextColor = (e) => {
  //   console.log(e);
  //   const font = document.getElementById(eleId);
  //   font.style.color = e.target.value;
  // };

  return (
    <div className="d-grid">
      <div>
        <input
          ref={imgRef}
          type="file"
          accept="*/image"
          multiple
          hidden
          onChange={(e) => handleImageSelect(e)}
        />
        <div className="upload-section" onClick={() => imgRef.current.click()}>
          {images?.length > 0 ? (
            images?.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  width={100}
                  height={100}
                  className="h-[100px]"
                  onClick={(e) => e.stopPropagation()}
                />
              );
            })
          ) : (
            <p>Please select an image</p>
          )}
        </div>
      </div>
      <div className="d-grid">
        <Background
          editElements={editElements}
          setEditElements={setEditElements}
        />
        {/* <div>
          <p>select background image</p>
          <input
            type="file"
            onChange={(e) =>
              setEditElements({
                ...editElements,
                canvasDimensions: {
                  ...editElements.canvasDimensions,
                  background: {
                    ...editElements.canvasDimensions.background,
                    uri: URL.createObjectURL(e.target.files[0]),
                  },
                },
              })
            }
          />
        </div>
        <div className="flex gap-4">
          <p>Pick Color</p>
          <input
            type="color"
            onChange={(e) =>
              setEditElements({
                ...editElements,
                canvasDimensions: {
                  ...editElements.canvasDimensions,
                  background: {
                    ...editElements.canvasDimensions.background,
                    color: e.target.value,
                  },
                },
              })
            }
          />
        </div>
        <div className="flex gap-4">
          <p>Or Select Color</p>
          <CirclePicker
            onChange={(e) =>
              setEditElements({
                ...editElements,
                canvasDimensions: {
                  ...editElements.canvasDimensions,
                  background: {
                    ...editElements.canvasDimensions.background,
                    color: e.hex,
                  },
                },
              })
            }
          />
        </div> */}
        {/* <div className="grid grid-cols-2 gap-4 items-center">
          <button
            className="bg-blue-500 p-3 rounded text-white"
            onClick={() => rotate(90)}
          >
            Rotate
          </button>
          <button className="bg-blue-500 p-3 rounded text-white" onClick={BaW}>
            Grayscale
          </button>

          <div>
            <p>Brightness: {brightnessVal}</p>
            <input
              type="range"
              min={0}
              max={2}
              step={0.01}
              value={brightnessVal}
              onChange={(e) => {
                handleBrightness(e);
              }}
            />
          </div>
          <div>
            <p>Blur: {blurVal}</p>
            <input
              type="range"
              min={0}
              max={10}
              step={0.1}
              value={blurVal}
              onChange={(e) => {
                handleBlur(e);
              }}
            />
          </div>
          <div>
            <p>Scale: {scaleVal}</p>
            <input
              type="range"
              min={0}
              max={10}
              step={0.1}
              value={scaleVal}
              onChange={(e) => {
                handleScale(e);
              }}
            />
          </div>
          <div>
            <p>Roundness: {roundnessVal}%</p>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={roundnessVal}
              onChange={(e) => {
                handleRadius(e);
              }}
            />
          </div>
          <div>
            <p>Rotate: {rotateVal}%</p>
            <input
              type="range"
              min={0}
              max={360}
              step={1}
              value={rotateVal}
              onChange={(e) => {
                handleRotate(e);
              }}
            />
          </div> */}
        <Media
          images={images}
          setImages={setImages}
          editElements={editElements}
          setEditElements={setEditElements}
          eleId={eleId}
        />
        <Text
          editElements={editElements}
          setEditElements={setEditElements}
          eleId={eleId}
        />
        {/* <div>
            <button
              className="bg-blue-500 p-3 rounded text-white"
              onClick={() => {
                handleText();
              }}
            >
              Add Text
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
              onClick={() => handleTextLeft()}
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
              onClick={() => handleTextCenter()}
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
              onClick={() => handleTextRight()}
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
              onClick={() => handleUpperCase()}
            >
              AA
            </button>
            <button
              className={clsx("bg-blue-500 p-3 rounded text-white")}
              onClick={() => handleCapitalize()}
            >
              Aa
            </button>
            <button
              className={clsx("bg-blue-500 p-3 rounded text-white")}
              onClick={() => handleLowerCase()}
            >
              aa
            </button>
          </div>
          <div className="flex gap-4">
            <p>Pick color</p>
            <input type="color" onChange={(e) => handleTextColor(e)} />
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default UploadSection;
