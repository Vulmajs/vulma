<template>
    <section class="api-view">
        <h2 class="title is-4">API</h2>

        <template v-for="component in data">
            <div :key="component.title">
                <h3
                    v-if="component.title"
                    class="subtitle">
                    {{ component.title }}
                </h3>
                <v-tabs>
                    <v-tab-item v-if="component.props" label="Properties">
                        <v-table :data="component.props" :columns="propsColumns"/>
                    </v-tab-item>

                    <v-tab-item v-if="component.slots" label="Slots">
                        <v-table :data="component.slots" :columns="slotsColumns"/>
                    </v-tab-item>

                    <v-tab-item v-if="component.events" label="Events">
                        <v-table :data="component.events" :columns="eventsColumns"/>
                    </v-tab-item>

                    <v-tab-item v-if="component.methods" label="Methods">
                        <v-table :data="component.methods" :columns="methodsColumns"/>
                    </v-tab-item>
                </v-tabs>
            </div>
        </template>
    </section>
</template>

<script>
    export default {
        props: {
            data: Array
        },
        data() {
            return {
                propsColumns: [
                    { label: 'Name', field: 'name', renderHtml: true },
                    { label: 'Description', field: 'description', renderHtml: true },
                    { label: 'Type', field: 'type' },
                    { label: 'Values', field: 'values', renderHtml: true },
                    { label: 'Default', field: 'default', renderHtml: true }
                ],
                slotsColumns: [
                    { label: 'Slot name', field: 'name', renderHtml: true },
                    { label: 'Description', field: 'description', renderHtml: true },
                    { label: 'Props (if scoped)', field: 'props', renderHtml: true }
                ],
                eventsColumns: [
                    { label: 'Name', field: 'name', renderHtml: true },
                    { label: 'Description', field: 'description', renderHtml: true },
                    { label: 'Parameters', field: 'parameters', renderHtml: true }
                ],
                methodsColumns: [
                    { label: 'Name', field: 'name', renderHtml: true },
                    { label: 'Description', field: 'description', renderHtml: true },
                    { label: 'Return', field: 'return', renderHtml: true }
                ]
            }
        }
    }
</script>
