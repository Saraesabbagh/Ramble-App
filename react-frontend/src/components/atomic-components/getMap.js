// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { React } from "react";

// const Map = () => {};



export const GetMap = () => {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState();

    React.useEffect(() => {
    if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
    }
    }, [ref, map]);

}
