import styles from './loading.module.css'

export default function Loading() {
    return (
        <>
            <aside className={styles.loading__aside}>
                <h2>Loading filters&hellip;</h2>
            </aside>
            <section className={styles.loading__content}>
                <h2>Fetching results&hellip;</h2>
            </section>
        </>
    )
}
