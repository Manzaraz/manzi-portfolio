import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { gsap } from "gsap";

import classes from "./Intro.module.scss";
import avatar from "../../img/me1.png";

const Intro = () => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  const timeline = gsap.timeline({ defaults: { opacity: 0 } });

  useEffect(() => {
    const iGreetings = document.querySelectorAll(".i-intro"),
      iName = document.querySelector(".i-name"),
      iTitle = document.querySelector(".i-title"),
      iDesc = document.querySelector(".i-desc"),
      iScroll = document.querySelector(".i-scroll"),
      iBg = document.querySelector(".i-bg"),
      iImg = document.querySelector(".i-img");

    timeline
      .from(iGreetings, {
        opacity: 0,
        y: -200,
        duration: 1.5,
        stagger: 0.3,
      })
      .from(iName, { duration: 3 })
      .from(iTitle, { x: -50, duration: 1 }, "-=2")
      .from(iDesc, { duration: 2 })
      .from(iBg, { x: 200, duration: 2 }, "-= 4")
      .from(iImg, { duration: 1 }, "-=5")
      .from(
        iScroll,
        { duration: 1, rotation: 360, y: 100, stagger: 0.5 },
        "=-3"
      );
  }, []);

  return (
    <section className={classes.i}>
      <div className={classes.i__left}>
        <div className={classes.i__left__wrapper}>
          <h1 className={`${classes.i__intro} i-intro`}>
            {t("intro.i-intro")}
            <div className={`${classes.i__name} i-name`}>
              Christian Manzaraz
            </div>
            <div className={`${classes.i__title} i-title`}>
              <div className={classes.i__title__wrapper}>
                <div className={classes.i__title__item}>
                  JavaScript Full-Stack Developer
                </div>
                <div className={classes.i__title__item}>Frontend</div>
                <div className={classes.i__title__item}>Backend</div>
              </div>
            </div>
          </h1>
          <h2 className={`${classes.i__desc} i-desc`}>{t("intro.i-desc")}</h2>
        </div>
        <svg
          className={`${classes.i__scroll} i-scroll`}
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="rgb(201, 180, 22)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className={classes.i__right}>
        <div className={`${classes.i__bg} i-bg`}></div>
        <img
          src={avatar}
          alt="Christian Manzaraz"
          className={`${classes.i__img} i-img`}
        />
      </div>
    </section>
  );
};

export default Intro;
