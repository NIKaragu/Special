import { useState } from 'react';
import './index.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="relative w-48 h-32 cursor-pointer" onClick={handleToggle}>
        <div
          className={`absolute w-full h-full bg-red-500 rounded-lg transition-transform duration-700 ${
            isOpen ? "translate-y-10" : ""
          }`}
        ></div>

        <div
          className={`text-white text-center font-semibold absolute w-full h-1/2 bg-red-400 rounded-t-lg transition-transform duration-700 origin-bottom ${
            isOpen ? "-rotate-45 translate-y-4" : ""
          }`}
        >
          {!isOpen && 'Натисни, щоб отримати піздюліну'}
        </div>

        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-fit bg-white rounded shadow-lg flex items-center justify-center text-gray-800 text-lg font-bold transition-transform duration-700 ${
            isOpen ? "-translate-y-24 opacity-100" : "opacity-0"
          }`}
        >
          <p className='text-xl text-center text-wrap text-fuchsia-600'>Повір вже блять в себе. <p>Just do it, yopta.</p> Ти нічого не втрачаєш</p>
        </div>
      </div>
    </div>
  );
}

export default App
