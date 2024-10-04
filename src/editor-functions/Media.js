import React, { useRef, useState } from "react";
import Layers from "../Layers";

const Media = ({
  images,
  setImages,
  setEditElements,
  editElements,
  eleId,
  objToUpdate,
  setObjToUpdate,
}) => {
  const imgRef = useRef();
  const [prev, setPrev] = useState(90);
  const [opacityVal, setOpacityVal] = useState(
    parseInt(objToUpdate?.meta?.opacity) || 1
  );
  const [blurVal, setBlurVal] = useState(0);
  const [scaleVal, setScaleVal] = useState(
    parseInt(objToUpdate?.meta?.scale) || 1
  );
  const [roundnessVal, setRoundnessVal] = useState(
    parseInt(objToUpdate?.meta?.roundness) || 0
  );
  const [rotateVal, setRotateVal] = useState(
    parseInt(objToUpdate?.meta?.rotation) || 0
  );

  const handleImageSelect = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImages([...images, URL.createObjectURL(selectedImage)]);
    }
    const newEle = {
      type: "IMAGE",
      subtype: "footer_image",
      xPos: 20,
      yPos: 20,
      height: 100,
      width: 100,
      scaleHeight: 50,
      scaleWidth: 450,
      alignPos: "align-left",
      meta: {
        roundness: 0,
        backgroundColor: "white",
        uri: URL.createObjectURL(selectedImage),
        localFile: selectedImage,
        opacity: 1,
        scale: 1,
        rotation: 0,
      },
    };
    setEditElements({
      ...editElements,
      canvasElement: [...editElements?.canvasElement, newEle],
    });
  };

  const handleUseImage = (data) => {
    const fileObj = fetch(data)
      .then((res) => {
        res?.blob();
      })
      .then((blob) => {
        return new File([blob], "file name", { type: "image/png" });
      });
    const newEle = {
      type: "IMAGE",
      subtype: "footer_image",
      xPos: 20,
      yPos: 20,
      height: 100,
      width: 100,
      scaleHeight: 50,
      scaleWidth: 450,
      alignPos: "align-left",
      meta: {
        roundness: 0,
        backgroundColor: "white",
        uri: data,
        localFile: data,
        opacity: 1,
        scale: 1,
        rotation: 0,
      },
    };
    setEditElements({
      ...editElements,
      canvasElement: [...editElements?.canvasElement, newEle],
    });
  };

  const BaW = () => {
    const image = document.getElementById(eleId);
    if (image) {
      if (image.style.filter !== "") {
        if (image.style.filter.includes("grayscale")) {
          if (image.style.filter.includes("grayscale(1)")) {
            image.style.filter = `${image.style.filter.replace(
              "grayscale(1)",
              "grayscale(0)"
            )}`;
          } else {
            image.style.filter = `${image.style.filter.replace(
              "grayscale(0)",
              "grayscale(1)"
            )}`;
          }
        } else {
          image.style.filter = `${image.style.filter} grayscale(1)`;
        }
      } else {
        image.style.filter = "grayscale(1)";
      }
      const clone = { ...objToUpdate };
      clone.meta.filter = image.style.filter;
      const filterArr = editElements.canvasElement?.filter(
        (e, i) => i !== clone.id
      );
      setEditElements({
        ...editElements,
        canvasElement: [...filterArr, clone],
      });
    }
  };

  const rotate = (val) => {
    if (rotateVal == 0) {
      setPrev(prev + val);
    } else {
      setPrev(prev + val + parseInt(rotateVal));
    }
    const image = document.getElementById(eleId);
    if (image) {
      image.style.transform = `rotate(${
        rotateVal == 0 ? prev : prev + parseInt(rotateVal)
      }deg)`;
    }
  };

  //   const handleBrightness = (e) => {
  //     setBrightnessVal(e.target.value);
  //     const image = document.getElementById(eleId);
  //     if (image) {
  //       if (image.style.filter !== "") {
  //         if (image.style.filter.includes("brightness")) {
  //           image.style.filter = `${image.style.filter.replace(
  //             `brightness(${brightnessVal}`,
  //             `brightness(${e.target.value}`
  //           )}`;
  //         } else {
  //           image.style.filter = `${image.style.filter} brightness(${e.target.value})`;
  //         }
  //       } else {
  //         image.style.filter = `brightness(${e.target.value})`;
  //       }
  //     }
  //   };

  const handleBlur = (e) => {
    setBlurVal(e.target.value);
    const image = document.getElementById(eleId);
    if (image) {
      if (image.style.filter !== "") {
        if (image.style.filter.includes("blur")) {
          image.style.filter = `${image.style.filter.replace(
            `blur(${blurVal}`,
            `blur(${e.target.value}`
          )}`;
        } else {
          image.style.filter = `${image.style.filter} blur(${e.target.value})`;
        }
      } else {
        image.style.filter = `blur(${e.target.value})`;
      }
    }
  };
  const handleScale = (e) => {
    setScaleVal(e.target.value);
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: { ...clone?.meta, scale: e.target.value },
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

  const handleRadius = (e) => {
    setRoundnessVal(e.target.value);
    const image = document.getElementById(eleId);
    if (image) {
      image.style.borderRadius = `${e.target.value}%`;
      const clone = { ...objToUpdate };
      let newArr = [];
      const updatedObj = {
        ...clone,
        meta: { ...clone?.meta, roundness: e.target.value },
      };
      for (let i = 0; i < editElements?.canvasElement.length; i++) {
        if (editElements?.canvasElement[i]?.id === clone?.id) {
          newArr.push(updatedObj);
        } else {
          newArr.push(editElements?.canvasElement[i]);
        }
      }
      setObjToUpdate(updatedObj);
      setEditElements({ ...editElements, canvasElement: newArr });
    }
  };

  const handleOpacity = (e) => {
    setOpacityVal(e.target.value);
    const image = document.getElementById(eleId);
    if (image) {
      const clone = { ...objToUpdate };
      let newArr = [];
      const updatedObj = {
        ...clone,
        meta: { ...clone?.meta, opacity: e.target.value },
      };
      for (let i = 0; i < editElements?.canvasElement.length; i++) {
        if (editElements?.canvasElement[i]?.id === clone?.id) {
          newArr.push(updatedObj);
        } else {
          newArr.push(editElements?.canvasElement[i]);
        }
      }
      setObjToUpdate(updatedObj);
      setEditElements({ ...editElements, canvasElement: newArr });
    }
  };

  const handleRotate = (e) => {
    setRotateVal(e.target.value);
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: { ...clone?.meta, rotation: e.target.value },
    };
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (editElements?.canvasElement[i]?.id === clone?.id) {
        newArr.push(updatedObj);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setObjToUpdate(updatedObj);
    setEditElements({ ...editElements, canvasElement: newArr });
    // }
  };

  return (
    <React.Fragment>
      {eleId && objToUpdate?.type === "IMAGE" ? (
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <p>Opacity: {objToUpdate.meta.opacity || opacityVal}</p>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={objToUpdate.meta.opacity || opacityVal}
              onChange={(e) => {
                handleOpacity(e);
              }}
            />
          </div>
          <div>
            <p>Scale: {objToUpdate.meta.scale || scaleVal}</p>
            <input
              type="range"
              min={0.5}
              max={10}
              step={0.1}
              value={objToUpdate?.meta?.scale || scaleVal}
              onChange={(e) => {
                handleScale(e);
              }}
            />
          </div>
          <div>
            <p>
              Roundness: {parseInt(objToUpdate.meta.roundness) || roundnessVal}%
            </p>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={parseInt(objToUpdate.meta.roundness) || roundnessVal}
              onChange={(e) => {
                handleRadius(e);
              }}
            />
          </div>
          <div>
            <p>Rotate: {objToUpdate.meta.rotation || rotateVal}%</p>
            <input
              type="range"
              min={0}
              max={360}
              step={1}
              value={objToUpdate.meta.rotation || rotateVal}
              onChange={(e) => {
                handleRotate(e);
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <input
            ref={imgRef}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => handleImageSelect(e)}
          />
          <div
            className="upload-section"
            onClick={() => imgRef.current.click()}
          >
            {images?.length > 0 ? (
              images?.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    width={100}
                    height={100}
                    className="h-[100px] object-contain"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUseImage(item);
                    }}
                  />
                );
              })
            ) : (
              <p>Please select an image</p>
            )}
          </div>
        </div>
      )}
      <Layers
        editElements={editElements}
        eleId={eleId}
        setEditElements={setEditElements}
        objToUpdate={objToUpdate}
      />
    </React.Fragment>
  );
};

export default Media;
