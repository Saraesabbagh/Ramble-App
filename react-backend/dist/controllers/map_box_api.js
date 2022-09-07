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
/**
 *
 * @route GET /api/route
 */
const api_key = process.env.MAPBOX_API;
// export const getMap = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   console.log("Response Body: ", req.body);
//   const start = req.body.start_coordinates;
//   const end = req.body.end_coordinates;
//   const discipline = req.body.discipline;
//   const URL = `https://api.mapbox.com/directions/v5/mapbox/${discipline}/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=polyline&overview=full&annotations=duration&access_token=${api_key}`;
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => getStaticMapURL(data, start, end))
//     .then((url) => res.send(url))
//     .catch((err) => console.error("Error: ", err));
// };
const getMap = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Response Body: ", req.body);
    const start = req.body.start_coordinates;
    const end = req.body.end_coordinates;
    const discipline = req.body.discipline;
    const URL = `https://api.mapbox.com/directions/v5/mapbox/${discipline}/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=polyline&overview=full&annotations=duration&access_token=${api_key}`;
    console.log(URL);
    fetch(URL)
        .then((response) => response.json())
        .then((data) => getStaticMapURL(data, start, end))
        .then((url) => res.send(url))
        .catch((err) => console.error("Error: ", err));
});
exports.getMap = getMap;
// This should get the static map
const getStaticMapURL = (route, start, end) => __awaiter(void 0, void 0, void 0, function* () {
    const line = encodeURIComponent(route.routes[0].geometry);
    const duration = route.routes[0].duration;
    const distance = route.routes[0].distance;
    const URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(${start[0]},${start[1]}),pin-s-b+000(${end[0]},${end[1]}),path-5+f44-0.5(${line})/auto/500x300?access_token=${api_key}`;
    return {
        url: URL,
        duration: duration,
        distance: distance,
    };
});
// const image = new Image({
//   user: users[0].id,
//   img: {
//     data: fs.readFileSync(defaultImage, "base64"),
//     contentType: "image/png",
//   },
// });
//# sourceMappingURL=map_box_api.js.map