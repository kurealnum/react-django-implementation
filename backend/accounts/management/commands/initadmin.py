# yoinked from https://github.com/dkarchmer/aws-eb-docker-django/blob/e6b1d7bb66203ed1f42bef98043aa0e52a1e0cb6/authentication/management/commands/initadmin.py

from django.conf import settings
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):

    def handle(self, *args, **options):
        if User.objects.count() == 0:
            username = "ADMIN"
            email = "admin@gmail.com"
            password = "ADMIN"
            print("Creating account for %s (%s)" % (username, email))
            admin = User.objects.create_superuser(
                email=email, username=username, password=password
            )
            admin.is_active = True
            admin.is_superuser = True
            admin.save()
        else:
            print("Admin accounts can only be initialized if no User exist")
