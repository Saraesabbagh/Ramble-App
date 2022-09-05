const ApiKey = "AIzaSyCVwRHHdtd6XynKpgTNl4SQOM4jT_pTaGk";

export const GeoCoordsApi = async(journeyPoint) => {
    const getPlaceURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters`
    
    const response = await fetch(getPlaceURL, {method: "GET",
})

const body = await response.json()
console.log(body);

return body;

}