export interface IProduct {
  id: number
  slug: string
  name: string
  image: FirstOrSecondOrThirdOrImage
  category: string
  new: boolean
  price: number
  description: string
  features: string
  includes?: IncludesEntity[] | null
  gallery: Gallery
  others?: OthersEntity[] | null
}
export interface FirstOrSecondOrThirdOrImage {
  mobile: string
  tablet: string
  desktop: string
}
export interface IncludesEntity {
  quantity: number
  item: string
}
export interface Gallery {
  first: FirstOrSecondOrThirdOrImage
  second: FirstOrSecondOrThirdOrImage
  third: FirstOrSecondOrThirdOrImage
}
export interface OthersEntity {
  slug: string
  name: string
  image: FirstOrSecondOrThirdOrImage
}

const getCategoryItems = (category: string, array: IProduct[]): IProduct[] => {
  const result = array
    .filter((item) => item.category === category)
    .sort((a, b) => Number(b.new) - Number(a.new))
  return result
}

export default getCategoryItems
