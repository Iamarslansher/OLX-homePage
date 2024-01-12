import "./index.css";
import { BiSolidCar } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

function Navbar() {
  return (
    <>
      <div className="navBar">
        {/* DIV-1 */}
        <div className="nav-div-1">
          <div className="div-1-container">
            <div>
              <img
                className="logo-img"
                src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png"
                alt="olxlogo"
              />
            </div>
            <span className="car-logo">
              <BiSolidCar />
            </span>
            <span className="car-text">MOTORS</span>
            <span className="building-logo">
              <HiOutlineBuildingOffice2 />
            </span>
            <span className="building-text">PROPERTIES</span>
          </div>
        </div>
        {/* DIV-2 */}

        <div className="nav-div-2">
          <div className="div-2-container">
            <img
              className="olx-logo"
              src="https://admiral.digital/wp-content/uploads/2021/07/client-olx-greyscale.png"
              alt="Olx Logo"
            />

            <input
              className="inputField-1"
              id="input"
              placeholder="Pakistan"
              type="text"
            />
            <span className="input-span">
              <input
                className="inputField-2"
                type="text"
                placeholder="Find Cars, Motorcycles, etc..."
              />
              <button className="serchBtn">
                <FaSearch />
              </button>
            </span>

            <a className="loginLink" href="/">
              Login
            </a>

            <button className="sellBtn">
              <TiPlus /> SELL
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="linkDiv">
        <div className="dropDown">
          <select>
            <option value="categories">All categories</option>

            <option value="MobilePhones">Mobile Phones</option>
            <option value="cars">Cars</option>
            <option value=" motorcycles"> Motorcycles</option>
            <option value="Houses">Houses</option>
            <option value="Video-Audios">Video-Audios</option>
            <option value="Tablets">Tablets</option>
            <option value="Land & Plots">Land & Plots</option>
          </select>
        </div>
        <a className="link" href="/">
          Mobile Phones
        </a>
        <a className="link" href="/">
          Cars
        </a>
        <a className="link" href="/">
          Motorcycles
        </a>
        <a className="link" href="/">
          Houses
        </a>
        <a className="link" href="/">
          Video-Audios
        </a>
        <a className="link" href="/">
          Tablets
        </a>
        <a className="link" href="/">
          Land & Plots
        </a>
      </div>
      <div className="img-slider">
        {/* <img title="sell it,search it, buy it" src={slider} alt="" /> */}
      </div>
    </>
  );
}

export default Navbar;
