const Banner = (props) => {
  return (
    <>
      <div className="common_banner">
        <div className="BannerTitle">
          <h1 className="BannerTitle">{props.title}</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;

