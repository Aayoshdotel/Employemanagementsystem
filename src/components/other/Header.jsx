import React from "react";

function Header(props) {

 const logOutUser = ()=>{
  localStorage.removeItem('loggedinuser')
  props.changeUser(null)
 }

 const userName = props.data?.firstName || "Admin";

  return (
    <div className="flex items-end justify-between p-6 bg-white">
      
      <h1 className="text-xl font-semibold text-gray-800 leading-snug">
        Hello <br />
        <span className="text-2xl font-bold">{userName}</span>
      </h1>

      <button className="rounded bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600" onClick={logOutUser}>
        Log Out
      </button>

    </div>
  );
}

export default Header;
