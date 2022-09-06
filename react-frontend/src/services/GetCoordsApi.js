
const ApiKey = "";

export const GeoCooordsApi = async(placeId) => {
    const journeyPointCoordsUrl = `https://maps.googleapis.com/maps/api/geocode/json?${placeId}&key=${ApiKey}`
    
    const response = await fetch(journeyPointCoordsUrl, {method: "GET",
})

const body = await response.json()
console.log(body);

return body;

}
