import * as express from "express"

// request
export interface TypedRequestBody<T> extends Express.Request{
    body:T
}