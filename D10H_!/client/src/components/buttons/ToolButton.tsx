import { Button, type HTMLChakraProps } from "@chakra-ui/react"
import type { ReactNode } from "react"

export interface IToolButtonProps extends HTMLChakraProps<"button"> {
    children: ReactNode
}

const ToolButton: React.FC<IToolButtonProps> = ({ children }) => {
    return (
        <Button
        backgroundColor={"transparent"}
        padding={"0"}
        color={'#ffffff'}
        borderRadius={"full"} border={"solid 0.0625rem transparent"}
        height={"38px"} width={"24px"} minWidth={"38px"}
        _active={{
            borderColor: '#656367',
            bg: '#38373b',
            color: '#e2dfe6'
        }}
        _focusVisible={{
            boxShadow: 'none',
            borderColor: '#ad47ff',
            color: '#ad47ff'
        }}
        _hover={{
            borderColor: '#59575c',
            bg: '#2e2c30',
            color: '#f5f2f8'
        }}>
            {children}
        </Button>
    )
}

export default ToolButton