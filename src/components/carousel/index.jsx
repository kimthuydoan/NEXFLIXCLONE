// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

//Props
//numberOfSlides => định nghĩa số lượng slide của carousel
//carousel => numberOfSlides =3 => carousel show 3 item 1 lúc
//carousel => numberOfSlides = 1=> carousel show 1 item 1 lúc
//default value props
// numberOfSlide =1 =>  carousel show 1 item

// eslint-disable-next-line react/prop-types
export default function Carousel({
  numberOfSlides = 1,
  category = "Trending",
  autoplay = false,
}) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    console.log(numberOfSlides);
    //await : đợi response trở về
    const response = await axios.get(
      "https://6627a8d5b625bf088c092ee2.mockapi.io/Movie"
    );

    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={numberOfSlides}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={autoplay ? [Pagination, Autoplay] : [Pagination]}
        className={`carousel ${numberOfSlides > 1 ? "multi-item" : ""}`} //toán tử 3 ngôi => Khu[1] ? Khu[2] : Khu[3]
      >
        {/* Cứ mỗi movies ở trong movies => SwiperSlide*/}
        {/*movies=>SwiperSlide*/}
        {/*object => component*/}
        {/*object => component*/}
        {/* Cứ mỗi movies => Swipper Slide*/}

        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
