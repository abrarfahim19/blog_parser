Create a new app:
```bash
python3 manage.py startapp demoapp
```

edit the `views.py`:
```python
from django.http import HttpResponse

def index(request):
	return HttpResponse("Hellow from the demo view app")
```

create `urls.py` file in the `demoapp` directory:
```python
from django.urls import path
from . import views

urlpattern = [
	path('', views.index, name='index')
]
```

update the `urls.py` in the `demoproject`:
```python
from django.contrib import admin
from django.urls import path, include
  
urlpatterns = [
	path('admin/', admin.site.urls),
	path('demoapp/', include('demoapp.urls'))
]
```

update the `settings.py` file:
```python
INSTALLED_APPS = [
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
	'demoapp',
]
```

after performing these the new folder structure will be the following one:
```bash
.
├── db.sqlite3
├── demoapp
│   ├── __init__.py
│   ├── __pycache__
│   │   ├── __init__.cpython-312.pyc
│   │   ├── admin.cpython-312.pyc
│   │   ├── apps.cpython-312.pyc
│   │   ├── models.cpython-312.pyc
│   │   ├── urls.cpython-312.pyc
│   │   └── views.cpython-312.pyc
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   │   ├── __init__.py
│   │   └── __pycache__
│   │       └── __init__.cpython-312.pyc
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── demoproject
│   ├── __init__.py
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── settings.cpython-311.pyc
│   │   ├── settings.cpython-312.pyc
│   │   ├── urls.cpython-311.pyc
│   │   ├── urls.cpython-312.pyc
│   │   ├── wsgi.cpython-311.pyc
│   │   └── wsgi.cpython-312.pyc
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── manage.py

7 directories, 30 files
```

and visiting the following demo app url we shall se the response from the `views.py`: http://localhost:8000/demo/