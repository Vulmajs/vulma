<template>
    <section>
        <v-field>
            <v-input placeholder="Search..."
                type="search"
                icon="magnify">
            </v-input>
            <p class="control">
                <button class="button is-primary">Search</button>
            </p>
        </v-field>

        <v-field>
            <v-input placeholder="This is expanded" expanded></v-input>
            <p class="control">
                <span class="button is-static">@gmail.com</span>
            </p>
        </v-field>

        <hr>

        <v-field>
            <v-select placeholder="Currency">
                <option>$</option>
                <option>£</option>
                <option>€</option>
            </v-select>
            <v-input type="number" placeholder="0,00"></v-input>
            <p class="control">
                <button class="button is-success">Transfer</button>
            </p>
        </v-field>

        <v-field>
            <p class="control">
                <button class="button">
                    <v-icon icon="format-bold"></v-icon>
                </button>
            </p>
            <p class="control">
                <button class="button">
                    <v-icon icon="format-italic"></v-icon>
                </button>
            </p>
            <p class="control">
                <button class="button">
                    <v-icon icon="format-underline"></v-icon>
                </button>
            </p>
            <p class="control">
                <button class="button">
                    <v-icon icon="format-align-left"></v-icon>
                </button>
            </p>
            <p class="control">
                <button class="button">
                    <v-icon icon="format-align-center"></v-icon>
                </button>
            </p>
            <p class="control">
                <button class="button">
                    <v-icon icon="format-align-right"></v-icon>
                </button>
            </p>
            <v-input placeholder="Search..." type="search" icon="magnify"></v-input>
        </v-field>

        <v-field>
            <p class="control">
                <button class="button is-primary">
                    Button
                </button>
            </p>
            <p class="control">
                <v-dropdown>
                    <button class="button is-primary" slot="trigger">
                        <v-icon icon="menu-down"></v-icon>
                    </button>

                    <v-dropdown-item>Action</v-dropdown-item>
                    <v-dropdown-item>Another action</v-dropdown-item>
                    <v-dropdown-item>Something else</v-dropdown-item>
                </v-dropdown>
            </p>
        </v-field>

        <v-field>
            <p class="control">
                <v-dropdown>
                    <button class="button" slot="trigger">
                        <span>Filters</span>
                        <v-icon icon="menu-down"></v-icon>
                    </button>

                    <v-dropdown-item value="open_issues">Open Issues and Pull Requests</v-dropdown-item>
                    <v-dropdown-item value="your_issues">Your Issues</v-dropdown-item>
                    <v-dropdown-item value="pull_requests">Your Pull Requests</v-dropdown-item>
                    <v-dropdown-item value="everything">Everything</v-dropdown-item>
                </v-dropdown>
            </p>
            <v-input icon="magnify" type="search" placeholder="Search..."></v-input>
        </v-field>
    </section>
</template>
