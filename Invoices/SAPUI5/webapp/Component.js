// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "jorgesanchez/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"

],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */

    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("jorgesanchez.SAPUI5.Component", {

            metadata: {
                manifest : "json"
                
            },

            init: function () {
                //llamada a la función Init padre
                UIComponent.prototype.init.apply(this, arguments);

                //set Data Model on the view
                this.setModel(Models.createRecipient());
                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "jorgesanchez.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }

        });

    });