jQuery.sap.declare("colorswatcher.Component");

sap.ui.core.UIComponent.extend("colorswatcher.Component", {
    metadata: {
        name: "Color Swatcher",
        dependencies: {
            libs: ["sap.m", "sap.ui.layout"]
        },
        rootView: "colorswatcher.view.App",
        routing: {
            config: {
                viewType: "XML",
                viewPath: "colorswatcher.view",
                targetAggregation: "pages",
                clearTarget: false
            },
            routes: [
                {
                    pattern: "",
                    name: "main",
                    view: "Main",
                    targetAggregation: "pages",
                    targetControl: "idAppControl"
                }
            ]
        }
    },

    init: function () {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        jQuery.sap.log.setLevel(jQuery.sap.log.Level.DEBUG);
        this.getRouter().initialize();
    }
});
