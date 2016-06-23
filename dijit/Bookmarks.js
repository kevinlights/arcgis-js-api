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

define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/keys","dojo/query","dojo/dom","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","dojo/window","dojo/on","dojo/dnd/Source","dojo/dnd/Avatar","dojo/i18n!../nls/jsapi","dijit/a11yclick","dijit/_WidgetBase","../kernel","../domUtils","../geometry/Extent","./BookmarkItem","../Evented"],function(e,o,t,i,s,r,n,a,d,h,k,m,c,l,u,_,p,B,b,f,x,v,g){var N=e([B,g],{declaredClass:"esri.dijit.Bookmarks",bookmarks:[],bookmarkDomNode:null,bookmarkTable:null,initBookmarks:null,editable:null,map:null,_oldGenerateText:null,_customGenerateText:!1,_LTR:!0,_dndSource:null,_inputBox:null,_label:null,_css:{esriBookmarks:"esriBookmarks",esriBookmarksRTL:"esriBookmarksRTL",esriBookmarkList:"esriBookmarkList",esriBookmarkTable:"esriBookmarkTable",esriBookmarkEditImage:"esriBookmarkEditImage",esriBookmarkRemoveImage:"esriBookmarkRemoveImage",esriBookmarkLabel:"esriBookmarkLabel",esriBookmarkItem:"esriBookmarkItem",esriBookmarkHighlight:"esriBookmarkHighlight",esriAddBookmark:"esriAddBookmark",esriBookmarkEditBox:"esriBookmarkEditBox"},_clickHandlers:[],_mouseOverHandlers:[],_mouseOutHandlers:[],_removeHandlers:[],_editHandlers:[],_dndHandlers:[],_eventMap:{click:!0,edit:!0,remove:!0},onClick:function(){},onEdit:function(){},onRemove:function(){},constructor:function(e,o){this.map=e.map,this.editable=e.editable,this.initBookmarks=e.bookmarks,delete e.bookmarks,this.bookmarkDomNode=d.create("div"),h.add(this.bookmarkDomNode,this._css.esriBookmarkList),this.bookmarkTable=d.create("div"),h.add(this.bookmarkTable,this._css.esriBookmarkTable),this.bookmarkDomNode.appendChild(this.bookmarkTable),o=a.byId(o),o.appendChild(this.bookmarkDomNode),this.srcNodeRef=o,h.add(this.srcNodeRef,this._css.esriBookmarks),this._LTR=this.isLeftToRight(),this._LTR||h.add(this.srcNodeRef,this._css.esriBookmarksRTL),this._dndSource=new l(this.bookmarkTable,{creator:this._avatarCreator,singular:!0,checkAcceptance:function(e,o){e.getItem(o[0].id);return this===e?!0:!1}}),this._dndSourceNodes=this._dndSource.getAllNodes(),this._dndHandlers.push(c(this._dndSource,"DndStart",t.hitch(this,function(e){e===this._dndSource&&(this._oldGenerateText=u.prototype._generateText,u.prototype._generateText=t.hitch(this,this._generateText),this._customGenerateText=!0,this._inputBox&&this._finishEdit())}))),this._dndHandlers.push(c(this._dndSource,"DndDrop",t.hitch(this,function(e){e===this._dndSource&&(this._syncBookmarksAfterReorder(),this.emit("reorder",this.bookmarks))}))),this._dndHandlers.push(c(this._dndSource,"DndCancel",t.hitch(this,function(){this._customGenerateText&&(u.prototype._generateText=this._oldGenerateText,this._customGenerateText=!1)}))),this._addInitialBookmarks()},destroy:function(){this.map=null,i.forEach(this._clickHandlers,function(e){o.disconnect(e)}),i.forEach(this._mouseOverHandlers,function(e){o.disconnect(e)}),i.forEach(this._mouseOutHandlers,function(e){o.disconnect(e)}),i.forEach(this._removeHandlers,function(e){o.disconnect(e)}),i.forEach(this._editHandlers,function(e){o.disconnect(e)}),d.destroy(this.bookmarkDomNode)},addBookmark:function(e){var i,s,r,a,k,c,l,u,B,b;"esri.dijit.BookmarkItem"===e.declaredClass?i=e:(s=new x(e.extent),i=new v({name:e.name,extent:s})),this.editable?(a=_.widgets.bookmarks,k=a.NLS_bookmark_edit,c=a.NLS_bookmark_remove,r=d.create("div",{innerHTML:'<div tabindex="0" role="button" class=\'esriBookmarkLabel\'>'+e.name+'</div><div tabindex="0" role="button" title=\''+c+"' class='esriBookmarkRemoveImage'><br/></div><div tabindex=\"0\" role=\"button\" title='"+k+"' class='esriBookmarkEditImage'><br/></div>"}),l=n(".esriBookmarkEditImage",r)[0],u=n(".esriBookmarkRemoveImage",r)[0],this._removeHandlers.push(o.connect(u,p,this,"_removeBookmark")),this._editHandlers.push(o.connect(l,p,this,"_editBookmarkLabel"))):r=d.create("div",{innerHTML:"<div tabindex=\"0\" class='esriBookmarkLabel'>"+e.name+"</div>"}),h.add(r,this._css.esriBookmarkItem),B="esri.geometry.Extent"===e.extent.declaredClass?e.extent:new x(e.extent),b=n(".esriBookmarkLabel",r)[0],this._clickHandlers.push(o.connect(b,p,t.hitch(this,"_onClickHandler",e))),this._mouseOverHandlers.push(o.connect(r,"onmouseover",t.hitch(this,function(){h.add(r,this._css.esriBookmarkHighlight)}))),this._mouseOutHandlers.push(o.connect(r,"onmouseout",t.hitch(this,function(){h.remove(r,this._css.esriBookmarkHighlight)}))),this.bookmarks.push(i),this._dndSource.insertNodes(!1,[r]),this._dndSourceNodes=this._dndSource.getAllNodes(),m.scrollIntoView(r),this._syncBookmarksAfterReorder()},removeBookmark:function(e){this._inputBox&&this._finishEdit();var o,t=n(".esriBookmarkLabel",this.bookmarkDomNode),s=i.filter(t,function(o){return o.innerHTML===e});for(i.forEach(s,function(e){e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)}),o=this.bookmarks.length-1;o>=0;o--)this.bookmarks[o].name===e&&this.bookmarks.splice(o,1);this.onRemove()},hide:function(){f.hide(this.bookmarkDomNode)},show:function(){f.show(this.bookmarkDomNode)},_addInitialBookmarks:function(){if(this.editable){var e=_.widgets.bookmarks,s=e.NLS_add_bookmark,r=d.create("div",{tabIndex:0,role:"button",innerHTML:"<div>"+s+"</div>"});h.add(r,this._css.esriBookmarkItem),h.add(r,this._css.esriAddBookmark),this._clickHandlers.push(o.connect(r,p,this,this._newBookmark)),this._mouseOverHandlers.push(o.connect(r,"onmouseover",t.hitch(this,function(){h.add(r,this._css.esriBookmarkHighlight)}))),this._mouseOutHandlers.push(o.connect(r,"onmouseout",t.hitch(this,function(){h.remove(r,this._css.esriBookmarkHighlight)}))),this.srcNodeRef.appendChild(r)}this.bookmarks=[],i.forEach(this.initBookmarks,function(e){this.addBookmark(e)},this)},_newBookmark:function(){var e,o,t,i,s,r,a,d,h,k,m,c,l=this.map,u=_.widgets.bookmarks,p=u.NLS_new_bookmark,B=l.extent;l.spatialReference._isWrappable()?(o=x.prototype._normalizeX(B.xmin,l.spatialReference._getInfo()).x,t=x.prototype._normalizeX(B.xmax,l.spatialReference._getInfo()).x,o>t?(d=l.spatialReference.isWebMercator(),i=d?20037508.342788905:180,s=d?-20037508.342788905:-180,Math.abs(o-i)>Math.abs(t-s)?(r=o,a=i):(r=s,a=t),c=new x(r,B.ymin,a,B.ymax,l.spatialReference)):c=new x(o,B.ymin,t,B.ymax,l.spatialReference)):c=B,h=new v({name:p,extent:c}),this.addBookmark(h),k=n(".esriBookmarkItem",this.bookmarkDomNode),m=k[k.length-1],e={target:{parentNode:null}},e.target.parentNode=m,this._editBookmarkLabel(e)},_removeBookmark:function(e){e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode),this.removeBookmark(e.target.parentNode.textContent)},_syncBookmarksAfterReorder:function(){var e=[],o=this._dndSource.getAllNodes();i.forEach(o,t.hitch(this,function(o){var t=this._dndSourceNodes.map(function(e,t){return e===o?t:void 0}).filter(isFinite)[0];e.push(this.bookmarks[t])})),this.bookmarks=e,this._dndSourceNodes=o},_generateText:function(){return this._dndSource&&this._dndSource.getSelectedNodes()[0]&&this._dndSource.getSelectedNodes()[0].firstChild.firstChild.innerHTML?this._dndSource.getSelectedNodes()[0].firstChild.firstChild.innerHTML:""},_editBookmarkLabel:function(e){this._inputBox&&this._finishEdit();var t,i,s,a,h=e.target.parentNode,m=k.position(h,!0),c=m.y;a=this._LTR?"<input type='text' class='esriBookmarkEditBox' style='z-index: 999; left:"+m.x+"px; top:"+c+"px;'/>":"<input type='text' class='esriBookmarkEditBox' style='z-index: 999; top:"+c+"px;'/>",t=d.create("div",{innerHTML:a}),this._inputBox=n("input",t)[0],this._label=n(".esriBookmarkLabel",h)[0],i=_.widgets.bookmarks,s=i.NLS_new_bookmark,this._inputBox.value=this._label.innerHTML===s?"":this._label.innerHTML,o.connect(this._inputBox,"onkeyup",this,function(e){switch(e.keyCode){case r.ENTER:this._finishEdit()}}),o.connect(this._inputBox,"onblur",this,"_finishEdit"),this.srcNodeRef.appendChild(t),this._inputBox.focus(),this._inputBox.select(),m=k.position(h,!0),this._LTR&&(this._inputBox.style.left=m.x+"px"),this._inputBox.style.top=m.y+"px"},_finishEdit:function(){var e,o,t;try{this._inputBox.parentNode.parentNode.removeChild(this._inputBox.parentNode)}catch(s){return}e=_.widgets.bookmarks,o=e.NLS_new_bookmark,this._label.innerHTML=""===this._inputBox.value?o:this._inputBox.value,t=n(".esriBookmarkLabel",this.bookmarkDomNode),i.forEach(this.bookmarks,function(e,o){e&&(e.name=t[o].innerHTML)}),this._inputBox=null,this.onEdit()},_avatarCreator:function(e,o){var t=d.create("div");return t.id=dojo.dnd.getUniqueId(),h.add(t,"dojoDndItem"),"avatar"!==o&&d.place(e,t),{node:t,data:e,type:"something"}},_onClickHandler:function(e){var o=e.extent;e.extent.declaredClass||(o=new x(e.extent)),this.map.setExtent(o),this.onClick()},toJson:function(){var e=[];return i.forEach(this.bookmarks,function(o){o&&e.push(o.toJson())}),e}});return s("extend-esri")&&t.setObject("dijit.Bookmarks",N,b),N});