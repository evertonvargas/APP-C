
export const getOrder = async (
  _: any,
  args: any,
  ctx: Context
) => {
  console.log("ctx", ctx)
  console.log("args", args)

  return "Not logged in"
}
