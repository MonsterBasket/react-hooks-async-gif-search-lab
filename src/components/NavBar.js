import React from "react";

function NavBar({ color, title, setSearch }) {
  const colors = {
    black: "navbar-inverse",
    white: "navbar-default",
  };

  let timer;

  function handleChange(value){
    clearTimeout(timer);
    timer = setTimeout(_ => setSearch(value), 1000);
  }

  function handleEnter(e){
    return e.which === 13 ? setSearch(e.target.value) : null;
  }
  return (
    <nav className={`navbar ${colors[color]}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <input type="text" style={{background:"transparent", border:"none", width:"100vw"}}className="navbar-brand" onKeyDown={e => handleEnter(e)} onChange={e => handleChange(e.target.value)} placeholder={title}></input>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
