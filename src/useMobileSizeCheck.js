import { useState, useEffect } from 'react';

function useMobileSizeCheck() {
    const [isMobileSize, setMobileSize] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setMobileSize(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobileSize;
}

export default useMobileSizeCheck;
