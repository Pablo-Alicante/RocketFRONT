'use client'

import Button from '@/components/atoms/Button'
import { useEffect } from 'react'

export default function DashboardCommentsError({ error, reset }) {
  useEffect(() => {
    console.log('ERROR', error)
  }, [error]);

  return (
    <>
      <h2>¡Se ha producido un error cargando comentarios!</h2>
      <Button onClick={() => reset()}>¡Prueba de nuevo!</Button>
    </>
  )
}
