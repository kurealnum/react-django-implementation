from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login


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


def check_is_authenticated(self, request):
    user = self.request.user

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
