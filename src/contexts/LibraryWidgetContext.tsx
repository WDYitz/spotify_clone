'use client'
import { ReactNode, createContext, useState, useContext } from "react";

type WidgetContext = {
    handleAddPlaylistModal: boolean;
    handleShowMoreBtn: boolean;
    openAddPlaylistModal: () => void;
    isOpenShowMore: () => void;
}

type WidgetProviderProp = {
    children: ReactNode
}

const LibraryWidgetContext = createContext<WidgetContext | null>(null)

export const WidgetProvider = ({ children }: WidgetProviderProp) => {
    const [handleAddPlaylistModal, setHandlePlaylistModal] = useState<boolean>(false);
    const [handleShowMoreBtn, setHandleShowMoreBtn] = useState<boolean>(false);

    const openAddPlaylistModal = () => {
        setHandlePlaylistModal(prev => !prev);
    }

    const isOpenShowMore = () => {
        setHandleShowMoreBtn(prev => !prev);
    }

    return (
        <LibraryWidgetContext.Provider value={{ handleAddPlaylistModal, openAddPlaylistModal, handleShowMoreBtn, isOpenShowMore }} >
            {children}
        </LibraryWidgetContext.Provider >
    )
}

export const useWidget = () => useContext(LibraryWidgetContext);