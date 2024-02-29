// this.apiKey = "eb7ac7c9-5339-4cd1-a55c-82c1318d8088";
class BandSiteApi {
    constructor(apiKey) {
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
        this.apiKey = apiKey;
    }

    async postComment(name, comment) {
        try {
            
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, {
                name: name,
                comment: comment
            });
            const postedComment = response.data;
            return postedComment;
        }
        catch (error) {
            console.error("Error posing comment. bandsiteapi", error);
            return;
        }
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            const comments = response.data;
            return comments;
        } catch (error) {
            console.error("Error fetching comments");
        }
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            const shows = response.data;
            console.log(shows);
            return shows;
        }
        catch (error) {
            console.error(("Error fetching shows."));
            return;
        }
    }
}
