const categories = [
    {
        id: 1,
        name: 'Category 1',
        description : 'Category 1 description',
        url: '/category/1',
    },
    {
        id: 2,
        name: 'Category 2',
        description : 'Category 2 description',
        url: '/category/2',
    }
]

export async function GET(request) {
    return Response.json(categories)
}