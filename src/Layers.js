import React from "react";

const Layers = ({ eleId, editElements, setEditElements, objToUpdate }) => {
  const handleForward = (value) => {
    const font = document.getElementById(eleId);
    if (font) {
      const parentNode = font?.parentNode;
      parentNode.style.zIndex = value;
      const clone = { ...objToUpdate };
      clone.meta.zIndex = value;
      let newArr = [];
      for (let i = 0; i < editElements?.canvasElement?.length; i++) {
        if (i == clone?.id) {
          newArr.push(clone);
        } else {
          newArr.push(editElements?.canvasElement[i]);
        }
      }
      setEditElements({ ...editElements, canvasElement: newArr });
    }
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => handleForward(3)}
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
            class="lucide lucide-layers-2"
          >
            <path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12" />
            <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z" />
          </svg>
          <p>Forward</p>
        </div>
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => handleForward(2)}
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
            class="lucide lucide-layers-2"
          >
            <path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12" />
            <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z" />
          </svg>
          <p>Backward</p>
        </div>
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => handleForward(4)}
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
            class="lucide lucide-bring-to-front"
          >
            <rect x="8" y="8" width="8" height="8" rx="2" />
            <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
            <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
          </svg>
          <p>To Front</p>
        </div>
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => handleForward(1)}
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
            class="lucide lucide-send-to-back"
          >
            <rect x="14" y="14" width="8" height="8" rx="2" />
            <rect x="2" y="2" width="8" height="8" rx="2" />
            <path d="M7 14v1a2 2 0 0 0 2 2h1" />
            <path d="M14 7h1a2 2 0 0 1 2 2v1" />
          </svg>
          <p>To Back</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layers;
