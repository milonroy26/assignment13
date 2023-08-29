"use client";
const page = () => {

  const handleSetCookie = () => {
    fetch("http://localhost:3000/api/cookieset")
  }
  
  return (
    <div>
      <h1>Set Cookie Page</h1>
      
      <button onClick={handleSetCookie} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Button
      </button>

    </div>
  );
};

export default page;