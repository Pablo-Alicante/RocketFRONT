export const GET = async () => {
    const res = await fetch(`${process.env.API_URL}/categories`, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store'
    })
    
    const categories = await res.json()


    return Response.json(categories)
}