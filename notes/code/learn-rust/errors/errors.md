# Error Handling
- Errors return an 
- ```Rust
  enum Result<T, E> {
    Ok(T),
    Err(E),
  }
  ```
- Can check documentation or use the compiler to test what types the function returns
- Can match ok or error, then match the error kind, then do stuff to that!
- ```Rust
  use std::fs::File;
  use std::io::ErrorKind;

  fn main () {
    let f = File::open("hello.txt");

    let f = match f {
      // If it's ok just return the file!
      Ok(file) => file,
      // Otherwise we want to take the error and compare the kind of error
      Err(error) => match error.kind() {
        // If it's a not found error
        ErrorKind::NotFound => match File::create() {
          Ok(fc) => fc;
          Err(E) => panic!("Can't create file! {:?}", E)
        },
        // Otherwise 
        other_error => {
          panic!("Can't open the file: {:?}", other_error)
        }
      }
    }
  }
  ```
## Error Shortcuts
- Closures can simplify the code a lot
- `unwrap()` is a shortcut for return ok or panic!
- `expect()` is like `unwrap` but you can choose your error message
## Propogating Errors
- Remember that the `Result` enum is included in the standard library, so at anytime you can return a `Ok(BOOMER)` or something
- You can use the `?` operator to basically do the `match` + `ok/err` for you. 
- `fs.read_to_string('123123')?.domorestuff()?`
  - Similar to the javascript equivalent
- `fs::read_to_string()` also encompasses all of the above
- Can only use `?` operator in functions that return `Result`, so if you want to use in main you need to set your function up for that

## When to Panic?
- During prototyping
  - `Expect` and `Unwrap` is ez to use
- When you have more info than the compiler
  - E.g. hardcoded stuff

## Error Handling 101
- When failure is *expected*, don't use panic
- When code after certain point needs to be sure data is valid, don't use panic
- When you can use types to encode information, don't use panic
  - e.g. `u32` will never be negative

## Use Structs
- Instead of checking if say num is between 1 and 100,
- Create a struct that will *always* be between 1 and 100, so you don't have to check multiple times