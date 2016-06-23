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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/url","dojo/dom-construct","dojo/dom-style","dojo/has","dojo/Deferred","../lang","../domUtils","../urlUtils","../kernel","../config","../request","../SpatialReference","../geometry/Extent","./layer","./TileInfo","./unitBezier"],function(e,t,i,n,r,s,o,a,l,h,c,u,d,f,p,v,_,g,m){for(var y=t(_,{declaredClass:"esri.layers.VectorTileLayer",_mapsWithAttribution:["World_Basemap"],_eventMap:{"style-change":["style"]},constructor:function(e,t){this._displayLevels=t?t.displayLevels:null,this._glStyleApplied=!1,this._serviceOverrides={},this._style=null,t&&t.tileServers&&t.tileServers.length&&(this._serviceOverrides.tileServers=t.tileServers.map(function(e){if(W.isMapboxUrl(e))return e;var t=c.getAbsoluteUrl(e),i=W.getTokenFromUrl(t);return i?i.url+"?token="+i.token:c.urlToObject(t).path},this));var i=e;if("string"==typeof e){var n=W.isMapboxUrl(e),r=n?e:c.getAbsoluteUrl(e);this._serviceOverrides.credential=W.getTokenFromUrl(e),i=r}this.setStyle(i),this.registerConnectEvents()},setStyle:function(e){return e?(this._glStyleApplied=!1,this._serviceOverrides.credential="string"!=typeof e?null:W.getTokenFromUrl(e),this._loadStyle(e)):void 0},getStyle:function(){if(!this._style)return null;var e=JSON.parse(JSON.stringify(this._style.stylesheet)),t=e.sources;return Object.keys(t).forEach(function(e){var i=t[e];i.tiles=(i.tiles||[]).map(function(e){return"string"!=typeof e&&(e=e.value),e})}),e},opacity:1,setOpacity:function(e){this.opacity!=e&&this.onOpacityChange(this.opacity=e)},onOpacityChange:function(){},refresh:function(){},_loadStyle:function(t){return(new a).resolve().then(function(){var t=new a,i=null==o("ie")||o("ie")>9;return i?w?w.supported()?t.resolve():t.reject(new Error("layer not supported"),!0):e(["./vector-tile"],function(e){w=e,w.supported()?t.resolve():t.reject(new Error("layer not supported"),!0)}):t.reject(new Error("layer not supported"),!0),t.promise}).then(function(){return w.tokenHandler?S=w.tokenHandler:(S=new K,w.tokenHandler=S),this._serviceOverrides&&this._serviceOverrides.credential&&S.addToken(this._serviceOverrides.credential),W.loadMetadata(t,this._serviceOverrides)}.bind(this)).then(i.hitch(this,function(e){var i=e.layerDefinition;if(this.serviceUrl=e.serviceUrl||null,this.styleUrl=e.styleUrl||null,i){this.spatialReference=i.initialExtent&&i.initialExtent.spatialReference&&new p(i.initialExtent.spatialReference),this.initialExtent=i.initialExtent&&new v(i.initialExtent),this.fullExtent=i.fullExtent&&new v(i.fullExtent),this.version=i.currentVersion,this.tileInfo=new g(i.tileInfo),l.isDefined(i.minScale)&&!this._hasMin&&this.setMinScale(i.minScale),l.isDefined(i.maxScale)&&!this._hasMax&&this.setMaxScale(i.maxScale);var n=null;if(t){var r=c.urlToObject(e.serviceUrl);n=this._getDefaultAttribution(r.path)}n&&(this.attributionDataUrl=n,this.hasAttributionData=!0)}else this.spatialReference=j,this.initialExtent=z,this.fullExtent=D,this.tileInfo=U,this.version=null;for(var s,o=this.tileInfo,a=o.lods,h=this.scales=[],d=this._displayLevels,f=-1/0,_=1/0,m=0,y=a.length;y>m;m++)s=a[m],d&&-1===d.indexOf(s.level)||(h[m]=s.scale,f=s.scale>f?s.scale:f,_=s.scale<_?s.scale:_);f===-1/0||this._hasMin||this.setMinScale(f),1/0===_||this._hasMax||this.setMaxScale(_),this._style=e.style,this.gl&&(w.identityManager=u.id,this._applyGLStyle(this._style)),this.onStyleChange(this.getStyle())})).then(i.hitch(this,function(){this.loaded||this.loadError||(this.loaded=!0,this.onLoad(this))})).otherwise(i.hitch(this,function(e){throw this._errorHandler(e),e}))},_setMap:function(e,t){this.inherited(arguments),this._map=e;var n=this._div=r.create("div",null,t),o={position:"absolute",width:e.width+"px",height:e.height+"px",overflow:"visible",opacity:this.opacity};if(s.set(n,o),this._onResizeHandle=e.on("resize",i.hitch(this,this._onResizeHandler)),this._onOpacityHandle=this.on("opacity-change",i.hitch(this,this._opacityChangeHandler)),this._onScaleVisHandle=this.on("scale-visibility-change",i.hitch(this,function(){this._applyGLStyle(this._style)})),this._onVisibilityHandle=this.on("visibility-change",i.hitch(this,function(){this._applyGLStyle(this._style)})),w.identityManager=u.id,this.gl=new w.Renderer({container:n}),this.gl.setSize(e.width,e.height),this._applyGLStyle(this._style),this.evaluateSuspension(),this.suspended&&!e.loaded)var a=e.on("load",i.hitch(this,function(){a.remove(),this.evaluateSuspension()}));return n},_unsetMap:function(){this.gl.remove(),this.gl=null,this._glStyleApplied=!1,r.destroy(this._div),this._map=this._div=null,this._onResizeHandle=this._onResizeHandle&&this._onResizeHandle.remove()&&null,this._onOpacityHandle=this._onOpacityHandle&&this._onOpacityHandle.remove()&&null,this._onScaleVisHandle=this._onScaleVisHandle&&this._onScaleVisHandle.remove()&&null,this._onVisibilityHandle=this._onVisibilityHandle&&this._onVisibilityHandle.remove()&&null,this._disableDrawConnectors(),this._animation&&(this._animation.stop(),this._animation=null),this.inherited(arguments)},_applyGLStyle:function(e){if(!this._glStyleApplied){var t=this.gl;if(t)return e?void(this.visible&&this._isMapAtVisibleScale()&&(e.animationLoop=t.animationLoop,t.setStyle(e),e._loaded&&(Object.getOwnPropertyNames(e.sources).forEach(function(e){this.fire("source.add",{source:this.sources[e]})},e),e.fire("load"),e.sprite&&e.sprite.loaded()&&e.fire("change")),this._glStyleApplied=!0)):void t.setStyle(null)}},_enableDrawConnectors:function(){var e=this._map;e&&(this._panHandle=e.on("pan",i.hitch(this,this._onPanExtentChangeHandler)),this._extentChangeHandle=e.on("extent-change",i.hitch(this,this._onExtentChangeHandler)),this._onScaleHandle=e.on("scale",i.hitch(this,this._onScaleHandler)))},_disableDrawConnectors:function(){this._onScaleHandle=this._onScaleHandle&&this._onScaleHandle.remove()&&null,this._panHandle=this._panHandle&&this._panHandle.remove()&&null,this._extentChangeHandle=this._extentChangeHandle&&this._extentChangeHandle.remove()&&null},_getZoom:function(e){var t=this.tileInfo,i=t.lods,n=null,r=null,s=0,o=i.length-1;for(s;o>s;s++){if(n=i[s],r=i[s+1],n.scale<=e)return n.level;if(r.scale===e)return r.level;if(n.scale>e&&r.scale<e)return s=s+1-(e-r.scale)/(n.scale-r.scale),s=Math.ceil(s)-Math.log(Math.abs(Math.ceil(s)-s+1))/Math.LN2,(s-Math.floor(s)>.995||s-Math.floor(s)<.005)&&(s=Math.round(s)),i[s].level}return e>i[0].scale?i[0].level:i[i.length-1].level},_isMapAtVisibleScale:function(){var e=this.inherited(arguments);if(e){for(var t=this._map,i=this.scales,n=t.getScale(),r=!1,s=t.width>t.height?t.width:t.height,o=0,a=i.length;a>o;o++)if(Math.abs(i[o]-n)/i[o]<1/s){r=!0;break}e=r}return e},_getDefaultAttribution:function(e){var t=e.match(/^https?:\/\/(basemaps|basemapsbeta)\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i);if(t){var i=t[3];if(i){var n,r=t[2]||"";i=i.toLowerCase();for(var s=0,o=this._mapsWithAttribution.length;o>s;s++)if(n=this._mapsWithAttribution[s],n.toLowerCase().indexOf(i)>-1)return"file:"===window.location.protocol?"https:":window.location.protocol+"//static.arcgis.com/attribution/Vector"+r+"/"+n}}},onStyleChange:function(){},_opacityChangeHandler:function(e){this.gl&&(this._div.style.opacity=e.opacity)},_onResizeHandler:function(e){if(this.gl){var t=e.extent.getCenter();this.gl.setSize(e.width,e.height),this.gl.jumpTo({center:[t.getLongitude(),t.getLatitude()]}),this._div.style.width=e.width+"px",this._div.style.height=e.height+"px"}},onSuspend:function(){this.inherited(arguments),h.hide(this._div),this._disableDrawConnectors()},onResume:function(){if(this.inherited(arguments),this.gl&&this._style){h.show(this._div);var e=this._map,t=this._getZoom(e.getScale()),i=e.extent.getCenter();this._animate(i,t,!0)}this._enableDrawConnectors()},_onPanExtentChangeHandler:function(e){var t=this._map,i=this._getZoom(t.getScale()),n=e.extent.getCenter();this._animate(n,i,!0)},_onExtentChangeHandler:function(e){var t=e.extent.getCenter();this._animate(t,this._getZoom(e.lod.scale),this._pinching||e.immediate),this._pinching=!1},_onScaleHandler:function(e){var t,i,n,r,s=this._map;if(s._zoomAnimDiv.extent)this._pinching=!1,t=s._zoomAnimDiv.anchor,i=s._zoomAnimDiv.extent.getCenter(),n=this._getZoom(s._zoomAnimDiv.newLod.scale,s._zoomAnimDiv.newLod.level),this._animate(i,n,e.immediate,t);else if(s.navigationManager._pinchScale){this._pinching=!0,n=this._getZoom(s.__LOD.scale),r=s.navigationManager._pinchScale-1,t=s.navigationManager._dragOrigin;var o=t?[t.x-s.width/2,t.y-s.height/2]:null;this.gl.zoomTo(n+r,{animate:!1,offset:o})}},_animate:function(e,t,i,n){this._animation&&(this._animation.stop(),this._animation=null),this._animation=Z(this.gl,e.getLongitude(),e.getLatitude(),t,i,this._map,n)}}),w=null,S=null,b=512,x=40075016.68557849,M=39.37007874015748,O=x/b,H=Object.freeze||function(){},C=[],k=0;20>k;k++){var A=O/Math.pow(2,k),E=Math.floor(96*A*M);C.push({level:k,scale:E,resolution:A})}var U=new g({rows:b,cols:b,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},spatialReference:{wkid:102100},lods:C});H(U);var j=new p(102100);H(j);var z=new v(-20037508.34,-20037508.34,20037508.34,20037508.34,j);H(z);var D=new v(-20037508.34,-20037508.34,20037508.34,20037508.34,j);H(D);var L,T=function(){var e,t=window.performance||{},i=t.now||t.webkitNow||t.msNow||t.oNow||t.mozNow;return void 0!==i?function(){return i.call(t)}:(e=window.performance&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:(new Date).getTime(),function(){return(new Date).getTime()-e})}(),R=o("ff"),N=o("ie"),V=o("webkit"),P=o("opera"),I=(new Date).getTime(),q=window.requestAnimationFrame;q||(L=V&&"webkit"||R&&"moz"||P&&"o"||N&&"ms",q=window[L+"RequestAnimationFrame"],q||(q=function(e){var t=T(),i=Math.max(0,16-(t-I)),n=window.setTimeout(function(){e(T())},i);return I=t+i,n}));var F=m.ease,Z=function(e,t,i,n,r,s,o){if(r=r||0===d.defaults.map.zoomDuration)return e.jumpTo({center:[t,i],zoom:Math.ceil(n)-Math.log(Math.abs(Math.ceil(n)-n+1))/Math.LN2}),null;var a=!0,l=d.defaults.map.zoomDuration,h=e.transform.center.lat,c=e.transform.center.lng,u=e.transform.zoom,f=T()+16,p=o?[o.x-s.width/2,o.y-s.height/2]:null,v=function(){if(a){var r=T()+16,s=(r-f)/l;s>=1&&(s=1,a=!1);var o=F(s),d=u+(n-u)*o;if(d=Math.ceil(d)-Math.log(Math.abs(Math.ceil(d)-d+1))/Math.LN2,p)e.zoomTo(d,{animate:!1,offset:p});else{var _=h+(i-h)*o,g=c+(t-c)*o;e.jumpTo({center:[g,_],zoom:d})}a&&q(v)}};return v(),{stop:function(){a=!1}}},G=t(String,{constructor:function(e,t){this.value=e,this.token=t},valueOf:function(){var e=this.value,t=this.token;if(!t){var i=u.id&&u.id.findCredential(e);i&&i.token&&(t=i.token)}return t&&(e+=(-1===e.indexOf("?")?"?":"&")+"token="+t),e},toString:function(){return this.valueOf()},replace:function(e,t){return String.prototype.replace.call(this.valueOf(),e,t)}}),W={loadMetadata:function(e,t){var i=null,n=null,r=t&&t.credential;return(new a).resolve(e).then(function(){return w.config.ACCESS_TOKEN=y.ACCESS_TOKEN,"string"!=typeof e?e:(W.isMapboxUrl(e)?(n=e,i=w.normalizeStyleURL(e)):n=i=c.normalize(e).replace(/\/*$/,""),W._corsify(i),i=W._appendToken(i,r),f({url:i,content:{f:"json"},handleAs:"json"}))}).then(function(e){return W._processMetadata(n,e,t)}).then(function(e){return W._loadStyle(e,t)})},isMapboxUrl:function(e){return e.search(/^mapbox:\/\/styles\//)>-1},getTokenFromUrl:function(e){var t,i=e;if(!W.isMapboxUrl(i)){var n=c.urlToObject(i);n.query&&n.query.token&&(t={url:n.path,token:n.query.token})}return t},_appendToken:function(e,t){return t&&t.token&&-1===e.indexOf("token=")?e+=(-1===e.indexOf("?")?"?":"&")+"token="+t.token:e},_configureStyle:function(e,t){var i=e.layerDefinition,n=e.style,r=e.serviceUrl,s=e.styleUrl,o=W._getAbsolutePath,a=W._corsify;if(i&&n&&n.sources.esri){var l=i.tilejson||"2.0.0",h=i.tileInfo&&i.tileInfo.format||"pbf",c=i.tileMap?a(o(i.tileMap,r)):null,u=(i.tiles||[]).map(function(e){return new G(W._getAbsolutePath(e.valueOf(),r),t&&t.credential&&t.credential.token)});n.sources.esri={type:"vector",scheme:"xyz",tilejson:l,format:h,index:c,tiles:u,description:i.description,name:i.name},u.forEach(a),n.glyphs=a(o(n.glyphs,s)),n.sprite=a(o(n.sprite,s))}return{style:n,layerDefinition:i,serviceUrl:r,styleUrl:s}},_loadStyle:function(e,t){var n=new a,r=e.style,s=r.sources;t&&t.tileServers&&Object.getOwnPropertyNames(s).forEach(i.hitch(this,function(i){var n=s[i],r=t.tileServers.map(function(i){return new G(W._getAbsolutePath(i,e.serviceUrl,t))});n.tiles=r,r.forEach(W._corsify)})),w.identityManager=u.id,r=new w.Style(r);var o=function(){r.off("load",o),r.off("error",l),e.style=r,n.resolve(e)},l=function(e){r.off("load",o),r.off("error",l),n.reject(e)};return r.on("load",o),r.on("error",l),n.promise},_getAbsolutePath:function(e,t){var i;if(t=t||"",t=c.urlToObject(t).path,/^https?:\/\//i.test(e))i=e;else{if(0===e.indexOf("//"))return location.protocol+e;t=t.replace(/(\/+\w+\.\w+)$/,""),/\/+$/.test(t)||(t+="/"),0===e.indexOf("/")?(e=e.substring(1),i=t+e):i=t+e}return c.normalize(i)},_corsify:function(e){e=e.valueOf();var t=d.defaults.io.corsEnabledServers;if(!c.canUseXhr(e)){var i=new n(e);i=(i.host+(i.port?":"+i.port:"")).toLowerCase(),-1===t.indexOf(i)&&t.push(i)}return e},_processMetadata:function(e,t,n){var r,s,o,a={},l=W._getAbsolutePath,h=W._configureStyle,c=W._corsify,u=n&&n.credential;return delete t._ssl,t.currentVersion?(r=t,s=e,o=l(t.defaultStyles,s),f({url:W._appendToken(o,u),content:{f:"json"},handleAs:"json"}).then(i.hitch(this,function(e){return h({style:e,layerDefinition:r,styleUrl:o,serviceUrl:s},n)}))):(a=t,o=e,t.sources.esri&&t.sources.esri.url?(s=c(l(t.sources.esri.url,o)),f({url:W._appendToken(s,u),content:{f:"json"},handleAs:"json"}).then(i.hitch(this,function(e){return h({style:a,layerDefinition:e,styleUrl:o,serviceUrl:s},n)}))):h({style:a}))}},K=t([],{constructor:function(){this._credentials=[]},addToken:function(e){if(!e||!e.url||!e.token)return!1;var t=this.getServiceRoot(e.url);this._credentials.push({rootUrl:t,token:e.token})},findCredential:function(e){var t=-1,i=this._credentials,n=this.getServiceRoot(e);return i.some(function(e,i){var r=e.rootUrl;return r===n?(t=i,!0):void 0}),t>-1?i[t]:null},getServiceRoot:function(e){var t=/(.+\/rest\/services\/.*\/?vectortileserver)/i,i=/(.+\/sharing\/.*)/i;return t.test(e)?e.match(t)[1].toLowerCase():i.test(e)?e.match(i)[1].toLowerCase():null},shareSameService:function(e,t){return e=this.getServiceRoot(e),t=this.getServiceRoot(t),e=e.substr(e.indexOf(":")),t=t.substr(t.indexOf(":")),e===t}});return y.ACCESS_TOKEN=null,y});