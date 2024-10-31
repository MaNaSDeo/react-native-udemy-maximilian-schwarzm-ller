import {
  createContext,
  useMemo,
  useState,
  type FC,
  type ReactNode,
} from "react";

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

interface FavoritesContextProviderProps {
  children: ReactNode;
}

const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const favoritesContext = useMemo<FavoritesContextType>(() => {
    return {
      favorites,
      addFavorite: (id: string) => {
        setFavorites((prev) => [...prev, id]);
      },
      removeFavorite: (id: string) => {
        setFavorites((prev) => prev.filter((favoriteId) => favoriteId !== id));
      },
    };
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={favoritesContext}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
