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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/on","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/layout/AccordionContainer","dijit/TitlePane","dojox/widget/TitleGroup","../../kernel","./AnalysisToolItem","./utils","dojo/i18n!../../nls/jsapi","dojo/text!./templates/Analysis.html"],function(e,o,t,n,i,s,l,a,c,h,r,d,T,m,p,u,g,v,_,S,I,w,f,y,C,L,b,R,A,D){var j=["feature","raster"],P=o([g,v,_,S,I,u],{declaredClass:"esri.dijit.analysis.Analysis",templateString:D,widgetsInTemplate:!0,i18n:null,helpFileName:"Analysis",analysisMode:j[0],showBigData:!1,constructor:function(){this._titlePanes=[]},postMixInProperties:function(){this.inherited(arguments),this.i18n={},t.mixin(this.i18n,A.common),t.mixin(this.i18n,A.tocPanel),t.mixin(this.i18n,A.analysisTools),this.own(this.watch("analysisMode",t.hitch(this,this._handleAnalysisModeChange)),this.watch("showBigData",t.hitch(this,this._updateHelp)))},startup:function(){this.inherited(arguments),this._handleAnalysisModeChange()},destroy:function(){this.inherited(arguments)},_connect:function(e,o,t){e._handle||(e._handle=p.pausable(e,o,t),this.own(e._handle))},_setSummarizeToolsAttr:function(){var e=d.create("div"),o=new b({name:this.i18n.aggregatePoints,helpTopic:"AggregatePointsTool",toolIcon:"aggregateIcon"},d.create("div",null,e));o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect"));var n=new b({name:this.i18n.summarizeNearby,helpTopic:"SummarizeNearbyTool",toolIcon:"sumNearbyIcon"},d.create("div",null,e));n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect"));var i=new b({name:this.i18n.summarizeWithin,helpTopic:"SummarizeWithinTool",toolIcon:"sumWithinIcon"},d.create("div",null,e));i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect"));var s=new b({name:this.i18n.reconstructTracks,helpTopic:"ReconstructTracksTool",toolIcon:"reconstructIcon"},d.create("div",null,e));h.set(s.optionsDiv,"margin-top","0"),s.set("showComingSoonLabel",!1),h.set(s.domNode,"display","none"),this._connect(s,"tool-select",t.hitch(this,"onToolSelect"));var l=new b({name:this.i18n.createPanel,helpTopic:"CreatePanelTool",toolIcon:"createInterpolatedSurfaceIcon"},d.create("div",null,e));l.set("showComingSoonLabel",!1),h.set(l.domNode,"display","none"),this._connect(l,"tool-select",t.hitch(this,"onToolSelect")),this._summarizeTools.set("content",e)},_setLocationToolsAttr:function(){var e=d.create("div"),o=new b({name:this.i18n.findExistingLocations,helpTopic:"FindExistingLocationsTool",toolIcon:"findLocationsIcon"},d.create("div",null,e));o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect"));var n=new b({name:this.i18n.deriveNewLocations,helpTopic:"DeriveNewLocationsTool",toolIcon:"findNewLocationsIcon"},d.create("div",null,e));n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect"));var i=new b({name:this.i18n.findSimilarLocations,helpTopic:"FindSimilarLocationsTool",toolIcon:"findSimilarLocationsIcon"},d.create("div",null,e));i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect"));var s=new b({name:this.i18n.chooseBestFacilities,helpTopic:"ChooseBestFacilitiesTool",toolIcon:"chooseBestFacilitiesIcon"},d.create("div",null,e));s.set("showComingSoonLabel",!1),this._connect(s,"tool-select",t.hitch(this,"onToolSelect"));var l=new b({name:this.i18n.createViewshed,helpTopic:"CreateViewshedTool",toolIcon:"createViewshedIcon"},d.create("div",null,e));l.set("showComingSoonLabel",!1),this._connect(l,"tool-select",t.hitch(this,"onToolSelect"));var a=new b({name:this.i18n.createWatershed,helpTopic:"CreateWatershedsTool",toolIcon:"createWatershedIcon"},d.create("div",null,e));a.set("showComingSoonLabel",!1),this._connect(a,"tool-select",t.hitch(this,"onToolSelect"));var c=new b({name:this.i18n.traceDownstream,helpTopic:"TraceDownstreamTool",toolIcon:"traceDownstreamIcon"},d.create("div",null,e));c.set("showComingSoonLabel",!1),this._connect(c,"tool-select",t.hitch(this,"onToolSelect")),this._locationTools.set("content",e)},_setGeoenrichToolsAttr:function(){var e=d.create("div"),o=new b({name:this.i18n.enrichLayer,helpTopic:"EnrichLayerTool",toolIcon:"geoenrichLayerIcon"},d.create("div",null,e));o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect")),this._geoenrichTools.set("content",e)},_setProximityToolsAttr:function(){var e=d.create("div"),o=new b({name:this.i18n.createBuffers,helpTopic:"CreateBuffersTool",toolIcon:"buffersIcon"},d.create("div",null,e));this._connect(o,"tool-select",t.hitch(this,"onToolSelect")),o.set("showComingSoonLabel",!1);var n=new b({name:this.i18n.createDriveTimeAreas,helpTopic:"CreateDriveTimeAreasTool",toolIcon:"driveIcon"},d.create("div",null,e));h.set(n.optionsDiv,"margin-top","0"),n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect"));var i=new b({name:this.i18n.findNearest,helpTopic:"FindNearestTool",toolIcon:"findClosestFacilityIcon"},d.create("div",null,e));i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect"));var s=new b({name:this.i18n.planRoutes,helpTopic:"PlanRoutesTool",toolIcon:"planRoutesIcon"},d.create("div",null,e));h.set(s.optionsDiv,"margin-top","0"),s.set("showComingSoonLabel",!1),this._connect(s,"tool-select",t.hitch(this,"onToolSelect"));var l=new b({name:this.i18n.connectOriginsToDestinations,helpTopic:"ConnectOriginsToDestinationsTool",toolIcon:"connectODIcon"},d.create("div",null,e));h.set(l.optionsDiv,"margin-top","0"),l.set("showComingSoonLabel",!1),this._connect(l,"tool-select",t.hitch(this,"onToolSelect")),this._proximityTools.set("content",e)},_setAnalyzePatternsAttr:function(){var e,o,n,i;e=d.create("div"),i=new b({name:this.i18n.calculateDensity,helpTopic:"CalculateDensityTool",toolIcon:"createDensitySurfaceIcon"},d.create("div",null,e)),i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect")),o=new b({name:this.i18n.findHotSpots,helpTopic:"FindHotSpotsTool",toolIcon:"findHotSpotsIcon"},d.create("div",null,e)),o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect")),n=new b({name:this.i18n.interpolatePoints,helpTopic:"InterpolatePointsTool",toolIcon:"createInterpolatedSurfaceIcon"},d.create("div",null,e)),n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect"));var s=new b({name:this.i18n.createSpaceTimeCube,helpTopic:"CreateSpaceTimeCubeTool",toolIcon:"createSpaceTimeCubeIcon"},d.create("div",null,e));s.set("showComingSoonLabel",!1),h.set(s.domNode,"display","none"),this._connect(s,"tool-select",t.hitch(this,"onToolSelect")),this._analyzePatTools.set("content",e)},_setInterpolateToolsAttr:function(){var e,o;e=d.create("div"),o=new b({name:this.i18n.createInterpolatedSurface,helpTopic:"SummarizeWithinTool",toolIcon:"createInterpolatedSurfaceIcon"},d.create("div",null,e)),this._interpolateTools.set("content",e)},_setManageDataToolsAttr:function(){var e,o,n,i,s;e=d.create("div"),o=new b({name:this.i18n.dissolveBoundaries,helpTopic:"DissolveBoundariesTool",toolIcon:"dissolveBoundariesIcon"},d.create("div",null,e)),o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect")),n=new b({name:this.i18n.extractData,helpTopic:"ExtractDataTool",toolIcon:"extractDataIcon"},d.create("div",null,e)),n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect")),i=new b({name:this.i18n.mergeLayers,helpTopic:"MergeLayersTool",toolIcon:"mergeLayersIcon"},d.create("div",null,e)),i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect")),s=new b({name:this.i18n.overlayLayers,helpTopic:"OverlayLayersTool",toolIcon:"overlayLayersIcon"},d.create("div",null,e)),s.set("showComingSoonLabel",!1),this._connect(s,"tool-select",t.hitch(this,"onToolSelect"));var l=new b({name:this.i18n.joinFeatures,helpTopic:"JoinFeaturesTool",toolIcon:"joinFeaturesIcon"},d.create("div",null,e));l.set("showComingSoonLabel",!1),h.set(l.domNode,"display","none"),this._connect(l,"tool-select",t.hitch(this,"onToolSelect")),this._managedataTools.set("content",e)},_setSummarizeRasterToolsAttr:function(){var e=d.create("div"),o=new b({name:this.i18n.summarizeRasterWithin,helpTopic:"SummarizeRasterWithinTool",toolIcon:"sumWithinIcon"},d.create("div",null,e));o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect"));var n=new b({name:this.i18n.histogramRasterWithin,helpTopic:"HistogramRasterWithinTool",toolIcon:"sumWithinIcon"},d.create("div",null,e));n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect")),this._summarizeRasterTools.set("content",e)},_setLocationRasterToolsAttr:function(){var e=d.create("div"),o=new b({name:this.i18n.findSuitableLocations,helpTopic:"FindSuitableLocationsTool",toolIcon:"findLocationsIcon"},d.create("div",null,e));o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect"));var n=new b({name:this.i18n.filterLocations,helpTopic:"FilterLocationsTool",toolIcon:"findNewLocationsIcon"},d.create("div",null,e));n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect")),this._locationRasterTools.set("content",e)},_setAnalyzeImageRasterToolsAttr:function(){var e=d.create("div"),o=new b({name:this.i18n.segmentImage,helpTopic:"SegmentImageTool",toolIcon:"findLocationsIcon"},d.create("div",null,e));o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect"));var n=new b({name:this.i18n.classifyImage,helpTopic:"ClassifyImageTool",toolIcon:"findNewLocationsIcon"},d.create("div",null,e));n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect"));var i=new b({name:this.i18n.detectDifferences,helpTopic:"DetectDifferencesTool",toolIcon:"createViewshedIcon"},d.create("div",null,e));i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect"));var s=new b({name:this.i18n.monitorVegetation,helpTopic:"MonitorVegetationTool",toolIcon:"monitorVegetationIcon"},d.create("div",null,e));s.set("showComingSoonLabel",!1),this._connect(s,"tool-select",t.hitch(this,"onToolSelect")),this._analyzeImageRasterTools.set("content",e)},_setProximityRasterToolsAttr:function(){var e=d.create("div"),o=new b({name:this.i18n.calculateDistance,helpTopic:"CalculateDistanceTool",toolIcon:"findClosestFacilityIcon"},d.create("div",null,e));this._connect(o,"tool-select",t.hitch(this,"onToolSelect")),o.set("showComingSoonLabel",!1);var n=new b({name:this.i18n.findShortestPath,helpTopic:"FindShortestPathTool",toolIcon:"findClosestFacilityIcon"},d.create("div",null,e));n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect")),this._proximityRasterTools.set("content",e)},_setAnalyzeTerrainRasterToolsAttr:function(){var e=d.create("div"),o=new b({name:this.i18n.calculateSlope,helpTopic:"CalculateSlopeTool",toolIcon:"calculateSlopeIcon"},d.create("div",null,e));o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect"));var n=new b({name:this.i18n.deriveAspect,helpTopic:"DeriveAspectTool",toolIcon:"deriveAspectIcon"},d.create("div",null,e));n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect"));var i=new b({name:this.i18n.createViewshed,helpTopic:"CreateViewShedRasterTool",toolIcon:"createViewshedIcon"},d.create("div",null,e));i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect")),this._analyzeTerrainRasterTools.set("content",e)},_setAnalyzePatternsRasterAttr:function(){var e,o,n;e=d.create("div"),n=new b({name:this.i18n.calculateDensity,helpTopic:"CalculateDensityRasterTool",toolIcon:"createDensitySurfaceIcon"},d.create("div",null,e)),n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect")),o=new b({name:this.i18n.interpolatePoints,helpTopic:"InterpolatePointsRasterTool",toolIcon:"createInterpolatedSurfaceIcon"},d.create("div",null,e)),o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect")),this._analyzePatRasterTools.set("content",e)},_setManageDataRasterToolsAttr:function(){var e,o,n,i,s;e=d.create("div"),n=new b({name:this.i18n.extractRaster,helpTopic:"ExtractRasterTool",toolIcon:"extractRasterIcon"},d.create("div",null,e)),n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect")),o=new b({name:this.i18n.remapValues,helpTopic:"RemapValuesTool",toolIcon:"remapIcon"},d.create("div",null,e)),o.set("showComingSoonLabel",!1),this._connect(o,"tool-select",t.hitch(this,"onToolSelect")),s=new b({name:this.i18n.convertFeatureToRaster,helpTopic:"ConvertFeatureToRasterTool",toolIcon:"overlayLayersIcon"},d.create("div",null,e)),s.set("showComingSoonLabel",!1),this._connect(s,"tool-select",t.hitch(this,"onToolSelect")),i=new b({name:this.i18n.convertRasterToFeature,helpTopic:"ConvertRasterToFeatureTool",toolIcon:"mergeLayersIcon"},d.create("div",null,e)),i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect")),this._managedataRasterTools.set("content",e)},_getSelectedCategoryAttr:function(){var e;return e=n.filter(this._titlePanes,function(e){return e.open})[0],e.get("data-esrihelptopic")},_getSelectedPaneAttr:function(){var e;return e=n.filter(this._titlePanes,function(e){return e.open})[0]},_setSelectedCategoryAttr:function(e){console.log("setting",e);var o;n.forEach(this._titlePanes,function(t){o=t.get("data-esrihelptopic"),o===e&&t.set("open",!0)},this)},_setAnalysisModeAttr:function(e){return e&&-1!==n.indexOf(j,e)?void this._set("analysisMode",e):void console.log("Invalid value for analysisMode property")},_handleAnalysisModeChange:function(){if(this.analysisMode!==j[0]||this._featureAccordionCreated){if(this.analysisMode===j[1]&&!this._rasterAccordionCreated){var e=[this._summarizeRasterTools,this._locationRasterTools,this._analyzePatRasterTools,this._proximityRasterTools,this._managedataRasterTools,this._analyzeImageRasterTools,this._analyzeTerrainRasterTools];this._fixHelpIDs(e),this._titlePanes=this._titlePanes.concat(e),this.set("summarizeRasterTools"),this.set("locationRasterTools"),this.set("analyzePatternsRaster"),this.set("proximityRasterTools"),this.set("manageDataRasterTools"),this.set("analyzeImageRasterTools"),this.set("analyzeTerrainRasterTools"),n.forEach(["HistogramRasterWithinTool","SummarizeRasterWithinTool","FilterLocationsTool","FindSuitableLocationsTool","CalculateDistanceTool","FindShortestPathTool","SegmentImageTool","InterpolatePointsRasterTool","ClassifyImageTool","DetectDifferencesTool","CreateViewShedRasterTool","CalculateDensityRasterTool","ConvertRasterToFeatureTool","ConvertFeatureToRasterTool"],function(e){this.disable(e,!0)},this),this._rasterAccordion.startup(),R.initHelpLinks(this.domNode),this._rasterAccordionCreated=!0}}else{var o=[this._summarizeTools,this._locationTools,this._geoenrichTools,this._analyzePatTools,this._proximityTools,this._managedataTools];this._fixHelpIDs(o),this._titlePanes=this._titlePanes.concat(o),this.set("summarizeTools"),this.set("locationTools"),this.set("geoenrichTools"),this.set("analyzePatterns"),this.set("proximityTools"),this.set("manageDataTools"),this._featureAccordion.startup(),R.initHelpLinks(this.domNode,!0,{analysisMode:"feature"===this.analysisMode?this.showBigData?"bigdata":"feature":"raster"}),this._featureAccordionCreated=!0}h.set(this._featureAccordion.domNode,"display",this.analysisMode===j[0]?"block":"none"),h.set(this._rasterAccordion.domNode,"display",this.analysisMode===j[1]?"block":"none"),this._updateHelp()},_updateHelp:function(){R.initHelpLinks(this.domNode,!0,{analysisMode:"feature"===this.analysisMode?this.showBigData?"bigdata":"feature":"raster"})},_fixHelpIDs:function(e){n.forEach(e,function(e){r.set(e.titleNode,"innerHTML","<span class='esriFloatTrailing helpIcon' esriHelpTopic='"+e.get(e.get("data-esrihelptopic")?"data-esrihelptopic":"data-esriHelpTopic")+"' data-dojo-attach-point='_helpIconNode'></span>"+e.titleNode.innerHTML)},this)},hide:function(e){var o=T("div[data-esrihelptopic ='"+e+"']");0===o.length&&(o=T("a[esrihelptopic ='"+e+"']")),o.length>0&&o.forEach(function(e){e&&w.getEnclosingWidget(e)&&h.set(w.getEnclosingWidget(e).domNode,"display","none")})},show:function(e){var o=T("div[data-esrihelptopic ='"+e+"']");0===o.length&&(o=T("a[esrihelptopic ='"+e+"']")),o.length>0&&o.forEach(function(e){e&&w.getEnclosingWidget(e)&&h.set(w.getEnclosingWidget(e).domNode,"display","block")})},disable:function(e,o){var t=T("div[data-esrihelptopic ='"+e+"']");0===t.length&&(t=T("a[esrihelptopic ='"+e+"']")),t.length>0&&t.forEach(function(e){if(e&&w.getEnclosingWidget(e)){var t=w.getEnclosingWidget(e);t.set("showComingSoonLabel",o),h.set(t.optionsDiv,"display","none"),t._handle&&(o?t._handle.pause():t._handle.resume())}},this)},onToolSelect:function(){}});return l("extend-esri")&&t.setObject("dijit.analysis.Analysis",P,L),P});