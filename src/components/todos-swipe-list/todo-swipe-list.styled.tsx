import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperPrimaryContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 270px;
`;

const ListSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: -5%;
`;

const SwiperSlideItem = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
`;

export { SwiperPrimaryContainer, ListSwiper, SwiperSlideItem };
