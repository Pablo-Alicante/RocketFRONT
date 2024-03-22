export async function GET() {

    const res = await fetch(`${process.env.API_URL}/categories`, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-cache'
    })
    
    const categories = await res.json()


    return Response.json(categories)
}