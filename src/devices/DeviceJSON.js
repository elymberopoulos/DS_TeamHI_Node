
var json;
function setJSONObject(json)
{
    this.json = json;
}

function getJSONObject()
{
    if(typeof json === "undefined")
    {

        return "";
    }
    else
    {

        return json;
    }
}

module.exports = 
{
    setJSONObject:setJSONObject,
    getJSONObject:getJSONObject
}