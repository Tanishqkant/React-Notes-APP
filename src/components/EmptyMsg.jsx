import React from "react";

function EmptyMsg({ setshowAlert }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-blue-400 h-52 w-96 border-2 border-white flex flex-col justify-center items-center rounded-2xl">
        <h1 className="text-red-600 text-4xl font-extraboldbold ">Alert !</h1>
        <p className="text-white text-xl">You can not leave Heading Empty !</p>
        <button
          className="bg-red-400 h-10 w-20 rounded-2xl mt-3 border cursor-pointer hover:bg-red-500"
          onClick={() => {
            setshowAlert(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default EmptyMsg;
