import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/products', (req, res) => {
    res.json(
        [
            { id: 1, name: 'Laptop', price: 999.99, description: 'A high performance laptop', imgUrl: 'https://philco.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/n/1/n14p4020_7.jpg' },
            { id: 2, name: 'Smartphone', price: 499.99, description: 'A latest model smartphone', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXI0S4hQ2hq5UeQaHyGb4x0HjYWW2yPQHeg&s' },
            { id: 3, name: 'Tablet', price: 299.99, description: 'A lightweight tablet', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvif883lt4GOvXew2_PfuBI9MSndGPRTy2A&s' }
        ]
    );
});

app.listen(port, () => {
    console.log('Server is running on', port);
});