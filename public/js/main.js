const submitbtn = document.getElementById('submitbtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const day=document.getElementById('day');
const today_date=document.getElementById('today_date');

const getcurrentday=()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    let currentTime = new Date();
    day.innerText=`${weekday[currentTime.getDay()]}`;
};
getcurrentday();

const getcurrentdate=()=>{
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
today_date.innerText=`${today}`;
}
getcurrentdate();
const getinfo=async(event) =>
{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal==""){
city_name.innerText=`plz write the name before search`;
    }
else
{    try {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=86ce86c3ef5da2038feea9231b925634&units=metric`;
    const response =await fetch(url);
    const data =await response.json();
    console.log(data);
    const arrData=[data];
    city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
temp.innerText=arrData[0].main.temp;
temp_status.innerText=arrData[0].weather[0].main;


} catch (error) {

    city_name.innerText=`plz enter city name properly`;
}
    
}

}

submitbtn.addEventListener('click',getinfo);


