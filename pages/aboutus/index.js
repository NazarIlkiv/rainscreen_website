import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/aboutus.module.scss";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>
          Вікна Рехау - Ціни на металопластикові вікна Rehau у Львові - Rain
          Screen
        </title>
        <meta name="description" content="Про нас Rain Screen" />
        <meta name="keywords" content="купити вікна та двері rehau у м.Львів" />
      </Head>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content_section}>
            <div className={styles.title}>
              <h1>Про нас</h1>
            </div>
            <div className={styles.content}>
              <h3>
                <b>Офіційний представник Rehau та Aluprof у м.Львові</b>
              </h3>
              <p>
                Ми успішно працюємо на українському ринку вже 5 років.
                Виготовляюємо та встановлюємо металопластикові вікна, двері з
                металопластикових профілів Rehau та алюмінієвого профілю
                Aluprof. Компанія Rain Screen є офіційний представником компанії
                Rehau та Aluprof Щира турбота про клієнтів, надання пропозицій
                вирішення потреб будівництва, гарного оформлення і підвищення
                комфорту житла - головна мета нашої діяльності.
              </p>
            </div>
          </div>
          <div className={styles.image_section}>
            <img src="/images/aboutus/aboutus.webp" alt="office dors"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
