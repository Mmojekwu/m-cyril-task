import arrow from "./arrow.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setsearchTerm] = useState();
  const [result, setresult] = useState();

  let arr = [
    {
      name: "string 1",
      value: "this",
      other: "that",
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that",
    },
    {
      name: "string 2",
      value: "this",
      other: "that",
      city: "Ikoyi",
      state: "Lagos",
      address: "A less expensive house like that",
    },
  ];

  // console.log(customFilter(arr, "id", 1));

  const handleChange = (e) => {
    setsearchTerm(e.target.value);

    let obj = arr.find((o) => o.name === e.target.value);

    setresult(obj.address);
  };

  return (
    <div className="App text-black">
      <header className="App-header">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter your Email"
            onChange={handleChange}
            value={searchTerm}
            className="text-black w-80 rounded-full border-2 border-gray-300 focus:outline-none active:outline:none py-2 pl-3 pr-14"
          />
          <button className="-ml-12">
            <img src={arrow} className="bg-gradient-to-br from-yellow-300 to-yellow-600 p-3 rounded-full" alt="" />
          </button>
        </div>

        <ul id="myUL" className="bg-white z-10 relative w-max mt-4 p-8 text-black">
          <li className="p-4">{result?result:"Not Found"}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
