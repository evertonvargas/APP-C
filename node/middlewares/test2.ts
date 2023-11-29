export async function test2(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { drivers: driversClient },
  } = ctx

  const statusResponse = await driversClient.getTest2()

  console.info('Status response:', statusResponse)
  
  ctx.status = 200
  ctx.body = "Everton"

  await next()
}
