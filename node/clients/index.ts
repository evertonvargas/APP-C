import { Drivers } from './drivers';
import { IOClients } from '@vtex/api'

import Status from './status'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get drivers(){
    return this.getOrSet('drivers', Drivers)
  }
}
