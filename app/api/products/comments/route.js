const comments = [
  {
    id: 1,
    title: 'Este producto es caca',
    description: 'Me gustó cuando llegó, pero no funciona.',
    rate: 2,
    userId: 1,
    productId: 1,
    createdAt: '2024-02-28T10:00:00',
  },
  {
    id: 2,
    title: 'Este producto es caca',
    description: 'Me gustó cuando llegó, pero no funciona.',
    rate: 2,
    userId: 1,
    productId: 1,
    createdAt: '2024-02-28T10:00:00',
  },
  {
    id: 3,
    title: 'Este producto es caca',
    description: 'Me gustó cuando llegó, pero no funciona.',
    rate: 2,
    userId: 1,
    productId: 1,
    createdAt: '2024-02-28T10:00:00',
  }
]


export async function GET() {
  return Response.json({ comments })
}
