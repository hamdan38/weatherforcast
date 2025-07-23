function bag(weatherData){
document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    switch (weatherData.weather[0].main) {
        case 'Clear':{
            document.body.style.backgroundImage = "url('clear.jpg')";
            break;}
        case 'Clouds':{
            document.body.style.backgroundImage = "url('cloud.jpg')";
            break;}
        case 'Rain':{
            document.body.style.backgroundImage = "url('rain.jpg')";
            break;}
        case 'Mist':{
            document.body.style.backgroundImage = "url('mist.jpg')";
            break;   } 
        case 'Thunderstorm':{
            document.body.style.backgroundImage = "url('thunder.jpg')";
            break;}
           case 'Snow':{
            document.body.style.backgroundImage = "url('snow.jpg')";
            break;}

        default:{

        }
    }
}

async function weth(city) {
    const apikey="d449c67dff53937090494a6565e2b564";
 try{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        const data =await res.json();
        console.log(data);
        console.log(data.weather[0].main);
        document.getElementById("temp").textContent=`temp:${Math.round(data.main.temp-273.15)}*C`;
        document.getElementById("hum").textContent=`humidity:${data.main.humidity}`;
        document.getElementById("pre").textContent=`pressure:${data.main.pressure}`;
        document.getElementById("wea").textContent=`Weather:${data.weather[0].main}`;
        bag(data);
 }
 catch{
    console.log("error");
    document.getElementById("temp").textContent=error.value;
 }
}
document.getElementById('btn').addEventListener('click', function() {
    const inp = document.getElementById('inp').value;
    weth(inp);
});

