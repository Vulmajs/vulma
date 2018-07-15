<template>
    <section>

        <v-collapse class="card">
            <div slot="trigger" slot-scope="props" class="card-header">
                <p class="card-header-title">
                    Component
                </p>
                <a class="card-header-icon">
                    <v-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </v-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a>#vulmajs</a>.
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">Save</a>
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
            </footer>
        </v-collapse>

    </section>
</template>
