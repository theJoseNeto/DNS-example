const server = require("./server")
class ServerDns {
    constructor() {
        this.sites = { "https://wwww.example.com": "192.168.30.44" }
    }
    searchSite(url) {
        if (this.sites[url] === server.ip_address) {
            console.log(server.files)
        } else {
            console.log("Not ok :(")
        }
    }
}
module.exports = ServerDns; 
