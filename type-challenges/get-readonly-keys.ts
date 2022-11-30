
type GetReadonlyKeys<T> = {
  [K in keyof T as IsEqual<Pick<T, K>, MyReadonly<Pick<T, K>>> extends true ? K : never]: T[K]
}

interface TodoReadonlyKeys {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<TodoReadonlyKeys> // expected to be "title" | "description"
