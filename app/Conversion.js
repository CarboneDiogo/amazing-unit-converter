function Conversion (convertFrom, convertTo, valuesToConvert) {

    const kgToLb = (kg) => { return kg.map(kg*2.2046) }
    const lbToKg = (lb) => { return lb.map(lb/2.2046)}
    const kmToMile = (km) => {return km.map(km*0.621371)}
    const mileToKm = (mile) => {return mile.map(mile*1.609344)}
    const cToF = (c) => {return c.map((c*1.8)+32)}
    const fToC = (f) => {return f.map((f-32)*(5/9))}

    const conversion = [convertFrom, convertTo]

    if (convertFrom == "kg" && convertTo == "lb")
    {
        
    }

}