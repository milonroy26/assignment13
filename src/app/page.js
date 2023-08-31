"use client";
const page = () => {
  const handleSetCookie = () => {
    fetch("http://localhost:3000/api/cookieset")
      .then((response) => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error(
            `Network response was not OK. Status: ${response.status}`
          );
        }

        // Parse the JSON response
        return response.json();
      })
      .then((data) => {
        // Do something with the parsed data
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <h1>Set Cookie Page</h1>

      <button
        onClick={handleSetCookie}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        Button
      </button>
    </div>
  );
};

export default page;
