// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/maybe","../Extent","./aaBoundingRect"],(function(n,t,i,e,a){function r(n){return void 0===n&&(n=t.ZERO),[n[0],n[1],n[2],n[3],n[4],n[5]]}function u(n,t,i,e,a,u,o){return void 0===o&&(o=r()),o[0]=n,o[1]=t,o[2]=i,o[3]=e,o[4]=a,o[5]=u,o}function o(n){return n[0]>=n[3]?0:n[3]-n[0]}function m(n){return n[1]>=n[4]?0:n[4]-n[1]}function h(n){return n[2]>=n[5]?0:n[5]-n[2]}function f(n,t){return Math.max(t[0],n[0])<=Math.min(t[3],n[3])&&Math.max(t[1],n[1])<=Math.min(t[4],n[4])&&Math.max(t[2],n[2])<=Math.min(t[5],n[5])}function M(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function c(n){return 6===n.length}Object.defineProperty(t,"__esModule",{value:!0}),t.create=r,t.fromValues=u,t.fromExtent=function(n,t){return void 0===t&&(t=r()),t[0]=n.xmin,t[1]=n.ymin,t[2]=n.zmin,t[3]=n.xmax,t[4]=n.ymax,t[5]=n.zmax,t},t.toExtent=function(n,t){var i=isFinite(n[2])||isFinite(n[5]);return new e(i?{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],zmin:n[2],zmax:n[5],spatialReference:t}:{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],spatialReference:t})},t.fromMinMax=function(n,t,i){return void 0===i&&(i=r()),i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=t[0],i[4]=t[1],i[5]=t[2],i},t.expandPointInPlace=function(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[3]&&(n[3]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[4]&&(n[4]=t[1]),t[2]<n[2]&&(n[2]=t[2]),t[2]>n[5]&&(n[5]=t[2])},t.expand=function(n,t,i){return void 0===i&&(i=n),c(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.min(n[2],t[2]),i[3]=Math.max(n[3],t[3]),i[4]=Math.max(n[4],t[4]),i[5]=Math.max(n[5],t[5])):a.is(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[3]=Math.max(n[3],t[2]),i[4]=Math.max(n[4],t[3])):2===t.length?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[3]=Math.max(n[3],t[0]),i[4]=Math.max(n[4],t[1])):3===t.length&&(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.min(n[2],t[2]),i[3]=Math.max(n[3],t[0]),i[4]=Math.max(n[4],t[1]),i[5]=Math.max(n[5],t[2])),i},t.expandWithBuffer=function(n,t,i,e,a){void 0===i&&(i=0),void 0===e&&(e=t.length/3),void 0===a&&(a=n);for(var r=n[0],u=n[1],o=n[2],m=n[3],h=n[4],f=n[5],M=0;M<e;M++)r=Math.min(r,t[i+3*M]),u=Math.min(u,t[i+3*M+1]),o=Math.min(o,t[i+3*M+2]),m=Math.max(m,t[i+3*M]),h=Math.max(h,t[i+3*M+1]),f=Math.max(f,t[i+3*M+2]);return a[0]=r,a[1]=u,a[2]=o,a[3]=m,a[4]=h,a[5]=f,a},t.expandWithOffset=function(n,t,i,e,a){return void 0===a&&(a=n),a[0]=Math.min(n[0],n[0]+t),a[3]=Math.max(n[3],n[3]+t),a[1]=Math.min(n[1],n[1]+i),a[4]=Math.max(n[4],n[4]+i),a[2]=Math.min(n[2],n[2]+e),a[5]=Math.max(n[5],n[5]+e),a},t.expandWithNestedArray=function(n,t,i,e){void 0===e&&(e=n);var a=t.length,r=n[0],u=n[1],o=n[2],m=n[3],h=n[4],f=n[5];if(i)for(var M=0;M<a;M++){var c=t[M];r=Math.min(r,c[0]),u=Math.min(u,c[1]),o=Math.min(o,c[2]),m=Math.max(m,c[0]),h=Math.max(h,c[1]),f=Math.max(f,c[2])}else for(M=0;M<a;M++){c=t[M];r=Math.min(r,c[0]),u=Math.min(u,c[1]),m=Math.max(m,c[0]),h=Math.max(h,c[1])}return e[0]=r,e[1]=u,e[2]=o,e[3]=m,e[4]=h,e[5]=f,e},t.allFinite=function(n){for(var t=0;t<6;t++)if(!isFinite(n[t]))return!1;return!0},t.width=o,t.depth=m,t.height=h,t.diameter=function(n){var t=o(n),i=h(n),e=m(n);return Math.sqrt(t*t+i*i+e*e)},t.center=function(n,t){return void 0===t&&(t=[0,0,0]),t[0]=n[0]+o(n)/2,t[1]=n[1]+m(n)/2,t[2]=n[2]+h(n)/2,t},t.size=function(n,t){return void 0===t&&(t=[0,0,0]),t[0]=o(n),t[1]=m(n),t[2]=h(n),t},t.maximumDimension=function(n){return Math.max(o(n),h(n),m(n))},t.containsPoint=function(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]},t.containsPointWithMargin=function(n,t,i){return t[0]>=n[0]-i&&t[1]>=n[1]-i&&t[2]>=n[2]-i&&t[0]<=n[3]+i&&t[1]<=n[4]+i&&t[2]<=n[5]+i},t.contains=function(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[3]<=n[3]&&t[4]<=n[4]&&t[5]<=n[5]},t.intersects=f,t.intersectsClippingArea=function(n,t){return!!i.isNone(t)||f(n,t)},t.offset=function(n,t,i,e,a){return void 0===a&&(a=n),a[0]=n[0]+t,a[1]=n[1]+i,a[2]=n[2]+e,a[3]=n[3]+t,a[4]=n[4]+i,a[5]=n[5]+e,a},t.getMin=function(n,t){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},t.getMax=function(n,t){return t[0]=n[3],t[1]=n[4],t[2]=n[5],t},t.setMin=function(n,t,i){return void 0===i&&(i=n),i[0]=t[0],i[1]=t[1],i[2]=t[2],i!==n&&(i[3]=n[3],i[4]=n[4],i[5]=n[5]),i},t.setMax=function(n,t,i){return void 0===i&&(i=n),i[3]=t[0],i[4]=t[1],i[5]=t[2],i!==n&&(i[0]=n[0],i[1]=n[1],i[2]=n[2]),n},t.set=M,t.empty=function(n){return n?M(n,t.NEGATIVE_INFINITY):r(t.NEGATIVE_INFINITY)},t.toRect=function(n,t){return t||(t=a.create()),t[0]=n[0],t[1]=n[1],t[2]=n[3],t[3]=n[4],t},t.fromRect=function(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n},t.is=c,t.isPoint=function(n){return 0===o(n)&&0===m(n)&&0===h(n)},t.equals=function(n,t,e){if(i.isNone(n)||i.isNone(t))return n===t;if(!c(n)||!c(t))return!1;if(e){for(var a=0;a<n.length;a++)if(!e(n[a],t[a]))return!1}else for(a=0;a<n.length;a++)if(n[a]!==t[a])return!1;return!0},t.wrap=function(n,t,i,e,a,r){return u(n,t,i,e,a,r,x)},t.POSITIVE_INFINITY=[-1/0,-1/0,-1/0,1/0,1/0,1/0],t.NEGATIVE_INFINITY=[1/0,1/0,1/0,-1/0,-1/0,-1/0],t.ZERO=[0,0,0,0,0,0];var x=r()}));