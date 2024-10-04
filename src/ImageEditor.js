import clsx from "clsx";
import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import { getBaseCanvasPercentage, getDimensionValue } from "./utlis/utility";

const ImageEditor = ({
  editElements,
  setEleId,
  eleId,
  setObjToUpdate,
  setEditElements,
  objToUpdate,
  textField,
  setTextField,
}) => {
  const [canvasPercentage, setCanvasPercentage] = useState(null);
  useEffect(() => {
    const basePercentage =
      (window.innerWidth / 2 / editElements?.canvasDimenssion?.width) * 100;
    setCanvasPercentage(basePercentage);
    // const parent = window.innerWidth;
    // const element = editElements?.canvasDimenssion?.width;
    // const eleHeight = editElements?.canvasElement?.[1]?.scaleHeight;
    // const eleWidth = editElements?.canvasElement?.[1]?.scaleWidth;
    // const basePercentage = getBaseCanvasPercentage(parent, element);
    // console.log(getDimensionValue(basePercentage, eleWidth));
    // console.log(getDimensionValue(basePercentage, eleHeight));
  }, []);

  const handleDragStart = (event, element) => {
    const offsetX = event.clientX - element.xPos;
    const offsetY = event.clientY - element.yPos;
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ offsetX, offsetY })
    );
  };

  const handleDrag = (event, element) => {
    const { offsetX, offsetY } = JSON.parse(
      event.dataTransfer.getData("text/plain") || '{"offsetX": 0, "offsetY": 0}'
    );
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    const clone = { ...element };
    clone.xPos = x;
    clone.yPos = y;
  };

  const handleDrop = (event) => {
    if (!objToUpdate) {
      return;
    }
    event.preventDefault();
    const { offsetX, offsetY } = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = { ...clone, xPos: x, yPos: y };
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (i == clone?.id) {
        newArr.push(updatedObj);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setObjToUpdate(updatedObj);
    setEditElements({ ...editElements, canvasElement: newArr });
  };

  const handleTextChange = (e) => {
    // const updatedText = e.target.value;
    // const updatedElements = editElements.canvasElement.map((element, index) => {
    //   if (index === objToUpdate.id) {
    //     return {
    //       ...element,
    //       meta: {
    //         ...element.meta,
    //         text: updatedText
    //       }
    //     };
    //   } else {
    //     return element;
    //   }
    // });
    // setEditElements({
    //   ...editElements,
    //   canvasElement: updatedElements
    // });

    const clone = { ...objToUpdate };
    let newArr = [];
    const updatedObj = {
      ...clone,
      meta: { ...clone?.meta, text: e.target.value },
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

  const handleDuplicate = () => {
    const clone = { ...objToUpdate };
    const updatedObj = {
      ...clone,
      id: editElements?.canvasElement?.length,
      xPos: clone.xPos + 20,
      yPos: clone.yPos + 20,
    };
    setObjToUpdate(updatedObj);
    setEditElements({
      ...editElements,
      canvasElement: [...editElements?.canvasElement, updatedObj],
    });
  };

  const handleRemove = () => {
    const filterArr = editElements.canvasElement?.filter(
      (e, i) => i !== objToUpdate.id
    );
    setEditElements({
      ...editElements,
      canvasElement: [...filterArr],
    });
    if (filterArr?.length === 0) {
      setEleId("");
    }
  };

  const handleSelectObject = (index, item) => {
    const newSelectedItem = {
      ...item,
      id: index,
    };
    setObjToUpdate(newSelectedItem);
    let newArr = [];
    for (let i = 0; i < editElements?.canvasElement.length; i++) {
      if (i == newSelectedItem?.id) {
        newArr.push(newSelectedItem);
      } else {
        newArr.push(editElements?.canvasElement[i]);
      }
    }
    setEditElements({ ...editElements, canvasElement: newArr });
  };

  return (
    <div>
      {editElements?.canvasDimenssion && (
        <div
          id="customImage"
          className="canvas overflow-hidden"
          onDrop={(e) => handleDrop(e)}
          onDragOver={(event) => event.preventDefault()}
          style={{
            aspectRatio:
              (editElements?.canvasDimenssion?.width ?? 1) /
              (editElements?.canvasDimenssion?.height ?? 1),
            width: `${window.innerWidth / 2 - 20}px`,
            height: `${window.innerHeight - 20}px`,
            ...(editElements?.canvasElement?.[0]?.meta?.uri === ""
              ? {
                  background:
                    editElements?.canvasElement?.[0]?.meta?.backgroundColor !==
                    ""
                      ? editElements?.canvasElement?.[0]?.meta?.backgroundColor
                      : "#FFF",
                }
              : {
                  backgroundImage:
                    editElements?.canvasElement?.[0]?.meta?.uri !== ""
                      ? `url(${editElements?.canvasElement?.[0]?.meta?.uri})`
                      : "",
                }),
          }}
        >
          {editElements?.canvasElement?.length > 0 &&
            editElements?.canvasElement?.map((item, index) => {
              console.log(item);
              return (
                <React.Fragment>
                  {item?.type === "IMAGE" && (
                    <div
                      key={index}
                      style={{
                        position: "absolute",
                        top: item?.yPos,
                        left: item?.xPos,
                        // height: `${item?.height}px`,
                        height: "auto",
                        width: item?.meta?.scale
                          ? `${
                              ((window.innerWidth/2 * canvasPercentage) / 100) *
                              item.meta.scale
                            }px`
                          : `${(window.innerWidth/2 * canvasPercentage) / 100}px`,
                        // width: item?.scaleWidth * parseFloat(item?.meta?.scale),
                      }}
                      onDragStart={(e) =>
                        handleDragStart(e, { ...item, id: index })
                      }
                      onDrag={(e) => handleDrag(e, { ...item, id: index })}
                    >
                      {eleId === `image${index}` && (
                        <span
                          className="absolute bg-black z-40 -top-5 -left-5 w-[25px] p-1 text-center text-sm cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDuplicate();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-copy-plus"
                          >
                            <line x1="15" x2="15" y1="12" y2="18" />
                            <line x1="12" x2="18" y1="15" y2="15" />
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                          </svg>
                        </span>
                      )}
                      <div
                        id={`image${index}`}
                        style={{
                          transform: `rotate(${item?.meta?.rotation}deg)`,
                        }}
                        className={clsx(
                          "overflow-hidden flex",
                          eleId === `image${index}`
                            ? "outline outline-[#f00] outline-[2px]"
                            : ""
                        )}
                      >
                        <img
                          src={item?.meta?.uri}
                          width={
                            item?.meta?.scale
                              ? `${
                                  ((window.innerWidth/2 * canvasPercentage) /
                                    100) *
                                  item.meta.scale
                                }px`
                              : `${
                                  (window.innerWidth/2 * canvasPercentage) / 100
                                }px`
                          }
                          height={"auto"}
                          className={clsx(
                            eleId === `image${index}`
                              ? "cursor-move"
                              : "cursor-pointer",
                            "flex h-auto"
                          )}
                          style={{
                            opacity: item?.meta?.opacity,
                            borderRadius: `${item?.meta?.roundness}%`,
                          }}
                          // onBlur={() => setEleId("")}
                          draggable={eleId === `image${index}` ? true : false}
                          onClick={() => {
                            setEleId(`image${index}`);
                            handleSelectObject(index, item);
                            // const newSelectedItem = {
                            //   ...item,
                            //   id: index,
                            // };
                            // setObjToUpdate(newSelectedItem);
                            // handleSelectElement(item, index);
                          }}
                        />
                      </div>
                      {eleId === `image${index}` && (
                        <span
                          className="absolute bg-red-500 z-40 text-white rounded-full -top-5 -right-5 w-[25px] text-center cursor-pointer"
                          onClick={() => handleRemove()}
                        >
                          X
                        </span>
                      )}
                    </div>
                  )}
                  {item?.type === "TEXT" && (
                    <div
                      key={index}
                      onDragStart={(e) =>
                        handleDragStart(e, { ...item, id: index })
                      }
                      onDrag={(e) => handleDrag(e, { ...item, id: index })}
                      style={{
                        position: "absolute",
                        top: item?.yPos,
                        left: item?.xPos,
                      }}
                    >
                      {eleId === `text${index}` && (
                        <span
                          className="absolute bg-black z-40 -top-5 -left-5 w-[25px] p-1 text-center text-sm cursor-pointer"
                          onClick={() => handleDuplicate()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-copy-plus"
                          >
                            <line x1="15" x2="15" y1="12" y2="18" />
                            <line x1="12" x2="18" y1="15" y2="15" />
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                          </svg>
                        </span>
                      )}
                      <textarea
                        id={`text${index}`}
                        type="text"
                        placeholder="Add a Text"
                        readOnly={textField}
                        autoComplete="off"
                        draggable
                        value={item?.meta?.text}
                        style={{
                          backgroundColor: item?.meta?.backgroundColor,
                          color: item?.meta?.fontColor,
                          fontSize: `${item?.meta?.fontSize}px`,
                          fontStyle: item?.meta?.fontStyle,
                          fontWeight: item?.meta?.fontWeight,
                          textAlign: item?.meta?.textAlign,
                          textDecoration: item?.meta?.textDecoration,
                          textTransform: item?.meta?.textTransform,
                          width: (item?.meta?.scaleWidth * canvasPercentage) / 100,
                          height: "auto",
                        }}
                        onSelect={(e) => e.preventDefault()}
                        onSelectCapture={(e) => e.preventDefault()}
                        className={clsx(
                          "text-wrap break-words w-full text-center p-2 bg-transparent",
                          eleId === `text${index}`
                            ? "outline outline-[#295992] outline-[1px] cursor-move"
                            : "cursor-pointer select-none"
                        )}
                        onClick={() => {
                          setEleId(`text${index}`);
                          handleSelectObject(index, item);
                          // handleSelectElement(item, index);
                        }}
                        onBlur={() => {
                          setTextField(true);
                        }}
                        onChange={(e) => {
                          handleTextChange(e);
                        }}
                        onDoubleClick={() => setTextField(!textField)}
                      ></textarea>
                      {eleId === `text${index}` && (
                        <span
                          className="absolute bg-red-500 z-40 text-white rounded-full -top-5 -right-5 w-[25px] text-center cursor-pointer"
                          onClick={() => handleRemove()}
                        >
                          X
                        </span>
                      )}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
