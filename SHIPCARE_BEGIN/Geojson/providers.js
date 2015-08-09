var providers = {};

providers['Satellite'] = {
    title: 'Satellite',
    icon: 'dist/images/1.jpg',
    layer: L.mapbox.tileLayer('mapbox.streets-satellite')
},

providers['Streets'] = {
    title: 'Streets',
    icon: 'dist/images/2.jpg',
    layer: L.mapbox.tileLayer('mapbox.streets')
},

providers['Contrast'] = {
    title: 'contrast',
    icon: 'dist/images/3.jpg',
    layer: L.mapbox.tileLayer('mapbox.high-contrast')
},

providers['Dark'] = {
    title: 'dark',
    icon: 'dist/images/4.jpg',
    layer: L.mapbox.tileLayer('mapbox.dark')
},

providers['Emerald'] = {
    title: 'emerald',
    icon: 'dist/images/5.jpg',
    layer: L.mapbox.tileLayer('mapbox.emerald')
},

providers['Pirates'] = {
    title: 'pirates',
    icon: 'dist/images/6.jpg',
    layer: L.mapbox.tileLayer('mapbox.pirates')
},

 providers['Ocean map'] = {
     title: 'ocean map',
     icon: 'dist/images/7.jpg',
     layer: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
         attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
         maxZoom: 13
     })
 },

providers['S57-ENC'] = {
    title: 'S57-ENC',
    icon: 'dist/images/8.jpg',
    layer: L.tileLayer('http://wms.transas.com/TMS/1.0.0/TX97/{z}/{x}/{y}.png?token=7d6b0e2c-3684-40de-8b8c-c50deea14231', { tms: true, maxZoom: 17 })
};