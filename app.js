Ext.application({
    name: 'TP',


    views: [
        'Main'
    ],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view. Sencha is instantiating this view. It is A) Creating it and B)
        // Adding it to the Application Viewport.I have to change to TP.
        Ext.Viewport.add(Ext.create('TP.view.Main'));
    }
});
