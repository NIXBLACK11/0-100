Picks -> first 
helps user take only those variable from interface that it wants

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

type UpdateProps = Pick<User, 'name' | 'age'>
```

Partial -> to make some variable not compulsory

```typescript
interface UpdatePropsOptional {
    ?name: string;
    ?age: number;
    ?email: string;
}

// make all optional
type UpdatePropsOptional = Partial<UpdateProps>
```

Readonly -> readonly keyword enforces that a object value never changes

```typescript
type User = {
    readonly name: string;
    readonly age: number;
}

// or you can do

type User = {
    name: string;
    age: number;
}

const User: Readonly<User> = {
    name: 'John',
    age: 21
} 
```

Record and Map

```typescript
type User = {
    id: string;
    username: string;
}

type Users = {
    [key: string]: User;
}

const users: Users = {
    'a': {
        id: 'a',
        username: 'sidd'
    },
    'b': {
        id: 'b',
        username: 'sidd2'
    }
}
```

instead we can use records and types

```typescript
type Users = Record<string, number>
```

exclude same as pick but opposite

infer types from zod

```typescript
inport z from 'zod';

const stringZodSchema = z.string();
type stringZodType = z.interface<typeof stringZodSchema>;
```