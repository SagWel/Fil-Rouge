import { Box, Heading, Flex, Input, Grid, Text, FormLabel, Select, chakra, Menu, MenuButton, Button, Portal, MenuList, MenuItem, filter } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PartitionCard from '../components/PartitionCard';
import { type IPartitions } from "../types/partitions";
import { DownChevronIcon, UpChevronIcon, DifficultyIcon } from "../components/svg";
import type { Item } from "../components/MenuSelect";
import MenuSelect from "../components/MenuSelect";

export interface ISearchPartitionsInstrumentProps {}

const Search: React.FC<ISearchPartitionsInstrumentProps> = () => {
    const { instrumentName } = useParams();

    const [partitions, setPartitions] = useState<IPartitions[] | []>([])

    const [artist, setArtist] = useState<string>('')
    const [morceau, setMorceau] = useState<string>('')
    const [genre, setGenre] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)
    const [selectedFilter, setSelectedFilter] = useState<Item | null>(null)

    const fetchPartitions = async (URL: string) => {
        const host = import.meta.env.VITE_HOST
        const port = import.meta.env.VITE_SERVER_PORT
        try {            
            const res = await fetch(`http://${host}:${port}${URL}`, {credentials: 'include'})
            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);                
            }

            const data = await res.json()
            setPartitions(data)
        } catch (error) {
            console.error('Impossible de récupérer les données des partitions:', error);
        }
    }

    const difficultyLvl = (difficulty: number, size?: string) => {
      const arrayDiff = Array.from({length:difficulty})
    
      return arrayDiff.map((_, index: number) => (
      <DifficultyIcon key={index} size={size}/>))
    }

    const allartists: string[] = []
    const allMorceaux: string[] = []
    const allGenders: string[] = []
    const allDifficultes: number[] = []

    partitions.forEach(p => {
        allartists.push(p.song.artist.name)
        allMorceaux.push(p.song.title)
        allGenders.push(p.song.genre.name)
        allDifficultes.push(p.difficulty)
    });

    const artists = [...new Set(allartists)].sort()
    const morceaux = [...new Set(allMorceaux)].sort()
    const genders = [...new Set(allGenders)].sort()
    const difficultes = [...new Set(allDifficultes)].sort()
    const filters: Item[] = [
        {id: "A-Z_asc", label: "alphabétique", icon: UpChevronIcon},
        {id: "difficultes_asc", label: "difficultées", icon: UpChevronIcon},
        {id: "artists_asc", label: "artistes", icon: UpChevronIcon},
        {id: "recents_asc", label: "récents", icon: UpChevronIcon},
        {id: "popular_asc", label: "populaires", icon: UpChevronIcon},
        {id: "A-Z_desc", label: "alphabétique", icon: DownChevronIcon},
        {id: "difficultes_desc", label: "difficultées", icon: DownChevronIcon},
        {id: "artists_desc", label: "artistes", icon: DownChevronIcon},
        {id: "recents_desc", label: "récents", icon: DownChevronIcon},
        {id: "popular_desc", label: "populaires", icon: DownChevronIcon}
    ]

    const filteredPartitions = partitions.filter((p: IPartitions) => {
        const filterArtist = artist === '' || p.song.artist.name === artist
        const filterMorceau = morceau === '' || p.song.title === morceau
        const filterGender = genre === '' || p.song.genre.name === genre
        const filterDifficulty = difficulty === 0 || p.difficulty === difficulty

        return filterArtist && filterMorceau && filterGender && filterDifficulty
    })

    useEffect(() => {
        if (instrumentName) {
            const urlFetch = import.meta.env.VITE_URL_FETCH_ALLPARTITIONS_INSTRUMENT
            
            fetchPartitions(`${urlFetch}${instrumentName}`)
        } else {
            console.error('Instrument manquant ...')
        }
    },[instrumentName])

    return(
        <Flex direction={"column"} textAlign={"center"} gap={"2rem"} pt={"2rem"}>

            {/*Title containing the instrument name*/}
            <Heading id="headText" color={"#FDFCFE"}> SCORBRARY {instrumentName?.toUpperCase()} </Heading>

            {/*Search filters*/}
            <Box id="filtersZone" border={"0.0625rem solid #4e4c51"} mx={"1.5rem"} padding={"0.5rem"}>
                <Grid templateColumns={"repeat(5, 1fr)"}>
                    <MenuSelect label="Artiste" listeString={artists} itemString={artist} setItemString={setArtist} />
                    
                    <Box gridColumn={"span 1"}></Box>
                    
                    <MenuSelect label="Morceau" listeString={morceaux} itemString={morceau} setItemString={setMorceau}/>
                    
                    <Box gridColumn={"span 1"}></Box>
                    
                    <MenuSelect listeString={genders} label="Genre" itemString={genre} setItemString={setGenre}/>
                    
                    <Box gridColumn={"span 1"}></Box>
                   
                    <Flex gridColumn={"span 1"} direction={"column"} background={"#9A36F3"} borderRadius={"0.5rem"}>
                        <FormLabel htmlFor="difficulty" color={"#fdfcfe"} textAlign={"center"} p={0} m={0}
                        fontSize={"1.25rem"} fontWeight={"500"}>
                            Difficultée
                        </FormLabel>
                        <Menu matchWidth>
                            <MenuButton as={Button} name="difficultée" id="difficultée"
                            variant={"outline"}
                            mb={"0.75rem"} mx={"auto"}
                            height={"1.25rem"} width={"75%"} textAlign={"center"}
                            border={"none"} borderRadius={"none"} 
                            background={"#141216"} color={"#fdfcfe"}
                            _hover={{
                                bg: "#141216",
                                border: "#CBD5E0"
                            }}
                            _active={{
                                bg: "#141216",
                                boxShadow: "0 0 0 1px #fdfcfe",
                            }}
                            _focusVisible={{
                                zIndex: "1",
                                borderColor: "#4e4c51",
                            }}>
                                <Flex align={"center"} justify={"center"} w={"full"} pt={"3px"}>
                                    {difficultyLvl(difficulty, "16px")}
                                </Flex>
                            </MenuButton>
                            <Portal>
                                <MenuList
                                w={"full"} minW={0} maxH={"200px"} 
                                bg={"#3e3d3f"} 
                                border={0} p={0}
                                overflowY={"auto"}>
                                    <MenuItem
                                    bg={"transparent"} color={"#fdfcfe"}
                                    onClick={() => setDifficulty(0)}
                                    _hover={{
                                        bg: "#6e6c72"
                                    }}
                                    _focus={{
                                        bg: "#6e6c72"
                                    }}>
                                        <Flex align={"center"} justify={"space-between"} w={"full"}>
                                            <Flex align={"center"} justify={"space-between"} w={"full"}>
                                                <Text>...</Text>
                                            </Flex>
                                        </Flex>
                                    </MenuItem>
                                    {difficultes.map((d, index) => (
                                        <MenuItem key={index}
                                        bg={"transparent"} color={"#fdfcfe"}
                                    onClick={() => setDifficulty(d)}
                                    _hover={{
                                        bg: "#6e6c72"
                                    }}
                                    _focus={{
                                        bg: "#6e6c72"
                                    }}>
                                        <Flex align={"center"} justify={"space-between"} w={"full"}>
                                            <Flex align={"center"} justify={"center"} w={"full"}>
                                                {difficultyLvl(d)}
                                            </Flex>
                                        </Flex>
                                    </MenuItem>
                                    ))}
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Flex>
                    
                    <Box gridColumn={"span 1"}></Box>
                    
                    <MenuSelect itemObject={selectedFilter} setItemObject={setSelectedFilter} listeObject={filters} label="Trier" />
                    
                    <Box gridColumn={"span 1"}></Box>
                </Grid>
            </Box>

            {/*Search results*/}
            {filteredPartitions.length === 0 ? 
            <Box textAlign={"center"}><Text color={"white"}>Aucune partition trouvée pour {instrumentName}</Text></Box>
            :
            <Grid id="resultZone" templateColumns={"repeat(auto-fit, minmax(20rem, 1fr))"}
            gap={"7"} justifyItems={"center"} p={"4"}
            overflow={"visible"}
            marginTop={"2rem"} marginBottom={"5rem"}>
                
                {/*Creats a card for each scores in search result*/}
                {filteredPartitions.map((partition: IPartitions) => (
                    <PartitionCard key={partition.id} partition={partition} currentInstrument={instrumentName as string}/>
                ))}

            </Grid>}
        </Flex>
    )
}

export default Search;
