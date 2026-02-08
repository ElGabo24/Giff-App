import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = (query: string) => {
        console.log(previousTerms);
        if (!previousTerms.includes(query) && query != ''
            && previousTerms.length <= 8
        ) {
            console.log(query);
            const terms = [...previousTerms];
            terms.push(query);
            setPreviousTerms(terms);
        }
    }

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                descripcion="Descubre y comparte el gif perfecto"
            />

            {/* Search */}
            <SearchBar
                placeholder="Buscar gifs"
                onQuery={handleSearch}
            />

            {/* Busquedas previas */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}
