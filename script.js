async function fetchWeather () {
    let city = document.getElementById("input").value
    const resp = await fetch("https://api.weatherapi.com/v1/current.json?key=2ade6172110647218ae90723231908&q="+city, {
        origin: "cros" });
    const respData = await resp.json();
    console.log(respData)
    document.getElementById("city").innerHTML=respData?.location?.name
    document.getElementById("temp").innerHTML=respData?.current?.temp_c + " °C"
    document.getElementById("wind").innerHTML=respData?.current?.wind_kph +" Km/Hr"
    document.getElementById("condition").innerHTML=respData?.current?.condition?.text
}