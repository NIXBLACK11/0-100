import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 10
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 1010
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 24
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 3
});

export const meSelector = selector({
    key: "meSelector",
    get: ({get}) => {
        return get(networkAtom)+get(jobsAtom)+get(notificationsAtom)+get(messagingAtom);
    }
});