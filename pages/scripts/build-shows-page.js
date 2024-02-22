const shows = [
    { date: "Mon Sept 09 2024", venue: "Ronald Lane", location: "San Francisco, CA" },
    { date: "Tue Sept 17 2024", venue: "Pier 3 East", location: "San Francisco, CA" },
    { date: "Sat Oct 12 2024", venue: "View Lounge", location: "San Francisco, CA" },
    { date: "Sat Nov 16 2024", venue: "Hyatt Agency", location: "San Francisco, CA" },
    { date: "Fri Nov 29 2024", venue: "Moscow Center", location: "San Francisco, CA" },
    { date: "Wed Dec 18 2024", venue: "Press Club", location: "San Francisco, CA" }
];

function renderShows() {
    const showsSection = document.getElementById("shows");
    showsSection.innerHTML = "<h2>Shows</h2>";

    shows.forEach(show => {
        const showContainer = document.createElement("div");

        const dateHeading = document.createElement("h4");
        dateHeading.innerText = "DATE";
        const dateElement = document.createElement("h3");
        dateElement.innerText = show.date;

        const venueHeading = document.createElement("h4");
        venueHeading.innerText = "VENUE";
        const venueElement = document.createElement("h3");
        venueElement.innerText = show.venue;

        const locationHeading = document.createElement("h4");
        locationHeading.innerText = "LOCATION";
        const locationElement = document.createElement("h3");
        locationElement.innerText = show.location;

        const buyTicketsButton = document.createElement("button");
        buyTicketsButton.innerText = "BUY TICKETS";

        const divider = document.createElement("hr");

        // showContainer.classList.add("show");
        showContainer.classList.add("show__content");

        showContainer.appendChild(dateHeading);
        showContainer.appendChild(dateElement);
        showContainer.appendChild(venueHeading);
        showContainer.appendChild(venueElement);
        showContainer.appendChild(locationHeading);
        showContainer.appendChild(locationElement);
        showContainer.appendChild(buyTicketsButton);
        
        showsSection.appendChild(showContainer);
        showsSection.appendChild(divider);
    });
}


/*
<div>
    <h4>DATE</h4>
    <h3>date data</h3>

    <h4>VENUE</h4>
    <h3>venue data</h3>

    <h4>LOCATION</h4>
    <h3>location data</h3>

    <button> BUY TICKETS
</div>
<hr/>
*/


renderShows();