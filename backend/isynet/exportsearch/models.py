from django.db import models

# Create your models here.
class Export(models.Model):
    #id = models.AutoField(primary_key=True)
    billno = models.BigIntegerField(db_column='BillNO', blank=True, null=False)  # Field name made lowercase.
    number_4digit = models.BigIntegerField(db_column='4Digit', blank=True, null=True)
    # Field name made lowercase. Field renamed because it wasn't a va
    #lid Python identifier.
    date = models.DateTimeField(db_column='Date', blank=True, null=True)  # Field name made lowercase.
    hscode = models.BigIntegerField(db_column='HSCode', blank=True, null=True)  # Field name made lowercase.
    product = models.TextField(db_column='Product', blank=True, null=True)  # Field name made lowercase.
    quantity = models.FloatField(db_column='Quantity', blank=True, null=True)  # Field name made lowercase.
    unit = models.TextField(db_column='Unit', blank=True, null=True)  # Field name made lowercase.
    item_rate_inv = models.FloatField(db_column='Item_Rate_INV', blank=True, null=True)  # Field name made lowercase.
    currency = models.TextField(db_column='Currency', blank=True, null=True)  # Field name made lowercase.
    total_amount_inv_fc = models.FloatField(db_column='Total_Amount_INV_FC', blank=True, null=True)  # Field name made lowercase.
    fob_inr = models.FloatField(db_column='FOB INR', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.

    foreignport = models.TextField(db_column='ForeignPort', blank=True, null=True)  # Field name made lowercase.
    foreigncountry = models.TextField(db_column='ForeignCountry', blank=True, null=True)  # Field name made lowercase.
    indianport = models.TextField(db_column='IndianPort', blank=True, null=True)  # Field name made lowercase.
    iec = models.BigIntegerField(db_column='IEC', blank=True, null=True)  # Field name made lowercase.
    indiancompany = models.TextField(db_column='IndianCompany', blank=True, null=True)  # Field name made lowercase.
    address1 = models.TextField(db_column='Address1', blank=True, null=True)  # Field name made lowercase.
    address2 = models.FloatField(db_column='Address2', blank=True, null=True)  # Field name made lowercase.
    city = models.TextField(db_column='City', blank=True, null=True)  # Field name made lowercase.
    foreigncompany = models.TextField(db_column='ForeignCompany', blank=True, null=True)  # Field name made lowercase.
    invoice_no = models.TextField(db_column='Invoice_No', blank=True, null=True)  # Field name made lowercase.
    cush = models.TextField(db_column='CUSH', blank=True, null=True)  # Field name made lowercase.
    iec_pin = models.TextField(db_column='IEC_PIN', blank=True, null=True)  # Field name made lowercase.
    item_no = models.BigIntegerField(db_column='Item_No', blank=True, null=True)  # Field name made lowercase.
    item_rate_inr = models.FloatField(db_column='Item_Rate_INR', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'export'