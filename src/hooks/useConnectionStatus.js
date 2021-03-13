import { useEffect, useState } from 'react';

export default function useConnectionStatus() {
    // State
    const [status, setStatus] = useState();

    // Side effects
    useEffect(() => {
        // Set status
        handleConnectionChange();
        // Event listeners on connection status change
        window.addEventListener('online', handleConnectionChange);
        window.addEventListener('offline', handleConnectionChange);
    });

    // Get Connection status
    function handleConnectionChange() {
        const connection = window.navigator.onLine;
        setStatus(connection);
    }

    // Return data
    return status;
}
