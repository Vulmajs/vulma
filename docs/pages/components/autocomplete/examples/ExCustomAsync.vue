<template>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <v-field label="Find a movie">
            <v-autocomplete
                v-model="name"
                :data="data"
                placeholder="e.g. Fight Club"
                field="title"
                :loading="isFetching"
                @keyup.native="getAsyncData"
                @select="option => selected = option">

                <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                            <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
                        </div>
                        <div class="media-content">
                            {{ props.option.title }}
                            <br>
                            <small>
                                Released at {{ props.option.release_date }},
                                rated <b>{{ props.option.vote_average }}</b>
                            </small>
                        </div>
                    </div>
                </template>
            </v-autocomplete>
        </v-field>
    </section>
</template>

<script>
    import debounce from 'lodash/debounce'

    export default {
        data() {
            return {
                data: [],
                name: '',
                selected: null,
                isFetching: false
            }
        },
        methods: {
            // You have to install and import debounce to use it,
            // it's not mandatory though.
            getAsyncData: debounce(function () {
                this.data = []
                if (!this.name.length) return
                this.isFetching = true
                this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${this.name}`)
                    .then(({ data }) => {
                        data.results.forEach((item) => this.data.push(item))
                        this.isFetching = false
                    })
                    .catch((error) => {
                        this.isFetching = false
                        throw error
                    })
            }, 500)
        }
    }
</script>
