#### Python Data Types:
![[Python Data Types.png]]

#### Type Casting
Two types of typecasting:
1. Implicit i.e. int->float
```python
print(10 == 10.00) #True. But why it is true?
print(10 + 10.00) #20.00
```
2. Explicit i.e. str->int

#### Variable Scope:
![[Python Variable Scope.png]]
#### Scope Hierarchy in Python:
1. **Built-In Scope**: Contains built-in names and is always available.
2. **Global Scope**: Names defined at the top level of a script or module.
3. **Enclosing Scope**: Names in the local scopes of enclosing functions (non-local but also not global).
4. **Local Scope**: Names defined within a function.

#### Primitive vs Non-Primitive Data types
- **Primitive Data Types**: int, float, bool, str
- **Non-Primitive Data Types**: list, tuple, dict, set, frozenset
#### Data Structure in Python
![[Data Structure in Python.png]]

Python has the following built-in data structures: **List**, **dictionary**, **tuple** and **set**. These are all considered **non-primitive** data structures, meaning they are classed as objects. 

#### Mutability and Immutability
Mutability refers to data inside the data structure that can be modified. For example, you can either change, update, or delete the data when needed. A list is an example of a mutable data structure. The opposite of mutable is immutable. An immutable data structure will not allow modification once the data has been set. The tuple is an example of an immutable data structure.

##### Three way of iterating a Dictionary
![[Iterating Method of Dictionary.png]]

#### `args` vs `kwargs`
```python
>>> def sum_of(**kwargs):
...     sum = 0
...     for key, value in kwargs.items():
...             sum += value
...     return sum
...
>>> print(sum_of(a=10,b=12,c=13))
35
```

with `args` we can pass any number of `non-Keyword variable`
with `kwargs` we can pass any number of `Keyword arguments`

#### Types of Error in Python
1. Syntax Error
2. Exception Error: Exception Error occur in the runtime.

#### File Handling
There are four modes of handling file in Python:
1. r - open for reading file
2. r+ - open for reading and writing
3. w - open for writing
4. a - open for editing and appending

> [!tip] with open closes the file automatically

#### Procedural Programming Paradigm
![[Procedural Programming.png]]
Advantages of Procedural Programming:
![[Benefits of Procedural Progarmming.png]]
Disadvantage of Procedural Programming:
![[Disadvantages of Procedural Progarmming.png]]

#### Traditional VS Pure Functions
![[Traditional vs Pure Functions.png]]

#### Functional Programming Paradigm
In python function is first class citizen. That means they are on the same level of string and numbers. Advantages of Functional Programming:
![[Advantages of Functional Programming.png]]

#### Benefits of Pure Functions
![[Pure Function Benefits.png]]

#### map and filter()

map(compare_function, list)
=> None
=> None
=> X
=> Y
=> None

filter(compare_function, list)
=> X
=> Y

#### Comprehensions
Comprehensions in Python are a way to create a new sequence from an already existing sequence.
There are four main types of comprehensions in Python:
1. List comprehension
2. Dictionary comprehension
3. Set comprehension
4. Generator comprehension

##### List comprehension
The syntax for list comprehension is:
```python
[ <expression> for x in <sequence> if <condition> ]
```

##### Dictionary comprehension
The syntax for dictionary comprehension is:
```python
dict = { key:value for key, value in <sequence> if <condition> }
```

##### Set comprehension
The syntax for Set comprehension is:
```python
{ <expression> for x in <sequence> if <condition> }
```

##### Generator comprehension
Generator comprehensions are also very similar to lists with the variation of using curved brackets instead of square brackets. They are also more memory efficient as compared to list comprehensions.

The syntax for Generator comprehension is:
```python
( <expression> for x in <sequence> if <condition> )
```

### Order in Which Module is Searched
1. Current Directory Path
2. Built in Module directory
3. PYTHONPATH
4. Installation dependent default directory
![[Python Module Search Order.png]]

#### Working Module From Folder 
```python
import sys
sys.path.insert(1, "/Users/abrarfahim/Developer/Python/temp/demo")
import names
print(names.names)
```