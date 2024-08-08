const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

app.get('/api/parts', (req, res) => res.sand({
    heads: [
        {
            id: 1,
            description: 'My head description',
            title: 'my head title',
            src: 'api/images/head.png'
        }
    ],
    bases: [
        {
            id: 2,
            description: 'My base description',
            title: 'my base title',
            src: 'api/images/base.png'
        }
    ],
    arms: [
        {
            id: 3,
            description: 'My arm description',
            title: 'my arm title',
            src: 'api/images/arm.png'
        }
    ],
}))

app.use(history({index: '/index.html'}));

app.use('/api/images', express.static('images'));

app.use('/', express.static('dist', {index: 'index.html'}));

app.listen(8081, ()=> console.log('my API node express running in 8081'));