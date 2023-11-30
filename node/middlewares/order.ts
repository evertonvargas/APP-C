export async function order(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: { storeUserAuthToken },
    clients: { TokenClient },
  } = ctx

  if(storeUserAuthToken){
    const response = await TokenClient.decode(storeUserAuthToken)
    console.log("response", response)
  }

  ctx.status = 200
  ctx.body = {message: "Decode realizado"}

  await next()
}
