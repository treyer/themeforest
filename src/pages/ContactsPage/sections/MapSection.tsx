import * as React from "react";
import Map, { Source, Layer } from "react-map-gl";

import Section from "components/elements/Section";
import { SectionType } from "types/index";
import Flex from "components/elements/Flex";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [23.7637, 52.0997] },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [21.0122, 52.2297] },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.4378, 50.0755] },
    },
  ],
};

const layerStyle = {
  id: "point",
  type: "circle" as "sky",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

const MapSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={120}>
      <Flex height={460}>
        <Map
          initialViewState={{
            longitude: 21.0122,
            latitude: 52.2297,
            zoom: 5,
          }}
          style={{ width: "100%", height: 460 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env["REACT_APP_MAPBOX_ACCESS_TOKEN"] || ""}
        >
          <Source id="my-data" type="geojson" data={geojson as any}>
            <Layer {...(layerStyle as any)} />
          </Source>
        </Map>
      </Flex>
    </Section>
  );
};

export default MapSection;
