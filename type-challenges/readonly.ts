
type MyReadonly<T> = {
  readonly [K in keyof T] : T[K]
}

type TodoReadonly = {
  title: string
  description: string
}

const todoReadonly: MyReadonly<TodoReadonly> = {
  title: "Hey",
  description: "foobar"
}

todoReadonly.title = "Hello" // Error: cannot reassign a readonly property
todoReadonly.description = "barFoo" // Error: cannot reassign a readonly property