import type { InstanceOptions, IOContext } from "@vtex/api";
import { ExternalClient } from "@vtex/api";

export class TokenByUser extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(`http://vtexid.vtex.com.br`, ctx, {
      ...options,
      headers: {
        ...(options && options.headers),
        VtexIdclientAutCookie: ctx.authToken,
        'x-vtex-use-https': 'true',
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Decode the user token.
   * @param storeUserAuthToken - The authentication token for the user.
   * @returns The decoded user data.
   */
  public async decode(storeUserAuthToken: string) {
    const data = await this.http.get(`/api/vtexid/pub/authenticated/user?authToken=${storeUserAuthToken}`)
    return data
  }
}
