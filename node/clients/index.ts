import { IOClients } from '@vtex/api'
import { TokenByUser } from './decodeTokenByUser'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get TokenClient(){
    return this.getOrSet('tokenByUser', TokenByUser)
  }
}
