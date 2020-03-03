<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="gotoLists()">Goto Lists</button>
    </div>
</template>

<script>
    export default {
        methods : {
            gotoLists() {
                this.$router.push({
                    name : 'lists',
                    params : {
                        'maxElements' : 5
                    }
                })
            }
        }
    }
</script>