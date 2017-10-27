webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Settings = (function () {
    function Settings() {
    }
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'settings',template:/*ion-inline-start:"/Users/iggie/Sites/MyYouTubePlaylist/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/iggie/Sites/MyYouTubePlaylist/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_details_item_details__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_feed_json__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_feed_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_feed_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var feed = __WEBPACK_IMPORTED_MODULE_4__assets_feed_json__;
var ListPage = (function () {
    function ListPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.videos = feed.items;
        this.items = [];
        this.sanitizer = sanitizer; //to allow for youTube embeds
        this.characterLimit = 250; //to limit the descriptions on the list view page
        this.months = "JanFebMarAprMayJunJulAugSepOctNovDec";
        this.videoCount = this.videos.length - 1;
        //truncating the description if it's longer than the characterLimit
        for (var i = 0; i < this.videoCount; i++) {
            this.description = this.videos[i].snippet.description;
            if (this.description.length > this.characterLimit) {
                this.trucateDescription = this.description.substring(0, this.characterLimit).concat("...");
            }
            else {
                this.trucateDescription = this.description;
            }
            this.videoURL = "https://www.youtube.com/embed/" + this.videos[i].snippet.resourceId.videoId;
            //checking to see if the entry has a published date (deleted videos don't)
            this.videos[i].contentDetails.videoPublishedAt ? this.date = this.videos[i].contentDetails.videoPublishedAt : this.date = this.videos[i].snippet.publishedAt;
            this.numMonth = (parseInt(this.date.slice(5, 7)) * 3) - 3;
            this.package = {
                title: this.videos[i].snippet.title,
                month: this.months.slice(this.numMonth, this.numMonth + 3),
                day: parseInt(this.date.slice(8, 10)),
                year: this.date.slice(0, 4),
                description: this.description,
                trucatedDescription: this.trucateDescription,
            };
            //checking to see if the entry has resources (deleted videos don't)
            if (this.videos[i].snippet.description === "This video is unavailable.") {
                this.package.thumbnailMedium = "";
                this.package.thumbnailHigh = "";
                this.package.scrURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=NpEaa2P7qZI");
            }
            else {
                this.package.thumbnailMedium = this.videos[i].snippet.thumbnails.medium.url;
                this.package.thumbnailHigh = this.videos[i].snippet.thumbnails.high.url;
                this.package.scrURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
            }
            this.items.push(this.package);
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/iggie/Sites/MyYouTubePlaylist/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My YouTube Playlist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-card>\n        <ion-thumbnail item-start item-left class="thumbnailHigh" >\n            <img src="{{item.thumbnailHigh}}" width="100%" height="100%" >\n        </ion-thumbnail>\n        <ion-card class="text-left videoInfo item-text-wrap">\n          <h5 class="card-title item-text-wrap">{{item.title}}</h5>\n          <p text-left class="card-date item-text-wrap">Published on {{item.month}} {{item.day}}, {{item.year}}</p>\n          <ion-thumbnail item-start item-left class="thumbnailMedium" >\n              <img src="{{item.thumbnailMedium}}"  width="100%" height="100%">\n          </ion-thumbnail>\n          <ion-card-content>\n          <ion-item item-text-wrap class="description text-left item-text-wrap">{{item.trucatedDescription}}</ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-card>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/iggie/Sites/MyYouTubePlaylist/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], ListPage);

var _a, _b, _c;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    return ItemDetailsPage;
}());
ItemDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-details',template:/*ion-inline-start:"/Users/iggie/Sites/MyYouTubePlaylist/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Back to list of videos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <h2 class="card-title">{{selectedItem.title}}</h2>\n      <p class="card-date">Published on {{selectedItem.month}} {{selectedItem.day}}, {{selectedItem.year}}</p>\n    </ion-item>\n    <div class="colwrapper">\n      <div class="videoWrapper">\n        <iframe class="e2e-iframe-untrusted-src" [src]="selectedItem.scrURL"  frameborder="0" width="854" height="480" allowfullscreen></iframe>\n      </div>\n      <ion-card-content class="description">\n        <p>{{selectedItem.description}}</p>\n      </ion-card-content>\n    </div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/iggie/Sites/MyYouTubePlaylist/src/pages/item-details/item-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], ItemDetailsPage);

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






console.log(__WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */]);
var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'My YouTube Playlist', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* Settings */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/iggie/Sites/MyYouTubePlaylist/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/iggie/Sites/MyYouTubePlaylist/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = {
	"kind": "youtube#playlistItemListResponse",
	"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/zrhREOCUSVNb2jkV6JeItBeAwB8\"",
	"nextPageToken": "CAoQAA",
	"pageInfo": {
		"totalResults": 34,
		"resultsPerPage": 10
	},
	"items": [
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/mn7-yF379SxjmQLPWfZ2mixhG48\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41MzJCQjBCNDIyRkJDN0VD",
			"snippet": {
				"publishedAt": "2014-09-04T16:00:41.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "Lamb Angelica",
				"description": "From Lamb's 2003 album Between Darkness and Wonder",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/X0qwQqwKLlM/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/X0qwQqwKLlM/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/X0qwQqwKLlM/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 0,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "X0qwQqwKLlM"
				}
			},
			"contentDetails": {
				"videoId": "X0qwQqwKLlM",
				"videoPublishedAt": "2009-09-07T15:09:56.000Z"
			},
			"status": {
				"privacyStatus": "public"
			}
		},
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/F8C78vLgLf54k3mYpRyIwrXpRDY\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41NkI0NEY2RDEwNTU3Q0M2",
			"snippet": {
				"publishedAt": "2014-09-04T15:56:12.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "Massive Attack - Teardrop",
				"description": "Listen to more from Massive Attack: https://MassiveAttack.lnk.to/Essentials\nDiscover more about this classic song here: http://www.udiscovermusic.com/stories/massive-attack-make-no-1-with-mezzanine\n\nBlue Lines 2012: Rebuilt from the original tapes, remixed and remastered.\nFind out more and order yours here: http://smarturl.it/bluelines2012v \n#bluelines2012\n\nOfficial video of Massive Attack performing Teardrop from the album Mezzanine. \nBuy It Here: http://smarturl.it/pq4bmk  \nLike Massive Attack on Facebook: http://www.facebook.com/massiveattack \nFollow Massive Attack on Twitter: https://twitter.com/MassiveAttackUK \nOfficial Website: http://massiveattack.com \nSee more videos: http://www.youtube.com/user/madotie",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/u7K72X4eo_s/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/u7K72X4eo_s/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/u7K72X4eo_s/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/u7K72X4eo_s/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/u7K72X4eo_s/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 1,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "u7K72X4eo_s"
				}
			},
			"contentDetails": {
				"videoId": "u7K72X4eo_s",
				"videoPublishedAt": "2009-03-06T12:00:03.000Z"
			},
			"status": {
				"privacyStatus": "public"
			}
		},
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/PX2JxuMLHnSlcYYr7ldzeEuB2vA\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS4wMTcyMDhGQUE4NTIzM0Y5",
			"snippet": {
				"publishedAt": "2014-09-04T15:57:48.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "Blue Foundation - Eyes On Fire",
				"description": "Lyrics to \"Eyes On Fire\" song by Blue Foundation.\n\nBuy Blue Foundation \"In My Mind I Am Free\" here!: https://itunes.apple.com/us/album/in-...\n\nMusic by Tobias Wilner\n\nThe video is personal use.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/8IHFVn0sv14/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/8IHFVn0sv14/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/8IHFVn0sv14/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 2,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "8IHFVn0sv14"
				}
			},
			"contentDetails": {
				"videoId": "8IHFVn0sv14",
				"videoPublishedAt": "2009-04-02T13:57:05.000Z"
			},
			"status": {
				"privacyStatus": "public"
			}
		},
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/HsvWhntYeQ2njzO-xOfZC0nh-Ec\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41MjE1MkI0OTQ2QzJGNzNG",
			"snippet": {
				"publishedAt": "2014-09-04T15:58:50.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "The xx - Islands (lyrics)",
				"description": "These are the lyrics for the song \"Islands\" by the awesome band, The xx.\nHope you like it!\n\n\n\n\n\n\n\n*No copyright intended. All reserved to The xx and their Record Label\n(I didn't get paid. All for the fun!)",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/BJzvBGXmmy0/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/BJzvBGXmmy0/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/BJzvBGXmmy0/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 3,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "BJzvBGXmmy0"
				}
			},
			"contentDetails": {
				"videoId": "BJzvBGXmmy0",
				"videoPublishedAt": "2010-03-12T19:48:04.000Z"
			},
			"status": {
				"privacyStatus": "public"
			}
		},
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/Z8oRQdzLaY_3jWgkC6WJsy81PYk\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS5EMEEwRUY5M0RDRTU3NDJC",
			"snippet": {
				"publishedAt": "2014-09-04T16:02:59.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "Deleted video",
				"description": "This video is unavailable.",
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 4,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "uiT0fBePR0Q"
				}
			},
			"contentDetails": {
				"videoId": "uiT0fBePR0Q"
			},
			"status": {
				"privacyStatus": "public"
			}
		},
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/GHFfpHquvttOQ8lpzWgFbA3MSGo\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS4wOTA3OTZBNzVEMTUzOTMy",
			"snippet": {
				"publishedAt": "2014-09-04T15:59:17.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "Donnie Darko   Middlesex Times",
				"description": "",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/Y69gu2xv25s/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/Y69gu2xv25s/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/Y69gu2xv25s/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 5,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "Y69gu2xv25s"
				}
			},
			"contentDetails": {
				"videoId": "Y69gu2xv25s",
				"videoPublishedAt": "2010-11-14T15:23:16.000Z"
			},
			"status": {
				"privacyStatus": "public"
			}
		},
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/op9yfCg8aISWjfSsuJNznlkhRs8\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS4yODlGNEE0NkRGMEEzMEQy",
			"snippet": {
				"publishedAt": "2014-09-04T15:56:42.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "Massive Attack - Black Milk",
				"description": "Shotty's Classic Series #17:\r\n\r\nMassive Attack's debut Blue Lines practically invented trip-hop, and by 1998's Mezzanine, they'd perfected the songcraft. Overshadowed by the album's one-two-three-four punch of songs right at the beginning, Black Milk is an excellent mid-tempo lurker that's carried out of the darkness by Cocteau Twin Elizabeth Frazer's sensual vocals.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/li-adM-qOwI/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/li-adM-qOwI/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/li-adM-qOwI/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 6,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "li-adM-qOwI"
				}
			},
			"contentDetails": {
				"videoId": "li-adM-qOwI",
				"videoPublishedAt": "2008-06-30T18:24:15.000Z"
			},
			"status": {
				"privacyStatus": "public"
			}
		},
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/EiYrB-Qs7ijE4XARo_AugD26irM\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS4xMkVGQjNCMUM1N0RFNEUx",
			"snippet": {
				"publishedAt": "2014-09-04T16:00:10.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "Lamb - Gold (with lyrics)",
				"description": "Lyrics: http://easylyrics.org/?artist=Lamb&title=Gold\r\n\r\nThanks for checking out our videos and site!",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/l7XSehSg-cQ/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/l7XSehSg-cQ/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/l7XSehSg-cQ/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/l7XSehSg-cQ/sddefault.jpg",
						"width": 640,
						"height": 480
					},
					"maxres": {
						"url": "https://i.ytimg.com/vi/l7XSehSg-cQ/maxresdefault.jpg",
						"width": 1280,
						"height": 720
					}
				},
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 7,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "l7XSehSg-cQ"
				}
			},
			"contentDetails": {
				"videoId": "l7XSehSg-cQ",
				"videoPublishedAt": "2011-11-22T09:28:42.000Z"
			},
			"status": {
				"privacyStatus": "public"
			}
		},
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/hjwCMGbKOiIDcg3qANH7kHM8KV0\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS5DQUNERDQ2NkIzRUQxNTY1",
			"snippet": {
				"publishedAt": "2014-09-04T16:02:06.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "Portishead - Sour Times",
				"description": "Brilliant track from thealbum 'Glory Box'...\"Sour Times\" by Portishead was released in *UMG administer the sound recording content of this video,Israeli Educational Television own the visual content*..1994 on record labels Go! Discs,London.This was the groups second ever single and was written by the three members of the group,Beth Gibbons,Geoff Barrow and Adrian Utley.The video for the song used the footage from the groups short film \"To Kill A Dead Man\".",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/g7gutsi1uT4/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/g7gutsi1uT4/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/g7gutsi1uT4/hqdefault.jpg",
						"width": 480,
						"height": 360
					},
					"standard": {
						"url": "https://i.ytimg.com/vi/g7gutsi1uT4/sddefault.jpg",
						"width": 640,
						"height": 480
					}
				},
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 8,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "g7gutsi1uT4"
				}
			},
			"contentDetails": {
				"videoId": "g7gutsi1uT4",
				"videoPublishedAt": "2012-04-19T20:13:08.000Z"
			},
			"status": {
				"privacyStatus": "public"
			}
		},
		{
			"kind": "youtube#playlistItem",
			"etag": "\"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/4GCEZS4r_JWfTLIFWqRMJvuRuFo\"",
			"id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS5GNjNDRDREMDQxOThCMDQ2",
			"snippet": {
				"publishedAt": "2014-09-04T16:02:34.000Z",
				"channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
				"title": "Massive Attack - Paradise Circus",
				"description": "The new single from Massive Attack. From their latest album Heligoland released February 2010.\r\nhttp://tinyurl.com/y8pexs6 to Order the album.\r\nhttp://tinyurl.com/ye8rvbl for The Massive Attack store\r\n\r\n\r\nParadise Circus Lyrics\r\n\r\nIt's unfortunate that when we feel a storm\r\nwe can roll ourselves over 'cause we're uncomfortable \r\noh where the devil makes us sin\r\nbut we like it when we're spinning in his grip.\r\n\r\nLove is like a sin my love\r\n\r\nFor the one that feels it the most\r\nLook at her with her eyes like a flame\r\nShe will love you like a fly will never love you, again\r\n\r\nIt's unfortunate that when we feel a storm\r\nwe can roll ourselves over when we're uncomfortable \r\noh well the devil makes us sin\r\nbut we like it when we're spinning in his grip.\r\n\r\nLove is like a sin my love\r\n\r\nFor the one that feels it the most\r\nLook at her with a smile like a flame\r\nShe will love you like a fly will never love you, again",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/jEgX64n3T7g/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/jEgX64n3T7g/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/jEgX64n3T7g/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Danielle Major",
				"playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
				"position": 9,
				"resourceId": {
					"kind": "youtube#video",
					"videoId": "jEgX64n3T7g"
				}
			},
			"contentDetails": {
				"videoId": "jEgX64n3T7g",
				"videoPublishedAt": "2009-12-15T21:56:32.000Z"
			},
			"status": {
				"privacyStatus": "public"
			}
		}
	]
};

/***/ })

},[195]);
//# sourceMappingURL=main.js.map