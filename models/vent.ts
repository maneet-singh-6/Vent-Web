export interface User {
  id: number
  name: string
  joined_at: string
}

export interface Note {
  id: number
  user_id: number
  content: string
  created_at: string
}
