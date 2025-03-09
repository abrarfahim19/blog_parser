Firstly, what is `Euler's Totient Function`?

```cpp
//
//  eulers_totient.cpp
//  Basic DSA Book
//
//  Created by Abrar Fahim on 23/7/24.
//

#include "eulers_totient.hpp"
#include <iostream>

using namespace std;

int phi[1000006], phi_mark[1000006];

void sieve_phi(int n){
    
    int i,j;
    // Initialisation
    for (i=1; i<=n; i++) {
        phi[i] = i;
    }
    
    phi[1] = 1;
    phi_mark[1] = 1;
    
    for (i = 2; i <= n; i++){
        if (!phi_mark[i]){
            for (j=i; j<=n; j += i) {
                phi_mark[j] = 1;
                // phi[j] will be divisible by i
                phi[j] = phi[j]/i*(i-1);
            }
        }
    }
}
```

If we don't need the list of `Totient Function`, we can use the bellow loop to find $\phi(n)$:

```cpp
//
//  eulers_totient.cpp
//  Basic DSA Book
//
//  Created by Abrar Fahim on 23/7/24.
//

#include "eulers_totient.hpp"
#include <iostream>

using namespace std;

int loop_phi(int n) {
    int ret = n;
    
    for (int i=2;i*i<=n; i++){
        if (n % i == 0){
            // i is a prime that divides n
            while (n % i == 0) {
                n /= i;
            }
            ret -= ret/i;
        }
    }
    
    if (n > 1) {
        // There is only one prime greater than
        // current n that devides the main n
        ret -= ret/n;
    }
    
    return ret;
}
```


