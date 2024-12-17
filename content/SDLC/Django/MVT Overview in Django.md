![[What is MVT?.png]]
### MVC
Most of the web framework implements the MVC(Model-View-Controller) Architecture.

Here Controller intercepts the request and coordinates with the Model and View and sends appropriate response to the user.

The responsibility of the model data definitions, processing logic and interacting with the Database and fetch data or update it accordingly.

The view is the presentation layer of the application. It takes care of the placement and formatting of the result and sends it to the controller, which in turn redirects it to the client as the application's response.
![[MVC Patttern.png]]

### MVT
Django adapts a Model, View and Template architecture. Here too, the Model is the data layer of the application. The view is, in fact the layer that undertakes the processing logic. (in MVC it was the responsibility of the Controller). And the Template is the presentation layer.
![[MVT Architecuture.png]]

A Django app has the following components:
- URL Dispatcher
- View
- Model
- Template

#### URL Dispatcher
Django's URL dispatcher mechanism is equivalent to the controller in the MVC architecture.

The `urls.py` module in the Django project's package folder acts as the dispatcher.

It defines the URL patterns. Each URL pattern is mapped with a view function to be invoked when the client's request URL is found to be matching with it.

The URL patterns defined in each app under the project are also included. Here’s the `urls.py` file in the app folder.

```python
from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name='index'),
]
```

#### View
The view function reads the path, query, and body parameters included in the client's request If required, it uses this data to interact with the models to perform CRUD operations.

A view can be a user-defined function or a class.

You create View definitions in the `views.py` file of the respective app package folder. 

The following code in the `view.py` file defines the index() view function.

```python
from django.shortcuts import render
# Create your views here.
from django.http import HttpResponse
  
def index(request):
	return HttpResponse("Hello, world.")
```

#### Model
A model is a Python class.  

An app may have one or more model classes, conventionally put in the `models.py` file. 

Django migrates the attributes of the model class to construct a database table of a matching structure.

Django's Object Relational Mapper helps perform CRUD operations in an object-oriented way instead of invoking SQL queries.

The view uses the client's and the model's data and renders its response using a template.

#### Template 
A template is a web page containing a mix of static HTML and Django Template Language code blocks.

You place Template web pages in **the templates** folder with the .html extension.

Django's template processor uses any context data from the view inserted in these blocks to formulate a dynamic response.

The view, in turn, returns the response to the user.

This explains how Django's MVT architecture handles the request-response cycle in a web application.