import React, {useState, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const center_coord = [-73.9, 41]
const zoom = 9
const radius = 2500

function App() {
  const mapContainer = useRef(null);
  const [viewState, setViewState] = useState({
    center: center_coord,
    zoom: zoom,
    pitch: 45
  })
  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      ...viewState,
    })

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div ref = {mapContainer} 
    style={{width: "100%", height: "100%", position: "absolute"}}>
      
    </div>
  );
}

export default App;
