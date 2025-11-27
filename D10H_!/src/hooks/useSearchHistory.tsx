import { useState, useEffect } from "react";


const useSearchHistory = () => {

    // Transforms the data from lacalStorage into an array of those data
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

    // Adds the latest search query in search history
    function addToHistory (query: object) {
        setHistory((prevHistory: Array<object>) => {
            const filteredHistory = prevHistory.filter((e: object) => e != query)
            const updatedHistory = [query, ...filteredHistory]
            const limitedHistory = updatedHistory.slice(0, 10)
            return limitedHistory
        })
    }

    return [history, setHistory, addToHistory]

}

export default useSearchHistory