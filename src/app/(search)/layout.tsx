import styles from './layout.module.css';

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
      <main className={styles.searchLayout}>
          <header className={styles.searchLayout__header}>
              <h1>Search results</h1>
          </header>
          <section className={styles.searchLayout__content}>{children}</section>
      </main>
  )
}
