!function o(e,r,n){function t(i,c){if(!r[i]){if(!e[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var l=r[i]={exports:{}};e[i][0].call(l.exports,function(o){var r=e[i][1][o];return t(r||o)},l,l.exports,o,e,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)t(n[i]);return t}({1:[function(o,e,r){d3.json("./shapefiles/contours2016.json",function(o,e){mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var r=new mapboxgl.Map({container:"map_blocks",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-93.222285,44.884755],zoom:9.9,minZoom:2});r.addControl(new mapboxgl.NavigationControl),r.on("load",function(){$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by city or address"),geocoder2.on("result",function(o){map2.flyTo({center:o.result.geometry.coordinates,zoom:14})}),r.addSource("contours",{type:"geojson",data:e}),r.addLayer({id:"contours-layer",interactive:!0,source:"contours",layout:{},type:"line",paint:{"line-color":{property:"Contour",type:"categorical",stops:[[55,"#F2D2A4"],[60,"#E07242"],[65,"#C2421F"],[70,"#822010"]]},"line-width":2}},"place-neighbourhood")})})},{}]},{},[1]);