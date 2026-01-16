import React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import { Check } from "lucide-react";
import EmptyMsg from "./components/EmptyMsg";
function App() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [task, settask] = useState([]);
  const [showAlert, setshowAlert] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setshowAlert(true);
      return;
    } else {
      const copyTask = [...task];

      copyTask.push({ title, content, completed: false });

      settask(copyTask);
      console.log(copyTask);

      setcontent("");
      settitle("");
    }
  };
  function onComplete(idx) {
    const copyTask = [...task];
    copyTask[idx].completed = true;
    settask(copyTask);
  }

  function onDelete(idx) {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  }
  return (
    <div className="h-screen lg:flex bg-blue-300 text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col lg:w-1/2 gap-4 items-start  p-10"
      >
        {showAlert && <EmptyMsg setshowAlert={setshowAlert} />}
        <h1 className="flex justify-center text-3xl font-bold underline">
          ADD Notes
        </h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 border-black outline-none rounded bg-white placeholder:text-black  text-black"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 h-30 py-2 flex  font-medium items-start flex-row border-2 border-black rounded outline-none w-full bg-white placeholder:text-black text-black "
          value={content}
          onChange={(e) => {
            setcontent(e.target.value);
          }}
        />
        <button className="bg-white text-black px-5 py-3 rounded w-full outline-none hover:transition-all hover:bg-blue-400 border-2 cursor-pointer hover:text-white hover:font-bold active:bg-blue-500 active:scale-95">
          Add Notes{" "}
        </button>
      </form>
      <div className=" lg:w-1/2 p-9 lg:border-l-2  ">
        <h1 className="flex justify-center text-3xl font-bold underline">
          Your Notes
        </h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[80vh] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative min-h-52 w-42 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black p-4 overflow-auto transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex justify-between">
                  <h2 className=" flex justify-center border border-black h-7.5 w-7.5 bg-blue-400 text-white font-bold rounded-full mt-2">
                    {idx + 1}
                  </h2>
                  <h2 className="bg-red-300 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 active:scale-95 transition mt-2">
                    <X
                      onClick={() => onDelete(idx)}
                      size={16}
                      strokeWidth={2.75}
                      color="white"
                    />
                  </h2>

                  <h2 className="bg-green-300 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 active:scale-95 transition mt-2">
                    <Check
                      onClick={() => onComplete(idx)}
                      size={16}
                      color="white"
                    />
                  </h2>
                </div>
                {elem.completed && (
                  <p className="text-green-600 font-bold mt-2">
                    ✔ Task Completed {elem.title}
                  </p>
                )}

                <h3 className="leading-tight text-xl font-bold mt-3">
                  {elem.title}
                </h3>
                <p className="mt-3 leading-tight font-medium text-gray-400">
                  {elem.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
