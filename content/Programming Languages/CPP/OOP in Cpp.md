Example:

```cpp
class Student{
public:
	string name;
	int std_id;
	int age;
	string fathers_name;
	string mothers_name;
	void print_info() {
		cout << name << std_id << age << fathers_name << mothers_name;
	}
}

int main(){
	Student s;
	s.name = "Abrar";
	s.age = 10;
	s.std_id = 12321;
	s.fathers_name = "X";
	s.mothers_name = "Y";
	s.print_info();
	return 0;
}
```

Recursive call of class:
```cpp
class Person{
public:
    string name;
    Person *father;
    Person *mother;
    void print_inf(){
        cout << "Name: " << name << " Father Name: " << father->name << " Mothers Name: " << mother->name;
    }
};

  

int cpp_class (){
    Person a;
    a.father = new Person;
    a.mother = new Person;
    a.name = "Abrar";
    a.father->name = "X";
    a.mother->name = "Y";
    a.print_inf();
    return 0;
}
```

## Access Modifiers

There are three(3) access modifiers:
1. Public
2. Private
3. Protected

```cpp
class User {
protected:
    string name;
    int id;
public:
    void print_info(){
        cout << "Name: " << this->name << "\n";
        cout << "ID: " << this->id << "\n";
    }
};
class Admin: public User {
private:
    string designation = "Admin";
public:
    void set_info(string name, int id){
        this->name = name;
        this->id = id;
    }
};

int main (){
	Admin a;
	a.set_info("Abrar", 37);
	a.print_info();
}
```

## Constructor and Destructor

An example of recursive class with constructor and destructor:
```cpp
class Person {
public:
	string name;
	Person *father, *mother;
	Person(){
		father = NULL;
		mother = NULL;
	} 
	Person(string name, string fathers_name, string mothers_name){
		this->name = name;
		father = new Person;
		father->name = fathers_name;
		mother = new Person;
		mother->name = mothers_name;
	}

	void print_information(){
		cout << "Name: " << this->name << "\n";
		cout << "Fathers Name: " << father->name << "\n";
		cout << "Mothers Name: " << mother->name << "\n";
	}

	~Person(){
		if (father != NULL){
			delete father;
		}

		if (mother != NULL){
			delete mother;
		}
	}
}
```

## Dynamic Objects in C++

```cpp
int main(){
	Student *s = new Student(....);
	s->print_info();
	(*s).print_info();
}
```

## Array of Class

```cpp
int main(){
	Student s[10];

	for (int i =0; i<10; i++){
		s[i] = Student(....);
	}

	for (int i =0; i<10; i++){
		s[i].print_info();
	}
}
```

## Sort Array of Class

We can use operator overload or use a custom function:
```cpp
bool compare (Student a, Student b){
	return a.id < b.id;
}

int main(){
	...
	sort(s.begin(), s.end(), compare);
	...
}
```

```cpp
class Student{

	bool operator < (Student s) const {
		return id < s.id;
	} 
}

int main(){
	...
	sort(s.begin(), s.end());
	...
}

```
