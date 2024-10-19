from django.urls import path
from .views import RegisterView, login_user, check_is_authenticated, logout_user


urlpatterns = [
    path("login/", login_user, name="login"),
    path("is-authenticated/", check_is_authenticated, name="is_authenticated"),
    path("logout/", logout_user, name="logout"),
    path("register/", RegisterView.as_view(), name="register"),
]
