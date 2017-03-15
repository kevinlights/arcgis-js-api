// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/accessorSupport/decorators","dojo/_base/lang","../request","./Task","./support/FeatureSet","./support/Query","../geometry/Extent","../geometry/support/normalizeUtils"],function(e,r,t,o,n,s,a,u,i,c,p,l,d){var y="Layer does not support extent calculation.",h=function(e){function r(r){var t=e.call(this,r)||this;return t.gdbVersion=null,t.source=null,t}return t(r,e),r.prototype.execute=function(e,r){var t=this,o=e.geometry?[e.geometry]:[];return d.normalizeCentralMeridian(o).then(function(o){var n=t._encode(a.mixin({},t.parsedUrl.query,{f:"json"},e.toJSON({geometry:o&&o[0]})));if(t.source){var s={source:t.source.toJSON()};n.layer=JSON.stringify(s)}t.gdbVersion&&(n.gdbVersion=t.gdbVersion);var i={query:n,callbackParamName:"callback"};return(t.requestOptions||r)&&(i=a.mixin({},t.requestOptions,r,i)),u(t.parsedUrl.path+"/query",i)}).then(this._handleExecuteResponse)},r.prototype.executeRelationshipQuery=function(e,r){var t=this._encode(a.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()));this.gdbVersion&&(t.gdbVersion=this.gdbVersion);var o={query:t,callbackParamName:"callback"};return(this.requestOptions||r)&&(o=a.mixin({},this.requestOptions,r,o)),u(this.parsedUrl.path+"/queryRelatedRecords",o).then(this._handleExecuteRelationshipQueryResponse)},r.prototype.executeForIds=function(e,r){var t=this,o=e.geometry?[e.geometry]:[];return d.normalizeCentralMeridian(o).then(function(o){var n=t._encode(a.mixin({},t.parsedUrl.query,{f:"json",returnIdsOnly:!0},e.toJSON({geometry:o&&o[0]})));if(t.source){var s={source:t.source.toJSON()};n.layer=JSON.stringify(s)}t.gdbVersion&&(n.gdbVersion=t.gdbVersion);var i={query:n,callbackParamName:"callback"};return(t.requestOptions||r)&&(i=a.mixin({},t.requestOptions,r,i)),u(t.parsedUrl.path+"/query",i)}).then(this._handleExecuteForIdsResponse)},r.prototype.executeForCount=function(e,r){var t=this,o=e.geometry?[e.geometry]:[];return d.normalizeCentralMeridian(o).then(function(o){var n=t._encode(a.mixin({},t.parsedUrl.query,{f:"json",returnIdsOnly:!0,returnCountOnly:!0},e.toJSON({geometry:o&&o[0]})));if(t.source){var s={source:t.source.toJSON()};n.layer=JSON.stringify(s)}t.gdbVersion&&(n.gdbVersion=t.gdbVersion);var i={query:n,callbackParamName:"callback"};return(t.requestOptions||r)&&(i=a.mixin({},t.requestOptions,r,i)),u(t.parsedUrl.path+"/query",i)}).then(this._handleExecuteForCountResponse)},r.prototype.executeForExtent=function(e,r){var t=this,o=e.geometry?[e.geometry]:[];return d.normalizeCentralMeridian(o).then(function(o){var n=t._encode(a.mixin({},t.parsedUrl.query,{f:"json",returnExtentOnly:!0,returnCountOnly:!0},e.toJSON({geometry:o&&o[0]})));if(t.source){var s={source:t.source.toJSON()};n.layer=JSON.stringify(s)}t.gdbVersion&&(n.gdbVersion=t.gdbVersion);var i={query:n,callbackParamName:"callback"};return(t.requestOptions||r)&&(i=a.mixin({},t.requestOptions,r,i)),u(t.parsedUrl.path+"/query",i)}).then(this._handleExecuteForExtentResponse)},r.prototype._handleExecuteResponse=function(e){return c.fromJSON(e.data)},r.prototype._handleExecuteRelationshipQueryResponse=function(e){var r=e.data,t=r.geometryType,o=r.spatialReference,n={};return r.relatedRecordGroups.forEach(function(e){var r={geometryType:t,spatialReference:o,features:e.relatedRecords},s=c.fromJSON(r);if(null!=e.objectId)n[e.objectId]=s;else for(var a in e)e.hasOwnProperty(a)&&"relatedRecords"!==a&&(n[e[a]]=s)}),n},r.prototype._handleExecuteForIdsResponse=function(e){return e.data.objectIds},r.prototype._handleExecuteForCountResponse=function(e){var r,t=e.data,o=t.features,n=t.objectIds;if(n)r=n.length;else{if(o)throw new Error("Unable to perform query. Please check your parameters.");r=t.count}return r},r.prototype._handleExecuteForExtentResponse=function(e){var r=e.data;if(r.hasOwnProperty("extent"))r.extent=l.fromJSON(r.extent);else{if(r.features)throw new Error(y);if(r.hasOwnProperty("count"))throw new Error(y)}return r},r}(s.declared(i));return o([s.property()],h.prototype,"gdbVersion",void 0),o([s.property()],h.prototype,"source",void 0),o([n(0,s.cast(p))],h.prototype,"execute",null),o([n(0,s.cast(p))],h.prototype,"executeForIds",null),o([n(0,s.cast(p))],h.prototype,"executeForCount",null),o([n(0,s.cast(p))],h.prototype,"executeForExtent",null),h=o([s.subclass("esri.tasks.QueryTask")],h)});