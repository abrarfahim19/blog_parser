The underlying concept of an Array Data structure is its dynamic. The size of the array is increased twice the original value if the array capacity is reached.

It has following private variable:
1. Size - current
2. Capacity
3. Array pointer

When `size = capacity`, `size *= 2` and copy the whole array into the new memory.
```cpp
class Array{
private:
	int *arr;
	int sz;
	int cap;
	void increase_capacity(){
		cap *= 2;
		int *temp = new int[cap];
		for (int i=0;i<sz;i++){
			temp[i] = arr[i];
		}
		delete [] arr;
		arr = temp;
	}

	void decrease_size(){
		cap /= 2;
		int *temp = new int[cap];
		for (int i=0;i<sz;i++){
			temp[i] = arr[i];
		}
		delete [] arr;
		arr = temp;
	}

public:

Array(){

int sz = 0;

int cap = 1;

arr = new int[1];

}

void Push_back(int x){

if (cap==sz){

increase_capacity();

}

arr[sz] = x;

sz++;

}

void Print_array(){

for (int i = 0; i<sz; i++){

cout << i << "===>" << arr[i] << "\n";

}

}

int Get_size(){

return sz;

}

int Get_element(int indxx){

if (indxx > sz){

cout << "Index is out of bound!" << "\n";

return -1;

} else {

return arr[indxx];

}

}

void Insert_at_position(int indxx, int x){

if (sz == cap){

increase_capacity();

}

for(int i=sz+1; i>indxx; i--){

arr[i] = arr[i-1];

}

arr[indxx] = x;

sz++;

}

void Erase_element(int indxx){

if (indxx > sz){

cout << "Index is out of bound!" << "\n";

return;

} else {

for (int i=indxx;i<sz;i++){

arr[i] = arr[i+1];

}

}

sz --;

}

void Pop_back(){

if (sz == 0){

cout << "You can't Pop from empty array!" << "\n";

return;

} else {

sz --;

}

}

};

  

int main() {

// cout << "Hello world!";

Array a;

a.Push_back(1);

a.Push_back(13);

a.Push_back(3);

// cout << a.Get_element(1) << "\n";

a.Insert_at_position(1,8);

// a.Print_array();

a.Print_array();

cout << "==================" << "\n";

a.Pop_back();

a.Print_array();

a.Erase_element(1);

cout << "==================" << "\n";

a.Print_array();

// cout << a.Get_size() << "\n";

return 0;

}
```