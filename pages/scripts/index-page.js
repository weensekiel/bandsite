const api = new BandSiteApi("eb7ac7c9-5339-4cd1-a55c-82c1318d8088");

const form = document.getElementById("formy");
form.addEventListener("submit", handleSubmit);

async function getCommentsAndRender() {
    try {
        const comments = await api.getComments();
        console.log("Comments after fetching:", comments);
        renderComments(comments);
    } catch (error) {
        console.error("Error fetching and rendering comments:", error);
    }
}

function renderComments(comments) {
    const list = document.getElementById("comments");
    list.innerHTML = "";
    if (Array.isArray(comments)) {
        comments.reverse().forEach(comment => {
            const li = document.createElement("li");
            list.appendChild(li);

            const name = document.createElement("div");
            name.innerText = comment.name;
            li.appendChild(name);

            const timestamp = document.createElement("div");
            timestamp.innerText = comment.timestamp;
            li.appendChild(timestamp);

            const text = document.createElement("div");
            text.innerText = comment.comment;
            li.appendChild(text);

            const divider = document.createElement("hr");
            li.appendChild(divider);
        });
    } else {
        console.error("Comments is not an array:", comments);
    }
}

async function handleSubmit(evt) {
    evt.preventDefault();

    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    today = mm + "/" + dd + "/" + yyyy;

    const name = evt.target.name.value;
    const timestamp = today;
    const comment = evt.target.comment.value;

    try {
        await api.postComment(name, comment);
        console.log("Comment posted successfully.");
        getCommentsAndRender();
    } catch (error) {
        console.error("Error posting comment:", error);
    }

    evt.target.reset();
}

getCommentsAndRender();
