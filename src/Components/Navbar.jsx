import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);
  const hoverData = user?.displayName;
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
 useEffect(()=>{
  localStorage.setItem("theme", theme)
  const localTheme = localStorage.getItem("theme");
  document.querySelector("html").setAttribute("data-theme", localTheme)
 },[theme])
  const onHover = (e) => {
    e.preventDefault();
    setHover(true);
    document.getElementById("my_modal_1").showModal();
    
  };
  const hoverOut = (e) => {
    e.preventDefault();
    setHover(false);
  };

  const themeController = (e) => {
    if(e.target.checked){
      setTheme("dark")
    }else(
      setTheme("light")
    )
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addMovies">Add New Movies</NavLink>
      </li>
      <li>
        <NavLink to="/allmovies">All Movies</NavLink>
      </li>
      <li>
        {user && user?.email ? (
          <NavLink to="/myFavorite">my Favorite </NavLink>
        ) : (
          ""
        )}
      </li>
      <li>
        <NavLink to='/blog'>Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Orchid</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {/* theme controller  */}
      <input
        onChange={themeController}
        type="checkbox"
        checked={theme === "light" ? false : true}
        value="synthwave"
        className="toggle theme-controller"
      />
      <div className="navbar-end">
        {user && user?.email ? (
          <button className="">
            <div className="avatar">
              <div
                onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => hoverOut(e)}
                className="w-12 rounded-full"
              >
                <img src={user?.photoURL} />
              </div>
            </div>
          </button>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
      {/* modal for logout */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box space-y-4">
          <img src={user?.photoURL} />
          <h3 className="font-bold text-lg">User Name: {user?.displayName}</h3>
          <h4 className="font-bold text-lg">User email: {user?.email}</h4>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-primary" onClick={userSignOut}>
              Log Out
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* ========= */}
    </div>
  );
};

export default Navbar;
