import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:3000/practical5/bg1.png", },
    { url: "http://localhost:3000/practical5/bg2.png", },
    { url: "http://localhost:3000/practical5/bg3.png", },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1 >Image Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;