/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student02saptraining/valuehelp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
