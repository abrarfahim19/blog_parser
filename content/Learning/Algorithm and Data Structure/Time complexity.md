There are basically three kinds of time complexity notation:
1. $O$ - Upper bound
2. $\Omega$ - Lower bound
3. $\Theta$ - Tight bound
There are categorically two types of time complexity:
1. Polynomial Time complexity i.e. $O(n, n^2, n^3)$
2. Exponential Time complexity i.e. $O(c^n)$
A more deep look into them:

#### Big-O Notation ($O$) - Upper Bound

- **Definition**: $f(n) = O(g(n))$ means that $f(n)$ grows at most as fast as $g(n)$ up to a constant factor, for sufficiently large $n$.
- **Mathematically**: There exist positive constants $c$ and $n_0$ such that $f(n) \leq c \cdot g(n)$ for all $n \geq n_0$.

**Example**: Suppose $f(n) = 3n^2 + 5n + 2$. We claim that $f(n) = O(n^2)$.

To prove this:
1. $f(n) = 3n^2 + 5n + 2$
2. For large $n$, the $n^2$ term dominates the $5n$ and constant terms.
3. We can find constants $c$ and $n_0$ such that $f(n) \leq c \cdot n^2$. Let's choose $c = 4$ and see if it works for $n \geq 1$.

$3n^2+5n+2≤4n^2$  for  $n \geq 1$

Since $3n^2 \leq 4n^2$ and $5n + 2 \leq n^2$ for $n \geq 1$, our choice of $c = 4$ and $n_0 = 1$ works.

Thus, $f(n) = O(n^2)$ means that for sufficiently large $n$, $f(n)$ will never grow faster than some constant multiple of $n^2$.

#### Big-Omega Notation ($\Omega$) - Lower Bound

- **Definition**: $f(n) = \Omega(g(n))$ means that $f(n)$ grows at least as fast as $g(n)$ up to a constant factor, for sufficiently large $n$.
- **Mathematically**: There exist positive constants $c$ and $n_0$ such that $f(n) \geq c \cdot g(n)$ for all $n \geq n_0$.

**Example**: Suppose $f(n) = 3n^2 + 5n + 2$. We claim that $f(n) = \Omega(n^2)$.

To prove this:
1. $f(n) = 3n^2 + 5n + 2$
2. For large $n$, the $3n^2$ term dominates the $5n$ and constant terms.
3. We can find constants $c$ and $n_0$ such that $f(n) \geq c \cdot n^2$. Let's choose $c = 3$ and $n_0 = 1$.

$3n^2+5n+2 \ge 3n^2$ for $n \geq 1$

Since $3n^2 \geq 3n^2$, our choice of $c = 3$ and $n_0 = 1$ works.

Thus, $f(n) = \Omega(n^2)$ means that for sufficiently large $n$, $f(n)$ will always grow at least as fast as some constant multiple of $n^2$.

#### Theta Notation ($\Theta$) - Tight Bound

- **Definition**: $f(n) = \Theta(g(n))$ means that $f(n)$ grows exactly as fast as $g(n)$ up to constant factors, for sufficiently large $n$. It provides both an upper and lower bound.
- **Mathematically**: There exist positive constants $c_1$, $c_2$, and $n_0$ such that $c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n)$ for all $n \geq n_0$.

**Example**: Suppose $f(n) = 3n^2 + 5n + 2$. We claim that $f(n) = \Theta(n^2)$.

To prove this:
1. $f(n) = 3n^2 + 5n + 2$
2. For large $n$, the $3n^2$ term dominates the $5n$ and constant terms.

We need to show both:
- $f(n) \leq c_2 \cdot n^2$ for some $c_2$.
- $f(n) \geq c_1 \cdot n^2$ for some $c_1$.

From the previous parts:
- $f(n) = O(n^2)$ with $c_2 = 4$.
- $f(n) = \Omega(n^2)$ with $c_1 = 3$.

So, for $n \geq 1$:
$3n^2 \le 3n^2+5n+2 \le 4n^2$  for $n  \geq 1$

Thus, $f(n) = \Theta(n^2)$ means that for sufficiently large $n$, $f(n)$ grows at the same rate as $n^2$ up to constant factors.

### Summary

- **Big-O ($O$)**: Describes an upper bound. $f(n) = O(g(n))$ means $f(n)$ grows no faster than $g(n)$.
- **Big-Omega ($\Omega$)**: Describes a lower bound. $f(n) = \Omega(g(n))$ means $f(n)$ grows at least as fast as $g(n)$.
- **Theta ($\Theta$)**: Describes a tight bound. $f(n) = \Theta(g(n))$ means $f(n)$ grows exactly as fast as $g(n)$, both in upper and lower bounds.

### Example
Fibonacci Number with $O(2^n)$ approach:
```cpp
int fib_expo(int n) {
	if (n <= 1){
		return n;
	}
	return fib_expo(n-1) + fib_expo(n-2);
}
```

Fibonacci Number with $O(n)$ approach:
```cpp
vector<int>saved(100, -1);
int fib_linear(int n){
	if (saved[n] != -1){
		return saved[n];
	}
	if (n <= 1){
		saved[n] = n;
	} else {
		saved[n] = fib_linear(n-1) + fib_linear(n-2)
	}
	return saved[n];
}
```