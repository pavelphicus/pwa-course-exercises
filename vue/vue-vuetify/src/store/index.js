import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentLocation : null,
        locations : []
    },
    mutations: {
        setCurrentLocationMutation(state, location) {
            state.currentLocation = location;
        },
        addLocationMutation(state, data) {
            console.log('store/addLocationMutation', data);
            let location = state.locations.find(l => l.name === data.name);
            if (location === undefined) {
                state.locations.push({
                    id : data.id,
                    name : data.name,
                    country : data.country,
                    coordinates : {
                        latitude : data.coordinates.latitude,
                        longitude : data.coordinates.longitude
                    },
                    weather : data.weather || null
                });
                if (state.locations.length === 1) {
                    state.currentLocation = state.locations[0];
                }
            } else {
                console.log(`You can't add the same location twice`)
            }
        },
        removeLocationMutation(state, index) {
            if (index > 0 && index < state.locations.length) {
                state.locations.splice(index, 1)
            } else {
                console.log(`You can't remove the first location, or an out of range index`)
            }
        }
    },
    actions: {
        addLocation(context, location) {
            context.commit('addLocationMutation', location);
        },
        removeLocation(context, index) {
            context.commit('removeLocationMutation', index);
        },
        setCurrentLocation(context, location) {
            context.commit('setCurrentLocationMutation', location);
        }
    }
})
