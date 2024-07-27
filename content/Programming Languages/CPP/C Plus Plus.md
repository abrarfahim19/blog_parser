Why use CPP?
> Because it allows us to [[OOP in Cpp]]

C Plus plus is quite similar to C mit etwas Pro und Kontra. All C programme will run in CPP. But it also has some distinct features. Such as:

### Working with input-output
1. `iostream` cin, cout
2. `freeopen` "r" and "w" mode and link `stdin` or `stdout`
	```cpp
		freopen(input_file.c_str(),"r",stdin);
		string s;
		getline(cin, s);
		freopen(out_file.c_str(),"w",stdout);
		cout << s;
```
3. `fstream` that lets you open multiple file and can write based on need.
```cpp
    int x;
    double d;
    char ch;

    ifstream inputf;
    inputf.open(INPUT_FILE_PATH.c_str());
    ofstream of;
    of.open(OUTPUT_FILE_PATH.c_str());
    inputf >> x >> d >> ch;
    of << x << d << ch;
    inputf.close();
    of.close();
```


### Understanding namespace
Namespace allows you to use different variable, function of a same name. How?
```cpp
int main() {
	std::cout << "This is a string";
}

```
Vs
```cpp
using namespace std;
int main() {
	cout << "This is a string";
}
```

So it allows us to define a set of variable and functions in a separate scope.
```cpp
namespace Calculate {
	int function add_number (int x, int y) {
		return x + y; 	
	}
	int function multiply_number (int x, int y) {
		return x * y; 	
	}
}

int main() {
	int x = Calculate::add_number(10+20);
	int y = Calculate::multiply_number(10+20);

	return 0;
}
```


### Understanding conditions and loop
```cpp
int main() {
	if (expression1) {
		cout << "This is true" << endl;
	}
	else if (expression2) {
		cout << "This is true" << endl;
	}
	else {
		cout << "This is true" << endl;
	}
}
```

```cpp
int main () {
	for (int i = 0; i < 10; i++) {
		if (i == 2) {
			continue;	
		}
		cout << i << endl;
		if (i == 9) {
			break;
		}
	}
}
```

### Understanding Array
```cpp
int main() {
	int n;
	cin >> n;
	int arr[n];

	for (int i =0; i < n; i++) {
		cin >> arr[i];
	}

	int sum = 0;
	for (int i =0; i < n; i++) {
		sum = sum + arr[i];
	}

	int mult = 1;
	for (int i =0; i < n; i++) {
		mult = mult * arr[i];
	}
	return 0;
}
```


### Understanding String
```cpp
int main() {
	int n;
	cin >> n;
	int arr[n];

	for (int i =0; i < n; i++) {
		cin >> arr[i];
	}

	int sum = 0;
	for (int i =0; i < n; i++) {
		sum = sum + arr[i];
	}

	int mult = 1;
	for (int i =0; i < n; i++) {
		mult = mult * arr[i];
	}
	return 0;
}
```

### Understanding function
##### pass by reference and pass by value.
```cpp
void Swap_values (int &x , int &y){
	int z = x;
	x = y;
	y = z;
}

int main () {
	int x = 5, y = 10;
	swap(x,y);
	cout << "X : " << x << ", Y: " << y << endl;
	return 0;
}
```
### Understanding Pointer
```cpp
int main () {
	int x = 10;
	int *y = &x;

	cout << x << endl;
	cout << y << endl;
	cout << *y << endl;

	x = 100;
	cout << x << endl;
	cout << y << endl;
	cout << *y << endl;
}
```


### Dynamic Allocation
We can take memory space from heap dynamically instead of taking it from memory. This is the concept of Dynamic allocation. 
```cpp
void dynamic_alloc() {

    int *x = new int;
    *x = 10;
    cout << "The pointer is: " << x << "\n" << "The Value is: "<< *x << endl;
    delete x;

/*  For Array  */
    int n;
    cin >> n;
    int *y = new int[n];
    for (int i = 0; i<n ; i++) {
        cin >> y[i];
    }
    for (int i = 0; i<n ; i++) {
        cout << y[i] << " ";
    }
    cout << "The pointer of Array is: " << y << endl;
    cout << "The second pointer and value is: " << y + 1 << ", " << *y + 1 << endl;
    delete [] y;
}
```
### Dynamic Vector
Whenever we need dynamic array, vector is the solution. It allows us to dynamically increase the size of the vector.
```cpp
void dynamic_vector(){
	vector<int>a = {1,2,3,4,5};
	a.resize(3);
	for (int i=0; i <a.size() ; i++) {
		cout << a[i] << endl;
    }
    a.insert(a.begin(), 10);
    cout << "A Begin Position: " << a << endl;
    a.erase(a.begin() + a.size() - 1 );
    for (int i=0; i <a.size() ; i++) {
	    cout << a[i] << endl;
	}
}
```

> [!info] Here a.begin() is not a pointer its an iterator. What is an iterator?
### Practice Some problem
contest Link: https://vjudge.net/contest/535482
password: `helloworld`

### Some tips for contest.
1. cin and cout these std functions is usually slow. So, use these line to make the commands faster.
```cpp
    ios_base::sync_with_stdio(0);
    cin.tie(0);
```
- `ios_base::sync_with_stdio(0);` turns off the overall synchronization between C++ and C-style I/O.
- `cin.tie(0);` specifically unties `cin` from `cout`, meaning flushing `cout` won't necessarily trigger a flush on `cin` anymore.

2. avoid using endl. Because it forces a flush. That makes the code slower. So use `"\n"` instead.

