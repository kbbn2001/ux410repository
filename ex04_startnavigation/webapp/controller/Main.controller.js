sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("student02.sap.training.startnavigation.controller.Main", {
            onInit: function () {
                this._fnGetService = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;
                this._oCrossAppNavigation = this._fnGetService && this._fnGetService("CrossApplicationNavigation");

                this._hash = (this._oCrossAppNavigation&&this._oCrossAppNavigation.hrefForExternal({
                    target : {
                        semanticObject : "UX410NavEnd02",
                        action: "display"
                    },
                    params : {
                        "helloText" : "Hello UX410"
                    }
                    
                })) || "";
            
            let _oLink = this.byId("idNavLink");
            _oLink.setHref(this._hash);
            },
            
            onPress : function(oEvent) {
                if(this._oCrossAppNavigation) {
                    var oHref = this._oCrossAppNavigation.toExternal({
                        target : {
					    	shellHash : this._hash
                        }
                    })         
                }
            }
        });
    });
