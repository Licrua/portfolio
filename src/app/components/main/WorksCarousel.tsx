"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "@/app/styles/componentStyles/worksCarousel.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import projects from "@/data/carouselItems";


export default function WorksCarousel() {
  return (
	<div>
		<h2 className={styles.header}>Еще работы</h2>
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50} // Отступ между слайдами
        slidesPerView={1} // Количество отображаемых слайдов
        loop={true} // Бесконечный цикл
        navigation // Включаем кнопки "вперёд/назад"
        pagination={{ clickable: true }} // Включаем пагинацию (точки)
        autoplay={{ delay: 3000 }} // Автопрокрутка (3000 мс = 3 сек)
      >
        {projects.map((src, index) => (
          <SwiperSlide  key={index}>
            <img src={src.src} alt={`Slide ${index + 1}`} className={styles.image} />
			<Link className={styles.link} href={src.link}>Демонстрация</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
	</div>
  );
}
