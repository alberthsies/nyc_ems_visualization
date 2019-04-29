mapboxgl.accessToken = 'pk.eyJ1IjoiYnByaW50eiIsImEiOiJjanNwdGc0aG4xMTl4NDNteDRhNWhkNGlsIn0.yLDYI6nTeNudImzuG5JUfw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 11,
    center: [-73.9654, 40.7829]
});

map.on('load', function () {
    map.addSource('City-Wide Analysis', {
        type: 'geojson',
        data: 'data/ems.geojson'
    });

    map.addLayer({
        id: 'city_wide_analysis-heat',
        type: 'heatmap',
        source: 'City-Wide Analysis',
        paint: {
            'heatmap-radius': 40,
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0, 'rgba(0,62,153,0)',
                0.2, 'rgba(38,107,153,0.13)',
                0.4, 'rgba(38,107,153,0.43)',
                0.6, 'rgba(207,132,40,0.63)',
                0.8, 'rgb(153,53,66)'
            ],
            "heatmap-weight": {
                "type": "identity",
                "property": "point_count"
            },
            'heatmap-intensity': 0.1
        }
    });

    // map.addLayer({
    //     id: 'city_wide_analysis-heat',
    //     type: 'heatmap',
    //     source: 'City-Wide Analysis',
    //     maxzoom: 20,
    //     paint: {
    //         // increase weight as diameter breast height increases
    //         'heatmap-weight': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [1, 0],
    //                 [10, 1]
    //             ]
    //         },
    //         // increase intensity as zoom level increases
    //         // 'heatmap-intensity': {
    //         //     stops: [
    //         //         [11, 1],
    //         //         [15, 3]
    //         //     ]
    //         // },
    //         // assign color values be applied to points depending on their density
    //         'heatmap-color': [
    //             'interpolate',
    //             ['linear'],
    //             ['heatmap-density'],
    //             0, 'rgba(236,222,239,0)',
    //             0.2, 'rgba(153,13,11,0.16)',
    //             0.4, 'rgba(153,13,11,0.43)',
    //             0.6, 'rgba(153,13,11,0.63)',
    //             0.8, 'rgb(153,0,40)'
    //         ],
    //         // increase radius as zoom increases
    //         'heatmap-radius': {
    //             stops: [
    //                 [11, 15],
    //                 [15, 20]
    //             ]
    //         },
    //         // decrease opacity to transition into the circle layer
    //         'heatmap-opacity': {
    //             default: 1,
    //             stops: [
    //                 [14, 1],
    //                 [15, 0]
    //             ]
    //         },
    //     }
    // }, 'waterway-label');

    // map.addLayer({
    //     id: 'city_wide_analysis-point',
    //     type: 'circle',
    //     source: 'City-Wide Analysis',
    //     minzoom: 14,
    //     paint: {
    //         // increase the radius of the circle as the zoom level and dbh value increases
    //         'circle-radius': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [{ zoom: 15, value: 1 }, 5],
    //                 [{ zoom: 15, value: 10 }, 10],
    //                 [{ zoom: 22, value: 1 }, 20],
    //                 [{ zoom: 22, value: 10 }, 50],
    //             ]
    //         },
    //         'circle-color': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [0, 'rgba(236,222,239,0)'],
    //                 [2, 'rgb(236,222,239)'],
    //                 [4, 'rgb(208,209,230)'],
    //                 [6, 'rgb(166,189,219)'],
    //                 [8, 'rgb(103,169,207)'],
    //                 [9, 'rgb(28,144,153)'],
    //                 [10, 'rgb(1,108,89)']
    //             ]
    //         },
    //         'circle-stroke-color': 'white',
    //         'circle-stroke-width': 1,
    //         'circle-opacity': {
    //             stops: [
    //                 [14, 0],
    //                 [15, 1]
    //             ]
    //         }
    //     }
    // }, 'waterway-label');
    //
    //
    //
    // map.addSource('CIncident Analysis', {
    //     type: 'geojson',
    //     data: 'data/ems.geojson'
    // });
    //
    // map.addLayer({
    //     id: 'incident-analysis-heat',
    //     type: 'heatmap',
    //     source: 'Incident Analysis',
    //     maxzoom: 15,
    //     paint: {
    //         // increase weight as diameter breast height increases
    //         'heatmap-weight': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [1, 0],
    //                 [10, 1]
    //             ]
    //         },
    //         // increase intensity as zoom level increases
    //         'heatmap-intensity': {
    //             stops: [
    //                 [11, 1],
    //                 [15, 3]
    //             ]
    //         },
    //         // assign color values be applied to points depending on their density
    //         'heatmap-color': [
    //             'interpolate',
    //             ['linear'],
    //             ['heatmap-density'],
    //             0, 'rgba(236,222,239,0)',
    //             0.2, 'rgba(0,62,153,0.16)',
    //             0.4, 'rgba(0,62,153,0.43)',
    //             0.6, 'rgba(0,62,153,0.63)',
    //             0.8, 'rgb(0,62,153)'
    //         ],
    //         // increase radius as zoom increases
    //         'heatmap-radius': {
    //             stops: [
    //                 [11, 15],
    //                 [15, 20]
    //             ]
    //         },
    //         // decrease opacity to transition into the circle layer
    //         'heatmap-opacity': {
    //             default: 1,
    //             stops: [
    //                 [14, 1],
    //                 [15, 0]
    //             ]
    //         },
    //     }
    // }, 'waterway-label');
    //
    // map.addLayer({
    //     id: 'incident-analysis-point',
    //     type: 'circle',
    //     source: 'Incident Analysis',
    //     minzoom: 14,
    //     paint: {
    //         // increase the radius of the circle as the zoom level and dbh value increases
    //         'circle-radius': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [{ zoom: 15, value: 1 }, 5],
    //                 [{ zoom: 15, value: 10 }, 10],
    //                 [{ zoom: 22, value: 1 }, 20],
    //                 [{ zoom: 22, value: 10 }, 50],
    //             ]
    //         },
    //         'circle-color': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [0, 'rgba(236,222,239,0)'],
    //                 [2, 'rgb(236,222,239)'],
    //                 [4, 'rgb(208,209,230)'],
    //                 [6, 'rgb(166,189,219)'],
    //                 [8, 'rgb(103,169,207)'],
    //                 [9, 'rgb(28,144,153)'],
    //                 [10, 'rgb(1,108,89)']
    //             ]
    //         },
    //         'circle-stroke-color': 'white',
    //         'circle-stroke-width': 1,
    //         'circle-opacity': {
    //             stops: [
    //                 [14, 0],
    //                 [15, 1]
    //             ]
    //         }
    //     }
    // }, 'waterway-label');
});