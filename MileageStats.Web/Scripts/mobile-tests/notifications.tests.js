﻿/*  
Copyright Microsoft Corporation

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at 

http://www.apache.org/licenses/LICENSE-2.0 

THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED 
ARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 

See the Apache 2 License for the specific language governing permissions and
limitations under the License. */

(function (specs, app) {

	module('notifications specs');

	test('notifications module constructs itself', function () {

		var module = app.notifications(mocks.create());

		ok(module != undefined, true);
		equal(typeof module, 'object');
	});

	test('notifications module should persist alerts', function () {

		var module = app.notifications(mocks.create());

		module.send({ FlashAlert: 'test' });

		var newModel = {};
		module.subscribe(newModel);

		//assert
		ok(newModel.FlashAlert == 'test');
	});

	test('notifications module should persist confirmations', function () {

		var module = app.notifications(mocks.create());

		module.send({ FlashConfirm: 'test' });

		var newModel = {};
		module.subscribe(newModel);

		//assert
		ok(newModel.FlashConfirm == 'test');
	});

} (window.specs = window.specs || {}, window.mstats));