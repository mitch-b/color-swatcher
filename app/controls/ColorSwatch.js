sap.ui.core.Control.extend("colorswatcher.controls.ColorSwatch", {
    metadata: {
        properties: {
            name: "string",
            color: {type: "sap.ui.core.CSSColor", defaultValue: "#FFFFFF"},
            width: {type: "sap.ui.core.CSSSize", defaultValue: "100px"},
            height: {type: "sap.ui.core.CSSSize", defaultValue: "120px"}
        },
        events: {}
    },
    onclick: function (oEvent) {
        var copy = function (text) {
            var input = document.createElement('textarea');
            document.body.appendChild(input);
            input.value = text;
            input.focus();
            input.select();
            try {
                document.execCommand('copy');
                sap.m.MessageToast.show('Copied to clipboard', {
                    duration: 3000
                });
            }
            catch (e) {
                sap.m.MessageToast.show('Failed to copy: ' + e, {
                    duration: 3000
                });
            }
            finally {
                input.remove();
            }
        };
        copy(this.getColor());
    },
    // jsbin sample rendering: http://jsbin.com/kimalo/1/edit?html,output
    renderer: function (oRm, oControl) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.addClass("colorswatch");
        oRm.write(">");
        oRm.write("<span class='colorswatch-name'>");
        oRm.writeEscaped(oControl.getName());
        oRm.write("</span>");

        // colorblock
        oRm.write("<div ");
        oRm.addStyle("width", oControl.getWidth());
        oRm.addStyle("height", oControl.getHeight());
        oRm.addStyle("background-color", oControl.getColor());
        oRm.writeStyles();
        oRm.write("></div>");
        oRm.write("<div class='colorswatch-code-container'>");

        // loop through color codes here
        // for now, show one value
        oRm.write("<span class='colorswatch-code-key'>HEX</span>");
        oRm.write("<span class='colorswatch-code-value'>");
        oRm.writeEscaped(oControl.getColor());
        oRm.write("</span>");

        oRm.write("</div>");
        oRm.write("</div>");
    }
});
