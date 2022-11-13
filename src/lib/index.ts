/**
 * example 2
 * @description example description
 * @example
 * await executeMain()
 * using {@link Example}.
 * @todo test this
 * @nosideeffects
 * @async
 * @deprecated
 * @param name {string}
 */
export async function executeMain(name  = "world"){
  console.log(`hello ${name}`)
}


export class Example {
  execute(){
    console.log("hello world")
  }
}
