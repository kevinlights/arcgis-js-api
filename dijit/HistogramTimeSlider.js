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

define(["../kernel","../lang","../TimeExtent","dijit/_TemplatedMixin","dijit/_WidgetBase","dijit/form/HorizontalSlider","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/dom","dojo/dom-style","dojo/has","dojo/string","dojox/gfx","dojox/form/RangeSlider","dojo/i18n!../nls/jsapi","dojo/text!dojox/form/resources/HorizontalRangeSlider.html","dojo/text!./HistogramTimeSlider/templates/HistogramTimeSlider.html"],function(i,t,e,s,n,r,o,h,a,l,m,u,_,d,c,g,f,T,x){var b=a([n,s],{declaredClass:"esri.dijit.HistogramTimeSlider",templateString:x,constructor:function(i,t){var e=this;this.layers=i.layers,this.element=t,this.bins=[],this.fullTimeExtent=[],this._mode=i.mode||"show_partial",this._resolution="esriTimeUnitsSeconds",this._timeInterval=i.timeInterval,this._numeric_res=36e5,this._max_bins=400,this._prev_num_bins=0,this._max_bin_height=0,this._color=i.color||"rgb(5, 112, 176)",this._active=!1,this.is_streaming=!1,this.load_count=0,this._textColor=i.textColor||"rgb(82, 95, 109)",this.timeField=i.timeField,this.dateFormat=i.dateFormat||"DateString",this._dateTemplate="${date: "+this.dateFormat+"}",this._wire(),this._resolutions={esriTimeUnitsSeconds:[0],esriTimeUnitsMinutes:[0],esriTimeUnitsHours:[0],esriTimeUnitsDays:[0],esriTimeUnitsMonths:[0],esriTimeUnitsYears:[0]},this._num_resolutions={esriTimeUnitsSeconds:1e3,esriTimeUnitsMinutes:6e4,esriTimeUnitsHours:36e5,esriTimeUnitsDays:864e5,esriTimeUnitsMonths:2592e6,esriTimeUnitsYears:31536e6},o.forEach(this.layers,function(i){if(i.url)var t=i.on("update-end",function(){h.disconnect(t);var s,n;if(e.fullTimeExtent=e.getFullTimeExtent(),i.graphics)for(e.updateLength=i.graphics.length,s=0,n=i.graphics.length;n>s;s++){var r=i.graphics[s].attributes[i.timeInfo.startTimeField];e._add(r)}});else e._bindStreamingEvents(i)})},getFullTimeExtent:function(){var i,t,e=null,s=null;for(i=0,t=this.layers.length;t>i;i++)if(this.layers[i].timeInfo.timeExtent.startTime){var n=this.layers[i].timeInfo.timeExtent.startTime.getTime(),r=this.layers[i].timeInfo.timeExtent.endTime.getTime();e?e>n?e=n:r>s&&(s=r):(e=n,s=r)}return[e,s]},getCurrentTimeExtent:function(){},_wire:function(){var i=this;h.connect(window,"onmouseup, blur",function(){i._active&&i.bins.length!==i._prev_num_bins&&(i._active=!1,i._prev_num_bins=i.bins.length,i._drawHistogram(),i._updateSlider())}),h.connect(window,"resize",function(){i._prev_num_bins=i.bins.length,i._drawHistogram(),i._updateSlider()})},_bindStreamingEvents:function(i){var t=this;i.on("graphic-draw",function(i){t.is_streaming=!0;var e=i.graphic.attributes[t.timeField];t._add(e)}),i.on("graphic-remove",function(i){t.is_streaming=!0;var e=i.graphic.attributes[t.timeField];"show_partial"===t._mode&&t._remove(e)})},_nextRes:function(){var i;for(i in this._resolutions)if(this._resolutions[i].length<=this._max_bins)return i},_updateAllResolutions:function(i,t){var e=this._timeInterval||this._resolution,s=this._num_resolutions[e]/1e3,n=Math.floor(i*s/60),r=Math.floor(i*s/3600),o=Math.floor(i*s/86400),h=Math.floor(i*s/2592e3),a=Math.floor(i*s/31536e3);if("esriTimeUnitsSeconds"===e){var l,m,u=i-this._resolutions.esriTimeUnitsSeconds.length;if(u>=1)for(l=0;u>l;l++)this._resolutions.esriTimeUnitsSeconds.push(0);this._resolutions.esriTimeUnitsSeconds[i]||(this._resolutions.esriTimeUnitsSeconds[i]=0),t?this._resolutions.esriTimeUnitsSeconds[i]--:this._resolutions.esriTimeUnitsSeconds[i]++}if("esriTimeUnitsHours"!==this._timeInterval){var l,m,_=n-this._resolutions.esriTimeUnitsMinutes.length;if(_>=1)for(l=0;_>l;l++)this._resolutions.esriTimeUnitsMinutes.push(0);this._resolutions.esriTimeUnitsMinutes[n]||(this._resolutions.esriTimeUnitsMinutes[n]=0),t?this._resolutions.esriTimeUnitsMinutes[n]--:this._resolutions.esriTimeUnitsMinutes[n]++}var d=r-this._resolutions.esriTimeUnitsHours.length;if(d>=1)for(m=0;d>m;m++)this._resolutions.esriTimeUnitsHours.push(0);this._resolutions.esriTimeUnitsHours[r]||(this._resolutions.esriTimeUnitsHours[r]=0),t?this._resolutions.esriTimeUnitsHours[r]--:this._resolutions.esriTimeUnitsHours[r]++;var c=o-this._resolutions.esriTimeUnitsDays.length;if(c>=1)for(m=0;c>m;m++)this._resolutions.esriTimeUnitsDays.push(0);this._resolutions.esriTimeUnitsDays[o]||(this._resolutions.esriTimeUnitsDays[o]=0),t?this._resolutions.esriTimeUnitsDays[o]--:this._resolutions.esriTimeUnitsDays[o]++;var g=h-this._resolutions.esriTimeUnitsMonths.length;if(g>=1)for(m=0;g>m;m++)this._resolutions.esriTimeUnitsMonths.push(0);this._resolutions.esriTimeUnitsMonths[h]||(this._resolutions.esriTimeUnitsMonths[h]=0),t?this._resolutions.esriTimeUnitsMonths[h]--:this._resolutions.esriTimeUnitsMonths[h]++;var f=a-this._resolutions.esriTimeUnitsYears.length;if(f>=1)for(m=0;f>m;m++)this._resolutions.esriTimeUnitsYears.push(0);this._resolutions.esriTimeUnitsYears[a]||(this._resolutions.esriTimeUnitsYears[a]=0),t?this._resolutions.esriTimeUnitsYears[a]--:this._resolutions.esriTimeUnitsYears[a]++,this._timeInterval||this._resolutions[this._resolution].length>=this._max_bins&&(this._resolution=this._nextRes());var T=0;switch(this._resolution){case"esriTimeUnitsSeconds":T=i,this._numeric_res=1e3;break;case"esriTimeUnitsMinutes":T=n,this._numeric_res=6e4;break;case"esriTimeUnitsHours":T=r,this._numeric_res=36e5;break;case"esriTimeUnitsDays":T=o,this._numeric_res=864e5;break;case"esriTimeUnitsMonths":T=h,this._numeric_res=2592e6;break;case"esriTimeUnitsYears":T=a,this._numeric_res=31536e6}this._setBins(T)},_setBins:function(i){var t=this._timeInterval||this._resolution;this.bins=this._resolutions[t];for(var e=0,s=0;0===this.bins[s];)e=s+1,s+=1;return this._active?void(e!==this.minVisibleIndex&&(this.minVisibleIndex=e)):void(this.is_streaming||this.updateLength!==this.load_count?!this.is_streaming||this.bins.length==this._prev_num_bins&&e==this.minVisibleIndex?this.is_streaming&&this._updateHeights(i):(this.minVisibleIndex=e,this._prev_num_bins=this.bins.length,this._drawHistogram(),this._slider&&this._updateSlider()):(this.bins.length!==this._prev_num_bins||e!==this.minVisibleIndex)&&(this.minVisibleIndex=e,this._prev_num_bins=this.bins.length,this._drawHistogram(),this._slider&&this._updateSlider()))},_updateFullTimeExtent:function(i){this.fullTimeExtent[0]||(this.fullTimeExtent[0]=i),this.fullTimeExtent[1]||(this.fullTimeExtent[1]=i),i<this.fullTimeExtent[0]&&(this.fullTimeExtent[0]=i),i>this.fullTimeExtent[1]&&(this.fullTimeExtent[1]=i)},_getBin:function(i){var t=this._timeInterval||this._resolution,e=Math.floor((i-this.fullTimeExtent[0])/this._num_resolutions[t]);return e},_add:function(i){var t=this._timeInterval||this._resolution;this.is_streaming||this.load_count++,this._updateFullTimeExtent(i);var e,s=this._getBin(i),n=s-this._resolutions[t].length;if(n>=1)for(e=0;n>e;e++)this._resolutions[t].push(0);this._updateAllResolutions(s),this._slider||this._createSlider()},_remove:function(i){var t=this._getBin(i);this._resolutions.esriTimeUnitsSeconds[t]--,this._updateAllResolutions(t,!0),this._active||this._updateSlider()},_createSlider:function(){var i=this,t=a([r,g],{templateString:T});this._slider=new t({name:"histogram-slider",values:[0,100],minimum:0,maximum:100,showButtons:!1,intermediateChanges:!0,discreteValues:2,style:"width:100%",onChange:function(t){var e=Math.floor(t[0]),s=Math.floor(t[1]);i._getUserExtents(e,s),i._disableBins(e,s)}},"histogram-slider")},_updateSlider:function(){this._slider.discreteValues=this.histogram.length+1,this._slider.maximum=this.histogram.length,this._slider._setValueAttr([0,this.histogram.length],!1,!1)},_getUserExtents:function(i,t){var s=this._timeInterval||this._resolution,n=new e;n.startTime=new Date(this.fullTimeExtent[0]+(i+this.minVisibleIndex)*this._num_resolutions[s]),n.endTime=new Date(this.fullTimeExtent[0]+(t+this.minVisibleIndex)*this._num_resolutions[s]),this._updateDateRange(n),this.onTimeExtentChange(n)},_drawHistogram:function(){var i=this,t=[];this.histogramSurface?this.histogramSurface.clear():this.histogramSurface=c.createSurface("histogram-container",m.byId(this.element.id).offsetWidth,100);var e=Math.max.apply(Math,this.bins),s=this.histogramSurface._parent.clientWidth/(this.bins.length-this.minVisibleIndex),n=s/10,r=0;this.histogram=[];var o,h;for(o=this.minVisibleIndex,h=this.bins.length;h>o;o++){var a=this.bins[o]/e*100,l=100-a,u=this.histogramSurface.createRect({x:r,y:l,width:s-n,height:a}).setFill(this._color);this.histogram.push(u),r+=s,t.push(r),u.bin=this.bins[o],u.x=r-s,u.num=o,u.max=e,u.on("mouseover",function(t){i._showTipForBin(t.gfxTarget.bin,t.gfxTarget.num,t.gfxTarget.x)}),u.on("mouseout",function(){i._hideTipForBin()})}this._updateTimeTicks(t),this._updateScaleBar(e),this.onUpdate()},_updateHeights:function(i){var t,e,s,n,r=Math.max.apply(Math,this.bins);if(r!==this._max_bin_height)for(s=this.minVisibleIndex,n=this.histogram.length;n>s;s++)t=this.bins[s]/r*100,e=100-t,this.histogram[s].setShape({y:e,height:t});else t=this.bins[i]/r*100,e=100-t,this.histogram[i-this.minVisibleIndex].setShape({y:e,height:t});this._updateScaleBar(r),this._max_bin_height=r},_updateTimeTicks:function(i){var e,s,n,r=this._timeInterval||this._resolution,o=Math.floor(this.histogram.length/3);for(n=0;2>n;n++)this.histogramSurface.createLine({x1:i[o],y1:0,x2:i[o],y2:this.histogramSurface._parent.clientHeight}).setStroke(this._textColor),e=new Date(this.fullTimeExtent[0]+(o+1-this.minVisibleIndex)*this._num_resolutions[r]),s=t.substitute({date:e.getTime()},this._dateTemplate),this.histogramSurface.createText({x:i[o]+2,y:10,text:s}).setFont({size:"12px"}).setFill(this._textColor),o+=o},_updateDateRange:function(i){var e=t.substitute({date:new Date(i.startTime).getTime()},this._dateTemplate),s=t.substitute({date:new Date(i.endTime).getTime()},this._dateTemplate),n=d.substitute(f.widgets.HistogramTimeSlider.dateRange,{start:e,end:s});m.byId("histogram-range").innerHTML=n},_disableBins:function(i,t){var e=this;return 0===i&&t===this.histogram.length?(this.histogram[0].setFill(this._color),void this.histogram[this.histogram.length-1].setFill(this._color)):void o.forEach(this.histogram,function(s,n){s.setFill(i>n?"rgb(216,216,216)":n>=t?"rgb(216,216,216)":e._color)})},_updateScaleBar:function(i){this.scaleLeft?(this.scaleLeft.clear(),this.scaleRight.clear()):(this.scaleRight=c.createSurface("scale-bar-right",45,110),this.scaleLeft=c.createSurface("scale-bar-left",45,110));var t,e,s;t=i>99?e=10:20,s=i/2>99?s=10:20,this.scaleLeft.createLine({x1:40,y1:5,x2:40,y2:130}).setStroke("rgb(82, 95, 109)"),this.scaleLeft.createLine({x1:40,y1:5,x2:37,y2:5}).setStroke("rgb(82, 95, 109)"),this.scaleLeft.createLine({x1:40,y1:60,x2:37,y2:60}).setStroke("rgb(82, 95, 109)"),this.scaleLeft.createText({x:t,y:10,text:i}).setFont({size:"14px"}).setFill(this._textColor),this.scaleLeft.createText({x:s,y:65,text:Math.floor(i/2)}).setFont({size:"14px"}).setFill(this._textColor),this.scaleRight.createLine({x1:0,y1:5,x2:0,y2:130}).setStroke("rgb(82, 95, 109)"),this.scaleRight.createLine({x1:0,y1:5,x2:3,y2:5}).setStroke("rgb(82, 95, 109)"),this.scaleRight.createLine({x1:0,y1:60,x2:3,y2:60}).setStroke("rgb(82, 95, 109)"),this.scaleRight.createText({x:4,y:10,text:i}).setFont({size:"14px"}).setFill(this._textColor),this.scaleRight.createText({x:4,y:65,text:Math.floor(i/2)}).setFont({size:"14px"}).setFill(this._textColor)},_showTipForBin:function(i,e,s){var n=this._timeInterval||this._resolution;if(!this._active){var r=new Date(this.fullTimeExtent[0]+(e-this.minVisibleIndex)*this._num_resolutions[n]);r=t.substitute({date:r.getTime()},this._dateTemplate);var o=new Date(this.fullTimeExtent[0]+(e+1-this.minVisibleIndex)*this._num_resolutions[n]);o=t.substitute({date:o.getTime()},this._dateTemplate);var h=d.substitute(f.widgets.HistogramTimeSlider.count,{count:i});m.byId("focusTip").innerHTML="<span style='font-size:8pt'>"+r+" to "+o+"</span> <br /> "+h,u.set("focusTip",{display:"block",left:s+"px",top:"-10px"})}},_hideTipForBin:function(){m.byId("focusTip").style.display="none"},onTimeExtentChange:function(){},onUpdate:function(){}});return _("extend-esri")&&l.setObject("dijit.HistogramTimeSlider",b,i),b});