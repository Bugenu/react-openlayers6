import React, { Component } from "react";

require("ol/ol.css");
var ol_Map = require("ol/Map").default;
var ol_layer_Tile = require("ol/layer/Tile").default;
var ol_source_OSM = require("ol/source/OSM").default;
var ol_View = require("ol/View").default;


class App extends Component {
  constructor(props) {
    super(props);

    this.map = {};
  }

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
  }

  render() {
    return (
      <div className="App">
        <div id="map" className="map" />
      </div>
    );
  }
}

export default App;