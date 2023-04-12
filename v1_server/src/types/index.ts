import * as express from "express"

// request
export interface TypedRequestBody<T> extends Express.Request{
    body:T
}

export type MiddleWareType = (req:express.Request,res:express.Response,next?:express.NextFunction) => void