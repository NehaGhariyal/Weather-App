let searchbtn=document.querySelector(".searchbtn")
let search=document.querySelector(".search");
let degree=document.querySelector(".degnum");
let city=document.querySelector(".city");
let humidity=document.querySelector(".humiditypercent");
let wind=document.querySelector(".windpercent");
let keyval;
searchbtn.addEventListener("click",()=>{
keyval=search.value;
let apidata=`http://api.weatherapi.com/v1/forecast.json?key= fcbf1f6759664df5b80150818233110&q=${keyval}&days=1&aqi=no&alerts=no`;
fetch(apidata).then(response=>{
    if(response.ok){
        return response.json();
    }else{
        console.log("Error fetching data. Try again later.")
    }
}).then(data=>{
    console.log(data);
    degree.innerHTML=`${data.forecast.forecastday[0].day.maxtemp_c}`;
    city.innerHTML=`${data.location.country}`;
    humidity.innerHTML=`${data.current.humidity}`;
    wind.innerHTML=`${data.current.wind_kph}`;
}).catch(error=>{
    console.log(error);
})
})
