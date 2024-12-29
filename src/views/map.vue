<template>
    <div>
        <header class="head bg-primary">
            <a href="/" class="back-button">← Geri</a>
            <h1 class="header-title">Nasıl Giderim?</h1>
        </header>
        <div id="map" style="width: 100%; height: 500px"></div>
    </div>
    <a @click.prevent="getDirections" :href="mapLink" class="btn">Get Directions</a>
</template>

<script>
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default {
    name: 'MapView',
    data() {
        return {
            mapLink: ''
        };
    },
    mounted() {
        const map = new maplibregl.Map({
            style: 'https://tiles.openfreemap.org/styles/liberty',
            center: [29.379602, 40.892312],
            zoom: 13.5,
            container: 'map',
        });
        const marker = new maplibregl.Marker()
            .setLngLat([29.379602, 40.892312])
            .addTo(map);
    },
    methods: {
        getDirections() {
            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isIOS) {
                const useAppleMaps = confirm("Do you want to use Apple Maps?");
                if (useAppleMaps) {
                    this.mapLink = 'http://maps.apple.com/?q=40.892312,29.379602';
                } else {
                    this.mapLink = 'https://maps.google.com/?q=40.892312,29.379602';
                }
            } else {
                this.mapLink = 'https://maps.google.com/?q=40.892312,29.379602';
            }
            window.location.href = this.mapLink;
        }
    }
};
</script>

<style scoped>
#map {
    width: 200%;
    height: 600px;
}

.head {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
}

.back-button {
    background-color: #FFF2C2;
    color: rgb(2, 0, 0);
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 15px;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #ffe483;
}

.header-title {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    color: #333;
}
</style>