import Carousel from "../../components/carousel";


function HomePage() {
  return (
    <div>
     
      {/*Carousel 1 item */}
      <Carousel autoplay />

      {/*Carousel 3 item */}
      <Carousel numberOfSlides={6} category="Comedy" />
    </div>
  );
}

export default HomePage;
