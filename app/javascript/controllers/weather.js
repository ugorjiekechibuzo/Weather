
window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/1d9f5c0c4e4c9a5b5f0c1e2d6b8b6d8b/${lat},${long}`;

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });



    });





  }
});
