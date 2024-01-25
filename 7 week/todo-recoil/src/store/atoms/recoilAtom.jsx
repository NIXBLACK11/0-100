import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: "todoAtom",
    default: [{
        title: "First",
        description: "First"
    }, {
        title: "Second",
        description: "Second"
    }]
});

export const searchAtom = atom({
    key: "searchAtom",
    default: "first"
});

export const todoQuery = selector({
    key: "todoQuery",
    get: ({get}) => {
        const todos = get(todoAtom);
        const text = get(searchAtom);
        return todos.filter((todo) => {
            return todo.title.toLowerCase().includes(text.toLowerCase());
        });
    }
});