

const weatherform=document.querySelector(".weatherform");
const inputtext=document.querySelector(".inputtext");
const weathercard=document.querySelector(".weathercard");
const apikey="7f0824c92682f1fea120b3d00e875be4";


weatherform.addEventListener("submit",async event=>{
    event.preventDefault();
    const city=inputtext.value; 
    if(city){
        try{
            const data=await weatherdata(city);
           displaydata(data);

        }
        catch(error){
            console.error(error);
            errorDisplay(error);

        }

    }
    else {
        errorDisplay("Please provide the city name");
    }


})

async function weatherdata(city){

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
const response=await fetch(apiUrl);
if(!response.ok){
    throw new Error("Please give the correct city name");
}
return await response.json();

}

function displaydata(data){
    
    
    const { name : city,
        main :{humidity,temp},
        weather:[{description,id
        }]

    }=data;
    weathercard.textContent="";
    weathercard.style.display="flex";
    const citydisplay=document.createElement("h1");
    const tempdisplay=document.createElement("p");
    const humiddisplay=document.createElement("p");
    const descdisplay=document.createElement("p");
    const emojidisplay=document.createElement("p");

    citydisplay.textContent=city;
    tempdisplay.textContent=`${(temp-273.15).toFixed(1)}°C`;
    humiddisplay.textContent=`Humidity:${humidity}`;
    descdisplay.textContent=`${(description).charAt(0).toUpperCase()+(description).slice(1)}`;
    emojidisplay.textContent=weatheremoji(id);



    citydisplay.classList.add("cityname");
    tempdisplay.classList.add("temperature");
    humiddisplay.classList.add("humidity");
    descdisplay.classList.add("weather");
    emojidisplay.classList.add("symbol");
    



    weathercard.appendChild(citydisplay);
    weathercard.appendChild(tempdisplay);
    weathercard.appendChild(humiddisplay);
    weathercard.appendChild(descdisplay);
    weathercard.appendChild(emojidisplay)
    

    
    
    


}

function weatheremoji(weatherId){

switch(true){
    case (weatherId >=200 && weatherId<300):
        return "⛈";
       
    case (weatherId >=300 && weatherId<500):
        return "⛈";
        
    case (weatherId>=500 && weatherId <600):
        return "🌧";
      
    case (weatherId>=600 && weatherId<700):
        return "❄";
       
    case (weatherId>=700 && weatherId<800):
        return "🌪";
    case (weatherId===800):
        return "☀";
    case (weatherId>800):
        return "☁";
    default:
        return "⁉";
}




}

function errorDisplay(error){

const displayerror=document.createElement("p");
displayerror.textContent=error;
displayerror.classList.add("error");
weathercard.textContent="";
weathercard.style.display="flex";
weathercard.appendChild(displayerror);






}
