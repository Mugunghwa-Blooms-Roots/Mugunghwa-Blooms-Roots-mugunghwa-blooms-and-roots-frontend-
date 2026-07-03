'use client';

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from 'react';

interface CompareGoodsContextType {
    compareGoodsCount: number;
    toggleCompareGoods: (isAdding: boolean) => void;
};

const CompareGoodsContext = createContext<CompareGoodsContextType | undefined>(undefined);

export function CompareGoodsProvider({ children } : { children: ReactNode }) {
    const [compareGoodsCount, setCompareGoodsCount] = useState<number>(0);

    const toggleCompareGoods = (isAdding: boolean) => {
        setCompareGoodsCount((prevGood) => (isAdding ? prevGood + 1 : Math.max(prevGood - 1, 0)));
    };

    return (
        <CompareGoodsContext.Provider value={{ compareGoodsCount, toggleCompareGoods }}>
            {children}
        </CompareGoodsContext.Provider>
    )
};

export const useCompareGoods = () => {
    const context = useContext(CompareGoodsContext);

    if (!context) {
        throw new Error('"useCompareGoods" must be used within a "CompareGoodsProvider".');
    }

    return context;
};