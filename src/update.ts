import { UpdateHandler, TApiUpdateRequest } from '../lib/lambdaclasses/AbstractUpdateOperation'
import { TApiResponse } from '../lib/lambdaclasses/Response.class'
import { Context, Callback } from 'aws-lambda'


export function handler(incomingRequest:TApiUpdateRequest, context:Context, callback:Callback) {

  class HandlerObject extends UpdateHandler {
    protected request:TApiUpdateRequest
    protected response:TApiResponse


    constructor(incomingRequest:TApiUpdateRequest, context:Context, callback:Callback) {
      super(incomingRequest, context, callback)
    }


  } // End Handler Class ---------

  new HandlerObject(incomingRequest, context, callback)

} // End Main Handler Function -------
