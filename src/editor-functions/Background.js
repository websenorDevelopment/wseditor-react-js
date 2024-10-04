import React from "react";
import { CirclePicker } from "react-color";

const Background = ({ setEditElements, editElements }) => {
  return (
    <div className="d-grid">
      {(editElements?.canvasElement?.[0]?.meta?.uri ||
        editElements?.canvasElement?.[0]?.meta?.backgroundColor) && (
        <div>
          <button
            className="bg-blue-500 p-3 rounded text-white"
            onClick={() => {
              const clone = editElements?.canvasElement?.[0];
              clone.meta.backgroundColor = "";
              clone.meta.uri = "";
              let newArr = [];
              for (let i = 0; i < editElements?.canvasElement.length; i++) {
                if (i == clone?.id) {
                  newArr.push(clone);
                } else {
                  newArr.push(editElements?.canvasElement[i]);
                }
              }
              setEditElements({ ...editElements, canvasElement: newArr });
            }}
          >
            Remove Background
          </button>
        </div>
      )}
      <div>
        <p>select background image</p>
        <input
          type="file"
          onChange={(e) =>{
            const clone = editElements?.canvasElement?.[0];
              clone.meta.uri = URL.createObjectURL(e.target.files[0]);
              let newArr = [];
              for (let i = 0; i < editElements?.canvasElement.length; i++) {
                if (i == clone?.id) {
                  newArr.push(clone);
                } else {
                  newArr.push(editElements?.canvasElement[i]);
                }
              }
              setEditElements({ ...editElements, canvasElement: newArr });
            // setEditElements({
            //   ...editElements,
            //   canvasDimensions: {
            //     ...editElements.canvasDimensions,
            //     background: {
            //       ...editElements.canvasDimensions.background,
            //       uri: URL.createObjectURL(e.target.files[0]),
            //     },
            //   },
            // })
          }}
        />
      </div>
      <div className="flex gap-4">
        <p>Pick Color</p>
        <input
          type="color"
          onChange={(e) =>{
            const clone = editElements?.canvasElement?.[0];
              clone.meta.backgroundColor = e.target.value;
              let newArr = [];
              for (let i = 0; i < editElements?.canvasElement.length; i++) {
                if (i == clone?.id) {
                  newArr.push(clone);
                } else {
                  newArr.push(editElements?.canvasElement[i]);
                }
              }
              setEditElements({ ...editElements, canvasElement: newArr });
            // setEditElements({
            //   ...editElements,
            //   canvasDimensions: {
            //     ...editElements.canvasDimensions,
            //     background: {
            //       ...editElements.canvasDimensions.background,
            //       color: e.target.value,
            //     },
            //   },
            // })
          }}
        />
      </div>
      <div className="flex gap-4">
        <p>Or Select Color</p>
        <CirclePicker
          onChange={(e) =>{
            const clone = editElements?.canvasElement?.[0];
              clone.meta.backgroundColor = e.hex;
              let newArr = [];
              for (let i = 0; i < editElements?.canvasElement.length; i++) {
                if (i == clone?.id) {
                  newArr.push(clone);
                } else {
                  newArr.push(editElements?.canvasElement[i]);
                }
              }
              setEditElements({ ...editElements, canvasElement: newArr });
            // setEditElements({
            //   ...editElements,
            //   canvasDimensions: {
            //     ...editElements.canvasDimensions,
            //     background: {
            //       ...editElements.canvasDimensions.background,
            //       color: e.hex,
            //     },
            //   },
            // })
          }}
        />
      </div>
    </div>
  );
};

export default Background;
