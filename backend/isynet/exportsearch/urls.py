from django.urls import path
from . import views

urlpatterns = [
    path('', views.ExportAll.as_view()),
    path('search/', views.ExportSearch.as_view()),
    path('products/', views.ExportOne.as_view())
]