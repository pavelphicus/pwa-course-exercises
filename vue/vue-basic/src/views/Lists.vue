<template>
    <div>
        <template v-for="(l, i) in lists">
            <list :key="'list_' + i" :max-elements="maxElements" :title="l.title" @list-elements="l.elements = $event"/>
            <p :key="'elems_' + i">Elementos de tipo {{ l.title }}: {{ l.elements }}</p>
        </template>
    </div>
</template>

<script>
    import List from '@/components/List';
    export default {
        name: "Lists",
        components : {
            List
        },
        data() {
            return {
                maxElements : this.$route.params.maxElements || 5,
                lists : [
                    {
                        title : 'Personas',
                        elements : null,
                    },
                    {
                        title : 'Cosas',
                        elements : null,
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>