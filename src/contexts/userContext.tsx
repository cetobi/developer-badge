import { createContext, useState } from 'react'

interface UserContextProps {
    link: string,
    save: (link: string) => void
}

export const UserContext = createContext<UserContextProps | undefined> (undefined)

export default function UserProvider ({ children }: any) {
    const [link, setLink] = useState<string>('')
    const contextValue: UserContextProps = {
        link,
        save: saveLink,
    }

    function saveLink(link: string){
        setLink(link)
    }
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}