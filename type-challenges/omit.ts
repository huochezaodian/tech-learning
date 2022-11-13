
// type MyOmit<T, U extends keyof any> = {
//   [K in keyof T as K extends U ? never : K] : T[K]
// }

type MyOmit<T, U extends keyof any> = {
  [K in Exclude<keyof T, U>] : T[K]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}