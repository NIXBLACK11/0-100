"use strict";
const printValue = (arr) => {
    arr.map((val) => {
        console.log(val);
    });
};
const searchName = (user, name) => {
    user.map((val) => {
        if (val.firstName == name) {
            return true;
        }
    });
    return false;
};
