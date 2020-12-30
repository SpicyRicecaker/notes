## Generics
- Similar to how code can be extracted into functions, functions can further be abstracted using generics
- Name type parameter, usually `T` by default
- Lots of generic type parameters usually means that code needs refactoring
- For structs you can have `struct point<T>`, but for the functions of the struct, the syntax is `impl<T> point<T>`
  - This is because you could have functions that are only accessible on instances of say `f32` points, by saying `impl Point<f32>`
  - Concrete vs generic 

## Traits
- Can consider a trait an interface
- Basically defines methods that we can call on a type
- ```rust
  pub trait Summary {
    fn summarize(&self) -> String;
  }
  
  struct Essay {
    title: String;
    body: String;
  }
  
  impl Summary for Essay {
    fn summarize(&self) -> String {
      title
    }
  }
  ```
- Trait must be public to access from another crate, but you can only implement traits for functions that you've defined locally
  - This ensures that you don't break other code

### Default Implementations
- To create a default implementation...
- Add a body to the function of the trait, e.g. `fn summarize() {...}`
- Then leave the body of the implementation for a type empty, e.g. `impl x for y {}`
- You can also have the default implementation call on other functions of a trait, to minimize the amount of code that you have to write

### Traits as Parameters
- You can use `&impl Summary` to pass in a type that has the trait of Summary
  - ```rust
      pub fn notify(item: &impl Summary) {
        println!("{}", item.summarize())
      }
    ```
- Sugar for using types
  - Actually uses a *trait bound*
  - ```rust
      pub fn notify<T: Summary>(item: &T) {
        println!("{}", item.summarize())
      }
    ```
  - Must use this form if you want multiple items to have the same types
#### Multiple Traits
- Syntax
  - ```rust
      //Using generics
      pub fn notify<T: Summary, U: Bob>(item: &T) {
        
      }
      //Using impl
      pub fn notify(item: &(impl Summary + Bob)){

      }

    ```
#### Multiple Multiple Traits
- Syntax
  - ```rust
      pub fn notify<T, U>(item1: &T, item2: &U) -> i32
        where T: Summary + Bob,
              U: Summary + SomethingElse
      {

      }
    ```
### Return Trait
- You can return a type with a specified trait by again using the `impl` keyword
  - e.g. `fn return_stuff() -> impl Summary`
  - However, this doesn't work with multiple types
  
### Type-Checking Traits
- You can use traits to conditionally implement methods
  - ```rust
      impl<T: Display> someType<T> {
        // Code here
      }
    ```
- And also only implement methods for specific traits
  - ```rust
      impl<T: Display + Clone> doStuff for Type<T> {
        
      }
    ```

## Lifetimes
### References
- Most times references have implicit or inferred lifetimes
- Lifetimes are the time that a reference is valid for

### Borrow Checker
- Rust compares the scope of the two variables, if one is bigger than the other and the bigger is used as a reference then the expression is valid

### Lifetime Syntax
- Lifetime generics have a `'` right after the reference, along with some random variable after, just like generics -> `&'a`
- You can then indicate that two or more references will live as long as the generic lifetime that you assigned them, just like generics