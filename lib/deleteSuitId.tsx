'use server'
import type { Suit } from '@/store/cartStore'
import { fetchSuits } from './fetch'
import { redirect } from 'next/navigation'
import fs from 'fs/promises'

export const deleteSuitId = async (formData: FormData) => {
  const suits = (await fetchSuits()) as Suit[]
  const id = formData.get('id')

  if (id) {
    const newSuits = suits.filter((suit: Suit) => suit?.id !== +id)
    await fs.writeFile('data/suits.json', JSON.stringify(newSuits, null, 2))
    redirect('/dashboard')
  }
}
