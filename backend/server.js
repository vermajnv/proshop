import {app} from "./app.js";

const server = app.listen(4000, () => {
    console.log('server is running');
})