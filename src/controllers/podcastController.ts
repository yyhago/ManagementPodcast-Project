import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisodies } from "../services/listEpisodiesService"
import { serviceFilterEpisodies } from "../services/filterEpisodiesService";
import { StatusCode } from "../utils/statusCode";


export const getListEpisodies = async (request: IncomingMessage, response: ServerResponse) => {

    const content = await serviceListEpisodies()

    response.writeHead(StatusCode.OK, {"Content-Type": "application/json"});
    response.end(JSON.stringify(content))
};


export const getFilterEpisodies = async (request: IncomingMessage, response: ServerResponse) => {

    const content = await serviceFilterEpisodies(request.url)

    response.writeHead(StatusCode.OK, {"Content-Type": "application/json"});
    response.end(JSON.stringify(content))
}