import * as React from "react";
import Map from "react-map-gl";

import Section from "components/elements/Section";
import { SectionType } from "types/index";
import Flex from "components/elements/Flex";

const MapSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={120}>
      <Flex height={460}>
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: "100%", height: 460 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env["REACT_APP_MAPBOX_ACCESS_TOKEN"] || ""}
        />
      </Flex>
    </Section>
  );
};

export default MapSection;
