import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/Home.module.css"

export default function Projects() {
  return (
    <div className={styles.div_full}>
      <h1>Portfolio</h1>
      <div className={styles.portfolio_container}>
        <Link href="https://paint.toys/" target="_bank">
          <div className={styles.effect_container}>
            <Image
              src="/assets/stock_website.jpg"
              alt="web 1"
              width={300}
              height={200}
              className={styles.portfolio_pic}
            ></Image>
            <div className={styles.middle}>
              <div className={styles.text}>Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
