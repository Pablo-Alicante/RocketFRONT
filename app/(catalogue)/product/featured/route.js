const products = [
    {
        id: 1,
        name: 'Product 1',
        description : 'Product 1 description',
        url: '/Product/1',
    },
    {
        id: 2,
        name: 'Product 2',
        description : 'Product 2 description',
        url: '/Product/2',
    }
]


export async function GET(request) {
    return Response.json(products)
}