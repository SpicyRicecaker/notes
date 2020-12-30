// Takes in two string literals and returns the longest one
pub fn get_longest_string<'a>(first: &'a str, second: &'a str) -> &'a str {
    if first.chars().count() > second.chars().count() {
        first
    } else {
        second
    }
}

pub fn get_first_string<'a>(first: &'a str, _second: &str) -> &'a str {
  first
}
