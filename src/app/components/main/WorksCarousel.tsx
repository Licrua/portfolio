"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "@/app/styles/componentStyles/main/worksCarousel.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useTranslations } from "next-intl";
import projects from "@/data/carouselItems";

export default function WorksCarousel() {
  const t = useTranslations("translation.worksCarousel");

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{t("title")}</h2>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {projects.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src.src} alt={`Slide ${index + 1}`} className={styles.image} />
              <Link className={styles.link} href={src.link}>
                {t("demo")}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
