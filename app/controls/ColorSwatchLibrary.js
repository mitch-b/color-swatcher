sap.ui.core.Control.extend("colorswatcher.controls.ColorSwatchLibrary", {
    metadata: {
        properties: {
            title: "string"
        },
        aggregations: {
            "colors": { type: "colorswatcher.controls.ColorSwatch", multiple: true }
        }
    },
    renderer: function(oRm, oControl) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.writeStyles();
        oRm.addClass("colorswatcher-library");
        oRm.write(">");
        oRm.write("<p class='colorswatcher-library-title'>");
        oRm.writeEscaped(oControl.getTitle());
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
