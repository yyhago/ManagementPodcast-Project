import * as http from 'http';

import { HttpMethod } from './utils/httpMethods';
import { Routes } from './routes/routes';
import { getListEpisodies, getFilterEpisodies } from './controllers/podcastController';

export const app = async (request:http.IncomingMessage, response:http.ServerResponse) => {

    //http://localhost:8080/api/episode?p=queryString
    const [baseURL, queryString] = request.url?.split("?") ?? ["",""]

    // Listar episódios
    if(request.method === HttpMethod.GET && baseURL === Routes.LIST){
        await getListEpisodies(request, response)
    }

    // Filtrar episódios
    if(request.method === HttpMethod.GET && baseURL == Routes.EPISODE)
        await getFilterEpisodies(request,response)
    }
