import { useContext } from "react";

/* Import context */
import { PartitionContext } from "../context/PartitionContext";

export const usePartition = () => {
    const context = useContext(PartitionContext)

    if (context === undefined) throw new Error("usePartition doit être utilisé à l'intérieur d'un PartitionProvider")
    
    return context
}