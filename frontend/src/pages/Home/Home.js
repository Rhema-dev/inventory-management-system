import React from "react";
//import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
//import logoImg from "../../assets/logo.jpeg";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";
import { FaBoxOpen } from "react-icons/fa6";
import { FaTruckRampBox } from "react-icons/fa6";
import { MdOutlineChildFriendly } from "react-icons/md";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const iconstyle = {fontSize: "3cm"}
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <h2 className="logo">IMS</h2>
        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary loginbtn">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}  
      <section className="container hero">
        <div className="hero-text">
          <h2>Real-Time Inventory management software for small businesses.</h2>
          <p>
            A real-time system designed to oversee and regulate products within the warehouse, the Inventory Management System ensures efficient control and management of inventory.
            <br />
            <br />
            Increase your sales and keep track of every unit with our powerful stock management and inventory control software.
          </p>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
      <section>
        <div className="container hero features">
          <div>
            <h1>Features...</h1>
            <p>Group, customize, and manage your items from a single application.
              Try out what's best for your business without losing control over your stock.
            </p>
            <div className="feature-cards">
              <div className="card">
              
              <FaBoxOpen className="cardicon" style={iconstyle} />
                <h4>Item Grouping and Bundling</h4>
                <p>
                  Create categories based on attributes and customize bundles for the best sales.
                </p>
              </div>
              <div className="card">
              <FaTruckRampBox className="cardicon" style={iconstyle}/>
                <h4>Multi-warehouse management feature</h4>
                <p>
                  Manage stock at multiple locations and keep track of stocks effortlessly.
                </p>
              </div>
              <div className="card">
              <MdOutlineChildFriendly className="cardicon" style={iconstyle}/>
                <h4>Easy to Use</h4>
                <p>
                  An interactive, straightforward and user friendly interface to reduce user learning curve.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};


export default Home;
