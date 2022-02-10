import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {A11y, Autoplay, Pagination} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Spiner() {
  const images = ['0001.jpg', '0002.jpg', '0003.jpg', '0004.jpg', '0005.jpg', '0006.jpg', '0007.jpg',
    '0008.jpg', '0009.jpg', '0010.jpg', '0011.jpg', '0012.jpg', '0013.jpg', '0014.jpg', '0015.jpg',];
    return (
      <div className="Spiner">
        <div className="slider">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={true}
            pagination={{ clickable: true }}
          >
            {
              images.map((image) => {
                return (
                  <SwiperSlide key={image}>
                    <img className="swiper-image" src={require('../../assets/images/' + image)} alt=""/>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    );
}

export default Spiner;
