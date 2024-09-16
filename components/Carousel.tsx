"use client";
import "@splidejs/react-splide/css/skyblue";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";

const Carousel = () => {
  const imageClassName = "w-full h-full object-contain";
  const [photosOnScreen, setPhotosOnScreen] = useState(
    typeof window !== "undefined"
      ? window.screen.availWidth <= 768
        ? 1
        : 2
      : 2
  );
  return (
    <section className="w-full">
      <Splide
        options={{
          type: "loop",
          gap: "2rem",
          drag: "free",
          focus: "center",
          height: "25rem",
          arrows: false,
          pagination: false,
          perPage: photosOnScreen,
          lazyLoad: false,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: true,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <Image
            src="/Gallery/picture1.jpeg"
            width={500}
            height={500}
            alt="Image 1"
            className={imageClassName}
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Gallery/picture2.jpeg"
            width={500}
            height={500}
            alt="Image 2"
            className={imageClassName}
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Gallery/picture3.jpeg"
            width={500}
            height={500}
            alt="Image 3"
            className={imageClassName}
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Gallery/picture4.jpeg"
            width={500}
            height={500}
            alt="Image 3"
            className={imageClassName}
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Gallery/picture.jpeg"
            width={500}
            height={500}
            alt="Image 3"
            className={imageClassName}
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Gallery/gallery6.avif"
            width={500}
            height={500}
            alt="Image 3"
            className={imageClassName}
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Gallery/gallery8.jpeg"
            width={500}
            height={500}
            alt="Image 3"
            className={imageClassName}
            loading="lazy"
          />
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Carousel;
