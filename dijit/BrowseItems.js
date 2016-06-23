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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/_base/event","dojo/dom-class","dojo/dom-style","dojo/dom-attr","dojo/string","dojo/on","dojo/aspect","dojo/has","dojo/dom","dojo/dom-construct","dojo/mouse","dojo/topic","dojo/query","dojo/parser","dijit/registry","dijit/TooltipDialog","dijit/popup","dojo/promise/all","dojo/Deferred","dgrid/Grid","dgrid/extensions/Pagination","dgrid/extensions/DijitRegistry","dgrid/OnDemandGrid","dgrid/Selection","dgrid/selector","dgrid/Keyboard","dgrid/util/mouse","dgrid/util/touch","put-selector/put","dojo/store/Observable","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../arcgis/Portal","../Evented","../PluginTarget","dojo/i18n!../nls/jsapi","./_AppTemplateFiltersMixin","./_RefreshMixin","../kernel","../lang","../config","../geometry/webMercatorUtils","../tasks/GeometryService","../SpatialReference","dojo/NodeList-dom"],function(t,e,i,s,n,o,r,h,a,l,d,c,u,g,p,m,f,_,y,v,w,x,T,I,b,P,q,N,j,k,C,M,D,A,S,L,O,R,E,U,$,G,B,F,H,Q,W,V){var K=t(null,{idProperty:"id",constructor:function(e){t.safeMixin(this,e)},get:function(t,i){return R.PortalUtil.request(this.portalUrl+"content/items/"+t,i).then(function(t){return new R.PortalItem(e.mixin(t,{portal:this.portal}))})},getIdentity:function(t){return t[this.idProperty]},query:function(t,i){var s=e.isObject(t)?t:{q:t},n=null;if(i){if(s=e.mixin(s,{num:i.count,start:(i.start||0)+1}),i.sort&&i.sort.length){var o=i.sort[0];s=e.mixin(s,{sortField:encodeURIComponent("created"===o.attribute?"uploaded":o.attribute),sortOrder:o.descending?"desc":"asc"})}i.useExtent&&i.extent&&(s.bbox=i.extent),i.queryType&&"group"===i.queryType&&(n="group")}var r;return r="group"===n?this.portal.queryGroups(s,!0).then(function(t){return t.results.total=t.total,t.results}):this.portal.queryItems(s,!0).then(function(t){return t.results.total=t.total,t.results}),R.PortalResult(r)}}),z=t([S,L,O,U],{templateString:'<div><div class="top-bar"><div  class="esriFloatLeading instructions"><span class="messageLeft hide" data-dojo-attach-point="messageNodeLeft"></span><span class="messageRight hide" data-dojo-attach-point="messageNodeRight"></span><a tabIndex="-1" data-dojo-attach-point="helpLink" class="esriHelpIcon hide" title="${i18n.browseItems.learnMoreConfigurableApps}" href="#" target="_blank"></a></div><div id="${id}_search"class="searchBar esriFloatTrailing"><input tabIndex="1" placeholder="${i18n.browseItems.searchTitle}" class="esriSearchBox dijitTextBox" type="search"></div></div><div class="gallery"><div class="gallery-left  quiet-scroll"><ul class="filters"></ul></div><div class="templates gallery-right"><p id="${id}_filterTitle" class="filter-title hide" data-dojo-attach-point="filterDescription"></p><div id="${id}_grid"class="dgrid-autoheight quiet-scroll"></div></div><div  class="loaderWrap" data-dojo-attach-point="loaderWrap"></div><div  class="js-info-panel templateInfoPanel" data-dojo-attach-point="infoPanel"></div></div></div>',galleryTemplate:"<div style='opacity:1;' class='grid-item gallery-view'>${item:_formatThumbnail}${item:_formatItemTitle}"+'<p class="template-overlay" style="display:none;">${i18n.browseItems.selectDetails}</p></div>',infoPanelTemplate:'<div><div class="template-info-showing"><div class="thumbnail"><img src="${item:_formatInfoPanelImage}"></div><h4>${item.title}</h4><div class="template-info"><p class="quiet-scroll">${item.snippet}</p></div></div><div class="panel-actions"><button class="btn blue btn-main" id="on-next">${i18n.browseItems.configure}</button><button class="btn btn-cancel" id="close-panel">${i18n.common.close}</button></div><div>',_popupTemplate:'<div class="esriBrowsePopup quiet-scroll"><p>{summary}</p></div>',showInfoPanel:!0,isAutoClose:!0,showTooltip:!1,baseClass:"esriBrowseItemsCtr",i18n:$,postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.self?(this._portal=new R.Portal({url:this.portalUrl,self:this.self}),this._init(),this._portal.on("load",e.hitch(this,this._fetchData))):(this._portal=new R.Portal(this.portalUrl),this._portal.signIn().then(e.hitch(this,function(){this._init(),this._fetchData()})))},_init:function(){this._canSearchPublic=this.self?this.self.canSearchPublic:this._portal.canSearchPublic,this.query=e.mixin(this.query||{},{get:function(t){return this[t]&&this[t].length?"("+this[t].join(" OR ")+") ":""},toString:function(){return{q:this.get("groups")+this.get("tags")+this.get("persistentTypekeywords")+this.get("typekeywords")+this.get("types")+this.get("owners")+this.get("orgids")+this.get("custom")+(this.query||"")+(this.search||"")+' -type:"Attachment"'}}}),this.self?this.self.canSearchPublic=!0:this._portal.canSearchPublic=!0,this.galleryTemplate=this.plugIn&&this.plugIn.galleryTemplate||this.galleryTemplate,this.infoPanelTemplate=this.plugIn&&this.plugIn.infoPanelTemplate||this.infoPanelTemplate,this.helpLinkUrl=this.plugIn&&this.plugIn.helpLinkUrl||"",this.helpLinkUrl&&(h.set(this.helpLink,"href",this.helpLinkUrl),o.remove(this.helpLink,"hide")),f(".templates",this.domNode).addClass("fade"),f(".dgrid-footer",this.domNode).addClass("hide"),r.set(this.infoPanel,"display",this.showInfoPanel?"block":"none")},destroy:function(){this.inherited(arguments),this._grid&&this._grid.destroy(),this._img_connect&&(this._img_connect.remove(),this._img_connect_error.remove()),this._queryTimer&&clearTimeout(this._queryTimer),this._grid=this._portal=null},closeInfoPanel:function(){u.byId("close-panel").click()},_setItemQueryAttr:function(t){this.itemQuery=t},_setPluginAttr:function(t){this.addPlugin(t)},_setMessageAttr:function(t){this.set("messageRight",t)},_setMessageRightAttr:function(t){"string"==typeof t?h.set(this.messageNodeRight,"innerHTML",t):t instanceof HTMLElement&&g.place(t,this.messageNodeRight),o.remove(this.messageNodeRight,"hide")},_setMessageLeftAttr:function(t){"string"==typeof t?h.set(this.messageNodeLeft,"innerHTML",t):t instanceof HTMLElement&&g.place(t,this.messageNodeLeft),o.remove(this.messageNodeLeft,"hide")},_setDisabledAttr:function(t){var e=y.findWidgets(this.domNode).concat(y.findWidgets(this._content));i.forEach(e,function(e){e.set("disabled",t)}),o[t?"add":"remove"](this._interval.domNode,"dijitTextBoxDisabled")},_setSortAttr:function(t){this.sortAttribute=t},_setSortDescendingAttr:function(t){this.sortDescending=t},_getSelectionAttr:function(){var t=this._grid.selection;for(var e in t)if(t.hasOwnProperty(e))break;return e&&this._grid.row(e).data},_setGalleryTemplateAttr:function(t){H.isDefined(t)&&(this.galleryTemplate=t)},_setFormatThumbnailAttr:function(t){H.isDefined(t)&&"function"==typeof t&&(this._formatThumbnail=t)},_setFormatItemTitleAttr:function(t){H.isDefined(t)&&"function"==typeof t&&(this._formatItemTitle=t)},_setRowsPerPageAttr:function(t){this._set("rowsPerPage",t)},_setPagingLinksAttr:function(t){this._set("pagingLinks",t)},_getQueryAttr:function(){return this.query},_setQueryAttr:function(t){this._set("query",t),this._grid&&this._grid.set("query",t.toString())},_setExtentAttr:function(t){t&&this._set("extent",this._extentToString(t))},_setUseExtentAttr:function(t){this._set("useExtent",t)},_setQueryTypeAttr:function(t){this._set("queryType",t)},_setFetchTimeoutAttr:function(t){this._set("fetchTimeout",t)},_setShowInfoPanelAttr:function(t){this._set("showInfoPanel",t)},_setSelectionModeAttr:function(t){-1===i.indexOf(["extended","toggle","multiple","single","none"],t)&&(console.log("Incorrect Value provided for selectionMode. It is one of the following: extended, toggle, multiple, single, none"),t="single"),this._set("selectionMode",t)},_validate:function(){var t=this.get("selection");return!!t},reset:function(){if(f(".esriSearchBox",u.byId(this.id+"_search")).forEach(function(t){h.set(t,"value","")}),this.query.search="",this.plugIn.filters){var t=[],e=[],s=[],n=[];f("li.active",this.domNode).forEach(function(r){o.remove(r,"active");var h=r.childNodes[0].id,a=this.plugIn.filters[h],l=i.map(a.tags,function(t){return'tags:"'+t+'"'},this),d=i.map(a.owners,function(t){return'owner:"'+t+'"'},this),c=i.map(a.orgids,function(t){return'orgid:"'+t+'"'},this),u=i.map(a.typekeywords,function(t){return'typekeywords:"'+t+'"'},this);t.push(l),s.push(d),n.push(c),e.push(u)},this),this.query.tags=i.filter(this.query.tags,function(e){return-1!==i.indexOf(t,e)}),this.query.owners=i.filter(this.query.owners,function(t){return-1!==i.indexOf(s,t)}),this.query.orgids=i.filter(this.query.orgids,function(t){return-1!==i.indexOf(n,t)}),this.query.typekeywords=i.filter(this.query.typekeywords,function(t){return-1!==i.indexOf(e,t)}),u.byId("all").click()}},_showPopup:function(t){if(!this._isInsideTooltipDialog){this._closePopup();var i=this._grid.row(t),s=f("img",i.element)[0],n={summary:i.data.snippet};n&&n.summary&&(this._tooltip=new v({content:e.replace(this._popupTemplate,n),onMouseEnter:e.hitch(this,function(){this._isInsideTooltipDialog=!0}),onMouseLeave:e.hitch(this,function(){this._isInsideTooltipDialog=!1,this._closePopup()})}),w.open({className:"esriBrowsePopupCtr",popup:this._tooltip,around:s,orient:["after-centered","before-centered"]}),this._onCloseConnect=f(".dijitDialogCloseIcon",this._tooltip.domNode).on("click",e.hitch(this,function(t){t.preventDefault(),this._closePopup()})))}},_closePopup:function(){this._tooltip&&(this._onCloseConnect&&this._onCloseConnect.remove(),w.close(this._tooltip),this._tooltip.destroyRecursive(),this._tooltip=this._onCloseConnect=void 0)},_clearQueryTimeout:function(){clearTimeout(this._queryTimer),this._queryTimer=null},_clearClosePanelTimeout:function(){clearTimeout(this._panelClosing),this._panelClosing=null,i.forEach(this._panelClickHandles,"item.remove();"),g.empty(this.infoPanel)},_createGrid:function(){var s=t([I,b,N,B,P]),d=new A(new K({portal:this._portal})),c=this.query,_=e.hitch(this,function(t){t.snippet=t.snippet||"";var e=D("div"),i=a.substitute(this.galleryTemplate,{item:t,i18n:this.i18n},null,this);return g.place(i,e),e}),y={};this.get("useExtent")&&(y.extent=this.get("extent"),y.useExtent=this.get("useExtent")),this.get("queryType")&&(y.queryType=this.get("queryType")),this._grid=new s({store:d,query:c.toString(),selectionMode:this.selectionMode||"single",pagingLinks:this.get("pagingLinks")||2,rowsPerPage:this.plugIn&&this.plugIn.rowsPerPage||this.get("itemsPerPage")||6,loadingMessage:"Loading items...",showLoadingMessage:!1,renderRow:_,noDataMessage:this.i18n.gallery.noItemsToDisplay,deselectOnRefresh:!("multiple"===this.selectionMode||"extended"===this.selectionMode||"toggle"===this.selectionMode),sort:[{attribute:this.sortAttribute||"title",descending:this.sortDescending||!1}],queryOptions:y},this.id+"_grid"),this._grid.startup(),this.own(l(this.domNode,"click",e.hitch(this,function(){u.byId("close-panel")&&this.isAutoClose&&u.byId("close-panel").click()})),this._grid.on(C.enterRow,e.hitch(this,function(t){o.contains(this.domNode,"showing")===!1&&this.showInfoPanel&&this._showOverlay(!0,t),this.showTooltip&&!this.showInfoPanel&&this._showPopup(t)})),this._grid.on(C.leaveRow,e.hitch(this,function(t){this._showOverlay(!1,t),this.showTooltip&&!this.showInfoPanel&&this._closePopup(t)})),this._grid.on(".dgrid-row:click",e.hitch(this,function(t){var s,d;o.contains(this.domNode,"showing")===!1&&this.showInfoPanel&&(t.preventDefault(),n.stop(t),this._clearClosePanelTimeout(),d=this.get("selection"),this._showOverlay(!1,t),this.showInfoPanel&&this.infoPanelTemplate?g.place(a.substitute(this.infoPanelTemplate,{item:d,i18n:this.i18n},function(t){return H.isDefined(t)?t:""},this),this.infoPanel):r.set(this.infoPanel,"display","none"),o.add(this.domNode,"showing"),this._panelClickHandles=[f(".template-info-showing .thumbnail img",this.domNode).on("error",e.hitch(this,function(t){h.set(t.target,"src",d.thumbnailUrl)})),f(".panel-actions .btn").on("click",e.hitch(this,function(t){t.preventDefault(),n.stop(t),"close-panel"===t.target.id?(o.remove(this.domNode,"showing"),this._panelClosing=setTimeout(e.hitch(this,function(){i.forEach(s,"item.remove();"),g.empty(this.infoPanel)},250))):m.publish("/esri/browseitems/close",t.target.id,this.get("selection"))})),f(".js-info-panel",this.domNode).on("click",e.hitch(this,function(t){this.isAutoClose&&(t.preventDefault(),n.stop(t))})),l(f(".dgrid-footer,.dgrid-header",this._grid.domNode),p.leave,e.hitch(this,function(){this.showTooltip&&!this.showInfoPanel&&this._closePopup()}))])})),this._grid.on("dgrid-refresh-complete",e.hitch(this,function(){f(".templates",this.domNode).removeClass("fade"),f(".loaderWrap",this.domNode).addClass("hide"),f(".dgrid-footer",this.domNode)[this._grid._total<=this._grid.rowsPerPage?"addClass":"removeClass"]("hide"),this.showTooltip&&!this.showInfoPanel&&this._closePopup()})),this._grid.on("refresh",e.hitch(this,function(){this.showTooltip&&!this.showInfoPanel&&this._closePopup(),this._img_connect&&(this._img_connect.remove(),this._img_connect_error.remove(),this._img_connect=null,this._img_connect_error=null),this._img_connect=f(".grid-item-thumb",this._grid.domNode).on("load",e.hitch(this,function(t){var e=this._grid.row(t);e&&e.element&&f(".grid-item",e.element).addClass("fadeIn").style("opacity","1")})),this._img_connect_error=f(".grid-item-thumb",this._grid.domNode).on("error",e.hitch(this,function(t){h.set(t.target,"src",this._portal.staticImagesUrl+"/desktopapp.png")}))})),l(u.byId(this.id+"_search"),"keyup",e.hitch(this,function(t){t.preventDefault(),this._clearQueryTimeout(),this._queryTimer=setTimeout(e.hitch(this,function(){this.query.search=h.get(t.target,"value"),this._fetchItems(this.query).then(e.hitch(this,function(){this._clearQueryTimeout()}))}),this.searchKeypressDelay||450)})),l(u.byId(this.id+"_search"),"search",e.hitch(this,function(t){this._queryTimer||(t.preventDefault(),this.query.search=h.get(t.target,"value"),this._fetchItems(this.query))})),this.watch("extent",e.hitch(this,function(){this._grid.queryOptions.extent=this.get("extent"),this._grid.queryOptions.useExtent=this.get("useExtent"),this._grid.query.bbox=this._grid.queryOptions.useExtent?this._grid.queryOptions.extent:"",this._grid.refresh()})),this.watch("useExtent",e.hitch(this,function(t,e,i){this._grid.queryOptions.extent=this.get("extent"),this._grid.queryOptions.useExtent=i,this._grid.query.bbox=this._grid.queryOptions.useExtent?this._grid.queryOptions.extent:"",this._grid.refresh()}))),this.showInfoPanel||("single"===this._grid.selectionMode?this.own(this._grid.on("dgrid-select,dgrid-deselect",e.hitch(this,function(){var t={selection:this.get("selection")};this.emit("select-change",t)}))):-1!==i.indexOf(["toggle","multiple","extended"],this._grid.selectionMode)&&this.own(this._grid.on("dgrid-select,dgrid-deselect",e.hitch(this,function(t){var e,i,s=t.grid.selection,n=[];for(e in s)s[e]&&n.push(this._grid.row(e).data);i={selection:n},this.emit("select-change",i)})))),this.emit("grid-ready",{grid:this._grid,ready:!0})},_createFilters:function(){if(this.plugIn&&this.plugIn.filters){var t,s,n,r=this.plugIn.filters,a=this.plugIn.filterStrings,d=f(".filters",this.domNode)[0];for(s in r)t=g.create("li",{"class":"all"===s?"active":"",innerHTML:"<a id='"+s+"'  href='#'>"+a[s].title+"</a>"},d);this.own(l(d,"li a:click",e.hitch(this,function(t){t.preventDefault();var s=t.target;f(".active",d).removeClass("active"),o.add(s.parentNode,"active"),f(".templates",this.domNode).addClass("fade"),setTimeout(e.hitch(this,function(){o["all"===s.id?"add":"remove"](this.filterDescription,"hide"),h.set(this.filterDescription,"innerHTML",a[s.id].description||"")}),225);var l=e.mixin({},r[s.id]||{});this.query.tags=i.map(l.tags||[],function(t){return'tags:"'+t+'"'}),this.query.owners=i.map(l.owners,function(t){return'owner:"'+t+'"'}),this.query.orgids=i.map(l.orgids,function(t){return'orgid:"'+t+'"'}),this.query.typekeywords=(n||[]).concat(i.map(l.typekeywords||[],function(t){return'typekeywords:"'+t+'"'})),this._fetchItems(this.query)}))),o.add(this.domNode,"filters")}else o.add(this.domNode,"nofilters"+(this.plugIn&&this.plugIn.extraClasses?" "+this.plugIn.extraClasses.join(" "):""))},_showOverlay:function(t,e){var i=this._grid.row(e);i&&f(".template-overlay",i.element).style("display",t?"":"none")},_fetchData:function(){return this._user=this._portal.getPortalUser(),this.plugIn&&this.plugIn.fetchData?this.plugIn.fetchData():this._fetchItems(this.itemQuery)},_fetchItems:function(t){var i={sort:[{attribute:this.sortAttribute||"title",descending:this.sortDescending||!1}]},s=new T;return this.get("useExtent")&&(i.extent=this.get("extent"),i.useExtent=this.get("useExtent")),this.get("queryType")&&(i.queryType=this.get("queryType")),f(".templates",this.domNode).addClass("fade"),f(".dgrid-footer",this.domNode).addClass("hide"),f(".loaderWrap",this.domNode).removeClass("hide"),setTimeout(e.hitch(this,function(){this.query=e.mixin(this.query,t),this._grid?this._grid.set("query",this.query.toString(),i):(this._createFilters(),this._createGrid()),s.resolve(this._grid)}),60),s},_formatThumbnail:function(t){var e=t.thumbnailUrl||this._portal.staticImagesUrl+"/desktopapp.png";return t.thumbnailUrl=e,"<img class='grid-item-thumb' width='187px' height='125px' alt='' src='"+e+"'>"},_formatInfoPanelImage:function(t){var e=t.screenshots&&t.screenshots.length?t.screenshots[0]:null;return e?t.itemUrl+"/info/"+e:t.thumbnailUrl},_formatItemTitle:function(t){return"<h5>"+(t.title||t.name||"<No Title>")+"</h5>"},clear:function(){this._grid.clearSelection()},doProject:function(t,e){var i,s,n,o,r,h=[102113,102100,3857],a=new T;return n=function(t,e){!(t&&t.length>0&&t[0]&&"extent"==t[0].type)||isNaN(t[0].xmin)||isNaN(t[0].ymin)||isNaN(t[0].xmax)||isNaN(t[0].ymax)?t&&t.length>0&&t[0]&&"point"==t[0].type&&!isNaN(t[0].x)&&!isNaN(t[0].y)&&a.resolve(t,e):a.resolve(t,e)},null!=t.spatialReference.wkid&&4326==t.spatialReference.wkid&&null!=e.wkid&&this.contains(h,e.wkid)?(t.ymin=Math.max(t.ymin,-89.99),t.ymax=Math.min(t.ymax,89.99),i=W.geographicToWebMercator(t),s=i.spatialReference._getInfo(),s&&i.xmin>i.xmax&&(o=s.valid[1]-i.xmin,r=i.xmax-s.valid[0],o>r?i.xmax=s.valid[1]+r:i.xmin=s.valid[0]-o),i.spatialReference.wkid=e.wkid,a.resolve([i])):null!=t.spatialReference.wkid&&this.contains(h,t.spatialReference.wkid)&&null!=e.wkid&&4326==e.wkid?(i=W.webMercatorToGeographic(t),s=i.spatialReference._getInfo(),s&&i.xmin>i.xmax&&(o=s.valid[1]-i.xmin,r=i.xmax-s.valid[0],o>r?i.xmax=s.valid[1]+r:i.xmin=s.valid[0]-o),a.resolve([i])):(this.geometryService||(this.geometryService=new V(Q.defaults.geometryService)),this.geometryService.project([t],e,n)),a},contains:function(t,e){for(var i=t.length;i--;)if(t[i]===e)return!0;return!1},_extentToGCS:function(t){return t=t.shiftCentralMeridian(!0),W.webMercatorToGeographic(t)},_extentToString:function(t){var e="";return null!=t&&(t=this._extentToGCS(t),e=this._roundValue(t.xmin,1e4)+","+this._roundValue(t.ymin,1e4)+","+this._roundValue(t.xmax,1e4)+","+this._roundValue(t.ymax,1e4)),e},_roundValue:function(t,e){return Math.round(t*e)/e}});return c("extend-esri")&&e.setObject("dijit.BrowseItems",z,F),z});