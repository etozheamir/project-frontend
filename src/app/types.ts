export interface Book {
  id?: number,
  name: String,
  author: String,
  description: String,
  genre: String,
  image: String,
  price: Number
}

export interface Order {
  id?: Number,
  name: String,
  phone: String,
  address: String,
  price?: Number,
  status?: String
}

export interface Genre {
  id: Number,
  name: String
}

export interface User {
  id?: number,
  name?: string,
  username: string,
  password: string,
  password2?: string,
  token?: string
}