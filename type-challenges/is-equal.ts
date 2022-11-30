// 参考：https://jishuin.proginn.com/p/763bfbd6505a
// 参考： https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796

type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

type r1 = IsEqual<1 | 2, 1>
type r2 = IsEqual<1, 1 | 2>
type r3 = IsEqual<any, string>
type r4 = IsEqual<any, unknown>
type r5 = IsEqual<never, never>
type r6 = IsEqual<{a: 1}, {a: 1}>
