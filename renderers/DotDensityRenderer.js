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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/has","dojox/gfx/_base","../kernel","../lang","../Color","./Renderer","../symbols/PictureFillSymbol","../geometry/ScreenPoint","../geometry/Point"],function(t,e,i,n,o,s,a,r,h,l,d,c,u){var p=t(l,{declaredClass:"esri.renderer.DotDensityRenderer",constructor:function(t){this.dotSize=t.dotSize||3,this.dotValue=t.dotValue,this.fields=t.fields,this.outline=t.outline,this.backgroundColor=t.backgroundColor,this.exactCount=t.exactCount||!0,this.dotShape=t.dotShape||"square",this.legendOptions=t.legendOptions,this._exactCountMinArea=1e4,this._canvas=null,this._map=null,this._currentMapScale=null,this._symbolMap={},this._objectIdField=null,this._currentResolution=null,this._currentGraphic=null,this._supportsCanvas=window.CanvasRenderingContext2D?!0:!1,window.CanvasRenderingContext2D||console.log("The DotDensityRenderer requires a Canvas enabled Browser.  IE8 and less does not support Canvas.")},getSymbol:function(t){var i,n,o;return this._currentGraphic=t,this._supportsCanvas?(this._map||(this._map=t.getLayer()._map,this._objectIdField=t.getLayer().objectIdField,this._currentMapScale=this._map.getScale(),this._currentResolution=this._map.extent.getWidth()/this._map.width,this._map.on("zoom-end",e.hitch(this,function(t){this._currentMapScale=this._map.getScale(),this._currentResolution=t.extent.getWidth()/this._map.width,this._symbolMap[this._currentMapScale]={}}))),this._symbolMap[this._currentMapScale]&&this._symbolMap[this._currentMapScale][t.attributes[this._objectIdField]]?(n=this._symbolMap[this._currentMapScale][t.attributes[this._objectIdField]],o=this._getShapeProperties(t),n.setOffset(o.dx,o.dy),n):(i=this._generateFieldsCount(this.fields,t.attributes,this.dotValue),o=this._getShapeProperties(t),n=new d(this._generateImageSrc(o.width,o.height,i,o.minXY,o.maxXY),this.outline,o.width,o.height),n.setOffset(o.dx,o.dy),this._symbolMap[this._currentMapScale]?this._symbolMap[this._currentMapScale][t.attributes[this._objectIdField]]=n:(this._symbolMap[this._currentMapScale]={},this._symbolMap[this._currentMapScale][t.attributes[this._objectIdField]]=n),n)):null},_generateFieldsCount:function(t,e,i){var n,o;for(o=t.length-1;o>=0;o--)n=e[t[o].name]/i,t[o].numPoints=Math.round(n);return t},_getShapeProperties:function(t){var e,i,n,o,s,a,r,h;return e=t.geometry.getExtent(),e.contains(this._map.extent)&&(e=this._map.extent),r=Math.ceil(e.getWidth()/this._currentResolution),h=Math.ceil(e.getHeight()/this._currentResolution),i=this._map.toScreen(new u(e.xmin,e.ymin,e.spatialReference)),n=this._map.toScreen(new u(e.xmax,e.ymax,e.spatialReference)),a=t.getLayer().getNode().getCTM(),o=(i.x-a.e)%r,s=(n.y-a.f)%h,{minXY:i,maxXY:n,dx:o,dy:s,width:r,height:h}},_generateImageSrc:function(t,e,i,n,o,s){var a,r,h,l,d=this.dotSize;for(this._canvas?(this._canvas.width=t,this._canvas.height=e):this._canvas=this._initCanvas(t,e),a=this._canvas.getContext("2d"),s=s||this.backgroundColor,s&&(a.fillStyle=s.toCss(!0),a.fillRect(0,0,t,e),a.fill()),r=i.length-1;r>=0;r--)for(a.fillStyle=i[r].color.toCss(!0),h=i[r].numPoints-1;h>=0;h--)l=this._getRandomPoint(t,e,n,o),"square"===this.dotShape?a.fillRect(l.x,l.y,d,d):"circle"===this.dotShape&&(a.beginPath(),a.arc(l.x,l.y,d/2,0,2*Math.PI,!0)),a.fill();return this._canvas.toDataURL()},_initCanvas:function(t,e){var i=n.create("canvas",{id:"canvas",width:t+"px",height:e+"px",style:"position: absolute; left: -10000px; top: 0px;"},null);return document.body.appendChild(i),i},_getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},_getRandomPoint:function(t,e,i,n){var o,s,a={},r=this.outline&&this.outline.width?this.outline.width:0;if(this.exactCount===!0&&t*e>this._exactCountMinArea){o=!1;do a.x=this._getRandomInt(i.x,n.x),a.y=this._getRandomInt(n.y,i.y),s=new c(a.x,a.y),o=this._checkPointShapeBounds(s,this.dotSize+r,this._currentGraphic.geometry),o===!0&&(a.x=a.x-i.x,a.y=a.y-n.y);while(o===!1)}else a.x=this._getRandomInt(0,t),a.y=this._getRandomInt(0,e);return a},_checkPointShapeBounds:function(t,e,i){var n=null,o=!1,s=!0,a=0;do{switch(a){case 0:break;case 1:t.x=t.x+e;break;case 2:t.y=t.y+e;break;case 3:t.x=t.x-e}n=this._map.toMap(t),o=i.contains(n),o===!1&&(s=!1),a+=1}while(3>=a&&s===!0);return o},setDotSize:function(t){t>0&&(this.dotSize=t)},setDotValue:function(t){t>0&&(this.dotValue=t)},setOutline:function(t){this.outline=t},setBackgroundColor:function(t){this.backgroundColor=t},toJson:function(){var t=e.mixin(this.inherited(arguments),{type:"dotDensity",backgroundColor:h.toJsonColor(this.backgroundColor),dotShape:this.dotShape,dotSize:this.dotSize>0?s.px2pt(this.dotSize):0,dotValue:this.dotValue,fields:i.map(this.fields,function(t){return r.fixJson({color:h.toJsonColor(t.color),name:t.name})}),legendOptions:this.legendOptions&&r.fixJson({backgroundColor:h.toJsonColor(this.legendOptions.backgroundColor),dotCoverage:this.legendOptions.dotCoverage,outline:this.legendOptions.outline&&this.legendOptions.outline.toJson(),valueUnit:this.legendOptions.valueUnit}),outline:this.outline&&this.outline.toJson()});return r.fixJson(t)}});return o("extend-esri")&&e.setObject("renderer.DotDensityRenderer",p,a),p});