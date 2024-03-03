async function getShowsAndRender() {
    const api = new BandSiteApi("eb7ac7c9-5339-4cd1-a55c-82c1318d8088");
    try {
        const shows = await api.getShows();
        console.log(shows);
        renderShows(shows);
    } catch (error) {
        console.error("Error rendering shows:", error);
    }
}

function renderShows(shows) {
    const list = document.getElementById("shows");
    
    shows.forEach(show => {
        const showContainer = document.createElement("div");
        list.appendChild(showContainer)

        const dateHeading = document.createElement("h4");
        dateHeading.innerText = "DATE";
        showContainer.appendChild(dateHeading);

        const dateElement = document.createElement("h3");
        dateElement.innerText = show.date;
        showContainer.appendChild(dateElement);

        const venueHeading = document.createElement("h4");
        venueHeading.innerText = "VENUE";
        showContainer.appendChild(venueHeading);

        const venueElement = document.createElement("h3");
        venueElement.innerText = show.place;
        showContainer.appendChild(venueElement);

        const locationHeading = document.createElement("h4");
        locationHeading.innerText = "LOCATION";
        showContainer.appendChild(locationHeading);

        const locationElement = document.createElement("h3");
        locationElement.innerText = show.location;
        showContainer.appendChild(locationElement);

        const buyTicketsButton = document.createElement("button");
        buyTicketsButton.innerText = "BUY TICKETS";
        showContainer.appendChild(buyTicketsButton);

        const divider = document.createElement("hr");
        showContainer.appendChild(divider);
        

    });
}

getShowsAndRender();