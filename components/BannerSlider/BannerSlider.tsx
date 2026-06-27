"use client";

import { 
  useState, 
  useEffect, 
  useCallback 
} from "react";
import Image from "next/image";
import styles from "./BannerSlider.module.css";
import ButtonButton from "../BannerButton/BannerButton";
import bannerImageSliderMockData from "../../data/bannerImageSliderMockData";

export default function BannerSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev === bannerImageSliderMockData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? bannerImageSliderMockData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className={styles.sliderContainer}>
      <div 
        className={styles.slideTrack} 
        style={{ transform: `translateX(-${currentIdx * 100}%)` }}
      >
        {
          bannerImageSliderMockData.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <div className={`${styles.content} ${slide.contentMargin}`}>
                <h2 className={styles.bannerText}>{slide.text}</h2>
                <h3 className={styles.bannerSubtext}>{slide.subtext}</h3>
                <ButtonButton
                  className={slide.brandLogoSize} 
                  Icon={slide.logoComponent} 
                />
              </div>       
              {
                slide.imgSrc && (
                  <Image 
                    src={slide.imgSrc} 
                    alt={slide.text} 
                    fill 
                    priority
                    quality={slide.quality}
                    sizes={slide.sizes}
                    className={styles.bannerImage}
                  />
                )
              }
            </div>
          ))
        }
      </div>
      <button 
        className={`${styles.navBtn} ${styles.prev}`} 
        onClick={prevSlide} 
        aria-label="Перейти до попереднього слайду"
      >
        &#10094;
      </button>
      <button 
        className={`${styles.navBtn} ${styles.next}`} 
        onClick={nextSlide} 
        aria-label="Перейти до наступного слайду"
      >
        &#10095;
      </button>
      <div className={styles.dotsContainer}>
        {
          bannerImageSliderMockData.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIdx ? styles.activeDot : ''}`}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Слайд № ${idx + 1}`}
            />
          ))
        }
      </div>
    </section>
  );
}