import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
import task from "./DatabaseCollection.js";

const yargs = _yargs(hideBin(process.argv));
yargs.version("1.1.0");

yargs.command({
  command: "1",
  describe: "1. Create Address Table",
  handler(argv) {
    task.addMasterTable();
  },
});

yargs.parse();
