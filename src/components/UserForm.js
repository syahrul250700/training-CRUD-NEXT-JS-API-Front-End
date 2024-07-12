import { useState } from "react";

const UserForm = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const submitUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("api/v1/users", {
        method: "POST", //or PUT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      if (data.code == 400) {
        setError(data.message);
        // alert(data.message)
        setIsLoading(false);
      } else if (data.code == 401) {
        setError(data.message);
        // alert(data.message)
        setIsLoading(false);
      } else {
        console.log(data);
        setTimeout(() => {
          setIsLoading(false);
          // alert(data.message);
        }, 1000);
        setError(null);
        setInput({ ...input, username: "", password: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="w-full h-min border-2 border-gray-200 p-4 space-y-6 shadow-xl">
      <h1 className="text-xl text-blue-900 ">Form Users</h1>
      <input
        value={input.username}
        placeholder="Username"
        onChange={(e) => setInput({ ...input, username: e.target.value })}
        className="w-full rounded-lg py-2 px-4 text-black"
      />
      <input
        value={input.password}
        type="password"
        placeholder="Password"
        onChange={(e) => setInput({ ...input, password: e.target.value })}
        className="w-full rounded-lg py-2 px-4 text-black"
      />
      {error !== null && <p className="text-red-500">{error}</p>}
      <div className="flex justify-end">
        <button
          disabled={isLoading ? true : false}
          onClick={submitUser}
          className="py-2 px-4 bg-green-600 hover:opacity-80 disabled:bg-gray-200 text-white rounded-lg disabled:opacity-80"
        >
          {isLoading ? "Adding..." : "Add User"}
        </button>
      </div>
    </div>
  );
};

export default UserForm;
