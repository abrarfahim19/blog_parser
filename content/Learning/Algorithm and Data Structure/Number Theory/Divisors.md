Divisors is important when finding NOD, SOD, LCD or GCD etc.
The sieve approach to the problem is following:
```cpp
#include "divisiors.hpp"
#include <vector>
#include <iostream>

using namespace std;

vector<int>divisors[1000002];

void divisiors(int n){
    int i,j;
    for (i =1; i<=n; i++) {
        for (j =i; j<=n; j+=i) {
            divisors[j].push_back(i);
        }
    }
}
```
Now what is the time complexity of above program? $nlog(n)$. But why?
shouldn't this be $O(n^2)$. No. Even if there seems to be two loop, the complexity will be $nlog(n)$ because,

For each $i$ there will be $n/i$ numbers of divisors. And this will give the harmonic sum:  $n/1 + n/2 + n/3 + ... n/n = nlog(n)$ 

In some problem the list of divisors are not needed. Instead they require `NOD -> Number of Divisors` or `SOD -> Summation of Divisors`.

The following formulas of `Prime Factorial` is pretty handy:
$n = P_1^a \cdot P_2^b \cdot \cdot \cdot P_k^k$
$$NOD(n) = (a_1+1)(a_2+1)\cdot\cdot\cdot(a_k+1)$$
$$SOD(n) = (P_1^0+P_1^1+P_1^2 \cdot\cdot\cdot P_1^a)\cdot(P_2^0+P_2^1+P_2^2 \cdot\cdot\cdot P_2^b)\cdot(\cdot \cdot\cdot)$$
Example:
$12=2^2\cdot3^1$
$NOD(12) = (2+1)(1+1) = 6$
$SOD(12) = (2^0+2^1+2^2)(3^0+3^1)$
$= (1+2+4)(1+3)$
$= (1+2+3+4+6+12)$
$= 28$
