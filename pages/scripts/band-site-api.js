// this.apiKey = "eb7ac7c9-5339-4cd1-a55c-82c1318d8088";
class BandSiteApi {
    constructor(apiKey) {
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
        this.apiKey = apiKey;
    }

    async postComment(name, comment) {
        try {
            const response = await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`);
            return response;
        } catch (error) {
            console.error(error)("Error posing comment.");
            return;
        }

    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`);

            //reverse so newest comment is at top
            return response.data.reverse();
        } catch (error) {
            console.error("Error fetching comments.");
            return;
        }
        
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}showdates?api_key=${this.apiKey}`);
        console.log(response.data);
        return response.data;
        } catch (error) {
            console.error(("Error fetching shows."));
            return;
        }
        
    }
}
