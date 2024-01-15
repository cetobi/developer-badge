import { createContext, useState } from 'react'

interface UserContextProps {
    nickname: string,
    save: (nickname: string) => void
}

export const UserContext = createContext<UserContextProps | undefined> (undefined)

export default function UserProvider ({ children }: any) {
    const [nickname, setNickname] = useState<string>('')
    const contextValue: UserContextProps = {
        nickname,
        save: saveNickname,
    }

    function saveNickname(nickname: string){
        setNickname(nickname)
    }
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}