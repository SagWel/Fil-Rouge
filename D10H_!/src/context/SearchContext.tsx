import { createContext, useState, useContext } from 'react';

export interface ISearchContextType {
    searchResults: IDeezerTrack[];
    selectedTrack: IDeezerTrack | null;
    isLoading: boolean;
    isSearching: boolean;

    setIsLoading: (value: boolean) => void;
    setIsSearching: (value: boolean) => void;

    setSearchResults: (tracks: IDeezerTrack[]) => void;
    setSelectedTrack: (track: IDeezerTrack | null) => void;
}

export const SearchContext = createContext< ISearchContextType | (undefined)>(undefined)

type SearchProviderProps = React.PropsWithChildren<{}>

const SearchProvider = ({ children }: SearchProviderProps) => {
    
    const [searchResults, setSearchResults] = useState<IDeezerTrack[]>([]);
    const [selectedTrack, setSelectedTrack] = useState<IDeezerTrack>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const value = {
        searchResults,
        selectedTrack,
        isLoading,
        isSearching,

        setSearchResults,
        setSelectedTrack,
        setIsLoading,
        setIsSearching,
    }

    return(
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
} 

export default SearchProvider

export function useSearch () {
    const resultSearchContext = useContext(SearchContext)

    if (resultSearchContext == undefined) {
        throw new Error("Le hook useSearch doit être utilisé à l'intérieur du SearchProvider.");
    }

    return resultSearchContext
}