'use client';

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from 'react';

interface FavoritesGoodsContextType {
    favoritesGoodsCount: number;
    toggleFavoritesGoods: (isAdding: boolean) => void;
};

const FavoritesGoodsContext = createContext<FavoritesGoodsContextType | undefined>(undefined);

export function FavoritesGoodsProvider({ children }: { children: ReactNode }) {
    const [favoritesGoodsCount, setFavoritesGoodsCount] = useState(0);

    const toggleFavoritesGoods = (isAdding: boolean) => {
        setFavoritesGoodsCount((prev) => (isAdding ? prev + 1 : Math.max(0, prev - 1)));
    };

    return (
        <FavoritesGoodsContext.Provider value={{ favoritesGoodsCount, toggleFavoritesGoods }}>
            {children}
        </FavoritesGoodsContext.Provider>
    );
};

export const useFavoritesGoods = () => {
    const context = useContext(FavoritesGoodsContext);

    if (!context) {
        throw new Error('"useFavoritesGoods" must be used within a "FavoritesGoodsProvider"');
    }

    return context;
};