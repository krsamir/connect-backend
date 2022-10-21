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

yargs.command({
  command: "2",
  describe: "2. Add Country table",
  handler(argv) {
    task.addCountryTable();
  },
});

yargs.command({
  command: "3",
  describe: "3. Add State table",
  handler(argv) {
    task.addStateTable();
  },
});

yargs.command({
  command: "4",
  describe: "4. Add Cities table",
  handler(argv) {
    task.addCitiesTable();
  },
});
yargs.parse();
