import { Request, Response, NextFunction } from "express";
import { Route } from '../models/route';

/**
 *
 * @route GET /api/route
 */
const api_key = process.env.MAPBOX_API;


export const getMap = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log("Response Body: ", req.body);

  

  const start = req.body.start_place
  const end = req.body.end_place;
  const discipline = req.body.discipline;
  const routeObject = {
    host_id: req.body.host_id,
    discipline: discipline,
    duration: null,
    distance: null,
    date: req.body.date,
    title: req.body.title,
    description: req.body.description,
    startTime: req.body.startTime,
    startPoint: req.body.startPoint,
    endPoint: req.body.endPoint,
    img: null,
    participants: []
  }
  const URL = `https://api.mapbox.com/directions/v5/mapbox/${discipline}/${start.lng},${start.lat};${end.lng},${end.lat}?geometries=polyline&overview=full&annotations=duration&access_token=${api_key}`;
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => getStaticMapURL(data, start, end, routeObject))
    .then((route) => res.json(route))
    .catch((err) => console.error("Error: ", err));
};

// This should get the static map

const getStaticMapURL = async (data, start, end, routeObject) => {
  const line = encodeURIComponent(data.routes[0].geometry);
  
  const URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-embassy+9ed4bd(${start.lng},${start.lat}),pin-s-racetrack+000(${end.lng},${end.lat}),path-5+f44-0.8(${line})/auto/500x300@2x?access_token=${api_key}`;
  // Adding new attributes to rout object
  // If running times duration by 2 + converting to minutes
  if (routeObject.discipline === "running") {
    routeObject.duration = (Math.round(data.routes[0].duration * 2) / 60).toFixed(0)
  }
  else {
    routeObject.duration = Math.round(data.routes[0].duration / 60).toFixed(0)
  }
  // Converting to Miles
  
  
  routeObject.distance = (Math.round(data.routes[0].distance) / 1609.34).toFixed(2)
  
  
  routeObject.img = URL
  const route = new Route(routeObject)
  route.save()
  return route
};
