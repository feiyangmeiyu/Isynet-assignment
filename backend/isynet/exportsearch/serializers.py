from rest_framework import serializers
from .models import Export

# class ExportSerializer(serializers.Serializer):
#     billno = serializers.IntegerField()
#     number_4digit = serializers.IntegerField()
#     product = serializers.CharField()

# Model serializer
class ExportSerializer(serializers.ModelSerializer):
    class Meta:
        #billno = serializers.IntegerField(max_value=9999999, min_value=1000000)
        #number_4digit = serializers.IntegerField(max_value=9999, min_value=1000)
        #read_only_fields('',)

        model = Export
        fields = '__all__'
        # fields = (billno', 'number_4digit', 'date', 'hscode', 'product', 'quantity'
        #           , 'unit', 'item_rate_inv', 'currency', 'total_amount_inv_fc', 'fob_inr', 'foreignport'
        #           , 'foreigncountry', 'indianport', 'iec', 'indiancompany', 'address1', 'address2', 'city'
        #           , 'foreigncompany', 'invoice_no', 'cush', 'iec_pin', 'item_no', 'item_rate_inr')
        extra_kwargs = {
            "number_4digit":{
                "max_value":9999,
                "min_value":1000,
            }
        }
        # All fields will be generated in the model

        #except for cush, any other will be generated

class ExportSearchSerializer(serializers.ModelSerializer):
    class Meta:
        #billno = serializers.IntegerField(max_value=9999999, min_value=1000000)
        #number_4digit = serializers.IntegerField(max_value=9999, min_value=1000)
        #read_only_fields('',)

        model = Export
        fields = ('id','billno','product','indiancompany','foreigncompany')
        # fields = '__all__'
        # fields = (billno', 'number_4digit', 'date', 'hscode', 'product', 'quantity'
        #           , 'unit', 'item_rate_inv', 'currency', 'total_amount_inv_fc', 'fob_inr', 'foreignport'
        #           , 'foreigncountry', 'indianport', 'iec', 'indiancompany', 'address1', 'address2', 'city'
        #           , 'foreigncompany', 'invoice_no', 'cush', 'iec_pin', 'item_no', 'item_rate_inr')
        extra_kwargs = {
            "number_4digit":{
                "max_value":9999,
                "min_value":1000,
            }
        }