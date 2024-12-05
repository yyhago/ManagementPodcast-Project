import { dataPodcast } from "../data/podcastRepository"

export const serviceFilterEpisodies = async (podcastName: string | undefined) => {

    const queryString = podcastName?.split("?p=")[1] || "";
    
    const data = await dataPodcast(queryString)

    return data;
}