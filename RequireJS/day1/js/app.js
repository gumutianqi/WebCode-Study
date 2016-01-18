requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "src",
    //load it from the js/src directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../src',
        jquery: 'jquery/jquery-2.1.4'
    }
});

// Start the main src logic.
requirejs(['jquery'], function ($) {
    //jQuery, canvas and the src/sub module are all
    //loaded and can be used here now.
    console.log("load jQuery.");
});