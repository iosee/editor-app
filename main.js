(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"title\"></app-header>\r\n<app-body></app-body>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Simple Text Editor';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_text_service_text_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/text-service/text.service */ "./src/app/shared/services/text-service/text.service.ts");
/* harmony import */ var _shared_components_body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/body/body.component */ "./src/app/shared/components/body/body.component.ts");
/* harmony import */ var _modules_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/text-editor/text-editor.module */ "./src/app/modules/text-editor/text-editor.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _shared_components_body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _modules_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_7__["TxEditorModule"]
            ],
            providers: [_shared_services_text_service_text_service__WEBPACK_IMPORTED_MODULE_5__["TextService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/components/control-panel-action-group/control-panel-action-group.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/control-panel-action-group/control-panel-action-group.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor-action-group {\r\n  display: flex;\r\n  padding: 0 5px;\r\n}\r\n\r\n.editor-action + .editor-action {\r\n  margin-left: 5px;\r\n}\r\n\r\n.editor-action-button {\r\n  background: none;\r\n  border: none;\r\n  border-radius: 4px;\r\n  padding: 0 2px;\r\n  color: rgba(50, 50, 50, 0.9);\r\n  display: flex;\r\n  cursor: pointer;\r\n}\r\n\r\n.editor-action-button:hover {\r\n  background: #e9e9e9;\r\n}\r\n\r\n.editor-action-button.active {\r\n  background: #bebebe;\r\n}\r\n\r\n.editor-action-button:focus {\r\n  outline: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/control-panel-action-group/control-panel-action-group.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/control-panel-action-group/control-panel-action-group.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-action-group\">\r\n  <ng-container #container></ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/control-panel-action-group/control-panel-action-group.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/control-panel-action-group/control-panel-action-group.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TxControlPanelActionGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxControlPanelActionGroupComponent", function() { return TxControlPanelActionGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TxControlPanelActionGroupComponent = /** @class */ (function () {
    function TxControlPanelActionGroupComponent(resolver, renderer) {
        this.resolver = resolver;
        this.renderer = renderer;
    }
    TxControlPanelActionGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            _this.renderPluginComponent(plugin.component, plugin.componentOptions);
        });
    };
    TxControlPanelActionGroupComponent.prototype.renderPluginComponent = function (component, inputs) {
        var factory = this.resolver.resolveComponentFactory(component);
        var childComponent = this.viewContainerRef.createComponent(factory);
        Object.assign(childComponent.instance, inputs);
        this.renderer.addClass(childComponent.location.nativeElement, 'editor-action');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TxControlPanelActionGroupComponent.prototype, "plugins", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], TxControlPanelActionGroupComponent.prototype, "viewContainerRef", void 0);
    TxControlPanelActionGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-panel-action-group',
            template: __webpack_require__(/*! ./control-panel-action-group.component.html */ "./src/app/modules/text-editor/components/control-panel-action-group/control-panel-action-group.component.html"),
            styles: [__webpack_require__(/*! ./control-panel-action-group.component.css */ "./src/app/modules/text-editor/components/control-panel-action-group/control-panel-action-group.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], TxControlPanelActionGroupComponent);
    return TxControlPanelActionGroupComponent;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/components/control-panel/control-panel.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/control-panel/control-panel.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  background-color: #fff;\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  padding-top: 5px;\r\n}\r\n\r\n.editor-actions {\r\n  width: 200px;\r\n  margin-right: 420px;\r\n  display: flex;\r\n}\r\n\r\napp-control-panel-action-group + app-control-panel-action-group {\r\n  border-left: 1px solid rgba(100, 121, 143, 0.20);\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/control-panel/control-panel.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/control-panel/control-panel.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-actions\">\r\n  <app-control-panel-action-group\r\n    class=\"action-group\"\r\n    *ngFor=\"let group of groups | keyvalue\"\r\n    [plugins]=\"group.value\"\r\n  ></app-control-panel-action-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/control-panel/control-panel.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/control-panel/control-panel.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TxControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxControlPanelComponent", function() { return TxControlPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TxControlPanelComponent = /** @class */ (function () {
    function TxControlPanelComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TxControlPanelComponent.prototype, "groups", void 0);
    TxControlPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-panel',
            template: __webpack_require__(/*! ./control-panel.component.html */ "./src/app/modules/text-editor/components/control-panel/control-panel.component.html"),
            styles: [__webpack_require__(/*! ./control-panel.component.css */ "./src/app/modules/text-editor/components/control-panel/control-panel.component.css")]
        })
    ], TxControlPanelComponent);
    return TxControlPanelComponent;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/components/editor-tips/editor-tips.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/editor-tips/editor-tips.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  padding-top: 5px;\r\n  background-color: #f1f0f0;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.tip {\r\n  width: 640px;\r\n  background-color: rgb(255, 244, 117);\r\n  border: 1px solid #e4dede;\r\n  padding: 8px 15px;\r\n  font-size: 14px;\r\n  display: flex;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.tip i {\r\n  color: rgba(0, 0, 0, .8);\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/editor-tips/editor-tips.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/editor-tips/editor-tips.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tip\" *ngFor=\"let tip of tips\"><i class=\"material-icons\">info</i>{{tip}}</div>\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/editor-tips/editor-tips.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/editor-tips/editor-tips.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TxEditorTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxEditorTipsComponent", function() { return TxEditorTipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TxEditorTipsComponent = /** @class */ (function () {
    function TxEditorTipsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TxEditorTipsComponent.prototype, "tips", void 0);
    TxEditorTipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor-tips',
            template: __webpack_require__(/*! ./editor-tips.component.html */ "./src/app/modules/text-editor/components/editor-tips/editor-tips.component.html"),
            styles: [__webpack_require__(/*! ./editor-tips.component.css */ "./src/app/modules/text-editor/components/editor-tips/editor-tips.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], TxEditorTipsComponent);
    return TxEditorTipsComponent;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/components/editor/editor.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/editor/editor.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/editor/editor.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/editor/editor.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-control-panel [groups]=\"groups\"></app-control-panel>\r\n<app-editor-tips [tips]=\"tips\"></app-editor-tips>\r\n<app-file>{{text}}</app-file>\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/editor/editor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/editor/editor.component.ts ***!
  \***************************************************************************/
/*! exports provided: TxEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxEditorComponent", function() { return TxEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/modules/text-editor/services/index.ts");
/* harmony import */ var _tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens/editor-plugin-manifest/editor-plugin-manifest.token */ "./src/app/modules/text-editor/tokens/editor-plugin-manifest/editor-plugin-manifest.token.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TxEditorComponent = /** @class */ (function () {
    function TxEditorComponent(plugins) {
        this.plugins = plugins;
        this.text = '';
        this.tips = ['Select some word to see the list of synonyms (if any)'];
        this.groups = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["groupBy"])(function (plugin) {
            return String(plugin.groupID != null ? plugin.groupID : 0);
        }, this.plugins);
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TxEditorComponent.prototype, "text", void 0);
    TxEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/modules/text-editor/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/modules/text-editor/components/editor/editor.component.css")],
            providers: [_services__WEBPACK_IMPORTED_MODULE_2__["TxEditorStateService"]] // Each editor should have its own state service
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_3__["TX_EDITOR_PLUGIN_MANIFEST"])),
        __metadata("design:paramtypes", [Array])
    ], TxEditorComponent);
    return TxEditorComponent;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/components/file/file.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/file/file.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  background-color: #f1f0f0;\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\n.file {\r\n  width: 600px;\r\n  flex-grow: 1;\r\n  background-color: #fff;\r\n  border: 1px solid #e4dede;\r\n  padding: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/file/file.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/text-editor/components/file/file.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file\" contenteditable=\"true\" (input)=\"onInput()\" #editableArea>\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/components/file/file.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/text-editor/components/file/file.component.ts ***!
  \***********************************************************************/
/*! exports provided: TxBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxBodyComponent", function() { return TxBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/modules/text-editor/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TxBodyComponent = /** @class */ (function () {
    function TxBodyComponent(renderer, document, editorStateService) {
        this.renderer = renderer;
        this.document = document;
        this.editorStateService = editorStateService;
    }
    TxBodyComponent.prototype.ngOnInit = function () {
        this.listenForSelection();
    };
    TxBodyComponent.prototype.onInput = function () {
        this.editorStateService.setContent(this.editableArea.nativeElement.innerHTML);
    };
    TxBodyComponent.prototype.listenForSelection = function () {
        var _this = this;
        this.removeSelectionChangeListener = this.renderer.listen(this.document, 'selectionchange', function () {
            _this.editorStateService.setSelection(_this.document.getSelection());
        });
    };
    TxBodyComponent.prototype.ngOnDestroy = function () {
        if (this.removeSelectionChangeListener) {
            this.removeSelectionChangeListener();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editableArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TxBodyComponent.prototype, "editableArea", void 0);
    TxBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/modules/text-editor/components/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/modules/text-editor/components/file/file.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            Document,
            _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorStateService"]])
    ], TxBodyComponent);
    return TxBodyComponent;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/components/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/text-editor/components/index.ts ***!
  \*********************************************************/
/*! exports provided: TxControlPanelActionGroupComponent, TxControlPanelComponent, TxEditorComponent, TxBodyComponent, TxEditorTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _control_panel_action_group_control_panel_action_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-panel-action-group/control-panel-action-group.component */ "./src/app/modules/text-editor/components/control-panel-action-group/control-panel-action-group.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxControlPanelActionGroupComponent", function() { return _control_panel_action_group_control_panel_action_group_component__WEBPACK_IMPORTED_MODULE_0__["TxControlPanelActionGroupComponent"]; });

/* harmony import */ var _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-panel/control-panel.component */ "./src/app/modules/text-editor/components/control-panel/control-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxControlPanelComponent", function() { return _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_1__["TxControlPanelComponent"]; });

/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/modules/text-editor/components/editor/editor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxEditorComponent", function() { return _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["TxEditorComponent"]; });

/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file/file.component */ "./src/app/modules/text-editor/components/file/file.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxBodyComponent", function() { return _file_file_component__WEBPACK_IMPORTED_MODULE_3__["TxBodyComponent"]; });

/* harmony import */ var _editor_tips_editor_tips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-tips/editor-tips.component */ "./src/app/modules/text-editor/components/editor-tips/editor-tips.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxEditorTipsComponent", function() { return _editor_tips_editor_tips_component__WEBPACK_IMPORTED_MODULE_4__["TxEditorTipsComponent"]; });








/***/ }),

/***/ "./src/app/modules/text-editor/plugins/color-picker-action/color-picker-action.manifest.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/color-picker-action/color-picker-action.manifest.ts ***!
  \*************************************************************************************************/
/*! exports provided: TX_COLOR_PICKER_ACTION_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TX_COLOR_PICKER_ACTION_PROVIDER", function() { return TX_COLOR_PICKER_ACTION_PROVIDER; });
/* harmony import */ var _tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tokens/editor-plugin-manifest/editor-plugin-manifest.token */ "./src/app/modules/text-editor/tokens/editor-plugin-manifest/editor-plugin-manifest.token.ts");
/* harmony import */ var _components_color_picker_action_color_picker_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/color-picker-action/color-picker-action.component */ "./src/app/modules/text-editor/plugins/color-picker-action/components/color-picker-action/color-picker-action.component.ts");


var TX_FORE_COLOR_ACTION_MANIFEST = {
    component: _components_color_picker_action_color_picker_action_component__WEBPACK_IMPORTED_MODULE_1__["TxColorPickerActionComponent"],
    groupID: 0.1
};
var TX_COLOR_PICKER_ACTION_PROVIDER = Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_FORE_COLOR_ACTION_MANIFEST);


/***/ }),

/***/ "./src/app/modules/text-editor/plugins/color-picker-action/components/color-picker-action/color-picker-action.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/color-picker-action/components/color-picker-action/color-picker-action.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"editor-action-button\"\n        [colorPicker]=\"color\"\n        (colorPickerSelect)=\"onSelect($event)\"\n        [cpCancelButton]=\"true\"\n        [cpAlphaChannel]=\"'disabled'\"\n        [cpOKButton]=\"true\"\n        [style.color]=\"color\"\n>\n  <i class=\"material-icons\">{{icon}}</i>\n</button>\n\n"

/***/ }),

/***/ "./src/app/modules/text-editor/plugins/color-picker-action/components/color-picker-action/color-picker-action.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/color-picker-action/components/color-picker-action/color-picker-action.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: TxColorPickerActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxColorPickerActionComponent", function() { return TxColorPickerActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services */ "./src/app/modules/text-editor/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TxColorPickerActionComponent = /** @class */ (function () {
    function TxColorPickerActionComponent(editorStateService, editorActionService) {
        this.editorStateService = editorStateService;
        this.editorActionService = editorActionService;
        this.icon = 'format_color_text';
        this.color = '#000000';
        this.commandName = _services__WEBPACK_IMPORTED_MODULE_1__["TxEditorCommand"].ForeColor;
    }
    TxColorPickerActionComponent.prototype.onSelect = function (color) {
        this.editorActionService.execCommand(_services__WEBPACK_IMPORTED_MODULE_1__["TxEditorCommand"].StyleWithCSS, true);
        this.editorActionService.execCommand(this.commandName, color);
        this.editorActionService.execCommand(_services__WEBPACK_IMPORTED_MODULE_1__["TxEditorCommand"].StyleWithCSS, false);
    };
    TxColorPickerActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectionChangeSubscription = this.editorStateService.getSelection().subscribe(function () {
            _this.color = _this.editorActionService.queryCommandValue(_this.commandName);
        });
    };
    TxColorPickerActionComponent.prototype.ngOnDestroy = function () {
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
    };
    TxColorPickerActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color-picker-action',
            template: __webpack_require__(/*! ./color-picker-action.component.html */ "./src/app/modules/text-editor/plugins/color-picker-action/components/color-picker-action/color-picker-action.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["TxEditorStateService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["TxEditorActionService"]])
    ], TxColorPickerActionComponent);
    return TxColorPickerActionComponent;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/plugins/index.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/index.ts ***!
  \******************************************************/
/*! exports provided: TX_PLUGINS_COMPONENTS, TX_PLUGINS_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TX_PLUGINS_COMPONENTS", function() { return TX_PLUGINS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TX_PLUGINS_PROVIDERS", function() { return TX_PLUGINS_PROVIDERS; });
/* harmony import */ var _simple_action_simple_action_plugin_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-action/simple-action-plugin.manifest */ "./src/app/modules/text-editor/plugins/simple-action/simple-action-plugin.manifest.ts");
/* harmony import */ var _color_picker_action_color_picker_action_manifest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-picker-action/color-picker-action.manifest */ "./src/app/modules/text-editor/plugins/color-picker-action/color-picker-action.manifest.ts");
/* harmony import */ var _synonyms_action_synonyms_action_plugin_manifest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./synonyms-action/synonyms-action-plugin.manifest */ "./src/app/modules/text-editor/plugins/synonyms-action/synonyms-action-plugin.manifest.ts");
/* harmony import */ var _simple_action_components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-action/components/simple-action/simple-action.component */ "./src/app/modules/text-editor/plugins/simple-action/components/simple-action/simple-action.component.ts");
/* harmony import */ var _color_picker_action_components_color_picker_action_color_picker_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-picker-action/components/color-picker-action/color-picker-action.component */ "./src/app/modules/text-editor/plugins/color-picker-action/components/color-picker-action/color-picker-action.component.ts");
/* harmony import */ var _synonyms_action_components_synonyms_action_synonyms_action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./synonyms-action/components/synonyms-action/synonyms-action.component */ "./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.ts");






var TX_PLUGINS_COMPONENTS = [
    _simple_action_components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_3__["TxSimpleActionComponent"], _color_picker_action_components_color_picker_action_color_picker_action_component__WEBPACK_IMPORTED_MODULE_4__["TxColorPickerActionComponent"], _synonyms_action_components_synonyms_action_synonyms_action_component__WEBPACK_IMPORTED_MODULE_5__["TxSynonymsActionComponent"]
];
var TX_PLUGINS_PROVIDERS = _simple_action_simple_action_plugin_manifest__WEBPACK_IMPORTED_MODULE_0__["TX_SIMPLE_ACTION_PROVIDERS"].concat([
    _color_picker_action_color_picker_action_manifest__WEBPACK_IMPORTED_MODULE_1__["TX_COLOR_PICKER_ACTION_PROVIDER"],
    _synonyms_action_synonyms_action_plugin_manifest__WEBPACK_IMPORTED_MODULE_2__["TX_SYNONYMS_ACTION_PROVIDER"]
]);


/***/ }),

/***/ "./src/app/modules/text-editor/plugins/simple-action/components/simple-action/simple-action.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/simple-action/components/simple-action/simple-action.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClick()\" [class.active]=\"isActive\" class=\"editor-action-button\"><i\n  class=\"material-icons\">{{icon}}</i></button>\n"

/***/ }),

/***/ "./src/app/modules/text-editor/plugins/simple-action/components/simple-action/simple-action.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/simple-action/components/simple-action/simple-action.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TxSimpleActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxSimpleActionComponent", function() { return TxSimpleActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services */ "./src/app/modules/text-editor/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TxSimpleActionComponent = /** @class */ (function () {
    function TxSimpleActionComponent(editorStateService, editorActionService) {
        this.editorStateService = editorStateService;
        this.editorActionService = editorActionService;
    }
    TxSimpleActionComponent.prototype.onClick = function () {
        this.editorActionService.execCommand(this.commandName);
    };
    TxSimpleActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectionChangeSubscription = this.editorStateService.getSelection().subscribe(function () {
            _this.isActive = _this.editorActionService.queryCommandState(_this.commandName);
        });
    };
    TxSimpleActionComponent.prototype.ngOnDestroy = function () {
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TxSimpleActionComponent.prototype, "commandName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TxSimpleActionComponent.prototype, "icon", void 0);
    TxSimpleActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-action',
            template: __webpack_require__(/*! ./simple-action.component.html */ "./src/app/modules/text-editor/plugins/simple-action/components/simple-action/simple-action.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["TxEditorStateService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["TxEditorActionService"]])
    ], TxSimpleActionComponent);
    return TxSimpleActionComponent;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/plugins/simple-action/simple-action-plugin.manifest.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/simple-action/simple-action-plugin.manifest.ts ***!
  \********************************************************************************************/
/*! exports provided: TX_SIMPLE_ACTION_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TX_SIMPLE_ACTION_PROVIDERS", function() { return TX_SIMPLE_ACTION_PROVIDERS; });
/* harmony import */ var _tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tokens/editor-plugin-manifest/editor-plugin-manifest.token */ "./src/app/modules/text-editor/tokens/editor-plugin-manifest/editor-plugin-manifest.token.ts");
/* harmony import */ var _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/simple-action/simple-action.component */ "./src/app/modules/text-editor/plugins/simple-action/components/simple-action/simple-action.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/modules/text-editor/services/index.ts");



var TX_ALIGN_ACTIONS_GROUP_ID = 1;
var TX_INDENT_ACTION_GROUP_ID = 2;
var TX_GENERAL_ACTIONS_GROUP_ID = 3;
var TX_BOLD_ACTION_MANIFEST = {
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].Bold,
        icon: 'format_bold'
    }
};
var TX_ITALIC_ACTION_MANIFEST = {
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].Italic,
        icon: 'format_italic'
    }
};
var TX_UNDERLINE_ACTION_MANIFEST = {
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].Underline,
        icon: 'format_underline'
    }
};
var TX_STRIKE_THROUGH_ACTION_MANIFEST = {
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].StrikeThrough,
        icon: 'format_strikethrough'
    }
};
var TX_ALIGN_JUSTIFY_ACTION_MANIFEST = {
    groupID: TX_ALIGN_ACTIONS_GROUP_ID,
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].JustifyFull,
        icon: 'format_align_justify'
    }
};
var TX_ALIGN_LEFT_ACTION_MANIFEST = {
    groupID: TX_ALIGN_ACTIONS_GROUP_ID,
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].JustifyLeft,
        icon: 'format_align_left'
    }
};
var TX_ALIGN_CENTER_ACTION_MANIFEST = {
    groupID: TX_ALIGN_ACTIONS_GROUP_ID,
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].JustifyCenter,
        icon: 'format_align_center'
    }
};
var TX_ALIGN_RIGHT_ACTION_MANIFEST = {
    groupID: TX_ALIGN_ACTIONS_GROUP_ID,
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].JustifyRight,
        icon: 'format_align_right'
    }
};
var TX_INDENT_INCREASE_ACTION_MANIFEST = {
    groupID: TX_INDENT_ACTION_GROUP_ID,
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].Indent,
        icon: 'format_indent_increase'
    }
};
var TX_INDENT_DECREASE_ACTION_MANIFEST = {
    groupID: TX_INDENT_ACTION_GROUP_ID,
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].Outdent,
        icon: 'format_indent_decrease'
    }
};
var TX_CLEAR_FORMAT_ACTION_MANIFEST = {
    groupID: TX_GENERAL_ACTIONS_GROUP_ID,
    component: _components_simple_action_simple_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSimpleActionComponent"],
    componentOptions: {
        commandName: _services__WEBPACK_IMPORTED_MODULE_2__["TxEditorCommand"].RemoveFormat,
        icon: 'format_clear'
    }
};
var TX_SIMPLE_ACTION_PROVIDERS = [
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_BOLD_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_ITALIC_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_UNDERLINE_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_STRIKE_THROUGH_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_ALIGN_JUSTIFY_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_ALIGN_LEFT_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_ALIGN_CENTER_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_ALIGN_RIGHT_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_INDENT_INCREASE_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_INDENT_DECREASE_ACTION_MANIFEST),
    Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_CLEAR_FORMAT_ACTION_MANIFEST)
];


/***/ }),

/***/ "./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".synonym-list {\r\n  position: absolute;\r\n  background: #ffffff;\r\n  border: 1px solid #bebebe;\r\n  box-shadow: 1px 1px 1px #bebebe;\r\n}\r\n\r\nul, li {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  min-width: 150px;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n  width: 100%;\r\n  padding: 5px 15px 5px 15px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  text-align: left;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\nbutton:hover {\r\n  background: #f1f0f0;\r\n}\r\n\r\n.title {\r\n  background-color: #e9e9e9;\r\n  border-bottom: 1px solid #ccc;\r\n  font-size: 14px;\r\n  padding: 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"synonym-list\" [hidden]=\"!synonyms?.length\" #list>\n  <div class=\"title\">Replace with:</div>\n  <ul>\n    <li *ngFor=\"let synonym of synonyms\">\n      <button (click)=\"onSelect(synonym.word)\">{{ synonym.word }}</button>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: TxSynonymsActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxSynonymsActionComponent", function() { return TxSynonymsActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services */ "./src/app/modules/text-editor/services/index.ts");
/* harmony import */ var _services_synonyms_synonyms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/synonyms/synonyms.service */ "./src/app/modules/text-editor/plugins/synonyms-action/services/synonyms/synonyms.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TxSynonymsActionComponent = /** @class */ (function () {
    function TxSynonymsActionComponent(editorStateService, editorActionService, synonymsService, renderer) {
        this.editorStateService = editorStateService;
        this.editorActionService = editorActionService;
        this.synonymsService = synonymsService;
        this.renderer = renderer;
    }
    TxSynonymsActionComponent.prototype.ngOnInit = function () {
        this.listenForSelection();
    };
    TxSynonymsActionComponent.prototype.onSelect = function (synonym) {
        this.editorActionService.replaceSelectedText(synonym);
        this.synonyms = [];
    };
    TxSynonymsActionComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TxSynonymsActionComponent.prototype.listenForSelection = function () {
        var _this = this;
        this.subscription = this.editorStateService.getSelection().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (selection) { return selection.toString().trim(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (selectedText) { return _this.synonymsService.getSynonyms(selectedText); })).subscribe(function (synonyms) {
            _this.synonyms = Object(ramda__WEBPACK_IMPORTED_MODULE_4__["sortBy"])(function (synonym) { return synonym.word; }, synonyms);
            _this.adjustListPosition();
        });
    };
    TxSynonymsActionComponent.prototype.adjustListPosition = function () {
        var selection = this.editorStateService.getSelectionSnapshot();
        var el = this.list ? this.list.nativeElement : null;
        if (el && selection.rangeCount) {
            var range = selection.getRangeAt(0);
            if (range) {
                var rect = range.getBoundingClientRect();
                this.renderer.setStyle(el, 'top', rect.top + rect.height + 2 + "px");
                this.renderer.setStyle(el, 'left', rect.left - 4 + "px");
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('list'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TxSynonymsActionComponent.prototype, "list", void 0);
    TxSynonymsActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-synonyms-action',
            template: __webpack_require__(/*! ./synonyms-action.component.html */ "./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.html"),
            styles: [__webpack_require__(/*! ./synonyms-action.component.css */ "./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["TxEditorStateService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["TxEditorActionService"],
            _services_synonyms_synonyms_service__WEBPACK_IMPORTED_MODULE_2__["TxSynonymsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], TxSynonymsActionComponent);
    return TxSynonymsActionComponent;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/plugins/synonyms-action/services/synonyms/synonyms.service.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/synonyms-action/services/synonyms/synonyms.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: TxSynonymsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxSynonymsService", function() { return TxSynonymsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SYNONYMS_URL = 'https://api.datamuse.com/words';
var TxSynonymsService = /** @class */ (function () {
    function TxSynonymsService(http) {
        this.http = http;
    }
    TxSynonymsService.prototype.getSynonyms = function (word) {
        return this.http.get(SYNONYMS_URL, {
            params: {
                rel_syn: word
            }
        });
    };
    TxSynonymsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TxSynonymsService);
    return TxSynonymsService;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/plugins/synonyms-action/synonyms-action-plugin.manifest.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/plugins/synonyms-action/synonyms-action-plugin.manifest.ts ***!
  \************************************************************************************************/
/*! exports provided: TX_SYNONYMS_ACTION_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TX_SYNONYMS_ACTION_PROVIDER", function() { return TX_SYNONYMS_ACTION_PROVIDER; });
/* harmony import */ var _tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tokens/editor-plugin-manifest/editor-plugin-manifest.token */ "./src/app/modules/text-editor/tokens/editor-plugin-manifest/editor-plugin-manifest.token.ts");
/* harmony import */ var _components_synonyms_action_synonyms_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/synonyms-action/synonyms-action.component */ "./src/app/modules/text-editor/plugins/synonyms-action/components/synonyms-action/synonyms-action.component.ts");


var TX_SYNONYMS_ACTION_MANIFEST = {
    component: _components_synonyms_action_synonyms_action_component__WEBPACK_IMPORTED_MODULE_1__["TxSynonymsActionComponent"],
    groupID: 3
};
var TX_SYNONYMS_ACTION_PROVIDER = Object(_tokens_editor_plugin_manifest_editor_plugin_manifest_token__WEBPACK_IMPORTED_MODULE_0__["providePluginManifest"])(TX_SYNONYMS_ACTION_MANIFEST);


/***/ }),

/***/ "./src/app/modules/text-editor/services/editor-action/editor-action.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/text-editor/services/editor-action/editor-action.service.ts ***!
  \*************************************************************************************/
/*! exports provided: TxEditorCommand, TxEditorActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxEditorCommand", function() { return TxEditorCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxEditorActionService", function() { return TxEditorActionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TxEditorCommand;
(function (TxEditorCommand) {
    TxEditorCommand["Bold"] = "bold";
    TxEditorCommand["Indent"] = "indent";
    TxEditorCommand["Italic"] = "italic";
    TxEditorCommand["JustifyCenter"] = "justifyCenter";
    TxEditorCommand["JustifyFull"] = "justifyFull";
    TxEditorCommand["JustifyLeft"] = "justifyLeft";
    TxEditorCommand["JustifyRight"] = "justifyRight";
    TxEditorCommand["Outdent"] = "outdent";
    TxEditorCommand["RemoveFormat"] = "removeFormat";
    TxEditorCommand["StrikeThrough"] = "strikeThrough";
    TxEditorCommand["Underline"] = "underline";
    TxEditorCommand["ForeColor"] = "foreColor";
    TxEditorCommand["StyleWithCSS"] = "styleWithCSS";
})(TxEditorCommand || (TxEditorCommand = {}));
var TxEditorActionService = /** @class */ (function () {
    function TxEditorActionService(document) {
        this.document = document;
    }
    TxEditorActionService.prototype.execCommand = function (command, value) {
        var range = this.getCurrentRangePosition();
        var result = this.document.execCommand(command, false, value);
        this.setNewRangePosition(range);
        return result;
    };
    TxEditorActionService.prototype.queryCommandState = function (command) {
        return this.document.queryCommandState(command);
    };
    TxEditorActionService.prototype.queryCommandValue = function (command) {
        return this.document.queryCommandValue(command);
    };
    TxEditorActionService.prototype.replaceSelectedText = function (text) {
        var selection = this.document.getSelection();
        if (selection.rangeCount) {
            if (/.+?\s+$/.test(selection.toString())) {
                selection.extend(selection.focusNode, selection.focusOffset - 1);
            }
            var range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(this.document.createTextNode(text));
        }
    };
    TxEditorActionService.prototype.getCurrentRangePosition = function () {
        var selection = this.document.getSelection();
        if (selection && selection.type === 'Caret' && selection.getRangeAt && selection.rangeCount) {
            return selection.getRangeAt(0);
        }
        return null;
    };
    TxEditorActionService.prototype.setNewRangePosition = function (range) {
        if (range) {
            var selection = this.document.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    TxEditorActionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], TxEditorActionService);
    return TxEditorActionService;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/services/editor-state/editor-state.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/text-editor/services/editor-state/editor-state.service.ts ***!
  \***********************************************************************************/
/*! exports provided: TxEditorStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxEditorStateService", function() { return TxEditorStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TxEditorStateService = /** @class */ (function () {
    function TxEditorStateService() {
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.selection = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    TxEditorStateService.prototype.getContent = function () {
        return this.content;
    };
    TxEditorStateService.prototype.setContent = function (content) {
        this.content.next(content);
    };
    TxEditorStateService.prototype.getSelection = function () {
        return this.selection.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) { return Boolean(state); }));
    };
    TxEditorStateService.prototype.getSelectionSnapshot = function () {
        return this.selection.getValue();
    };
    TxEditorStateService.prototype.setSelection = function (selection) {
        this.selection.next(selection);
    };
    TxEditorStateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TxEditorStateService);
    return TxEditorStateService;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/services/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/text-editor/services/index.ts ***!
  \*******************************************************/
/*! exports provided: TxEditorCommand, TxEditorActionService, TxEditorStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_action_editor_action_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-action/editor-action.service */ "./src/app/modules/text-editor/services/editor-action/editor-action.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxEditorCommand", function() { return _editor_action_editor_action_service__WEBPACK_IMPORTED_MODULE_0__["TxEditorCommand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxEditorActionService", function() { return _editor_action_editor_action_service__WEBPACK_IMPORTED_MODULE_0__["TxEditorActionService"]; });

/* harmony import */ var _editor_state_editor_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-state/editor-state.service */ "./src/app/modules/text-editor/services/editor-state/editor-state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxEditorStateService", function() { return _editor_state_editor_state_service__WEBPACK_IMPORTED_MODULE_1__["TxEditorStateService"]; });





/***/ }),

/***/ "./src/app/modules/text-editor/text-editor.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/text-editor/text-editor.module.ts ***!
  \***********************************************************/
/*! exports provided: TxEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxEditorModule", function() { return TxEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/app/modules/text-editor/components/index.ts");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins */ "./src/app/modules/text-editor/plugins/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TxEditorModule = /** @class */ (function () {
    function TxEditorModule() {
    }
    TxEditorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__["ColorPickerModule"]
            ],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_4__["TxBodyComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["TxControlPanelComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["TxEditorComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["TxControlPanelActionGroupComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["TxEditorTipsComponent"]
            ].concat(_plugins__WEBPACK_IMPORTED_MODULE_5__["TX_PLUGINS_COMPONENTS"]),
            exports: [_components__WEBPACK_IMPORTED_MODULE_4__["TxEditorComponent"]],
            entryComponents: _plugins__WEBPACK_IMPORTED_MODULE_5__["TX_PLUGINS_COMPONENTS"].slice(),
            providers: _plugins__WEBPACK_IMPORTED_MODULE_5__["TX_PLUGINS_PROVIDERS"].slice()
        })
    ], TxEditorModule);
    return TxEditorModule;
}());



/***/ }),

/***/ "./src/app/modules/text-editor/tokens/editor-plugin-manifest/editor-plugin-manifest.token.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/text-editor/tokens/editor-plugin-manifest/editor-plugin-manifest.token.ts ***!
  \***************************************************************************************************/
/*! exports provided: TX_EDITOR_PLUGIN_MANIFEST, providePluginManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TX_EDITOR_PLUGIN_MANIFEST", function() { return TX_EDITOR_PLUGIN_MANIFEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providePluginManifest", function() { return providePluginManifest; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TX_EDITOR_PLUGIN_MANIFEST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('TX_EDITOR_PLUGIN_MANIFEST');
function providePluginManifest(pluginManifest) {
    return {
        provide: TX_EDITOR_PLUGIN_MANIFEST,
        multi: true,
        useValue: pluginManifest
    };
}


/***/ }),

/***/ "./src/app/shared/components/body/body.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/body/body.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/components/body/body.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/body/body.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <app-editor [text]=\"text\"></app-editor>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/shared/components/body/body.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/body/body.component.ts ***!
  \**********************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_text_service_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/text-service/text.service */ "./src/app/shared/services/text-service/text.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyComponent = /** @class */ (function () {
    function BodyComponent(textService) {
        this.textService = textService;
    }
    BodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.textService.getMockText().then(function (text) { return _this.text = text; });
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/shared/components/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/shared/components/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [_services_text_service_text_service__WEBPACK_IMPORTED_MODULE_1__["TextService"]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n  height: 40px;\r\n  padding-left: 15px;\r\n  padding-top: 15px;\r\n  font-size: 24px;\r\n  border-bottom: 4px solid #ffa500;\r\n  background-color: rgba(33, 33, 33, 0.5);\r\n  color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{title}}</span>\r\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = '';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/components/header/header.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/text-service/text.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/text-service/text.service.ts ***!
  \**************************************************************/
/*! exports provided: TextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextService", function() { return TextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TextService = /** @class */ (function () {
    function TextService() {
    }
    TextService.prototype.getMockText = function () {
        return new Promise(function (resolve) {
            resolve('A year ago I was in the audience at a gathering of designers in San Francisco. ' +
                'There were four designers on stage, and two of them worked for me. I was there to support them. ' +
                'The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. ' +
                'What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, ' +
                'that modern design problems were very complex. And we ought to need a license to solve them.');
        });
    };
    TextService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TextService);
    return TextService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\editor-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map