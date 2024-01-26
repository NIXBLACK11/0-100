import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";
// import { TODOS } from "./todos.js";

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    // default: id => {
    //     return TODOS.find(x => x.id===id)
    // }
    default: selectorFamily({
        ket: "todoSelectorFamily",
        get: (id) => async ({get}) => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        }
    })
});