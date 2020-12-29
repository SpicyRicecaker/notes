fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let largest = get_largest(&number_list);

    println!("The largest number is {}", largest);
    // let bob = ipAddress { x: 1.1, y: 1.2 };
    // let blue = ipAddress { x: '1', y: '2' };
}

// Takes in a vector and returns the largest vector from that list
// fn get_largest(vec: Vec<i32>) -> i32 {
//     let mut largest = vec[0];

//     for number in vec {
//         if number > largest {
//             largest = number;
//         }
//     }
//     largest
// }

// Official largest, uses array instead of vector as it is more accessible, uses references so that number list is still valid afterwards, also returns a reference to number so it's better
// fn std_get_largest(list: &[i32]) -> &i32 {
//     let mut largest = &list[0];

//     // Since list is an array of references, we can just return a reference
//     for number in list {
//         if number > largest {
//             largest = number;
//         }
//     }
//     largest
// }

fn get_largest<T: PartialOrd + Copy>(list: &[T]) -> T {
    let mut largest = list[0];

    // Since list is an array of references, we can just return a reference
    for &number in list {
        if number > largest {
            largest = number;
        }
    }
    largest
}

// struct ipAddress<T> {
//     x: T,
//     y: T,
// }
