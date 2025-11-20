import { useState, useEffect } from "react";

const useSearchHistory = () => {
    const [history, setHistory] = useState(() => {
        const storedHistory = localStorage.getItem("D10H_!_Search_History")

        if (storedHistory) {
            try {
                return JSON.parse(storedHistory)
            } catch (e) {
                console.error("Erreur lors du formatage des données locales", e);
                return []
            }
        }
        return []
    })

    useEffect(() => {
        const jsonHistory = JSON.stringify(history)
        localStorage.setItem("D10H_!_Search_History", jsonHistory)
    }, [history])


    function addToHistory (query: string) {
        setHistory((prevHistory: Array<string>) => {
            const updatedHistory = [query, ...prevHistory]
            const limitedHistory = updatedHistory.slice(0, 10)
            return limitedHistory
        })
    }

    return [history, setHistory, addToHistory]

}

export default useSearchHistory