

type MyPick<T, U extends keyof T> = {
  [K in U]: T[K]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreviewPick = MyPick<Todo, 'title' | 'completed'>

const todoPick: TodoPreviewPick = {
    title: 'Clean room',
    completed: false,
}