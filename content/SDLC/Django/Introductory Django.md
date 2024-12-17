#### What is three tier Architecture?
Django takes position in three tier architecture. 
![[Three Tier Architecture.png]]
It is recommended to run the `django` project in virtual environment. One may choose to use `venv`, `conda` anything that he is familiar with.
To run and view the `django` app on browser run the following:
```bash
python3 manage.py startapp demoapp # To create an app
python3 manage.py runserver # To run the server
python3 manage.py makemigrations # To compile the migrations
python3 manage.py migrate # To migrate the changes in Database
```

A Django project is a Python package containing the database configuration used by various sub-modules (Django calls them apps) and other Django-specific settings.

Use the startproject command of Django-admin as follows:
```bash
django-admin startproject demoproject
```

The startproject is Django’s default project template. It creates the following file structure in the Python environment:
```bash
C:\djenv\demoproject
│ manage.py
│
└───demoproject
asgi.py
settings.py
urls.py
wsgi.py
__init__.py
```

The general usage of manage.py is as follows: 
```bash
python manage.py <command>
```

On the top we used 3 command. Here are the explanation of these commands:
#### startapp
A Django project folder can contain one or more apps. An app is also represented by a folder of a specific file system. The command to create an app is: 
```bash
python manage.py startapp <name of app>
```

#### makemigrations
Django manages the database operations with the ORM technique. Migration refers to generating a database table whose structure matches the data model declared in the app.

The following command should be run whenever a new model is declared.
```bash
python manage.py makemigrations
```

#### migrate
This command option of manage.py synchronises the database state with the currently declared models and migrations.
```bash
python manage.py migrate
```

#### runserver
This command runs the sever
```bash
python manage.py runserver
```