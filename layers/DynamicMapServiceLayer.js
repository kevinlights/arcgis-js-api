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

define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/dom-construct","dojo/dom-style","dojox/gfx/matrix","../kernel","../config","../sniff","../request","../domUtils","./layer","./MapImage"],function(t,e,n,i,s,a,o,r,h,_,c,l,d){var m=r.defaults.map.zoomDuration,p=t(l,{declaredClass:"esri.layers.DynamicMapServiceLayer",_eventMap:{"map-image-export":["mapImage"]},constructor:function(t,e){this.useMapTime=e&&e.hasOwnProperty("useMapTime")?!!e.useMapTime:!0,this.extentProcessor=e&&e.extentProcessor;var i=n.hitch;this._exportMapImageHandler=i(this,this._exportMapImageHandler),this._imgSrcFunc=i(this,this._imgSrcFunc),this._divAlphaImageFunc=i(this,this._divAlphaImageFunc),this._tileLoadHandler=i(this,this._tileLoadHandler),this._tileErrorHandler=i(this,this._tileErrorHandler),this.registerConnectEvents()},opacity:1,isPNG32:!1,_setMap:function(t,n){this.inherited(arguments),this._map=t;var a=this._div=i.create("div",null,n),r=o._css.names,_={position:"absolute",width:t.width+"px",height:t.height+"px",overflow:"visible",opacity:this.opacity},c=h("ie"),l=e.connect,d=t.__visibleDelta;if(8===c&&delete _.opacity,"css-transforms"===t.navigationMode?(this._isChildLayer||(_[r.transform]=o._css.translate(d.x,d.y),s.set(a,_)),this._left=d.x,this._top=d.y):(_.left="0px",_.top="0px",s.set(a,_),this._left=this._top=0),s.set(a,_),this._onResizeHandler_connect=l(t,"onResize",this,"_onResizeHandler"),this._opacityChangeHandler_connect=l(this,"onOpacityChange",this,"_opacityChangeHandler"),this._img_loading=null,this._dragOrigin={x:0,y:0},this.evaluateSuspension(),this.suspended&&!t.loaded)var m=e.connect(t,"onLoad",this,function(){e.disconnect(m),m=null,this.evaluateSuspension()});return this.extentProcessor&&(this._panEndEvalHandle=e.connect(t,"onPanEnd",this,this.evaluateSuspension),this._zoomEndEvalHandle=e.connect(t,"onZoomEnd",this,this.evaluateSuspension)),a},_unsetMap:function(){i.destroy(this._div),this._map=this._div=null;var t=e.disconnect;t(this._onResizeHandler_connect),t(this._opacityChangeHandler_connect),t(this._panEndEvalHandle),t(this._zoomEndEvalHandle),this._onResizeHandler_connect=this._opacityChangeHandler_connect=null,this._panEndEvalHandle=this._zoomEndEvalHandle=null,this._fireUpdateEnd(),this._toggleTime(),clearTimeout(this._wakeTimer),this._wakeTimer=null,this._disableDrawConnectors(),this.inherited(arguments)},_onResizeHandler:function(t,e,n){s.set(this._div,{width:e+"px",height:n+"px"}),this._onExtentChangeHandler(t)},onSuspend:function(){this.inherited(arguments),this._fireUpdateEnd(),this._toggleTime(),c.hide(this._div),clearTimeout(this._wakeTimer),this._wakeTimer=null,this._disableDrawConnectors()},onResume:function(){this.inherited(arguments);var t=this._map;if(this._toggleTime(),"css-transforms"===t.navigationMode){var e=t.__visibleDelta;this._left=e.x,this._top=e.y,this._isChildLayer||s.set(this._div,o._css.names.transform,o._css.translate(this._left,this._top))}this._enableDrawConnectors(),this._wakeTimer=this._wakeTimer||setTimeout(n.hitch(this,function(){this.suspended||this._onExtentChangeHandler(this._map.extent,null,!0)}),0)},canResume:function(){var t=this.inherited(arguments);if(t){var e=this._map.extent;if(this.extentProcessor&&e){var n=this.extentProcessor({layer:this,extent:e,width:this._map.width});t=!!n.extent}}return t},_enableDrawConnectors:function(){var t=e.connect,n=this._map;n&&(this._onPanHandler_connect=t(n,"onPan",this,"_onPanHandler"),this._onExtentChangeHandler_connect=t(n,"onExtentChange",this,"_onExtentChangeHandler"),"css-transforms"===n.navigationMode?this._onScaleHandler_connect=t(n,"onScale",this,this._onScaleHandler):this._onZoomHandler_connect=t(n,"onZoom",this,"_onZoomHandler"))},_disableDrawConnectors:function(){var t=e.disconnect;t(this._onPanHandler_connect),t(this._onExtentChangeHandler_connect),t(this._onZoomHandler_connect),t(this._onScaleHandler_connect),this._onPanHandler_connect=this._onExtentChangeHandler_connect=this._onZoomHandler_connect=this._onScaleHandler_connect=null},_toggleTime:function(){var t=this._map;this.timeInfo&&this.useMapTime&&t&&!this.suspended?(this._timeConnect||(this._timeConnect=e.connect(t,"onTimeExtentChange",this,this._onTimeExtentChangeHandler)),this._setTime(t.timeExtent)):(e.disconnect(this._timeConnect),this._timeConnect=null,this._setTime(null))},_setTime:function(t){this._params&&(this._params.time=t?t.toJson().join(","):null)},_onPanHandler:function(t,e){this._panDx=e.x,this._panDy=e.y;var n=this._dragOrigin,i=this._map.__visibleDelta,a=this._img;a&&("css-transforms"===this._map.navigationMode?(this._left=i.x+e.x,this._top=i.y+e.y,this._isChildLayer||s.set(this._div,o._css.names.transform,o._css.translate(this._left,this._top))):s.set(a,{left:n.x+e.x+"px",top:n.y+e.y+"px"}))},_onExtentChangeHandler:function(t,n,r){if(!this.suspended){clearTimeout(this._wakeTimer),this._wakeTimer=null;var _=this._map,c=this._img,l=c&&c.style,d=this._dragOrigin;if(n&&!r&&c&&(n.x!==this._panDx||n.y!==this._panDy))if("css-transforms"===_.navigationMode){var p=_.__visibleDelta;this._left=p.x,this._top=p.y,this._isChildLayer||s.set(this._div,o._css.names.transform,o._css.translate(this._left,this._top))}else s.set(c,{left:d.x+n.x+"px",top:d.y+n.y+"px"});c?(d.x=parseInt(l.left,10),d.y=parseInt(l.top,10)):d.x=d.y=0,"css-transforms"===_.navigationMode&&r&&c&&(s.set(c,o._css.names.transition,"none"),c._multiply=c._multiply?a.multiply(c._matrix,c._multiply):c._matrix),this._fireUpdateStart();var g=this._img_loading;if(g){e.disconnect(g._onload_connect),e.disconnect(g._onerror_connect),e.disconnect(g._onabort_connect),i.destroy(g),this._img_loading=null;var u=this._jsonRequest;if(u){try{u.cancel()}catch(f){}this._jsonRequest=null}}var x=_.width,v=_.height,y=x,H=v,w=0;if(this.version>=10&&_.wrapAround180&&(t=t._normalize(!0)),this.extentProcessor){var E=this.extentProcessor({layer:this,extent:t,width:y});t=E.extent,y=E.width,w=E.marginLeft||0}if(this.isPNG32){var C=this._img_loading=i.create("div");C.id=_.id+"_"+this.id+"_"+(new Date).getTime(),s.set(C,{position:"absolute",left:"0px",top:"0px",width:y+"px",height:H+"px"});var T=C.appendChild(i.create("div"));s.set(T,{opacity:0,width:y+"px",height:H+"px"}),this.getImageUrl(t,y,H,this._divAlphaImageFunc),C=null}else{var b=this._img_loading=i.create("img"),M=o._css.names,I=h("ie"),L={position:"absolute",width:y+"px",height:H+"px"};8===I&&(L.opacity=this.opacity),null!=w&&0!==w&&(L.marginLeft=w+"px"),"css-transforms"===_.navigationMode?(L[M.transform]=o._css.translate(-this._left,-this._top),b._tdx=-this._left,b._tdy=-this._top,L[M.transition]=M.transformName+" "+m+"ms ease",this.extentProcessor&&(L[M.origin]=x/2-w+"px "+v/2+"px")):(L.left="0px",L.top="0px"),b.id=_.id+"_"+this.id+"_"+(new Date).getTime(),s.set(b,L),b._onload_connect=e.connect(b,"onload",this,"_onLoadHandler"),b._onerror_connect=e.connect(b,"onerror",this,"_onErrorHandler"),b._onabort_connect=e.connect(b,"onabort",this,"_onErrorHandler"),this._startRect={left:d.x,top:d.y,width:c?parseInt(l.width,10):y,height:c?parseInt(l.height,10):H,marginLeft:c?parseInt(l.marginLeft||"0",10):w,zoom:l&&l.zoom?parseFloat(l.zoom):1},this.getImageUrl(t,y,H,this._imgSrcFunc),b=null}}},_onTimeExtentChangeHandler:function(t){this.suspended||(this._setTime(t),this.refresh(!0))},getImageUrl:function(){},_imgSrcFunc:function(t){this._img_loading.src=t},_divAlphaImageFunc:function(t){s.set(this._img_loading,"filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"', sizingMethod='scale')"),this._onLoadHandler({currentTarget:this._img_loading})},_onLoadHandler:function(t){var n=t.currentTarget,s=e.disconnect,a=this._map;if(s(n._onload_connect),s(n._onerror_connect),s(n._onabort_connect),!a||a.__panning||a.__zooming)return i.destroy(n),void this._fireUpdateEnd();this._img&&this._div.removeChild(this._img),this._img=n;var o=n.style;this._startRect={left:0,top:0,width:parseInt(o.width,10),height:parseInt(o.height,10),marginLeft:parseInt(o.marginLeft||"0",10),zoom:1},this._div.appendChild(n),this.suspended||c.show(this._div),n._onload_connect=n._onerror_connect=n._onabort_connect=this._img_loading=null;var r=this._dragOrigin;r.x=r.y=0,this.onUpdate(),this._fireUpdateEnd()},_onErrorHandler:function(t){var n=t.currentTarget,i=e.disconnect;s.set(n,"visibility","hidden"),i(n._onload_connect),i(n._onerror_connect),i(n._onabort_connect),n._onload_connect=n._onerror_connect=n._onabort_connect=null;var a=new Error("Unable to load image: "+n.src);this.onError(a),this._fireUpdateEnd(a)},setUseMapTime:function(t,e){this.useMapTime=t,this._toggleTime(),e||this.refresh(!0)},refresh:function(){this._map&&this._onExtentChangeHandler(this._map.extent)},_onScaleHandler:function(t,e){var n={},i=o._css.names,r=this._img;r&&(s.set(r,i.transition,e?"none":i.transformName+" "+m+"ms ease"),r._matrix=t,t=r._multiply?a.multiply(t,r._multiply):t,(r._tdx||r._tdy)&&(t=a.multiply(t,{xx:1,xy:0,yx:0,yy:1,dx:r._tdx,dy:r._tdy})),n[i.transform]=o._css.matrix(t),s.set(r,n))},_onZoomHandler:function(t,e,n){var i=this._startRect,a=i.width*e,o=i.height*e,r=i.marginLeft*e,_=this._img,c=h("ie");_&&(c&&8>c?s.set(_,{left:i.left-(a-i.width)*(n.x-i.left)/i.width+"px",top:i.top-(o-i.height)*(n.y-i.top)/i.height+"px",zoom:e*i.zoom}):s.set(_,{left:i.left-(a-i.width)*(n.x-i.left)/i.width+"px",top:i.top-(o-i.height)*(n.y-i.top)/i.height+"px",width:a+"px",height:o+"px"}),null!=r&&0!==r&&s.set(_,{marginLeft:r+"px"}))},_exportMapImage:function(t,e,n){var i=this._exportMapImageHandler;e.token=this._getToken(),_({url:t,content:e,callbackParamName:"callback",load:function(){i(arguments[0],arguments[1],n)},error:r.defaults.io.errorHandler})},_exportMapImageHandler:function(t,e,n){var i=new d(t);this.onMapImageExport(i),n&&n(i)},onMapImageExport:function(){},setOpacity:function(t){this.opacity!=t&&this.onOpacityChange(this.opacity=t)},onOpacityChange:function(){},_opacityChangeHandler:function(t){var e=8===h("ie")?this._img:this._div;s.set(e,"opacity",t)}});return h("extend-esri")&&n.setObject("layers.DynamicMapServiceLayer",p,o),p});