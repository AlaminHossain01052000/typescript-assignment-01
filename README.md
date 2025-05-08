## Differences between Interfaces and Types in TypeScript

Though both `interface` and `type` can be used to define data types in TypeScript, there are some fundamental differences between them. Below are some key differences:

### 1. Primitive Type Declaration

* **Interface:** Cannot define primitive types (like `string`, `number`, `boolean`).
* **Type:** Can define both primitive data types (like `number`, `string`, `boolean`) and non-primitive data types (like objects).

**Example:**

```typescript
// Using type to define a primitive
type User_Name = string;

// Using interface to define an object
interface User_Info {
    name: string;
}
```

### 2. Abstraction

* **Interface:** Can provide abstraction (100% abstraction), allowing the declaration of methods without implementation.
* **Type:** Cannot directly provide abstraction.

**Example:**

```typescript
// Interface with abstract methods
interface Vehicle {
    startEngine(): void;  // Abstract method
    stopEngine(): void;   // Abstract method
}
```

### 3. Extensibility

* **Interface:** Uses the `extends` keyword to inherit types or properties from another interface.
* **Type:** Uses the intersection operator (`&`) or union operator (`|`) to combine types.

**Example:**

```typescript
// Interface extension
interface User_Name {
    name: string;
}
interface User_Address extends User_Name {
    address: {
        present: string;
        permanent: string;
    };
}

// Type intersection and union
type User_Name_Type = string;
type User_Age_Type = number;
type User_Mobile_Number_Type = User_Name_Type | User_Age_Type;
```

---

## What is the use of the `keyof` keyword in TypeScript? Provide an example.

The `keyof` keyword in TypeScript is used to extract the keys of a given object type. It is useful for creating types that dynamically access an object's keys.

### Example:

```typescript
interface User {
    name: string;
    address: string;
}
const userInfo = {
    name: "Md Al Amin",
    address: "Dhaka"
};

const getPropertyValue = (obj: User, key: keyof User) => {
    return obj[key];
};

console.log(getPropertyValue(userInfo, "name")); // Output: Md Al Amin
// console.log(getPropertyValue(userInfo, "mobile")); // Error: Type '"mobile"' is not assignable to parameter of type 'keyof User'
```

---

## Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

### `any` Type:

* Allows assignment of any value without type checking.
* Can hold values of any data type, which may lead to runtime errors.

**Example:**

```typescript
let name: any;
name = "Candy";
name = 50;  // Both are valid
```

* It is considered a **bad practice** to use `any` since it bypasses TypeScript's type safety.

### `unknown` Type:

* Similar to `any`, but requires type checking before performing operations.
* Useful when the type of data is unknown during compile time but can be determined at runtime.

**Example:**

```typescript
const getValue = (x: unknown) => {
    if (typeof x === 'string') {
        console.log("This is a string");
    } else if (typeof x === 'number') {
        console.log("This is a number");
    } else {
        console.log("Invalid Type");
    }
};

getValue(5);      // Output: This is a number
getValue("abc"); // Output: This is a string
```

### `never` Type:

* Represents a value that never occurs.
* Used for functions that either throw an error or have infinite loops.

**Example:**

```typescript
const throwError = (): never => {
    throw new Error("An error occurred");
};
```

* The return type is `never` because the function **never returns** a value.
