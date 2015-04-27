jQuery.sap.require("colorswatcher.controls.ColorSwatchLibrary");
jQuery.sap.require("colorswatcher.controls.ColorSwatch");

sap.ui.controller('colorswatcher.view.Main', {

    onInit: function () {

        var colorsModel = new sap.ui.model.json.JSONModel();
        colorsModel.loadData(
            "model/colors.json", // path
            {}, // parameters
            false // async (false, we want to load right away)
        );
        this.getView().setModel(colorsModel, "colors");

        jQuery.sap.log.debug("[color-swatcher] Initialized Main view");
    }

});
