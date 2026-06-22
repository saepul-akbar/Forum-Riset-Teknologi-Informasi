import styles from "./Navbar.modules.css"

type NavbarProps = {
    brand: string;
}

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
        <span className={styles.logo}>My App</span>
        <ul className={styles.navLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
  );
}