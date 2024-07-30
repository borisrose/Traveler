export default function () {

    return `
    
        <main class="main home__main" x-data>
            <section>
                <template x-for="action in $store.home.actions">
                    <a :href="action.href">
                        <span>
                            <i :class="action.icon"></i>
                        </span>
                        <p x-text="action.textContent"></p>
                    </a>
                </template>
            </section>
        </main>
    
    `
}