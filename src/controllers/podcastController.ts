import { IncomingMessage, ServerResponse } from "http";

export const getListEpisodies = async (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(
        [
            {
                videoID: "tqybzmT22ng",
                podcastName: "PodFlow",
                episode: "PODEROSÍSSIMO NINJA - Podpah #01",
                categories: ["humor", "conhecimento"]
            },
            {
                videoID: "7pcRt9ysxsw",
                podcastName: "Podpah",
                episode: "MAUMAU & JULIO BALESTRIN - Podpah [#856]",
                categories: ["humor", "conhecimento", "batepapo"]
            }
        ]

    ));
};