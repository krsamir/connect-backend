import { Master } from "connect-database";
const task = {};

const log = console.log;
task.addMasterTable = () => {
  Master.sync()
    .then(() => {
      log(`Master Table Created.`);
    })
    .catch((e) => {
      log(e);
    });
};

export default task;
