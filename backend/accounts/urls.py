from django.urls import path
from .views import ManageAccount


urlpatterns = [path("manage-account/", ManageAccount.as_view(), name="manage_acount")]
