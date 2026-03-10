import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import 'swiper/css';

import 'swiper/css/effect-fade';
import { Link } from "react-router-dom";

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}
const slidesData: SlideType[] = [
  {
    id: 1,
    image: '/img/hero/hero-13.jpg',
    title: 'WELCOME TO REDPLUSE',
    heading: 'Saving Lives <br /> with Every Drop <br /> of Hope',
    description: 'Redpluse is a smart blood donation platform connecting patients with verified donors in real time, ensuring faster response, transparency, and life-saving support when it matters most.',
    link: '/',
  },
  {
    id: 2,
    image: '/img/hero/poorguy.jpg',
    title: 'WELCOME TO REDPLUSE',
   heading: 'Connecting Heroes <br /> with Those <br /> Who Need Them',
    description: 'At Redpluse, we bridge the gap between those in urgent need of blood and compassionate donors, making every donation simple, secure, and life-changing.',
    link: '/',
  },
  {
    id: 3,
    image: '/img/hero/family.png',
    title: 'WELCOME TO REDPLUSE',
   heading: 'Connecting Heroes <br /> with Those <br /> Who Need Them',
    description: 'At Redpluse, we bridge the gap between those in urgent need of blood and compassionate donors, making every donation simple, secure, and life-changing.',
    link: '/',
  },
];

const HeroOne = () => {
  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev"><i className="fa fa-arrow-left" /></button>
        <button className="array-next"><i className="fa fa-arrow-right" /></button>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        speed={1000}
autoplay={{
  delay: 4000,
  disableOnInteraction: false,
}}
       navigation={{
  nextEl: ".array-next",
  prevEl: ".array-prev",
}}
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {(({ isActive }) => <Card slide={slide} isActive={isActive} />)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  )
}

export default HeroOne

const Card = ({ slide, isActive }: { slide: SlideType; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
    >
      <div className="hero-image bg-cover" style={{ backgroundImage: `url(${slide.image})` }} />
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="hero-content">
              <motion.h6
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.3,
                  ease: 'linear',
                }}
              >
                {slide.title}
              </motion.h6>
              <motion.h1
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.5,
                  ease: 'linear',
                }}
                dangerouslySetInnerHTML={{ __html: slide.heading }}></motion.h1>
              <motion.p
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.7,
                  ease: 'linear',
                }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.9,
                  ease: 'linear',
                }}
                className="hero-button"
              >
                
              </motion.div>
              <Link to="/about" className="theme-btn theme-color-2">
                  <span>Learn More <i className="fas fa-chevron-right" /></span>
                </Link>
                <br />
                  <br />
                <Link to="/register-user" className="theme-btn theme-color-2">
                  <span>Join Us <i className="fas fa-chevron-right" /></span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}