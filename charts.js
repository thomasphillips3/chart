(function(){
  console.log("yo");
  var context = document.getElementById("myChart").getContext("2d");
  var myNewChart = new Chart(context).PolarArea(data);

}());
