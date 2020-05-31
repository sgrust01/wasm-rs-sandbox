const fs = require("fs");
export function user_home() {
    const home = process.cwd();
    console.log("Inside JavaScript: ", home);
    return home;
};
