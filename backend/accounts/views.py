from rest_framework.views import APIView
from rest_framework.response import Response


class ManageAccount(APIView):
    def get(self, request):
        test_data = {"mydata": "moredata"}
        return Response(test_data)
