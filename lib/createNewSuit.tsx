'use server'
import type { Suit } from '@/store/cartStore'
import { fetchSuits } from './fetch'
import { redirect } from 'next/navigation'
import fs from 'fs/promises'

export const createNewSuit = async (formData: FormData) => {
  const suits = (await fetchSuits()) as Suit[]

  const name = formData.get('name')
  const image = formData.get('image')
  const description = formData.get('description')
  const price = formData.get('price')
  const category = formData.get('category')
  const color = formData.get('color')
  const size = formData.get('size')

  suits.push({
    id: suits.length + 1,
    name: name as string,
    image: image as string,
    description: description as string,
    price: Number(price) as number,
    category: category as string,
    color: color as string,
    size: size as string,
  })
  await fs.writeFile('data/suits.json', JSON.stringify(suits, null, 2))
  redirect('/dashboard')
}
