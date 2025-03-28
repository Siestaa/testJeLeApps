
import { Cube } from '@/components/cube/cube'
import styles from './page.module.css'
export default function Home() {
  return (
    <div>
      <main>
        <Cube />
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Made with ❤️ by
          <a className={styles.footerLink} href='https://www.t.me/Sieeesta'> Ivanenko Alexey</a>
        </p>
      </footer>
    </div>
  )
}
