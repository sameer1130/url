
import type { NextApiRequest, NextApiResponse } from "next"
import {isWebUri} from "valid-url"

import {prisma, generateShortLink} from "@/libs/index"


type RequestData = {
    url: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {method} = req;

    if(method ! == "POST"){
        return res.status(405).json({
            error: "Only Post request are allowed"
        })
    }

    const {url } : RequestData = JSON.parse(req.body);

    const host = req.headers.host;
    const {shortCode, shortUrl } = generateShortLink(host!);

    if(!isWebUri(url)){
        return res.status(400).json({
            statusCode: 400,
            error:{
                message: "Url is not valid"
            },
            data: null
        })
    }

    const result = await prisma.$transaction(async(tx) =>{
        const originalUrl = await tx.url.findFirst({
            where:{
                originalUrl: url,
                
            }
        })
        if(originalUrl) return originalUrl;

        const newUrl = await tx.url.create({
            data:{
                originalUrl: url,
                shortUrl,
                urlCode: shortCode
            }
        })

        await tx.urlAnalytic.create({
            data:{
                clicked:0,
                url:{
                    connect:{
                        id: newUrl.id
                    }
                }
            }
        })

        return newUrl

    });

    return res.status(200).json({
        statusCode: 200,
        error: null,
        data:{
            originalUrl:result.originalUrl,
            shortUrl: result.shortUrl,
            code: result.urlCode
        }
    })

    

    

}