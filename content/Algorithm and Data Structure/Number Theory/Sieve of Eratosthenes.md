```cpp
//
//  sieve of Eratosthenes.cpp
//  Basic DSA Book
//
//  Created by Abrar Fahim on 21/7/24.
//

#include "sieve of Eratosthenes.hpp"
#include <iostream>

using namespace std;

int Prime[300000], nPrime;
// 1 if not Prime and 0 if Prime
int mark[10000002];

void sieve(int n){
    int i, j, limit = sqrt(n*1.0) + 2;
    mark[0] = 1;
    mark[1] = 1;
    
    // 2 is prime
    Prime[nPrime++] = 2;
    
    // all number divisible by 2 is marked not prime
    for (i = 4; i<=n ; i+=2){
        mark[i] = 1;
    }
    
    // Run loop for all number that is odd
    for (i = 3; i<= n; i+=2){
        // If not prime no need to mark further
        if (!mark[i]){
            // i is prime. Set it as Prime
            Prime[nPrime++] = i;
            if (i <= limit) {
                // Loop through all multiples of i that is greater than i*i
                for (j = i*i ; j <= n; j += i*2){
			        // mark all number till n as not prime
                    mark[j] = 1;
                }
            }
        }
    }
    
    for (i = 0; i < nPrime; i++){
        cout << Prime[i] << " ";
    }
}
```

This is an elegant algorithm. Some question regarding the implementation one should be able to answer:
1. Why the limit is `sqrt(n+1.) + 2` 
		We can use proof by contradiction
2. Why do we mark the numbers greater than `i*i`
		The numbers have already been marked

Further Optimisation:
1. Memory Efficient Sieve: We don't need to memory for all the numbers multiple of `2` for `mark` except `2`. And the `mark[]` array will have two value `0/1`. So we can use the `32 bit` and further optimise. See  `Yarin's Sieve`
2. Segmented Sieve: We have found all the Prime numbers between `0 to n`. But there could be a problem where we have to find the prime between `a and b`.
