interface ItemType {
  name: string
  id: number
  imgUrl: string
}

interface SurveyItemType extends ItemType {
  clicked: boolean
}
