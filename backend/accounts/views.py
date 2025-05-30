from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework import status

from .serializers import CustomUserSerializer


class LoginUserView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        data = request.data

        username = data["username"]
        password = data["password"]

        try:
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                res = Response({"success": "User authenticated"}, status=200)
                res.set_cookie("user_id", user.id, samesite="Strict")  # type: ignore
                return res
            else:
                return Response({"error": "Error Authenticating"}, status=401)
        except Exception:
            return Response(
                {"error": "Something went wrong when logging in"}, status=401
            )


class CheckAuthenticatedView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        user = request.user

        try:
            isAuthenticated = user.is_authenticated

            if isAuthenticated:
                res = Response(
                    {
                        "is_authenticated": True,
                        "is_mod": user.is_mod,
                        "is_admin": user.is_admin,
                        "is_superuser": user.is_superuser,
                    },
                    status=200,
                )
                res.set_cookie("user_id", user.id, samesite="Strict")  # type: ignore
                return res
            else:
                return Response(
                    {
                        "is_authenticated": False,
                        "is_mod": False,
                        "is_admin": False,
                        "is_superuser": False,
                    },
                    status=401,
                )
        except Exception:
            return Response(
                {"error": "Something went wrong when checking authentication status"},
                status=404,
            )


class LogoutUserView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            logout(request)
            return Response({"success": "You have been logged out"}, status=200)
        except Exception:
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
