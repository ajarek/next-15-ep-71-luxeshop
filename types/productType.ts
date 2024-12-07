export type ProductType = {
  id: number
  title: string
  price: number
  discountPercentage: number
  description: string
  category: string
  thumbnail: string
  rating: number
  brand: string
  reviews: {
    reviewerName: string
    reviewerEmail: string
    comment: string
    rating: number
    date: Date
  }[]
}
