import React from "react";
import repeat from "@/styles/Repeat.module.scss";
import styles from "@/styles/Products.module.scss";
import Link from "next/link";
import Feedback from "@/components/Feedback";

const RehauEuro60 = () => {
  return (
    <>
      <section>
        <h1 className={styles.title_center}>Віконна система Rehau GENEO</h1>
        <div className={styles.featured__container}>
          <div className={styles.featured__body}>
            <div
              className={`${styles.featured__images} ${styles.images_featured}`}
            >
              <div className={styles.images_featured__item}>
                <img
                  itemProp="image"
                  src={"/images/rehauprofiles/rehaugeneo.webp"}
                />
                <div className={styles.featured_price_body}>
                  <h2
                    itemProp="name"
                    className={styles.content_featured__title}
                  >
                    9600 грн
                  </h2>
                  <div className={styles.options_content_featured__value}>
                    Розмір <b>1500x1500</b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.features__content} ${styles.content_featured}`}
            >
              <div className={styles.content_featured__body}>
                <h2 itemProp="name" className={styles.content_featured__title}>
                  Технічні характеристики профільної системи REHAU GENEO
                </h2>
                <div
                  className={`${styles.content_featured_options} ${styles.options_content_featured}`}
                >
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Монтажна глибина
                    </div>
                    <div className={styles.options_content_featured__value}>
                      86мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      К-сть камер
                    </div>
                    <div className={styles.options_content_featured__value}>
                      6 камер
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Товищина склопакету
                    </div>
                    <div className={styles.options_content_featured__value}>
                      до 52 мм
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт теплопередачі
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Uf = 0,86 Вт/м2K
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Коефіцієнт опору теплопередачі**
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Rf = 1,16 м2K/Вт
                    </div>
                  </div>
                  <div className={styles.options_content_featured__item}>
                    <div className={styles.options_content_featured__label}>
                      Звукоізоляція
                    </div>
                    <div className={styles.options_content_featured__value}>
                      Rw = 50 дБ, 5 клас
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={"/contacts"}
                className={styles.content_featured__link}
              >
                <div className={styles.color__link}>Розрахувати вікно</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.text_block_body}>
          <div className={styles.text_block_content}>
            <p className={styles.text_block_desc}>
              Профільна система Rehau Geneo з монтажною глибиною 86 мм – це
              революція в області енергоефективності! Ці вікна – взірець
              комфорту та захисту вашого будинку. Унікальна конструкція,
              шестикамерна рама, тришаровий склопакет та інноваційний матеріал
              RAU-FIPRO, з якого виготовляється профіль, – все це гарантія
              теплої оселі взимку та прохолодної влітку.
            </p>
          </div>
          <div className={styles.text_block_image}>
            <img
              src={"/images/product/climukraine.webp"}
              alt="Кліматична карта України"
            />
          </div>
        </div>
        <Feedback id="form" />
      </section>
    </>
  );
};

export default RehauEuro60;
