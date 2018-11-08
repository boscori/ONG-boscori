require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand"
], function(Map, SceneView, BasemapGallery, Expand){

    var map = new Map({
        basemap: "topo",
        ground: "world-elevation"
    });

    var view = new SceneView({
        container: "map",     // Reference to the scene div created in step 5
        map: map,                 // Reference to the map object created before the scene
        scale: 100000000,          // Sets the initial scale to 1:50,000,000
        center: [-74, 4],
        ui: {
            components: [
                "attribution",
                "zoom"
            ]
        },
        environment: {
            background: {
                type: "color",
                color: "white"
            },
            atmosphereEnabled: false,
            lighting: {
                directShadowsEnabled: false,
                // date: "Sun Jul 15 2018 11:00:00 GMT+0200 (W. Europe Daylight Time)",
                cameraTrackingEnabled: true,
                ambientOcclusionEnabled: false
            }
        },
    });

    var basemapGallery = new BasemapGallery({
        view: view,
        container: document.createElement("div")
    });

    var bgExpand = new Expand({
        view: view,
        content: basemapGallery
    });

    view.ui.add(bgExpand, "top-right");
});