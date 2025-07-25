"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AsyncDownloadScanRequest = _interopRequireDefault(require("../model/AsyncDownloadScanRequest"));
var _AsyncS3ScanRequest = _interopRequireDefault(require("../model/AsyncS3ScanRequest"));
var _ScanResult = _interopRequireDefault(require("../model/ScanResult"));
var _SyncDownloadScanRequest = _interopRequireDefault(require("../model/SyncDownloadScanRequest"));
var _SyncS3ScanRequest = _interopRequireDefault(require("../model/SyncS3ScanRequest"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * attachmentAV
 * An SDK to integrate virus and malware scan capabilities into JavaScript applications. Scan files for viruses, trojans, and other kinds of malware with attachmentAV powered by Sophos.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* AttachmentAV service.
* @module api/AttachmentAVApi
* @version 0.1.0
*/
var AttachmentAVApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new AttachmentAVApi. 
  * @alias module:api/AttachmentAVApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AttachmentAVApi(apiClient) {
    _classCallCheck(this, AttachmentAVApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the scanAsyncDownloadPost operation.
   * @callback module:api/AttachmentAVApi~scanAsyncDownloadPostCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Download a file from a remote location (HTTP/HTTPS), scan the file, and post the scan result to your callback URL.
   * @param {module:model/AsyncDownloadScanRequest} asyncDownloadScanRequest 
   * @param {module:api/AttachmentAVApi~scanAsyncDownloadPostCallback} callback The callback function, accepting three arguments: error, data, response
   */
  return _createClass(AttachmentAVApi, [{
    key: "scanAsyncDownloadPost",
    value: function scanAsyncDownloadPost(asyncDownloadScanRequest, callback) {
      var postBody = asyncDownloadScanRequest;
      // verify the required parameter 'asyncDownloadScanRequest' is set
      if (asyncDownloadScanRequest === undefined || asyncDownloadScanRequest === null) {
        throw new Error("Missing the required parameter 'asyncDownloadScanRequest' when calling scanAsyncDownloadPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyAuth', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/scan/async/download', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the scanAsyncS3Post operation.
     * @callback module:api/AttachmentAVApi~scanAsyncS3PostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a file from S3, scan the file, and post the scan result to your callback URL. A bucket policy is required to grant attachmentAV access to the S3 objects.
     * @param {module:model/AsyncS3ScanRequest} asyncS3ScanRequest 
     * @param {module:api/AttachmentAVApi~scanAsyncS3PostCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "scanAsyncS3Post",
    value: function scanAsyncS3Post(asyncS3ScanRequest, callback) {
      var postBody = asyncS3ScanRequest;
      // verify the required parameter 'asyncS3ScanRequest' is set
      if (asyncS3ScanRequest === undefined || asyncS3ScanRequest === null) {
        throw new Error("Missing the required parameter 'asyncS3ScanRequest' when calling scanAsyncS3Post");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyAuth', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/scan/async/s3', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the scanSyncBinaryPost operation.
     * @callback module:api/AttachmentAVApi~scanSyncBinaryPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScanResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a file, scan the file, and return the scan result.
     * @param {File} body 
     * @param {module:api/AttachmentAVApi~scanSyncBinaryPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScanResult}
     */
  }, {
    key: "scanSyncBinaryPost",
    value: function scanSyncBinaryPost(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling scanSyncBinaryPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyAuth', 'bearerAuth'];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = _ScanResult["default"];
      return this.apiClient.callApi('/scan/sync/binary', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the scanSyncDownloadPost operation.
     * @callback module:api/AttachmentAVApi~scanSyncDownloadPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScanResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a file from a remote location (HTTP/HTTPS), scan the file, and return the scan result.
     * @param {module:model/SyncDownloadScanRequest} syncDownloadScanRequest 
     * @param {module:api/AttachmentAVApi~scanSyncDownloadPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScanResult}
     */
  }, {
    key: "scanSyncDownloadPost",
    value: function scanSyncDownloadPost(syncDownloadScanRequest, callback) {
      var postBody = syncDownloadScanRequest;
      // verify the required parameter 'syncDownloadScanRequest' is set
      if (syncDownloadScanRequest === undefined || syncDownloadScanRequest === null) {
        throw new Error("Missing the required parameter 'syncDownloadScanRequest' when calling scanSyncDownloadPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyAuth', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScanResult["default"];
      return this.apiClient.callApi('/scan/sync/download', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the scanSyncS3Post operation.
     * @callback module:api/AttachmentAVApi~scanSyncS3PostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScanResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a file from S3, scan the file, and return the scan result. A bucket policy is required to grant attachmentAV access to the S3 objects.
     * @param {module:model/SyncS3ScanRequest} syncS3ScanRequest 
     * @param {module:api/AttachmentAVApi~scanSyncS3PostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScanResult}
     */
  }, {
    key: "scanSyncS3Post",
    value: function scanSyncS3Post(syncS3ScanRequest, callback) {
      var postBody = syncS3ScanRequest;
      // verify the required parameter 'syncS3ScanRequest' is set
      if (syncS3ScanRequest === undefined || syncS3ScanRequest === null) {
        throw new Error("Missing the required parameter 'syncS3ScanRequest' when calling scanSyncS3Post");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyAuth', 'bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScanResult["default"];
      return this.apiClient.callApi('/scan/sync/s3', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
}();