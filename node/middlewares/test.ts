export async function test(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { drivers: driversClient },
  } = ctx

  const statusResponse = await driversClient.getDrivers()

  console.info('Status response:', statusResponse)
  
  ctx.status = 200
  ctx.body = "Deu certo"

  await next()
}
