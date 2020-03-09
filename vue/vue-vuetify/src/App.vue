<template>
    <v-app id="app">
        <v-navigation-drawer
                v-model="menu"
                absolute
                temporary
                dark
        >
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Locations:</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                        v-for="(location, index) in locations"
                        :key="location.name"
                        @click="changeLocation(location)"
                >
                    <v-list-item-avatar class="mx-0">
                        <v-icon :color="location.id === currentLocation.id ? 'warning' : 'white'">mdi-map-marker</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{ location.name }}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar v-if="editLocations && index > 0">
                        <v-btn>
                            <v-icon color="error">mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-avatar>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list dense v-if="locations.length > 1">
                <v-list-item>
                    <v-list-item-content>
                        <v-switch
                                color="error"
                                v-model="editLocations"
                                label="Edit locations"
                        ></v-switch>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
                app
                absolute
                color="primary"
                dense
                dark
        >
            <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>

            <v-toolbar-title>MyWeather App</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="addLocationDialog = true">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-container
                    class="fill-height pa-0"
                    fluid
            >
                <router-view/>
            </v-container>
        </v-content>

        <v-footer app color="black" dark class="caption">
            MyWeather App @paveldelpozo | &copy; 2020-present
        </v-footer>

        <v-dialog v-model="addLocationDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card tile>
                <v-toolbar tile dense dark color="secondary">
                    <v-toolbar-title>Add new location</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn icon dark @click="addLocationDialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-text-field
                                    autofocus
                                    ref="location"
                                    color="secondary"
                                    label="Location"
                                    prepend-icon="mdi-map-marker"
                                    append-outer-icon="mdi-magnify"
                                    v-model="location"
                                    :loading="loadingLocations"
                                    :disabled="loadingLocations"
                                    @click:append-outer="getLocations()"
                                    @keypress.enter="getLocations()"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-list subheader dense two-line>
                        <v-subheader>Results</v-subheader>

                        <template v-for="location in locationsFound">
                            <v-divider :key="'divider_' + location.id"></v-divider>
                            <v-list-item
                                    :key="location.id"
                            >
                                <v-list-item-content>
                                    <v-list-item-title>{{ location.name }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ location.sys.country }}</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-avatar @click="addNewLocation(location)">
                                    <v-icon>mdi-map-marker-plus</v-icon>
                                </v-list-item-avatar>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
    // Todo: detect change of currentLocation to get new weather info and set it in store
    // Todo: extract sideMenu, addNewLocation dialog and currentLocation view to components
    // Todo: use Flickr api to get random image of currentLocation and set it at background (https://www.flickr.com/services/api/, https://www.flickr.com/services/api/auth.oauth.html)

    import {mapState, mapActions} from 'vuex'
    export default {
        data() {
            return {
                apiKey : 'c872bf23d4fa4250e4419a35446ad440',
                location : null,
                editLocations : false,
                locationsFound : [],
                loadingLocations : false,
                addLocationDialog: false,
                menu : false,
                error : null,
            }
        },
        computed : {
            ...mapState(['locations', 'currentLocation'])
        },
        methods : {
            ...mapActions(['addLocation', 'setCurrentLocation']),
            async getLocations() {
                if (this.location.length >= 3) {
                    this.loadingLocations = true;
                    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}&units=metric`)
                        .then(response => response.json());
                    this.locationsFound = [result];
                    this.loadingLocations = false;
                }
            },
            changeLocation(location) {
                this.menu = false;
                this.setCurrentLocation(location)
            },
            getCurrentLocation() {
                if (navigator.geolocation && this.locations.length === 0) {
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            this.addCurrentPosition(position);
                        },
                        error => {
                            console.log('App/getLocation', error.code, error.message);
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 20000,
                            maximumAge: 0
                        }
                    );
                } else {
                    console.log('Geolocation is not supported by this browser.');
                }
            },
            async addCurrentPosition(position) {
                let location = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${this.apiKey}&units=metric`)
                    .then(response => response.json());

                this.addLocation({
                    id : 0,
                    name : `Current: ${location.name}`,
                    country : location.sys.country,
                    coordinates : {
                        latitude : position.coords.latitude,
                        longitude : position.coords.longitude
                    },
                    weather : {
                        basic : location.main,
                        status : location.weather[0],
                        wind : location.wind,
                        clouds : location.clouds
                    }
                })
            },
            addNewLocation(location) {
                this.addLocation({
                    id : location.id,
                    name : location.name,
                    country : location.sys.country,
                    coordinates : {
                        latitude : location.coord.lat,
                        longitude : location.coord.lon
                    },
                    weather : {
                        basic : location.main,
                        status : location.weather[0],
                        wind : location.wind,
                        clouds : location.clouds
                    }
                });
                this.addLocationDialog = false;
            }
        },
        mounted() {
            this.getCurrentLocation();
        }
    }
</script>

<style lang="less">

</style>
