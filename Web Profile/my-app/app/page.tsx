import Image from "next/image";
import styles from "./page.module.css"
import InfoItem from "./components/InfoItem";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Saepul Akbar</h1>
        InfoItem
      </div>
    </div>
  );
}
