window.addEventListener("load", () => {
  let long;
  let lat;
  let tempDescription = document.getElementById('descp');
  let tempDescription1=document.getElementById('descp-main');
  let tempDegree = document.getElementById('temp');
  let location_timezome = document.getElementById('location');
  let freetips=document.querySelector(".tips");
  let icon=document.getElementById('display-icon');
  

  var icon_res;
  // let tempIcon = document.querySelector(".temp-icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      // lat=-25;
      // long=90;
      // console.log(position);
      console.log(lat);
      console.log(long);
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=aa4f868fe5de52ff035aae870ccadb9c&units=metric`;
      console.log(api);
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          tempDegree.textContent = `${Math.round(temp)}°C`;
          const { description ,main,icon} = data.weather[0];
          tempDescription.textContent = description;
          tempDescription1.textContent=main;
          icon_res=icon;
          const { name } = data;
          location_timezome.textContent = `At ${name.replace(/ā/g,'a')}`;
          console.log(location_timezome);
          console.log(icon_res);
          weatherIcon(icon_res);
          timer();
          getDate();
          console.log(freetips);
        });
    });
  }

  function weatherIcon(icondata){
    if (icondata=='01d' || icondata=='01n'){
      icon.className="fad fa-sun";
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')";
      freetips.textContent='💡 Sky is Clear';
    }
    else if(icondata=='02d' || icondata=='02n'){
      icon.className="fad fa-sun-cloud";
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1511747779856-fd751a79aa22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
      freetips.textContent='💡 Compelete Your Work';
    }
    else if(icondata=='03d' || icondata=='03n'){
      icon.className="fad fa-cloud";
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1536543411350-41e735c940cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80')";
      freetips.textContent='💡 Always Be Happy';
    }
    else if(icondata=='04d' || icondata=='04n'){
      icon.className="fad fa-clouds";
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1625429912134-06694c9d1813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80')";
      freetips.textContent='💡 Carry an Umbrella ☂';
    }
    else if(icondata=='09d' || icondata=='09n'){
      icon.className="fad fa-cloud-drizzle";
      document.body.style.backgroundImage="url('https://images.unsplash.com/18/trickle.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')";
      freetips.textContent='💡 Carry an Umbrella ☂';
    }
    else if(icondata=='10d' || icondata=='10n'){
      icon.className="fad fa-cloud-showers-heavy";
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
      freetips.textContent='💡 Carry an Umbrella ☂';
    }
    else if(icondata=='11d' || icondata=='11n'){
      icon.className="fad fa-thunderstorm";
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1511149755252-35875b273fd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
      freetips.textContent='💡 Stay at Home';
    }
    else if(icondata=='13d' || icondata=='13n'){
      icon.className="fad fa-snowflakes";
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
      freetips.textContent='💡 Wear your Sweater';
    }
    else if(icondata=='50d' || icondata=='50n'){
      icon.className="fad fa-water";
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1514920735211-8c697444a248?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')";
      freetips.textContent='💡 Get some Coffee ☕';
    }
    else{
      icon.className="fal fa-sun-cloud";
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1532203512255-3c9c9d666c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80')";
      freetips.textContent='Dot';
    }
  }

// Date and time 
function timer() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var sec = currentTime.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

   var t_str = hours + ":" + minutes + ":" + sec + " ";

  
  document.getElementById("time").innerHTML = t_str;
  setTimeout(timer, 1000);
}

function getDate(){
    const d = new Date();
    let date;
    date=document.getElementById('date').textContent = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
    console.log(date);
}

});
