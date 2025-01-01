const axios = require("axios")
//post
//chnage request method
//send body
//send headers

// whwn we send the get request header is second argument
async function main() {
    const response = await axios.post("https://httpdump.app/dumps/c908e4f3-8933-4d46-a81c-4a85c4d005c3",{
        username: "Samiksha",
        password: "12345"
    },
    {
        headers : {
            Authorization: "Bearer 123",
        }
    },
)
 console.log(response.data);   
}
main();