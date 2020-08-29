import app from '.';

app({
    prefix: '/',
    pouch_root: './data',
}).listen(3000, 'localhost', () => console.log("listening at :3000"))
