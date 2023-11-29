import type { InstanceOptions, IOContext } from '@vtex/api'
import { AppClient } from '@vtex/api'

export class Notification extends AppClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('squadgrow.app-a@0.x', context, {
      ...options,
      headers: {
        ...options?.headers,
        ...(context.authToken
          ? { VtexIdclientAutCookie: context.authToken }
          : null),
        'Content-Type': 'application/json',
      },
    })
  }

  public async getInfo(){
    return this.http.get(`/_v/info`)
  }
}
