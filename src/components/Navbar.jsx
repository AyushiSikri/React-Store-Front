import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
  return (
    <header>
      <nav
      className="nav-container"
      >
        <Link
          to="/"
          className="brand-heading"
        >
          MyStore
        </Link>

        <div
          className="links"
        >
          <Link
            to="/"
            className="home-heading"
            
          >
            Home
          </Link>

          <Link
           to="/search"
            className="search-heading"
          >
          
            <p className="search-text">Search</p>
             <SearchIcon 
             sx={{ color: "#374151",
              }}
             
fontSize="small"
             /> 
         
          </Link>

          {/* <button
            className="cart-btn"
          >
            Cart
          </button>  */}
        </div>
      </nav>

      <div style={{ height: "64px" }} />
    </header>
  );
}

// function Navbar(){

//     return(
//     <header style={{}}>
//         <nav
//           style={{
//             position:"fixed",
//             backgroundColor: "white",
//             width:"100%",
//             top: 0,
//             zIndex: 100,
//             height: "60px",
//             borderBottom: "1px solid #eee",
//             // display: "flex",
//             // alignItems: "center",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: "25px",
//               fontWeight: "700",
//               paddingLeft: "20px",
//               // color: "#74b8f7",
//             }}
//           >
//             MyStore
//           </h1>
//         </nav>
//       </header>
//       );
// }
export default Navbar;