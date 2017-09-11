const axios = require('axios')

const pinger = async (address) => {
    console.log(process.argv)
    try {
        const response = await axios.head(address);
        console.log(`${new Date().toISOString()}: target: ${address} - ${response.status} `);
    } catch(e) {
        console.log(`Error: ${address}`, e)
        process.exit(1)
    }
}

!module.parent 
	? pinger(process.argv[2])
	: module.exports = pinger

