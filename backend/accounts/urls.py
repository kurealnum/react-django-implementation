from django.urls import path
from .views import login_user, check_is_authenticated


urlpatterns = [
    path("login/", login_user, name="login"),
    path("is-authenticated/", check_is_authenticated, name="is_authenticated"),
]
