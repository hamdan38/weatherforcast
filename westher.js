
async function weth(city) {
    const apikey="d449c67dff53937090494a6565e2b564";
 try{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        const data =await res.json();
        console.log(data);
        document.getElementById("temp").textContent=`temp:${data.main.temp}*F`;
        document.getElementById("hum").textContent=`humidity:${data.main.humidity}`;
        document.getElementById("pre").textContent=`pressure:${data.main.pressure}`;
 }
 catch{
    console.log("error");
 }
}
document.getElementById('btn').addEventListener('click', function() {
    const inp = document.getElementById('inp').value;
    weth(inp);
});
