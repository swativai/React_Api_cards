import React, { useEffect, useState } from "react";

const Api = () => {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const responce = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    setUser(await responce.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-green-300">
      <h1 className="mx-auto text-center p-2 text-[40px] text-white ">
        List of Custmer
      </h1>
      <div className=" w-[1200px]  mx-auto grid grid-cols-4  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 ">
        {user.map((curElem) => {
          return (
            <div className="w-[230px] h-[120px] bg-white rounded-md shadow-lg  hover:shadow-2xl hover:shadow-orange-200 hover:cursor-pointer">
              <div className="flex justify-evenly">
                <img
                  src={curElem.thumbnailUrl}
                  alt="img"
                  className="w-[200px] rounded-md shadow-sm h-[100px] p-1 m-2 "
                />
                <div className="flex flex-col">
                  <h1>Title</h1>
                  <p className="text-sm">{curElem.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
