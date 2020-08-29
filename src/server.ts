import app from '.';

app({
    prefix: '/'
}).listen(3000, 'localhost', () => console.log("listening at :3000"))
