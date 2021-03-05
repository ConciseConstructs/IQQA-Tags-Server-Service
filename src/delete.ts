import { DeleteHandler, TApiDeleteRequest } from '../lib/lambdaclasses/AbstractDeleteOperation'
import { TApiResponse } from '../lib/lambdaclasses/Response.class'
import { Context, Callback } from 'aws-lambda'


export function handler(incomingRequest:TApiDeleteRequest, context:Context, callback:Callback) {

  class HandlerObject extends DeleteHandler {
    protected request:TApiDeleteRequest
    protected response:TApiResponse


    constructor(incomingRequest:TApiDeleteRequest, context:Context, callback:Callback) {
      super(incomingRequest, context, callback)
    }


  } // End Handler Class ---------

  new HandlerObject(incomingRequest, context, callback)

} // End Main Handler Function -------
