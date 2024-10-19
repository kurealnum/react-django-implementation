from rest_framework import serializers

from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:  # type:ignore
        model = CustomUser
        fields = "__all__"
