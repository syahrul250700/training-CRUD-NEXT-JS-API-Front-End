import { useEffect, useState } from "react";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("User Belum Ada");

  const getUser = async () => {
    try {
      const res = await fetch("api/v1/users", {
        method: "GET",
      });
      const data = await res.json();
      if (res.status == 401 || res.status == 400) {
        setError(data.message);
      } else {
        setUser(data.results);
      }
    } catch (error) {
      alert(error);
    }
  };
  const delUser = async (id) => {
    try {
      const res = await fetch("api/v1/users/" + id, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.status == 401 || res.status == 400) {
        alert(data.message);
      } else {
        getUser();
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="w-full h-min border-2 border-gray-200 p-4 space-y-6 shadow-xl">
      <div className="flex justify-between">
        <h1 className="text-xl text-blue-900">List User</h1>
        <button
          onClick={() => getUser()}
          className="px-2 py-1 bg-yellow-600 text-white rounded-lg"
        >
          Refresh List
        </button>
      </div>
      {user?.length > 0 ? (
        user?.map((r, i) => (
          <div
            key={i}
            className="relative w-full bg-gray-100 p-4 rounded-lg border-2 border-gray-200"
          >
            <h1 className="text-lg font-extrabold text-blue-900">
              {r.username}
            </h1>
            <button
              onClick={() => delUser(r.user_id)}
              className="px-2 py-1 bg-red-500 text-white rounded-lg"
            >
              Hapus
            </button>
          </div>
        ))
      ) : (
        <div className="w-full bg-red-500 p-4 rounded-lg border-2 border-gray-200 text-white">
          {error}
        </div>
      )}
    </div>
  );
};

export default UserList;
