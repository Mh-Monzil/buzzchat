import { useContext } from 'react';
import { SocketContext } from '../Context/SocketContext';

const useSocket = () => {
    return useContext(SocketContext);
};

export default useSocket;