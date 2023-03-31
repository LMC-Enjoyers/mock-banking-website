import app from './app';

const hostname = "127.0.0.1";
const port = 5050;

app.listen(port, hostname, () => {
    console.log("server is working");
    console.log(`http://${hostname}:${port}/`);
});