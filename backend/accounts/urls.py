from django.urls import path
from .views import RegisterView, LoginUserView, CheckAuthenticatedView, LogoutUserView


urlpatterns = [
    path("login/", LoginUserView.as_view(), name="login"),
    path(
        "is-authenticated/", CheckAuthenticatedView.as_view(), name="is_authenticated"
    ),
    path("logout/", LogoutUserView.as_view(), name="logout"),
    path("register/", RegisterView.as_view(), name="register"),
]
