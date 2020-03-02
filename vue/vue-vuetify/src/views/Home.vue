<template>
    <div class="home fill-height">
        <v-img
                src="/assets/background.jpg"
                :width="width"
                :height="height"
                gradient="to bottom, rgba(255,255,255,.25), rgba(255,255,255,.75)"
        >
            <div class="weather pa-2" v-if="currentLocation !== null">
                <div class="headline">Weather in</div>
                <div class="display-1 primary--text"> {{ currentLocation.name }}, {{ currentLocation.country }}</div>
                <v-row align="center" justify="center">
                    <v-col cols="4" class="text-center py-0">
                        <img
                                :src="'https://openweathermap.org/img/wn/' + currentLocation.weather.status.icon + '@2x.png'"
                                :alt="currentLocation.weather.status.main"
                                width="100"
                                height="100"
                        >
                    </v-col>
                    <v-col cols="8" class="py-0">
                        <div class="display-2 font-weight-bold">{{ currentLocation.weather.basic.temp }} ºC</div>
                        <div class="cation">Feels like: {{ currentLocation.weather.basic.feels_like }} ºC</div>
                    </v-col>
                </v-row>

                <v-list dense>
                    <v-list-item>
                        <v-list-item-content class="font-weight-bold">Min/Max:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ currentLocation.weather.basic.temp_min }} ºC / {{ currentLocation.weather.basic.temp_max }} ºC</v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                        <v-list-item-content class="font-weight-bold">Status:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ currentLocation.weather.status.description }}</v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                        <v-list-item-content class="font-weight-bold">Pressure:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ currentLocation.weather.basic.pressure }} hpa</v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                        <v-list-item-content class="font-weight-bold">Humidity:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ currentLocation.weather.basic.humidity }} %</v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                        <v-list-item-content class="font-weight-bold">Wind:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            Speed: {{ currentLocation.weather.wind.speed }} m/s<br>
                            Direction: {{ currentLocation.weather.wind.deg }} º
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
                <v-row>
                    <v-col>
                        <v-btn block color="primary">Refresh data</v-btn>
                    </v-col>
                </v-row>
                <!--            <div>{{ currentLocation }}</div>-->
            </div>
        </v-img>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'Home',
        data() {
            return {
                width : window.innerWidth,
                height: window.innerHeight - 48 - 32
            }
        },
        computed : {
            ...mapState(['currentLocation'])
        }
    }
</script>

<style scoped>
    .v-list.theme--light {
        background: rgba(255, 255, 255, 0.75)!important;
    }
</style>