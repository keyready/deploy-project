const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload');
const app = express()


app.use(fileUpload({}));
app.use(express.static(path.resolve('../client/build')));


app.get('/*', (req, res) => {
    res.sendFile(path.resolve('../client/build/index.html'))
})

app.post('/upload', function (req, res) {
    req.files.photo.mv(path.resolve('../client/public/static/images/') + req.files.photo.name);
    res.end(req.files.photo.name);

    console.log(req.files)
    console.log(req.body)
})

app.listen(8080, () => {
    console.log('Сервер запущен')
})
