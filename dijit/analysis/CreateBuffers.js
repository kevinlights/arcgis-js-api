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

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dojox/form/CheckedMultiSelect","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./utils","./CreditEstimator","../CalculateField","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CreateBuffers.html"],function(e,t,i,s,n,a,o,l,h,r,d,c,u,p,y,_,f,g,m,b,T,v,w,L,S,D,C,A,R,F,x,k,N,E,O,P,j,I,B,U,G){var M=i([f,g,m,b,T,O,P],{declaredClass:"esri.dijit.analysis.CreateBuffers",templateString:G,widgetsInTemplate:!0,inputLayer:null,inputType:null,outputLayerName:null,bufferDistance:null,units:null,i18n:null,toolName:"CreateBuffers",helpFileName:"CreateBuffers",resultParameter:"BufferLayer",constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),n.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,U.bufferTool)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),this.outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this._bigdataUX=[this._methodLabelRow,this._methodValueRow,this._dissolveLabelRow,this._dissolveValueRow,this._selectDisFieldsLabelRow,this._selectDisFieldsRow,this._statsRowLabel,this._allowMultiPartRow,this._afterStatsRow,this._selectDataStore,this._datastoreLabelRow],this._standardUX=[this._optionsRow,this._sizeHelp],this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_toUpperFirstLetter:function(e){return e.slice(0,1).toUpperCase()+e.slice(1)},_buildJobParams:function(){var e,t={};return t.inputLayer=o.toJson(j.constructAnalysisInputLyrObj(this.inputLayer),this.showGeoAnalyticsParams),this.showGeoAnalyticsParams?("attribute"===this.bufferDistType||"attributexp"===this.bufferDistType?t.field=this._bufFieldOutput.get("value"):t.distance=this.showGeoAnalyticsParams?this.bufferDistance[0]:this.bufferDistance,t.distanceUnit=this._bufferUnits.get("value"),t.method=this._methodSelect.get("value"),t.dissolveOption=this._dissolveSelect.get("value"),("ALL"===t.dissolveOption||"LIST"===t.dissolveOption)&&(t.multipart=this._allowMultiPartCheck.get("checked"),"LIST"===t.dissolveOption&&(t.dissolveFields=this._dissolveFieldsSelect.get("value").toString(),t.summaryFields=o.toJson(this.get("summaryFields"))))):(t.dissolveType=this._DissolveType&&"dissolve"===this._DissolveType?"Dissolve":"None","attribute"===this.bufferDistType?t.field=this._bufferDistAttribute.get("value"):t.distances=o.toJson(this.bufferDistance),t.units=this._bufferUnits.get("value"),this.bufferDistance.length&&(this._RingType||(this._RingType="rings"),t.ringType="rings"===this._RingType?"Rings":"Disks"),("esriGeometryPolyline"===this.inputLayer.geometryType||"esriGeometryPolygon"===this.inputLayer.geometryType)&&(t.sideType="esriGeometryPolyline"===this.inputLayer.geometryType?this._SideType&&"left"===this._SideType?"Left":this._SideType&&"right"===this._SideType?"Right":"Full":this._SideType&&"outside"===this._SideType?"Outside":"Full",t.endType=this._EndType&&"flat"===this._EndType?"Flat":"Round")),this.returnFeatureCollection||(t.OutputName=o.toJson({serviceProperties:{name:this.outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.context=o.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),t.context=o.toJson(e)),t},_handleSaveBtnClick:function(){var e,t={},i={};this._form.validate()&&(t=this._buildJobParams(),console.log(t),i.jobParams=t,e=this.showGeoAnalyticsParams?t.distance||t.field:t.distances||t.field,i.itemParams={description:r.substitute(this.i18n.itemDescription,{layername:this.inputLayer.name,distance_field:e,units:t.units||t.distanceUnit}),tags:r.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(i.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(this.resultParameter="output"),this.showGeoAnalyticsParams&&this._datastoreSelect&&(i.isSpatioTemporalDataStore="spatialtemporal"===this._datastoreSelect.get("value")),this.execute(i))},_handleLayerChange:function(){},_handleRadiusTypeChange:function(e){this.bufferDistType=e,y.remove(this._Distance,"selected"),y.remove(this._Attribute,"selected"),y.remove(this._AttributeExp,"selected");var t=this._bufferDist.get("value").split(" ");"attribute"===e?(d.set(this._bufDistRow,"display","table-row"),d.set(this._bufFielExpRow,"display","none"),d.set(this._bufferDistAttribute.domNode,"display","block"),d.set(this._bufferDist.domNode,"display","none"),d.set(this._sizeHelpRow,"display","none"),d.set(this.ringTypes,"display","none"),"polygon"===this.inputType?(d.set(this.polygonTypes,"display","block"),d.set(this.sideTypes,"display","none"),d.set(this.endTypes,"display","none")):"line"===this.inputType&&(d.set(this.sideTypes,"display","block"),d.set(this.endTypes,"display","block"),d.set(this.polygonTypes,"display","none")),this.showGeoAnalyticsParams&&(d.set(this._unitsTd,"display","none"),d.set(this._unitsTd,"width","0"),d.set(this._attrTd,"width","100%")),y.add(this._Attribute,"selected")):"distance"===e?(d.set(this._bufFielExpRow,"display","none"),d.set(this._bufDistRow,"display","table-row"),d.set(this._bufferDistAttribute.domNode,"display","none"),d.set(this._bufferDist.domNode,"display","block"),d.set(this._sizeHelpRow,"display","table-row"),y.add(this._Distance,"selected"),t.length>1?(d.set(this.ringTypes,"display","block"),d.set(this.sideTypes,"display","none"),d.set(this.endTypes,"display","none"),d.set(this.polygonTypes,"display","none")):"polygon"===this.inputType?(d.set(this.ringTypes,"display","none"),d.set(this.sideTypes,"display","none"),d.set(this.endTypes,"display","none"),d.set(this.polygonTypes,"display","block")):"line"===this.inputType&&(d.set(this.ringTypes,"display","none"),d.set(this.sideTypes,"display","block"),d.set(this.endTypes,"display","block"),d.set(this.polygonTypes,"display","none")),this.showGeoAnalyticsParams&&(d.set(this._unitsTd,"display","table-cell"),d.set(this._unitsTd,"width","55%"),d.set(this._attrTd,"width","45%"))):"attributexp"===e&&this.showGeoAnalyticsParams&&(d.set(this._bufDistRow,"display","none"),d.set(this._bufFielExpRow,"display","table-row"),y.add(this._AttributeExp,"selected"))},_handleDissolveTypeChange:function(e){this._DissolveType=e,y.remove(this._Overlap,"selected"),y.remove(this._Dissolve,"selected"),y.add("none"===e?this._Overlap:this._Dissolve,"selected")},_handleRingTypeChange:function(e){this._RingType=e,y.remove(this._Rings,"selected"),y.remove(this._Disks,"selected"),y.add("rings"===e?this._Rings:this._Disks,"selected")},_handlePolygonTypeChange:function(e){this._SideType=e,y.remove(this._Include,"selected"),y.remove(this._Exclude,"selected"),y.add("full"===e?this._Include:this._Exclude,"selected")},_handleSideTypeChange:function(e,t){this._SideType=t,y.remove(this._Around,"selected"),y.remove(this._Left,"selected"),y.remove(this._Right,"selected"),y.add(e,"selected")},_handleEndTypeChange:function(e){this._EndType=e,y.remove(this._Round,"selected"),y.remove(this._Flat,"selected"),y.add("round"===e?this._Round:this._Flat,"selected")},_handleOptionsBtnClick:function(){y.contains(this._optionsDiv,"disabled")||(y.contains(this._optionsDiv,"optionsClose")?(y.remove(this._optionsDiv,"optionsClose"),y.add(this._optionsDiv,"optionsOpen")):y.contains(this._optionsDiv,"optionsOpen")&&(y.remove(this._optionsDiv,"optionsOpen"),y.add(this._optionsDiv,"optionsClose")))},_handleDistanceChange:function(){var e=s.trim(this._bufferDist.get("value")).split(" "),t=[];e.length>1?(d.set(this.ringTypes,"display","block"),d.set(this.sideTypes,"display","none"),d.set(this.endTypes,"display","none"),d.set(this.polygonTypes,"display","none")):("line"===this.inputType?(d.set(this.sideTypes,"display","block"),d.set(this.endTypes,"display","block")):"polygon"===this.inputType&&d.set(this.polygonTypes,"display","block"),d.set(this.ringTypes,"display","none")),n.forEach(e,function(e){t.push(_.parse(e))}),this.bufferDistance=t},_handleShowCreditsClick:function(e){e.preventDefault();var t={};this._form.validate()&&(t=this._buildJobParams(),console.log(t),this.getCreditsEstimate(this.toolName,t).then(s.hitch(this,function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_save:function(){},_buildUI:function(){var e=!0;j.initHelpLinks(this.domNode,this.showHelp),this.get("showSelectAnalysisLayer")&&(!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),j.populateAnalysisLayers(this,"inputLayer","inputLayers")),j.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this.outputLayerInput.set("value",this.outputLayerName),e=!1),this.inputLayer?this._updateAnalysisLayerUI(e):this.showGeoAnalyticsParams&&this._expBtn.set("disabled",!0),this._bufferDist.set("validator",s.hitch(this,this.validateDistance)),d.set(this._chooseFolderRow,"display",this.showSelectFolder===!0?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,function(e){this.folderStore=e,j.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),d.set(this._chooseExtentDiv,"display",this.showChooseExtent===!0?"inline-block":"none"),d.set(this._showCreditsLink,"display",this.showCredits===!0?"block":"none"),j.updateDisplay(this._standardUX,!this.get("showGeoAnalyticsParams"),"table-row"),j.updateDisplay(this._bigdataUX,this.get("showGeoAnalyticsParams"),"table-row"),this.showGeoAnalyticsParams?(c.set(this._bufDefLabel,"innerHTML",this.i18n.bufferDefineBd),c.set(this._bufTypeLabel,"innerHTML",this.i18n.bufferTypeBd),c.set(this._analysisFieldHelpLink,"esriHelpTopic","BufferType"),d.set(this._AttributeExp,"display","block"),c.set(this.bufTypeTd,"colspan","3"),d.set(this._dissolveFieldsSelect.selectNode,"width","90%"),this._handleDissolveSelectChange(this._dissolveSelect.get("value")),c.set(this._nauticalMilesOption,"value","Nautical Miles"),y.replace(this._Distance,"esriLeadingMargin1","esriLeadingMargin4")):(c.set(this.bufTypeTd,"colspan","2"),d.set(this._AttributeExp,"display","none"),c.set(this._resultNumLabel,"innerHTML",this.i18n.threeLabel)),this._loadConnections()},_updateAnalysisLayerUI:function(e){if(this.inputLayer){c.set(this._bufferToolDescription,"innerHTML",r.substitute(this.i18n.bufferDefine,{layername:this.inputLayer.name})),e&&(this.outputLayerName=r.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),d.set(this._bufferDistAttribute.domNode,"height","auto"),this._bufferDistAttribute.removeOption(this._bufferDistAttribute.getOptions());var i=[];n.forEach(this.inputLayer.fields,function(e){("esriFieldTypeDouble"===e.type||"esriFieldTypeInteger"===e.type||"esriFieldTypeSmallInteger"===e.type||"esriFieldTypeSingle"===e.type)&&i.push({value:e.name,label:E.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})},this),this._bufferDistAttribute.addOption(i),c.set(this._bufferOptionsHelpLink,"esriHelpTopic","polygon"===this.inputType?"OptionPoly":"line"===this.inputType?"OptionLine":"OptionPoint"),"line"===this.inputType?(d.set(this.sideTypes,"display","block"),d.set(this.endTypes,"display","block")):"polygon"===this.inputType&&d.set(this.polygonTypes,"display","block"),this.showGeoAnalyticsParams&&(this._expBtn.set("disabled",!1),this._removeStatsRows(),this._createStatsRow(),this._calcField||(this._calcField=new B({layer:this.inputLayer,field:this.i18n.bufField,baseClass:"esriBufFieldExp",css:{base:"esriBufFieldExp",addButton:"btn calcite primary tiny",closeButton:"btn calcite cancel tiny"},helperType:"numeric",showHeader:!1,calculateLabel:this.i18n.add},this._expressionCtr),this._calcField.startup(),d.set(this._calcField._validateBtn.domNode,"display","none"),this._calcField._handleHelperTypeChange("value",null,{functionType:"NumType"}),this._aspectHandle=t.around(this._calcField,"_handleAddButtonClick",s.hitch(this,function(){return s.hitch(this,function(){var e=this._calcField.get("expression")[0];this._bufFieldOutput.set("value","= "+e.sqlExpression),this._exprDialog.hide()})})),this._calcField.on("close",s.hitch(this,function(){this._exprDialog.hide()})),this._handleDissolveSelectChange(this._dissolveSelect.get("value"))),this.set("attributes",{selectWidget:this._dissolveFieldsSelect,inputLayer:this.inputLayer,allowStringType:!0,allowSelectLabel:!1}))}this.outputLayerName&&this.outputLayerInput.set("value",this.outputLayerName),!this.bufferDistance||e?(this.bufferDistance=[],this.bufferDistance.push(this._bufferDist.get("value"))):this._bufferDist.set("value",this.bufferDistance.toString().replace(/,/g," ")),this.units&&this._bufferUnits.set("value",this.units)},_handleAnalysisLayerChange:function(e){var t;"browse"===e?this._browsedlg.show():"browselayers"===e?(this.showGeoAnalyticsParams&&(t=this._browseLyrsdlg.browseItems.get("query"),t.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",t)),this._browseLyrsdlg.show()):(this.inputLayer=this.inputLayers[e],this._updateAnalysisLayerUI(!0))},validateDistance:function(){var e,t,i,a=this,o=[];return this._handleDistanceChange(),e=s.trim(this._bufferDist.get("value")).split(" "),0===e.length?!1:(n.forEach(e,function(e){return e=_.parse(e),isNaN(e)?(o.push(0),!1):(t=_.format(e,{locale:"root"}),E.isDefined(t)?E.isDefined(t)||(t=_.format(e,{locale:"en-us"})):t=_.format(e,{locale:"en"}),E.isDefined(t)&&(i=s.trim(t).match(/\D/g)),void(i&&n.forEach(i,function(e){o.push("."===e||","===e?1:"-"===e&&"polygon"===a.inputType?1:0)})))}),-1!==n.indexOf(o,0)?!1:!0)},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1)),a.connect(this._Distance,"onclick",s.hitch(this,"_handleRadiusTypeChange","distance")),a.connect(this._Attribute,"onclick",s.hitch(this,"_handleRadiusTypeChange","attribute")),a.connect(this._AttributeExp,"onclick",s.hitch(this,"_handleRadiusTypeChange","attributexp")),a.connect(this._Overlap,"onclick",s.hitch(this,"_handleDissolveTypeChange","none")),a.connect(this._Dissolve,"onclick",s.hitch(this,"_handleDissolveTypeChange","dissolve")),a.connect(this._Include,"onclick",s.hitch(this,"_handlePolygonTypeChange","full")),a.connect(this._Exclude,"onclick",s.hitch(this,"_handlePolygonTypeChange","outside")),a.connect(this._Rings,"onclick",s.hitch(this,"_handleRingTypeChange","rings")),a.connect(this._Disks,"onclick",s.hitch(this,"_handleRingTypeChange","disks")),a.connect(this._Around,"onclick",s.hitch(this,"_handleSideTypeChange",this._Around,"full")),a.connect(this._Left,"onclick",s.hitch(this,"_handleSideTypeChange",this._Left,"left")),a.connect(this._Right,"onclick",s.hitch(this,"_handleSideTypeChange",this._Right,"right")),a.connect(this._Round,"onclick",s.hitch(this,"_handleEndTypeChange","round")),a.connect(this._Flat,"onclick",s.hitch(this,"_handleEndTypeChange","flat"))},_handleBrowseItemsSelect:function(e){e&&e.selection&&j.addAnalysisReadyLayer({item:e.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this}).always(s.hitch(this,this._updateAnalysisLayerUI,!0))},_handleExpBtnClick:function(){this._calcField.reset(),this._exprDialog.show()},_handleDissolveSelectChange:function(e){this._allowMultiPartCheck.set("disabled","NONE"===e),y.toggle(this._allowMultiPartLabel,"esriSelectLabel","NONE"!==e),y.toggle(this._allowMultiPartLabel,"esriAnalysisTextDisabled","NONE"===e),d.set(this._selectDisFieldsLabelRow,"display","LIST"===e?"table-row":"none"),d.set(this._selectDisFieldsRow,"display","LIST"===e?"table-row":"none"),d.set(this._statsRowLabel,"display","NONE"!==e?"table-row":"none"),d.set(this._afterStatsRow,"display","NONE"!==e?"table-row":"none"),this._statsRows&&this._statsRows.length>0&&j.updateDisplay(this._statsRows,"NONE"!==e,"table-row")},_createStatsRow:function(){var t,i,n,o,l,h,r;return t=u.create("tr",null,this._afterStatsRow,"before"),n=u.create("td",{style:{width:"35%",maxWidth:"100px"}},t),i=u.create("td",{style:{width:"250%"}},t),o=new D({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},u.create("select",null,n)),this.set("attributes",{selectWidget:o,inputLayer:this.inputLayer}),l=new D({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},u.create("select",null,i)),this.set("statistics",{selectWidget:l}),o.set("statisticSelect",l),a.connect(o,"onChange",this._handleAttrSelectChange),r=u.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},t),h=u.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"<img src='"+e.toUrl("./images/close.gif")+"' border='0''/>"},r),a.connect(h,"onclick",s.hitch(this,this._removeStatsRow,t)),this._statsRows.push(t),l.set("attributeSelect",o),l.set("removeTd",r),l.set("isnewRowAdded",!1),l.set("referenceWidget",this),l.watch("value",this._handleStatsValueUpdate),this._currentStatsSelect=l,this._currentAttrSelect=o,!0},_removeStatsRow:function(e){n.forEach(v.findWidgets(e),function(e){e.destroyRecursive()}),u.destroy(e)},_removeStatsRows:function(){n.forEach(this._statsRows,this._removeStatsRow,this),this._statsRows=[]},_handleAttrSelectChange:function(e){var t,i,n;"0"!==e&&(t=this.get("statisticSelect"),"0"!==t.get("value")&&(t.get("isnewRowAdded")||(i=t.get("removeTd"),d.set(i,"display","block"),n=t.get("referenceWidget"),s.hitch(n,n._createStatsRow()),t.set("isnewRowAdded",!0))))},_handleStatsValueUpdate:function(e,t,i){var n,a,o;this.get("attributeSelect")&&(n=this.get("attributeSelect"),"0"!==n.get("value")&&"0"!==i&&(this.get("isnewRowAdded")||(a=this.get("removeTd"),d.set(a,"display","block"),o=this.get("referenceWidget"),s.hitch(o,o._createStatsRow()),this.set("isnewRowAdded",!0))))},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){E.isDefined(e)&&("esriGeometryPolygon"===e.geometryType?(this.inputLayer=e,this.inputType="polygon"):"esriGeometryPolyline"===e.geometryType?(this.inputLayer=e,this.inputType="line"):"esriGeometryPoint"===e.geometryType&&(this.inputLayer=e,this.inputType="point"))},_setInputLayersAttr:function(e){this.inputLayers=e},_setLayerAttr:function(e){"esriGeometryPolygon"===e.geometryType?this.inputType="polygon":"esriGeometryPolyline"===e.geometryType?this.inputType="line":"esriGeometryPoint"===e.geometryType&&(this.inputType="point"),this.inputLayer=e},_setLayersAttr:function(e){this._setLayerAttr(e)},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return j.validateServiceName(e,{textInput:this.outputLayerInput})},_setUnitsAttr:function(e){this.units=e},_getUnitsAttr:function(){return this.units=this._bufferUnits.get("value"),this.units},_setAttributesAttr:function(e){if(e.inputLayer){E.isDefined(e.allowSelectLabel)||(e.allowSelectLabel=!0);var t,i,s,a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];t=e.inputLayer,i=e.selectWidget,s=t.fields,e.allowSelectLabel&&i.addOption({value:"",label:this.i18n.attribute}),e.allowStringType&&a.push("esriFieldTypeString"),n.forEach(s,function(e){-1!==n.indexOf(a,e.type)&&e.name!==t.objectIdField&&i.addOption({value:e.name,label:E.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})},this)}},_setStatisticsAttr:function(e){var t=e.selectWidget;t.addOption({value:"0",label:this.i18n.statistic}),t.addOption({value:"COUNT",label:this.i18n.count}),t.addOption({value:"SUM",label:this.i18n.sum}),t.addOption({value:"MIN",label:this.i18n.minimum}),t.addOption({value:"MAX",label:this.i18n.maximum}),t.addOption({value:"MEAN",label:this.i18n.average}),t.addOption({value:"RANGE",label:this.i18n.range}),t.addOption({value:"STDDEV",label:this.i18n.standardDev}),t.addOption({value:"VARIANCE",label:this.i18n.variance})},_setSummaryFieldsAttr:function(e){this.summaryFields=e},_getSummaryFieldsAttr:function(){var e,t,i=[];return p(".statsSelect",this.domNode).forEach(function(s){if(e=v.byNode(s),t=e.get("attributeSelect"),"0"!==t.get("value")&&"0"!==e.get("value")){var n={};n.statisticType=e.get("value"),n.onStatisticField=t.get("value"),i.push(n)}}),i},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))}});return l("extend-esri")&&s.setObject("dijit.analysis.CreateBuffers",M,N),M});