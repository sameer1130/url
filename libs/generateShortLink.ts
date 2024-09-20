

import { customAlphabet } from "nanoid";

export default ( host : string) =>{
    const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);
    const shortCode = nanoid();

    return {
        shortCode,
        shortUrl : `http://${host}/api/${shortCode}`
    }

}