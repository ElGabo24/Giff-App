import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});


    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const giphys = await getGifsByQuery(term);
        setGifs(giphys);
    }

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();

        if (query.length == 0) return;

        if (previousTerms.includes(query)) return;

        const currentTerms = previousTerms.slice(0, 6);

        currentTerms.unshift(query);

        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        const giphys = await getGifsByQuery(query);
        setGifs(giphys);

        gifsCache.current[query] = giphys;
        console.log(gifsCache);
    }

    return {
        gifs,
        previousTerms,

        handleTermClicked,
        handleSearch
    }
}
