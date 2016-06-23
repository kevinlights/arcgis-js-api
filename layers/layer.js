// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/config","dojo/_base/connect","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/json","dojo/has","../Evented","../kernel","../lang","../request","../deferredUtils","../urlUtils","../SpatialReference","../geometry/Extent"],function(t,i,e,s,n,a,r,h,o,l,u,c,d,p,f){var _=t([h],{declaredClass:"esri.layers.Layer",_eventMap:{error:["error"],load:["layer"],"opacity-change":["opacity"],"update-end":["error"],"visibility-change":["visible"]},constructor:function(t,i){if(this._attrs={},t&&s.isString(t)?this._url=d.urlToObject(this.url=t):(this.url=this._url=null,i=i||t,i&&(i.layerDefinition||i.query)&&(i=null)),this.spatialReference=new p(4326),this.initialExtent=new f(-180,-90,180,90,new p(4326)),this._map=this._div=null,this.normalization=!0,i&&(i.id&&(this.id=i.id),i.visible===!1&&(this.visible=!1),l.isDefined(i.opacity)&&(this.opacity=i.opacity),l.isDefined(i.minScale)&&this.setMinScale(i.minScale),l.isDefined(i.maxScale)&&this.setMaxScale(i.maxScale),this.attributionDataUrl=i.attributionDataUrl||"",this.hasAttributionData=!!this.attributionDataUrl,l.isDefined(i.showAttribution)&&(this.showAttribution=i.showAttribution),this.className=i.className,this.refreshInterval=i.refreshInterval||0),this._errorHandler=s.hitch(this,this._errorHandler),this.refresh=s.hitch(this,this.refresh),this.managedSuspension){var n=this._setMap;this._setMap=function(t){var i=n.apply(this,arguments);if(this.evaluateSuspension(),this.suspended&&!t.loaded)var s=e.connect(t,"onLoad",this,function(){e.disconnect(s),s=null,this.evaluateSuspension()});return i}}this.registerConnectEvents()},id:null,visible:!0,opacity:1,loaded:!1,loadError:null,minScale:0,maxScale:0,visibleAtMapScale:!1,suspended:!0,attributionDataUrl:"",hasAttributionData:!1,showAttribution:!0,refreshInterval:0,_errorHandler:function(t){this.loaded||(this.loadError=t),this.onError(t)},_setMap:function(t){if(this._map=t,this._lyrZEHandle=e.connect(t,"onZoomEnd",this,this._processMapScale),t.loaded)this.visibleAtMapScale=this._isMapAtVisibleScale();else var i=e.connect(t,"onLoad",this,function(){e.disconnect(i),i=null,this._processMapScale()})},_unsetMap:function(){e.disconnect(this._lyrZEHandle),this._toggleRT(),this._map=this._lyrZEHandle=null,this._resumedOnce=void 0,this.suspended=!0},_cleanUp:function(){this._map=this._div=null},_fireUpdateStart:function(){this.updating||(this.updating=!0,this.attr("data-updating",""),this._toggleRT(),this.onUpdateStart(),this._map&&this._map._incr())},_fireUpdateEnd:function(t,i){this.updating&&(this.updating=!1,this.attr("data-updating"),this._toggleRT(!0),this.onUpdateEnd(t,i),this._map&&this._map._decr())},_getToken:function(){var t=this._url,i=this.credential;return t&&t.query&&t.query.token||i&&i.token||void 0},_findCredential:function(){this.credential=o.id&&this._url&&o.id.findCredential(this._url.path)},_useSSL:function(){var t=this._url,i=/^http:/i,e="https:";this.url&&(this.url=this.url.replace(i,e)),t&&t.path&&(t.path=t.path.replace(i,e))},refresh:function(){},show:function(){this.setVisibility(!0)},hide:function(){this.setVisibility(!1)},setMinScale:function(t){this.setScaleRange(t)},setMaxScale:function(t){this.setScaleRange(null,t)},setScaleRange:function(t,i){var e=l.isDefined(t),s=l.isDefined(i);this.loaded||(this._hasMin=this._hasMin||e,this._hasMax=this._hasMax||s);var n=this.minScale,a=this.maxScale;this.minScale=(e?t:this.minScale)||0,this.maxScale=(s?i:this.maxScale)||0,(n!==this.minScale||a!==this.maxScale)&&(this.onScaleRangeChange(),this._processMapScale())},suspend:function(){this._suspended=!0,this.evaluateSuspension()},resume:function(){this._suspended=!1,this.evaluateSuspension()},canResume:function(){return this.loaded&&this._map&&this._map.loaded&&this.visible&&this.visibleAtMapScale&&!this._suspended},evaluateSuspension:function(){this.canResume()?this.suspended&&this._resume():this.suspended||this._suspend()},_suspend:function(){this.suspended=!0,this.attr("data-suspended",""),this._toggleRT(),this.onSuspend(),this._map&&this._map.onLayerSuspend(this)},_resume:function(){this.suspended=!1,this.attr("data-suspended");var t,i=void 0===this._resumedOnce,e=this.className,s=this._attrs,n=this.getNode();if(i){if(this._resumedOnce=!0,e&&n){var a=n.getAttribute("class")||"",r=new RegExp("(^|\\s)"+e+"(\\s|$)","i");r.test(a)||(a+=(a?" ":"")+e,n.setAttribute("class",a))}if(s&&n)for(t in s)s.hasOwnProperty(t)&&n.setAttribute(t,s[t])}this._toggleRT(!0),this.onResume({firstOccurrence:i}),this._map&&this._map.onLayerResume(this)},_processMapScale:function(){var t=this.visibleAtMapScale;this.visibleAtMapScale=this._isMapAtVisibleScale(),t!==this.visibleAtMapScale&&(this.onScaleVisibilityChange(),this.evaluateSuspension())},isVisibleAtScale:function(t){return t?_.prototype._isMapAtVisibleScale.apply(this,arguments):!1},_isMapAtVisibleScale:function(t,i){if(!(t||this._map&&this._map.loaded))return!1;var e=this._map;t=t||e.getScale();var s,n=this.minScale,a=this.maxScale,r=!n,h=!a;return i&&(s=e.width>e.height?e.width:e.height),r||(n>=t?r=!0:i&&(r=Math.abs(n-t)/n<1/s)),h||(t>=a?h=!0:i&&(h=Math.abs(a-t)/a<1/s)),r&&h},getAttributionData:function(){var t=this.attributionDataUrl,e=new n(c._dfdCanceller);if(this.hasAttributionData&&t)e._pendingDfd=u({url:t,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),e._pendingDfd.then(function(t){e.callback(t)},function(t){e.errback(t)});else{var s=new Error("Layer does not have attribution data");s.log=i.isDebug,e.errback(s)}return e},getResourceInfo:function(){var t=this.resourceInfo;return s.isString(t)?a.fromJson(t):s.clone(t)},getMap:function(){return this._map},getNode:function(){return this._div},attr:function(t,i){var e=this.getNode();return"data-reference"===t&&r("ie")<11?this:(e&&(null==i?e.removeAttribute(t):e.setAttribute(t,i)),this._attrs&&(null==i?delete this._attrs[t]:this._attrs[t]=i),this)},setRefreshInterval:function(t){var i=this.refreshInterval;return this.refreshInterval=t,this._toggleRT(),t&&(this.updating||this.suspended||this._toggleRT(!0)),i!==t&&this.onRefreshIntervalChange(),this},_toggleRT:function(t){t&&this.refreshInterval?(clearTimeout(this._refreshT),this._refreshT=setTimeout(this.refresh,60*this.refreshInterval*1e3)):this._refreshT&&(clearTimeout(this._refreshT),this._refreshT=null)},setNormalization:function(t){this.normalization=t},setVisibility:function(t){this.visible!==t&&(this.visible=t,this.onVisibilityChange(this.visible),this.evaluateSuspension()),this.attr("data-hidden",t?null:"")},onLoad:function(){},onVisibilityChange:function(){},onScaleRangeChange:function(){},onScaleVisibilityChange:function(){},onSuspend:function(){},onResume:function(){},onUpdate:function(){},onUpdateStart:function(){},onUpdateEnd:function(){},onRefreshIntervalChange:function(){},onError:function(){}});return r("extend-esri")&&s.setObject("layers.Layer",_,o),_});