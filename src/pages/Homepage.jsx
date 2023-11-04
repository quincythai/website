import Navbar from "../components/Navbar/Navbar";
import Block from "../components/Block/Block";
import Footer from "../components/Footer/Footer";
import "./Homepage.css";

const Homepage = () => {
  const links = [
    { text: "Home", url: "/" },
    { text: "Projects", url: "/projects" },
    { text: "Experience", url: "/experience" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <div className="homepage-container">
      <Navbar links={links} />
      <div className="block-container">
        <Block />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
