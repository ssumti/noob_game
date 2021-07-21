import { useEffect } from "react";

function GetKey(e) {
    useEffect(() => {
        window.addEventListener('keydown', e);
        return () => window.removeEventListener('keydown', e);
    }, [e]);
}
export default GetKey;