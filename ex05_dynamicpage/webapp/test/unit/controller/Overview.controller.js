/*global QUnit*/

sap.ui.define([
	"student00saptraining/dynamicpage/controller/Overview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Overview Controller");

	QUnit.test("I should test the Overview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
