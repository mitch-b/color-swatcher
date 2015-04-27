sap.ui.core.Control.extend("colorswatcher.controls.ColorSwatchLibrary", {
    metadata: {
        properties: {
            title: "string"
        },
        aggregations: {
            //"layout": { type: "sap.ui.layout.ResponsiveFlowLayout", multiple: false, visibility: "hidden" },
            "colors": { type: "colorswatcher.controls.ColorSwatch", multiple: true }
        }
    },
    renderer: function(oRm, oControl) {
        //var layout = oControl.getAggregation("layout");
        //layout.getContent()[0].setModel(oControl.getModel());
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.writeStyles();
        oRm.addClass("colorswatcher-library");
        oRm.write(">");
        oRm.write("<p class='colorswatcher-library-title'>");
        oRm.write(oControl.getTitle());
        oRm.write("</p>");

        var colors = oControl.getColors();

        var responsiveFlowLayout = new sap.ui.layout.ResponsiveFlowLayout({
            content: colors
        });
        oRm.renderControl(responsiveFlowLayout);

        /*
        for (var i = 0; i < colors.length; i++) {
            var color = colors[i];
            jQuery.sap.log.debug("Found color to render");
            oRm.renderControl(color);
        }
        */

        oRm.write("</div>");
    }
});
