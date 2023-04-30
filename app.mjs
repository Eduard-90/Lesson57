import fs from "fs";

fs.writeFile(
  "data.json",
  "{'users': [{ 'name': 'Mike', 'age': 25 }, { 'name': 'Bob', 'age': 32 }, { 'name': 'Nikola', 'age': 17 }]}",
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Data written to file");
    }
  }
);

fs.appendFile(
  "data.json",
  "const newData = [{name: 'Anna', age: 24}, {name: 'Tom', age: 52},]",
  (err) => {
    if (err) throw err;
    console.log("Data appended to file");
  }
);

const setData = async () => {
  await fs.promises.appendFile(
    "data.json",
    "const newData = [{name: 'Anna', age: 24}, {name: 'Tom', age: 52},]",
    (err) => {
      if (err) throw err;
      console.log("Data appended to file");
    }
  );
};
setData();

const isExist = async (filename) => {
  try {
    await fs.promises.stat(filename);
    return console.log(true);
  } catch (error) {
    return console.log(false);
  }
};

isExist("data.json");
