import { PropsWithChildren, createContext, useState } from 'react'

export interface IMenuContext {
    menu: boolean;
    setMenu?: (newMenu: boolean) => void;
}

export const MenuContext = createContext<IMenuContext>({ menu: false });
export const MenuContextProvider = ({ menu, children }: PropsWithChildren<IMenuContext>): JSX.Element => {
    const [menuState, setMenuState] = useState<boolean>(menu);
    const setMenu = (newMenu: boolean) => setMenuState(newMenu);

    return <MenuContext.Provider value={{menu: menuState}}>
        {children}
    </MenuContext.Provider>
}