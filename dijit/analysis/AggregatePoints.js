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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/NodeList","dojo/NodeList-dom","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dijit/InlineEditBox","../../kernel","../../lang","./AnalysisBase","./utils","./CreditEstimator","./_AnalysisOptions","dojo/i18n!../../nls/jsapi","dojo/text!./templates/AggregatePoints.html"],function(e,t,i,s,a,n,o,r,l,h,u,y,c,p,d,g,m,_,L,b,f,v,w,S,A,I,R,T,P,j,x,C,k,N,D,F,M,B,G,U){var O=t([m,_,L,b,f,B,D],{declaredClass:"esri.dijit.analysis.AggregatePoints",templateString:U,widgetsInTemplate:!0,pointLayer:null,polygonLayers:null,summaryFields:null,outputLayerName:null,keepBoundariesWithNoPoints:!0,polygonLayer:null,groupByField:null,minorityMajority:!1,percentPoints:!1,distanceDefaultUnits:"Miles",i18n:null,toolName:"AggregatePoints",helpFileName:"AggregatePoints",resultParameter:"AggregatedLayer",_afterAnalysisStr:"",_beforeAnalysisStr:"",constructor:function(e){this._pbConnects=[],this._statsRows=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,G.aggregatePointsTool),this._beforeAnalysisStr=this.i18n.aggregateDefine.substring(0,this.i18n.aggregateDefine.indexOf("<b>${layername}</b>")),this._afterAnalysisStr=this.i18n.aggregateDefine.substring(this.i18n.aggregateDefine.indexOf("<b>${layername}</b>")+"<b>${layername}</b>".length)},postCreate:function(){this.inherited(arguments),p.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._bigdataUX=[this._timeStepsLabelRow,this._intervalLabelRow,this._intervalRow,this._repeatLabelRow,this._repeatRow,this._timeRefRow,this._timeLabelRow,this._timeStepLabelNo,this._binsTypeRow,this._binsTypeRadioRow,this._areaTypeRadioRow,this._srLabelRow,this._srInputRow,this._selectDataStore,this._datastoreLabelRow],this._standardUX=[this._keepPolygonsCheckRow,this._groupByLabelRow,this._groupBySelectRow,this._minmajorityRow,this._percentPointsRow,this._groupByLabelNo],this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e,t,i,s,a={},o={};e=this.polygonLayers[this._layersSelect.get("value")],e&&(i=F.constructAnalysisInputLyrObj(e,this.showGeoAnalyticsParams)),this.showGeoAnalyticsParams?this._aggPolyType.get("checked")?a.polygonLayer=n.toJson(i):(a.distanceInterval=this._binsInput.get("value"),a.distanceIntervalUnit=this._binUnits.get("value")):a.polygonLayer=n.toJson(i),s=F.constructAnalysisInputLyrObj(this.pointLayer,this.showGeoAnalyticsParams),a.pointLayer=n.toJson(s),this.get("summaryFields").length>0&&(a.summaryFields=n.toJson(this.get("summaryFields"))),this.showGeoAnalyticsParams&&this._isTimeInstantLayer&&(this.get("timeReference")&&(a.timeReference=this.get("timeReference")),this._timeIntervalInput.get("value")&&(a.timeInterval=this._timeIntervalInput.get("value"),a.timeIntervalUnit=this._timeIntervalUnits.get("value")),this._timeRepeatInput.get("value")&&(a.timeRepeat=this._timeRepeatInput.get("value"),a.timeRepeatUnit=this._timeRepeatUnits.get("value"))),this.returnFeatureCollection||(a.OutputName=n.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showGeoAnalyticsParams||(a.KeepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked"),"0"!==this._groupBySelect.get("value")&&(a.GroupByField=this._groupBySelect.get("value"),this.resultParameter=["aggregatedLayer","groupSummary"],a.minorityMajority=this.get("minorityMajority"),a.percentPoints=this.get("percentPoints"))),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=n.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(t={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),a.context=n.toJson(t));var r=this._spatialRefInput.get("value");this.showGeoAnalyticsParams&&(t={},r&&(t.outSR={wkid:parseInt(r,10)}),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),a.context=n.toJson(t)),o.jobParams=a,o.itemParams={description:l.substitute(this.i18n.itemDescription,{pointlayername:this.pointLayer.name,polygonlayername:e?e.name:this.i18n.bins}),tags:l.substitute(this.i18n.itemTags,{pointlayername:this.pointLayer.name,polygonlayername:e?e.name:this.i18n.bins}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(o.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(this.resultParameter="output"),this.showGeoAnalyticsParams&&this._datastoreSelect&&(o.isSpatioTemporalDataStore="spatialtemporal"===this._datastoreSelect.get("value")),this.execute(o)}},_handleLayerChange:function(e){if("browse"===e){var t=this._browsedlg.browseItems.get("query");t.custom=['tags:"polygon"'],this._browsedlg.browseItems.set("query",t),this._isAnalysisSelect=!1,this._browsedlg.show()}else"browselayers"===e?(this.showGeoAnalyticsParams&&(t=this._browseLyrsdlg.browseItems.get("query"),t.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",t)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPolygon"],this._isAnalysisSelect=!1,this._browseLyrsdlg.show()):this.polygonLayers[e]&&this.pointLayer&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,{pointlayername:this.pointLayer.name,polygonlayername:this.polygonLayers[e].name}),this._outputLayerInput.set("value",this.outputLayerName))},_handleBrowseItemsSelect:function(e){e&&e.selection&&F.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.pointLayers:this.polygonLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:e.dialog||this._browsedlg,widget:this}).always(i.hitch(this,this._updateAnalysisLayerUI,!0))},_handleAttrSelectChange:function(e){var t,s,a;"0"!==e&&(t=this.get("statisticSelect"),"0"!==t.get("value")&&(t.get("isnewRowAdded")||(s=t.get("removeTd"),h.set(s,"display","block"),a=t.get("referenceWidget"),i.hitch(a,a._createStatsRow()),t.set("isnewRowAdded",!0))))},_handleStatsValueUpdate:function(e,t,s){var a,n,o;this.get("attributeSelect")&&(a=this.get("attributeSelect"),"0"!==a.get("value")&&"0"!==s&&(this.get("isnewRowAdded")||(n=this.get("removeTd"),h.set(n,"display","block"),o=this.get("referenceWidget"),i.hitch(o,o._createStatsRow()),this.set("isnewRowAdded",!0))))},_handleShowCreditsClick:function(e){e.preventDefault();var t,s={};this._form.validate()&&(t=this.polygonLayers[this._layersSelect.get("value")],s.PolygonLayer=n.toJson(F.constructAnalysisInputLyrObj(t)),s.PointLayer=n.toJson(F.constructAnalysisInputLyrObj(this.pointLayer)),s.SummaryFields=n.toJson(this.get("summaryFields")),this.returnFeatureCollection||(s.OutputName=n.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),s.KeepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked"),"0"!==this._groupBySelect.get("value")&&(s.GroupByField=this._groupBySelect.get("value")),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(s.Context=n.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,s).then(i.hitch(this,function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_save:function(){},_buildUI:function(){var e=!0;F.updateDisplay(this._standardUX,!this.get("showGeoAnalyticsParams"),"table-row"),F.updateDisplay(this._bigdataUX,this.get("showGeoAnalyticsParams"),"table-row"),F.initHelpLinks(this.domNode,this.showHelp),this.get("showSelectAnalysisLayer")&&(!this.get("pointLayer")&&this.get("pointLayers")&&this.set("pointLayer",this.pointLayers[0]),F.populateAnalysisLayers(this,"pointLayer","pointLayers")),this.pointLayer&&u.set(this._aggregateToolDescription,"innerHTML",l.substitute(this.i18n.aggregateDefine,{layername:this.pointLayer.name})),this.polygonLayers&&s.forEach(this.polygonLayers,function(e,t){"esriGeometryPolygon"===e.geometryType&&this._layersSelect.addOption({value:t,label:e.name})},this),F.addReadyToUseLayerOption(this,[this._analysisSelect,this._layersSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this._keepPolygonsCheck.set("checked",this.keepBoundariesWithNoPoints),this.polygonLayer&&this._layersSelect.set("value",this.polygonLayer),s.forEach(this.summaryFields,function(e){var t=e.split(" ");this._currentAttrSelect.set("value",t[0]),i.hitch(this._currentAttrSelect,this._handleAttrSelectChange,t[0])(),this._currentStatsSelect.set("value",t[1]),i.hitch(this._currentStatsSelect,this._handleStatsValueUpdate,"value","",t[1])()},this),h.set(this._chooseFolderRow,"display",this.showSelectFolder===!0?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,function(e){this.folderStore=e,F.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),h.set(this._chooseExtentDiv,"display",this.showChooseExtent===!0?"inline-block":"none"),this.set("groupBySelect",this.groupByField),h.set(this._showCreditsLink,"display",this.showCredits===!0?"block":"none"),this.minorityMajority&&this._minmajorityCheck.set("checked",this.minorityMajority),this.percentPoints&&this._percentPointsCheck.set("checked",this.percentPoints),h.set(this._closeBtn,"display",this.get("showCloseIcon")?"block":"none"),this.showGeoAnalyticsParams?(u.set(this._chooseAggLabel,"innerHTML",this.i18n.aggOption),u.set(this._chooseAggHelp,"esriHelpTopic","inputAggregation"),u.set(this._sumHelp,"esriHelpTopic","summaryFields"),u.set(this._outputHelp,"esriHelpTopic","outputName"),this._handleAggTypeChange(this._aggPolyType.get("checked")),p.replace(this._layersSelect.domNode,"esriLeadingMargin2","esriLeadingMargin1"),u.set(this._spatialRefLabel,"innerHTML",this.i18n.fiveLabel),u.set(this._datastoreLabel,"innerHTML",this.i18n.sixLabel),u.set(this._outputNumLabel,"innerHTML",this.i18n.sevenLabel),this.distanceDefaultUnits&&this._binUnits.set("value",this.distanceDefaultUnits)):(u.set(this._chooseAggLabel,"innerHTML",this.i18n.chooseAreaLabel),u.set(this._chooseAggHelp,"esriHelpTopic","polygonLayer"),u.set(this._sumHelp,"esriHelpTopic","SummaryFields"),u.set(this._outputHelp,"esriHelpTopic","OutputLayer"),u.set(this._statsNumLabel,"innerHTML",this.i18n.threeLabel),u.set(this._groupByLabelNo,"innerHTML",this.i18n.fourLabel),u.set(this._outputNumLabel,"innerHTML",this.i18n.fiveLabel)),this._updateAnalysisLayerUI(e),this._loadConnections()},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1))},_createStatsRow:function(){var t,s,n,o,r,l,h;return t=y.create("tr",null,this._afterStatsRow,"before"),n=y.create("td",{style:{width:"45%",maxWidth:"100px"}},t),s=y.create("td",{style:{width:"55%",maxWidth:"104px"}},t),o=new I({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},y.create("select",null,n)),this.set("attributes",{selectWidget:o,pointLayer:this.pointLayer}),r=new I({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},y.create("select",null,s)),this.set("statistics",{selectWidget:r}),o.set("statisticSelect",r),a.connect(o,"onChange",this._handleAttrSelectChange),h=y.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},t),l=y.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"<img src='"+e.toUrl("./images/close.gif")+"' border='0''/>"},h),a.connect(l,"onclick",i.hitch(this,this._removeStatsRow,t)),this._statsRows.push(t),r.set("attributeSelect",o),r.set("removeTd",h),r.set("isnewRowAdded",!1),r.set("referenceWidget",this),r.watch("value",this._handleStatsValueUpdate),this._currentStatsSelect=r,this._currentAttrSelect=o,!0},_removeStatsRow:function(e){s.forEach(v.findWidgets(e),function(e){e.destroyRecursive()}),y.destroy(e)},_removeStatsRows:function(){s.forEach(this._statsRows,this._removeStatsRow,this),this._statsRows=[]},_handleGroupBySelectChange:function(e){var t="0"===e;p.toggle(this._minmajorityLabel,"esriAnalysisTextDisabled",t),p.toggle(this._percentPointsLabel,"esriAnalysisTextDisabled",t),this._percentPointsCheck.set("disabled",t),this._minmajorityCheck.set("disabled",t)},_handleAnalysisLayerChange:function(e){var t;"browse"===e?(t=this._browsedlg.browseItems.get("query"),t.custom=['tags:"point"'],this._browsedlg.browseItems.set("query",t),this._isAnalysisSelect=!0,this._browsedlg.show()):"browselayers"===e?(this.showGeoAnalyticsParams&&(t=this._browseLyrsdlg.browseItems.get("query"),t.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",t)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint"],this._isAnalysisSelect=!0,this._browseLyrsdlg.show()):(this.pointLayer=this.pointLayers[e],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(e){if(this.pointLayer){u.set(this._aggregateToolDescription,"innerHTML",l.substitute(this.i18n.aggregateDefine,{layername:this.pointLayer.name}));var t=this.polygonLayers[this._layersSelect.get("value")];if(e&&t&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,{pointlayername:this.pointLayer.name,polygonlayername:t.name}),this._outputLayerInput.set("value",this.outputLayerName)),this._removeStatsRows(),this._createStatsRow(),this.set("groupBySelect",this.groupByField),this.showGeoAnalyticsParams){this._isTimeInstantLayer=F.isTimeInstantLayer(this.pointLayer);var i=new d([this._timeStepsLabelRow,this._intervalLabelRow,this._intervalRow,this._repeatLabelRow,this._repeatRow,this._timeRefRow,this._timeLabelRow,this._timeStepLabelNo]),a=[this._timeIntervalInput,this._timeIntervalUnits,this._timeRepeatInput,this._timeRepeatUnits,this._timeRefDay,this._timeRefTime];s.forEach(a,function(e){e.set("disabled",!this._isTimeInstantLayer)},this),i.toggleClass("esriAnalysisTextDisabled",!this._isTimeInstantLayer)}}},_handleAggTypeChange:function(e){this._layersSelect.set("disabled",!e),this._layersSelect.set("required",!e),this._binsInput.set("disabled",e),this._binUnits.set("disabled",e),this._binsInput.set("required",!e);var t=this.polygonLayers[this._layersSelect.get("value")];this.pointLayer&&(this.outputLayerName=e&&t?l.substitute(this.i18n.outputLayerName,{pointlayername:this.pointLayer.name,polygonlayername:t.name}):l.substitute(this.i18n.outputLayerName,{pointlayername:this.pointLayer.name,polygonlayername:this.i18n.bins}),this._outputLayerInput.set("value",this.outputLayerName))},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setPointLayerAttr:function(e){!N.isDefined(e)||"esriGeometryPoint"!==e.geometryType&&"esriGeometryMultipoint"!==e.geometryType||(this.pointLayer=e)},_setPolygonLayersAttr:function(e){this.polygonLayers=e},_setLayersAttr:function(e){this.polygonLayers=[],s.forEach(e,function(e){"esriGeometryPolygon"===e.geometryType?this.polygonLayers.push(e):"esriGeometryPoint"===e.geometryType&&(this.pointLayer=e)},this)},_setAttributesAttr:function(e){if(e.pointLayer){var t,i,a;t=e.pointLayer,i=e.selectWidget,a=t.fields,i.addOption({value:"0",label:this.i18n.attribute}),s.forEach(a,function(e){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],e.type)&&e.name!==t.objectIdField&&i.addOption({value:e.name,label:N.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})},this)}},_setStatisticsAttr:function(e){var t=e.selectWidget;t.addOption({value:"0",label:this.i18n.statistic}),this.showGeoAnalyticsParams&&t.addOption({value:"COUNT",label:this.i18n.count}),t.addOption({value:"SUM",label:this.i18n.sum}),t.addOption({value:"MIN",label:this.i18n.minimum}),t.addOption({value:"MAX",label:this.i18n.maximum}),t.addOption({value:"MEAN",label:this.i18n.average}),this.showGeoAnalyticsParams&&t.addOption({value:"RANGE",label:this.i18n.range}),t.addOption({value:"STDDEV",label:this.i18n.standardDev})},_setSummaryFieldsAttr:function(e){this.summaryFields=e},_getSummaryFieldsAttr:function(){var e,t,i="",s=[];return c(".statsSelect",this.domNode).forEach(function(a){if(e=v.byNode(a),t=e.get("attributeSelect"),"0"!==t.get("value")&&"0"!==e.get("value"))if(this.showGeoAnalyticsParams){var n={};n.statisticType=e.get("value"),n.onStatisticField=t.get("value"),s.push(n)}else i+=t.get("value")+" "+e.get("value")+";",s.push(t.get("value")+" "+e.get("value"))},this),s},_setGroupBySelectAttr:function(e){if(this.pointLayer){var t=this.pointLayer.fields;this._groupBySelect.removeOption(this._groupBySelect.getOptions()),this._groupBySelect.addOption({value:"0",label:this.i18n.attribute}),s.forEach(t,function(e){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeString","esriFieldTypeDate"],e.type)&&e.name!==this.pointLayer.objectIdField&&this._groupBySelect.addOption({value:e.name,label:N.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})},this),e&&this._groupBySelect.set("value",e),this._handleGroupBySelectChange(this._groupBySelect.get("value"))}},_setMinorityMajorityAttr:function(e){this.minorityMajority=e},_getMinorityMajorityAttr:function(){return this._minmajorityCheck&&(this.minorityMajority=this._minmajorityCheck.get("checked")),this.minorityMajority},_setPercentPointsAttr:function(e){this.percentPoints=e},_getPercentPointsAttr:function(){return this._percentPointsCheck&&(this.percentPoints=this._percentPointsCheck.get("checked")),this.percentPoints},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return F.validateServiceName(e,{textInput:this._outputLayerInput})},_setPointLayersAttr:function(e){N.isDefined(e)&&(e=s.filter(e,function(e){return"esriGeometryPoint"===e.geometryType||"esriGeometryMultipoint"===e.geometryType}),this.pointLayers=e)},_getTimeReferenceAttr:function(){if(this._timeRefDay){var e,t,i,s,a="",n="";e=this._timeRefDay.get("value"),t=this._timeRefTime.get("value"),e&&(a=e.toDateString()),a&&(n=t.toTimeString()),i=-1!==n.indexOf("GMT")?a+" "+n.substring(0,n.indexOf("GMT")+"GMT".length):a+" "+n.split(" ")[0]+" GMT",s=new Date(i),this.timeReference=s.getTime()}return this.timeReference},_setDistanceDefaultUnitsAttr:function(e){this.distanceDefaultUnits=e},_getDistanceDefaultUnitsAttr:function(){return this.distanceDefaultUnits},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))}});return o("extend-esri")&&i.setObject("dijit.analysis.AggregatePoints",O,k),O});