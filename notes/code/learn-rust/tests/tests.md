# Tests
- use the *attribute* `#[Test]`
```rust
#[Test]
fn testing_func_2 () {
  assert_eq!(2+2, 4);
}
```
- And run `cargo test`
- `assert_eq!()` actually panics if the condition is not met, tests fail given a panic