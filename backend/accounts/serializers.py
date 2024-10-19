from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:  # type:ignore
        model = CustomUser
        fields = "__all__"

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data.get("password"))
        return super(CustomUserSerializer, self).create(validated_data)
