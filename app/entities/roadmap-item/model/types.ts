export type TypeRoadmapItem = {
  id: number,
  date: string
  title: string
  hasButton: boolean,
  messages: RoadmapMessage[]
}

export type RoadmapMessage = {
  userId: number
  text: string
}
