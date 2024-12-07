'use server'
import fs from 'fs/promises'
import type { Suit } from '@/store/cartStore'

export const fetchSuits = async () => {
  const suits = await fs.readFile('data/suits.json', 'utf8')
  return JSON.parse(suits) as Suit[]
}
