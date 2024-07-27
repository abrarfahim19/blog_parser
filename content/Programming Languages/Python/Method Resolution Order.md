There are multiple types of inheritance:
1. Simple Inheritance
2. Multiple Inheritance
3. Multilevel Inheritance
4. Hierarchical Inheritance
5. Hybrid Inheritance

MRO determines the Order in which a given method or attribute passed is searched.
![[MRO in Python.png]]

Object is first searched in class Object then the parent class:
![[MRO Child and Parent.png]]

But what about multiple inheritance?
![[MRO in Multiple Inheritance.png]]Here, first the method is searched in the child class then the class Y and X.

Old version of python used to use Depth First Search DFS algorithm. But from python 3.0 it uses `C3 linearization`
![[MRO algorithm.png]]

Some features of `C3 linearization algorithm`'s are:
![[C3 Linearization Algorithm.png]]

Following is an example of MRO attribute:
![[MRO attribute.png]]
Here the `num=9` from the class B will be inherited.

Help function provides the MRO on top and is much more descriptive:
![[Help function with MRO description.png]]

```python
class A:
    def d(self):
        return "Function inside A"


class B:
    def d(self):
        return "Function inside B"


class C:
    def d(self):
        return "Function inside C"


class D(A, B):
    def d(self):
        return "Function inside D"


class E(B, C):
    def d(self):
        return "Function inside E"


class F(E, D, C):
    pass


f = F()
print(f.d())
print(F.mro())
```

This outputs:
```python
Function inside E
[<class '__main__.F'>, <class '__main__.E'>, <class '__main__.D'>, <class '__main__.A'>, <class '__main__.B'>, <class '__main__.C'>, <class 'object'>]
```

Why A comes after D?