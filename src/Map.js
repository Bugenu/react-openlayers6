import React, { Component } from "react";
import {Control} from 'ol/control';

require("ol/ol.css");
var ol_Map = require("ol/Map").default;
var ol_layer_Tile = require("ol/layer/Tile").default;
var ol_source_OSM = require("ol/source/OSM").default;
var ol_View = require("ol/View").default;


class Map extends Component {
  constructor(props) {
    super(props);

    // Called first, initialise empty map object
    this.map = {};
  }

  // Called third, declare map in this.map and then add custom control
  componentDidMount() {
    this.map = new ol_Map({
      target: "map",
      layers: [
        new ol_layer_Tile({
          source: new ol_source_OSM()
        })
      ],
      view: new ol_View({
        center: [0, 0],
        zoom: 2
      })
    });


    // Print date select input to console for now
    function datefunc(selected_date){
      var date = selected_date;
      console.log(date);
    }

    // Create date input element
    var dateslctr = document.createElement('input');
    dateslctr.type = 'date';
    dateslctr.oninput = function() {datefunc(dateslctr.value)};

    // Create divs and append date input as child
    var element = document.createElement('div');
    element.className = 'date_select ol-unselectable ol-control';
    element.innerHTML = 'Layer Select';
    element.appendChild(dateslctr);

    //A custom control which has container holding input elements etc
    var controlPanel = new Control({
      element: element
    });

    // Add control to map
    this.map.addControl(controlPanel);
  }

  // Called second, tell react what to rendor. Needs to be done before map declaration otherwise target doesn't exist yet
  render() {
    return (
      <div className="App">
        <div id="map" className="map" />
      </div>
    );
  }
}

export default Map;