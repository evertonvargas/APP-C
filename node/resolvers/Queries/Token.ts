
export const getOrder = async (
  _: any,
  __: any,
  ctx: Context
) => {
  const {
    vtex: { storeUserAuthToken },
    clients: { TokenClient },
  } = ctx

  console.log("ctx", storeUserAuthToken)

  if(storeUserAuthToken){
    const response = await TokenClient.decode(storeUserAuthToken)
    console.log("GraphQl Response", response)
  }

  return "Not logged in"
}
