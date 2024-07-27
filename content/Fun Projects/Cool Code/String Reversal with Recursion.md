```python
def string_reversal(str):
	if len(str) == 0:
		return str
	else:
		return string_reveral(str[1:]) + str[0]
```