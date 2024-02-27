const commentsList = [
    { name: "Victor Pinto", timestamp: "11/02/2023", text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." },
    { name: "Christina Cabrera", timestamp: "10/28/2023", text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
    { name: "Isaac Tadesse", timestamp: "10/20/2023", text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." },
];

const form = document.getElementById("formy");

form.addEventListener("submit", handleSubmit);

function renderComments(comment) {
    const list = document.getElementById("comments");
    list.innerText = "";

    commentsList.reverse().forEach(comment => {
        const li = document.createElement("li");
        list.append(li);

        const name = document.createElement("div");
        name.innerText = comment.name;
        li.append(name);

        const timestamp = document.createElement("div");
        timestamp.innerText = comment.timestamp;
        li.append(timestamp);

        const text = document.createElement("div");
        text.innerText = comment.text;
        li.append(text);

        const divider = document.createElement("hr");
        li.append(divider);
    })
}

async function fetchComments() {
    const comments = await bandSiteApi.getComments();
    comments.forEach(comment => {
        renderComments(comment);
    })
}

function handleSubmit(evt) {
    evt.preventDefault();

    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    today = mm + "/" + dd + "/" + yyyy;

    const name = evt.target.name.value;
    const timestamp = today;
    const comment = evt.target.comment.value;

    const newEntry = {
        name: name,
        timestamp: today,
        text: comment
    };

    commentsList.push(newEntry);

    renderComments(commentsList);
    console.log(newEntry);
    evt.target.reset();
}

const bandSiteApi = new BandSiteApi("eb7ac7c9-5339-4cd1-a55c-82c1318d8088");

renderComments(comments);
