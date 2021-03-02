#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
    
    #[test]
    fn it_not_work() {
        assert_eq!(2+2, 3);
    }
}

struct Rectangle {
    width: u32;
    
}