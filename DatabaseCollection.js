import { Master, Countries, States, Cities } from "connect-database";
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

task.addCountryTable = async () => {
  Countries.sync()
    .then(() => {
      log(`Country Table Created.`);
    })
    .catch((e) => {
      log(e);
    });
};

task.addStateTable = async () => {
  await States.sync()
    .then(() => {
      log(`State Table Created.`);
    })
    .catch((e) => {
      log(e);
    });
};

task.addCitiesTable = async () => {
  await Cities.sync()
    .then(() => {
      log(`Cities Table Created.`);
    })
    .catch((e) => {
      log(e);
    });
};
export default task;
