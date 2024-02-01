const axios = require("axios");

async function main() {
    const response = await axios.get(
      "https://sum-server.100xdevs.com/todos", {
        username: "username",
        password: "password"
      },
      {
        headers: {
          Authorization: "Bearer 1234"
        },
      }
    );
    console.log(response.data.todos.length);
}

async function main() {
    const response = await fetch(
      "https://sum-server.100xdevs.com/todos",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer 1234"
        }
      }
    );
    const json  = await response.json();
    console.log(json.todos.length);
}

main();