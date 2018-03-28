exports.id = 0;
exports.modules = {

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getClientBundleEntryAssets;

var _fs = __webpack_require__(4);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _config = __webpack_require__(49);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var resultCache = void 0;

/**
 * Retrieves the js/css for the named chunks that belong to our client bundle.
 *
 * Note: the order of the chunk names is important. The same ordering will be
 * used when rendering the scripts.
 *
 * This is useful to us for a couple of reasons:
 *   - It allows us to target the assets for a specific chunk, thereby only
 *	 loading the assets we know we will need for a specific request.
 *   - The assets are hashed, and therefore they can't be "manually" added
 *	 to the render logic.  Having this method allows us to easily fetch
 *	 the respective assets simply by using a chunk name. :)
 */
/**
 * This file resolves the entry assets available from our client bundle.
 */

function getClientBundleEntryAssets() {
	// Return the assets json cache if it exists.
	// In development mode we always read the assets json file from disk to avoid
	// any cases where an older version gets cached.
	if (process.env.NODE_ENV === 'production' && resultCache) {
		return resultCache;
	}

	var assetsFilePath = _path2.default.resolve(_config2.default.PUBLIC_PATH, 'build', _config2.default.STATS_FILE);

	if (!_fs2.default.existsSync(assetsFilePath)) {
		throw new Error('We could not find the "' + assetsFilePath + '" file, which contains a list of the assets of the client bundle.  Please ensure that the client bundle has been built.');
	}

	var readAssetsJSONFile = function readAssetsJSONFile() {
		return JSON.parse(_fs2.default.readFileSync(_path2.default.resolve(assetsFilePath), 'utf8'));
	};
	var assetsJSONCache = readAssetsJSONFile();
	if (typeof assetsJSONCache.assetsByChunkName.main === 'undefined') {
		throw new Error('No asset data found for expected "index" entry chunk of client bundle.');
	}
	resultCache = assetsJSONCache;

	return resultCache;
}

/***/ })

};