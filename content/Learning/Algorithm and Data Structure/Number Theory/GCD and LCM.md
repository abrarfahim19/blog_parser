GCD: Greatest Common Divisor
LCD: Least Common Multiple

The formula is:
$$a\cdot b = l \cdot g$$

The problems involving GCD and LCM is usually solved with the above equation. Generally, we find the GCD first and then we get LCM with the equation. Theres two way we can find the GCD:
1. Naive Method: if $a > b$, divide $a$ by $b$ and until 1. And the number with which it is divisible without reminder is the GCD.
2. Euclidean Method: if $a > b$, and $a = k\cdot b + c$ then, $$GCD(a,b) = GCD(b,c)$$ continue this process until $a=k \cdot b$. And $b$ is the GCD of $a,b$

Here is a recursive code of the `GCD`:
```cpp
//
//  gcd.cpp
//  Basic DSA Book
//
//  Created by Abrar Fahim on *.
//

#include "gcd.hpp"
#include <iostream>

using namespace std;

int gcd(int a, int b){
    if (b == 0) return a;
    if (a%b == 0) return b;
    return gcd(b, a%b);
}
```
Euclidean method is very efficient for `long long Datatype` it takes about 100~150 iterations to find the GCD.

We can find the LCM from the GCD with the above equation.

But how do we find the GCD or LCM of more than two numbers? Two numbers at at time.  