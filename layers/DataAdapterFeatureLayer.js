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

define(["../declare","dojo/_base/lang","dojo/_base/array","dojo/when","./FeatureLayer","../renderers/SimpleRenderer","../symbols/SimpleFillSymbol","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol"],function(e,t,r,a,i,o,n,d,s){return e("esri.layers.DataAdapterFeatureLayer",i,{locationProvider:null,dataAdapter:null,dataAdapterQuery:null,_preventInit:!0,constructor:function(e,r){if(this.dataAdapterQuery=r&&r.dataAdapterQuery,this.locationProvider=r&&r.locationProvider,this.dataAdapter=e,this.dataAdapter&&this.locationProvider&&this.dataAdapterQuery){var a=t.hitch(this,this._init,r);this.locationProvider.loaded?this._queryDataAdapter().then(a):this.locationProvider.on("load",t.hitch(this,function(){this._queryDataAdapter().then(a)}))}},_queryDataAdapter:function(){function e(e,t){return{idField:e.idField,fields:r.filter(e.fields,function(t){return-1!==r.indexOf(o.dataAdapterQuery.outFields,t.name)||t.name===e.idField}),recordSet:t}}function i(r){return a(o.dataAdapter.query(o.dataAdapterQuery)).then(t.partial(e,r))}var o=this;return a(this.dataAdapter.getTableInfo(this.dataAdapterQuery.tableId)).then(i)},_init:function(e,r){var a;switch(this.locationProvider.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":a=new d;break;case"esriGeometryPolyline":a=new s;break;case"esriGeometryPolygon":a=new n}var i={layerDefinition:{geometryType:this.locationProvider.geometryType,objectIdField:r.idField,fields:r.fields,drawingInfo:{renderer:new o(a).toJson()}},featureSet:{features:r.recordSet.features}};this.on("load",t.hitch(this,this._locateFeatures)),this._initFeatureLayer(i,e)},_locateFeatures:function(){var e=this,t=this.getMap(),r=function(){e.updating=!0,e.locationProvider.locate(e.graphics,{outSpatialReference:t.spatialReference}).then(function(){e._fireUpdateEnd()})};t&&!this._located&&(this._located=!0,this.locationProvider.loaded?r():this.locationProvider.on("load",r))},_setMap:function(){var e=this.inherited(arguments);return this._locateFeatures(),e}})});