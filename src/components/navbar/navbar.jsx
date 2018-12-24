import React from 'react';


const NavBar = (props) => {

  return (
      <div className="fixed-top" >
          <nav className="navbar navbar-exapnd-md bg-light">
            <div className="d-flex flex-row">
              <div className="p-2">Commentlyzer Instagram</div>
            </div>
            <div className="d-flex flex-row-reverse">
              <div className="p-2">
                <a href="/" className="nav-link">About</a>
              </div>
              <div className="p-2">
                <a href="/" className="nav-link">Github</a>
              </div>
            </div>
          </nav>
      </div>
  );
}

export default NavBar;
