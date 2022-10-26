// Packages
import FooterBottom from "./components/FooterBottom";
import FooterTop from "./components/FooterTop";

// Components
const Footer = () => {
  return (
    <div className="bg-secondary px-[66px] py-[21px] ">
      <div className="container mx-auto text-white">
        <FooterTop />
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
