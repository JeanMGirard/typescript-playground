import {executeMain} from "@/lib";


if(require.main == module) ((async () => executeMain())())
  .then(() => {
    console.log("done")
  })
  .catch((err) => {
    console.error(err)
  })
