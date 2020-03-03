<template>
    <div class="list">
        <h4>Elementos de tipo ({{ title }}):</h4>
        <div>
            <input type="text" placeholder="Nombre" v-model="element.name">
            <input type="number" placeholder="Valor" v-model="element.value">
            <button @click="addElement(element)" :disabled="disableButton">
                Añadir
            </button>
        </div>
        <p v-if="this.elements.length === this.maxElements">No puedes añadir más elementos (Max: {{ this.maxElements }})</p>
        <ul v-if="elements.length > 0">
            <li v-for="(e, index) in elements" :key="index">
                {{ e.name }} <button @click="removeElement(e, index)">Eliminar</button>
            </li>
        </ul>
        <p v-else>No hay elementos</p>
    </div>
</template>

<script>
    export default {
        name : 'list',
        props : {
            title : {
                type: String,
                default: 'cosas'
            },
            maxElements : {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                element : {
                    name : null,
                    value : null
                },
                elements : [
                    {
                        name : 'Elemento 1',
                        value : 1
                    },
                    {
                        name : 'Elemento 2',
                        value : 2
                    },
                    {
                        name : 'Elemento 3',
                        value : 3
                    },
                ]
            }
        },
        computed : {
            disableButton() {
                return this.element.name === null
                    || this.element.name === ''
                    || this.element.value === null
                    || this.element.value === '';
            },
        },
        methods : {
            removeElement(element, index) {
                this.elements.splice(index, 1);
                // this.elements = this.elements.filter(elem => {
                //     return element.name !== elem.name;
                // });
                this.$emit('list-elements', this.elements.length);
            },
            addElement(element) {
                if (this.elements.length < this.maxElements) {
                    // this.elements.push(Object.assign({}, element));
                    this.elements.push({
                        name : element.name,
                        value : element.value
                    });
                    this.element.name = null;
                    this.element.value = null;
                    console.log('Añado elementos...');
                    this.$emit('list-elements', this.elements.length);
                }
            }
        },
        mounted() {
            console.log('Componente montado');
            this.$emit('list-elements', this.elements.length);
        },
        created() {
            console.log('Componente creado');
        }
    }
</script>