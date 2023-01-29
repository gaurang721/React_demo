import NavMenu from "./HeaderSubComponets/NavMenu";
import SiteLogo from "./HeaderSubComponets/SiteLogo";

const Header = () => {
  return (
    <>
      <div className="site-Header">
        <div className="row">
          <div className="col-md-4">
            <SiteLogo img="https://www.droptechnolab.com/wp-content/uploads/2022/12/download-2.png" />
          </div>
          <div className="col-md-8">
            <NavMenu navItem="home" />
            <NavMenu navItem="Services" />
            <NavMenu navItem="Case Studies" />
            <NavMenu navItem="Blog" />
            <NavMenu navItem="About Us" />
            <NavMenu navItem="Contact Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
