'use client'
import { ChildrenProp } from "@/types/Children";
import { createContext, useContext, useState } from "react";

type NavigationContextType = {
    currentPage: string;
    handleCurrentPage: (pageName: string) => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null)

export function NavigationProvider({ children }: ChildrenProp) {
    const [currentPage, setCurrentPage] = useState<string>('home');

    const handleCurrentPage = (pageName: string) => {
        setCurrentPage(pageName)
    }

    return (
        <NavigationContext.Provider value={{ currentPage, handleCurrentPage }}>
            {children}
        </NavigationContext.Provider>
    )
}

export function useNavigation() {
    return useContext(NavigationContext);
}

