import { Box, Link } from "@chakra-ui/react"

/* Import component */
import { IconCard } from "./PartitionCard"

/* Import type */
import type { IOtherInstrument } from "../types/instrument"

export interface IOtherInstrumentCardProps {
    instrument : IOtherInstrument
}

/* Card for each instrument in partition data for Tools */
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