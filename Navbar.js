// import React, { useContext, useState } from "react";
// import "../styles/Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = ({ setShowLogin }) => {

//   const [menu, setMenu] = useState("home");

//   return (
//     <div className="navbar">
//       <Link to="/">
//         <h2 style={{textAlign:"start"}}>Food</h2>
//       </Link>
//       <ul className="navbar-menu">
//         <a
//           href ="/"
//           onClick={() => setMenu("home")}
//           className={menu === "home" ? "active" : ""}
//         >
//           HOME
//         </a>
        
//         <a
//           href="/spoonacular"
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           FIND RECIPE
//         </a>
//         <a
//           href="/add-recipe"
//           onClick={() => setMenu("mobile-app")}
//           className={menu === "mobile-app" ? "active" : ""}
//         >
//           ADD RECIPE
//         </a>
//         <a
//           href="#footer"
//           onClick={() => setMenu("contact-us")}
//           className={menu === "contact-us" ? "active" : ""}
//         >
//           CONTACT US
//         </a>
//         <button>
//         <a
//           href ="/login"
//           onClick={() => setMenu("login")}
//           className={menu === "login" ? "active" : ""}
//         >
//           LOGIN
//         </a>
//         </button>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/" style={{textDecoration: "none"}}>
        <h2 style={{ textAlign: "start" , color: 'white'}}> YUM FIND</h2>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          HOME
        </Link>
        
        <Link
          to="/spoonacular"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          FIND RECIPE
        </Link>

        <Link
          to="/add-recipe"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          ADD RECIPE
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          CONTACT US
        </Link>

        <button onClick={() => setMenu("login")}>
          <Link
            to="/login"
            className={menu === "login" ? "active" : ""}
          >
            LOGIN
          </Link>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
