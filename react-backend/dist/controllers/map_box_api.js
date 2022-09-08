"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMap = void 0;
const route_1 = require("../models/route");
/**
 *
 * @route GET /api/route
 */
const api_key = process.env.MAPBOX_API;
const getMap = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Response Body: ", req.body);
    const start = req.body.start_place;
    const end = req.body.end_place;
    const discipline = req.body.discipline;
    const routeObject = {
        host_id: req.body.host_id,
        discipline: discipline,
        duration: null,
        distance: null,
        title: req.body.title,
        description: req.body.description,
        startTime: req.body.startTime,
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        img: null,
        participants: []
    };
    const URL = `https://api.mapbox.com/directions/v5/mapbox/${discipline}/${start.lng},${start.lat};${end.lng},${end.lat}?geometries=polyline&overview=full&annotations=duration&access_token=${api_key}`;
    console.log(URL);
    fetch(URL)
        .then((response) => response.json())
        .then((data) => getStaticMapURL(data, start, end, routeObject))
        .then((route) => res.json(route))
        .catch((err) => console.error("Error: ", err));
});
exports.getMap = getMap;
// This should get the static map
const getStaticMapURL = (data, start, end, routeObject) => __awaiter(void 0, void 0, void 0, function* () {
    const line = encodeURIComponent(data.routes[0].geometry);
    const URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-embassy+9ed4bd(${start.lng},${start.lat}),pin-s-racetrack+000(${end.lng},${end.lat}),path-5+f44-0.8(${line})/auto/500x300@2x?access_token=${api_key}`;
    // Adding new attributes to rout object
    // If running times duration by 2 + converting to minutes
    if (routeObject.discipline === "running") {
        routeObject.duration = (Math.round(data.routes[0].duration * 2) / 60).toFixed(0);
    }
    else {
        routeObject.duration = Math.round(data.routes[0].duration / 60).toFixed(0);
    }
    // Converting to Miles
    routeObject.distance = (Math.round(data.routes[0].distance) / 1609.34).toFixed(2);
    routeObject.img = URL;
    const route = new route_1.Route(routeObject);
    route.save();
    return route;
});
//# sourceMappingURL=map_box_api.js.map