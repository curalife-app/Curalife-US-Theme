var req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', 'https://geo.curalife.com/', true);
req.onload = function() {
  var json = JSON.parse(req.responseText);
  var trycuralifeCountries = ['KW', 'SA', 'QA', 'OM', 'BH', 'AE'];
  
  function whereAmIFrom() {
      return json.country;
  }
  
  window.whereAmIFrom = whereAmIFrom;

  if(!window.location.href.includes("checkout-diabetic") && !window.location.href.includes("admin") && !window.location.href.includes("parcelpanel")) {
    if(trycuralifeCountries.includes(whereAmIFrom())){
      window.location.hostname = 'trycuralife.com';
    }
    else if(whereAmIFrom() == 'RO'){
        window.location.hostname = 'curalife.ro';}
    else if (whereAmIFrom() == 'AT'){
    	window.location.hostname = 'curalife.at';}
    else if(whereAmIFrom() != 'US' && whereAmIFrom() != 'PR'){
        window.location.hostname = 'global.curalife.com';
    }
  } 
  
  if(typeof geoRules !== "undefined") geoRules();
};

req.send(null);