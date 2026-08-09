import { Code2, Terminal } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          Construímos produtos digitais escaláveis e dominamos as buscas orgânicas.
        </h1>
        <p className={styles.heroSubtitle}>
          Engenharia de Software de alto nível e SEO Técnico. Infraestrutura robusta para
          negócios que não podem falhar.
        </p>
        <div className={styles.actionGroup}>
          <button className={styles.btnPrimary} type="button">
            <Terminal size={18} />
            Iniciar Projeto
          </button>
          <button className={styles.btnSecondary} type="button">
            <Code2 size={18} />
            Explorar Stack
          </button>
        </div>
      </section>
    </main>
  );
}
