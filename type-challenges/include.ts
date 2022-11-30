
type MyIncludes<T extends [...any], U> = T extends [infer First, ...infer Rest] ? (true extends IsEqual<First, U> ? true : MyIncludes<Rest, U>) : false


type isPillarMen = MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`