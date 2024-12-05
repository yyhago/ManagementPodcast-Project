import { dataPodcast } from "../data/podcastRepository"

export const serviceListEpisodies = async () => {
    const data = await dataPodcast();

    return data;
};
