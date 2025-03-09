Following is a simple binary search implementation:
```cpp

int binary_search(){
	int n, k;
	cin >> n >> k;
	vector<int>a;
	a.resize(n);

	for (int i=0; i<n; i++){
		cin >> a[i];
	}

	int mid, left = 0, right = n-1;
	while(left <= right){
		mid = (left+right)/2;
		if (a[mid] == k){
			cout << "Yeas! " << mid << "\n";
			return 0;
		} else if (a[mid] < k){
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	cout << "No!" << "\n";

	return 0;
}
```

## Time complexity:
$$\begin{align*}
\text{Let } n &\text{ be the number of elements in the array.} \\ \text{At each step, the size of the search space is halved,} &\text{ so the recurrence relation is:} \\ T(n) &= T\left(\frac{n}{2}\right) + O(1) \\ \text{After } k \text{ iterations, the search space becomes } \frac{n}{2^k} &\text{ elements.} \\ \text{We stop when there is only one element left, i.e.,} &\text{ when } \frac{n}{2^k} = 1. \\ n &= 2^k \\ \log_2{n} &= k \\ \text{Therefore, the time complexity } T(n) &\text{ is:} \\ T(n) &= O(\log_2{n}) \end{align*} $$
