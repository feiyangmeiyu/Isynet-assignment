#from django.shortcuts import render
#from django.views import View
from rest_framework.pagination import PageNumberPagination
from .models import Export as ExportInfo
from .serializers import ExportSerializer,ExportSearchSerializer
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
#from django.http import JsonResponse


# class ExportListCreate(generics.ListCreateAPIView):
#     queryset = Export.objects.all()
#     serializer_class = ExportSerializer

class ExportAll(APIView):

    """
    get:
    Get all properties of the first 10 values in the database
    """
    def get(self, request):
        exports = ExportInfo.objects.all()[0:10]

        ser = ExportSerializer(exports, many=True)

        return Response(ser.data)

#By default, JsonResponse accepts only Python dictionaries
class ExportOne(APIView):
    """
        get:
        Provide query_para (id), get all the properties of the one data with the exact id
        """
    def get(self, request):
        id = request.query_params['id']
        export = ExportInfo.objects.filter(id=id)
        #print(export.query)
        # from queryset get single
        ser = ExportSerializer(export, many=True)
        # print(type(ser.data))
        return Response(ser.data)

class ExportSearch(APIView):
    """
        get:
        Provide query_para(keyword, choice, page), get (id, product, foreign company, indiancompany),
        each page has 10 items

        """
    def get(self, request):
        keyword = request.query_params['keyword']
        choice = request.query_params['choice']
        is_exact = request.query_params['isExact']

        # If the user choose the result to be exact (case-insensitive)
        result = searchOption(choice, keyword, int(is_exact))

        # Pagination
        pg = MyPagination()
        page_result = pg.paginate_queryset(queryset=result, request=request, view=self)

        if page_result is not None:
            ser = ExportSearchSerializer(page_result, many=True)
            return pg.get_paginated_response(ser.data)
        # Serialization
        ser = ExportSearchSerializer(result, many=True)
        #print(len(ser.data))
        return Response(ser.data)

def searchOption(choice, keyword, is_exact):
    if choice == "product" and is_exact == 0:
        result = ExportInfo.objects.filter(product__icontains=keyword).values('id','billno','product','foreigncompany','indiancompany')
    elif choice == "product" and is_exact == 1:
        result = ExportInfo.objects.filter(product__iexact=keyword).values('id', 'billno', 'product','foreigncompany', 'indiancompany')
    elif choice == "foreign" and is_exact == 0:
        result = ExportInfo.objects.filter(foreigncompany__icontains=keyword).values('id','billno','product','foreigncompany','indiancompany')
    elif choice == "foreign" and is_exact == 1:
        result = ExportInfo.objects.filter(foreigncompany__iexact=keyword).values('id','billno','product','foreigncompany','indiancompany')

    elif choice == "indian" and not is_exact == 0:
        result = ExportInfo.objects.filter(indiancompany__icontains=keyword).values('id','billno','product','foreigncompany','indiancompany')
    elif choice == "indian" and is_exact == 1:
        result = ExportInfo.objects.filter(indiancompany__iexact=keyword).values('id','billno','product','foreigncompany','indiancompany')
    return result

# Customized Pagination
class MyPagination(PageNumberPagination):
    # Hom many on each page
    page_size=10
    # Default show 10, but could pass /?page=2&size=3
    page_size_query_param = "size"
    #max_page_size=100
    page_query_param = "page"

