import { Box, Link } from "@chakra-ui/react"
import { IconCard } from "./PartitionCard"
import type { IOtherInstrument } from "../types/instrument"

export interface IOtherInstrumentCardProps {
    instrument : IOtherInstrument
}

const OtherInstrumentCard: React.FC<IOtherInstrumentCardProps> = ({ instrument }) => {
    
    return (
        <Box as={Link} href={`${instrument.instrument.linkToSearch}/${instrument.partitionId}`}
        height={"fit-content"} width={"fit-content"}
        borderRadius={"full"} padding={"0.185rem"}
        _hover={{
            bg: "#29282D"
        }}>
            {IconCard(instrument.instrument.name)}
        </Box>
    )
}

export default OtherInstrumentCard