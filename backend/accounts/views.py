from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework import status

from .serializers import CustomUserSerializer


@api_view(["POST"])
def login_user(request):
    data = request.data

    username = data["username"]
    password = data["password"]

    try:
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return Response({"success": "User authenticated"}, status=200)
        else:
            return Response({"error": "Error Authenticating"}, status=401)
    except:
        return Response({"error": "Something went wrong when logging in"}, status=401)


@api_view(["GET"])
def check_is_authenticated(request):
    user = request.user

    try:
        isAuthenticated = user.is_authenticated

        if isAuthenticated:
            return Response({"isAuthenticated": "success"}, status=200)
        else:
            return Response({"isAuthenticated": "error"}, status=403)
    except:
        return Response(
            {"error": "Something went wrong when checking authentication status"},
            status=404,
        )


@api_view(["POST"])
def logout_user(request):
    try:
        logout(request)
        return Response({"success": "You have been logged out"}, status=200)
    except:
        return Response({"error": "Something went wrong"}, status=403)


class RegisterView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        data = request.data
        serializer = CustomUserSerializer(data=data)
        serializer.is_valid()
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)
