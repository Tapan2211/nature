
async function getServiceList(base_url){
    const response = await fetch(base_url);
    const data = await response.json();
    console.log(data.photos);
    const finaldata = data.photos;

  
    // Find the container element
    const servicesContainer = document.getElementById("services");


    finaldata.forEach((element) => {
        
        // const {description,title, url} = element;
        
        // let imageURL = document.getElementById('imageURL');
        // let titles = document.getElementById('titles');
        // let descriptions = document.getElementById('description');
    
        // imageURL.src = url;
        // titles.textContent = title;
        // descriptions.textContent = description;

        const {description,title, url} = element;

        // one way to call api
        const serviceCard = document.createElement("div");
        serviceCard.className = "col-6 col-lg-3 mb-4 position-relative";
        serviceCard.innerHTML = `
        <img class="service-images"
        src="${url}" 
        alt="Service"/>

        <p class="service-text">${title}</p>
        <p class="service-des">${description}</p>
        `
        servicesContainer.appendChild(serviceCard);
        
    });

}

const base_url = "https://api.slingacademy.com/v1/sample-data/photos";
getServiceList(base_url);