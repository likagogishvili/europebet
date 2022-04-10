import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "./scroll.css";
SwiperCore.use([Navigation, Scrollbar]);
function Scroll() {
  const Img = [
    { id: 1, img: require("./thumb/AztecBonanza.jpg").default },
    { id: 2, img: require("./thumb/aztecGems.jpg").default },
    { id: 3, img: require("./thumb/BigBassBonanza.jpg").default },
    { id: 4, img: require("./thumb/bronco.jpg").default },
    { id: 5, img: require("./thumb/Buffalo-King-Megaways.jpg").default },
    { id: 6, img: require("./thumb/buffaloKing.jpg").default },
    { id: 7, img: require("./thumb/AztecBonanza.jpg").default },
    { id: 8, img: require("./thumb/releaseKraken.jpg").default },
    { id: 9, img: require("./thumb/CaishenGold.jpg").default },
    { id: 10, img: require("./thumb/chilliHeat.jpg").default },
    { id: 11, img: require("./thumb/Christmas-Carol-Megaways.jpg").default },
    { id: 12, img: require("./thumb/WildWestGold.jpg").default },
    { id: 13, img: require("./thumb/WildWalker.jpg").default },
    { id: 14, img: require("./thumb/ultraBurn.jpg").default },
    { id: 15, img: require("./thumb/SweetBonanza.jpg").default },
    { id: 16, img: require("./thumb/TheDogHouse.jpg").default },
    { id: 17, img: require("./thumb/starzMegaways.jpg").default },
    { id: 18, img: require("./thumb/Star-Bounty.jpg").default },
    { id: 19, img: require("./thumb/Mysterious.jpg").default },
    { id: 20, img: require("./thumb/PirateGoldDeluxe.jpg").default },
  ];

  return (
    <div className="mainCont">
      <h3>დაატრიალე რჩეული სლოტები:</h3>
      <p>*სპინზე ფსონის მინ. რაოდენობა შეზღუდული არ არის.</p>
      <div className="slider"class="swiper-scroll swiper-scroll-blue" >
        <Swiper
          id="main"
          tag="section"
          wrapperTag="ul"
          navigation
          scrollbar
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Img.map((ex) => (
            <SwiperSlide key={ex.id}>
              <img
                src={ex.img}
                alt=""
                className="scrollImg"
                width={"100%"}
                height={"100%"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Scroll;
