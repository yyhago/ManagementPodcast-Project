import * as http from 'http';
import { getListEpisodies } from './controllers/podcastController'

const port = process.env.PORT

const server = http.createServer(
    async (request:http.IncomingMessage, response:http.ServerResponse) => {

    if(request.method === "GET"){
        await getListEpisodies(request, response)
    }

    }
);

server.listen(port, () => {
    console.log(`Server is running in port: ${port}`)
})