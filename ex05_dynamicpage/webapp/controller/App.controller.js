sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("student00.sap.training.dynamicpage.controller.App", {
        onInit() {
          this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

        }
      });
    }
  );
  