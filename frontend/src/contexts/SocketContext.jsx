import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuthContext } from "./AuthContext";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = (({ children }) => {
    const [socket, setSocket] = useState(null);
    const [online, setOnline] = useState([]);
    const { authUser } = useAuthContext();
    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:8000", {
                query: {
                    userId: authUser._id
                }
            });
            setSocket(socket);
            socket.on("getOnlineUsers", (users) => {
                setOnline(users);
            })
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])
    return (
        <SocketContext.Provider value={{socket, online}}>
            {children}
        </SocketContext.Provider>
    )
})