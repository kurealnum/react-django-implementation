from django.urls import path
from .views import login_user, is_authenticated


urlpatterns = [
    path("login/", login_user, name="login"),
    path("is_authenticated/", is_authenticated, name="is_authenticated"),
]
