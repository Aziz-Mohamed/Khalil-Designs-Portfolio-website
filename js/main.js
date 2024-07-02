import logos from "./logos.js"

const logoList = document.getElementById("logo-list"); 

function createLogoItem(logo) {
  const li = document.createElement("li");
  li.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-xs-12");
  li.style.background = logo.background || 'transparent';
  const img = document.createElement("img");
  img.src = logo.path;
  img.alt = logo.alt;
  li.appendChild(img);
  console.log(logo,"this is logo" )
  return li ;
}

logos.forEach(logoData => {
  const createdLogo = createLogoItem(logoData);
  logoList.appendChild(createdLogo);
})


