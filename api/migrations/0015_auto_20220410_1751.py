# Generated by Django 3.1 on 2022-04-10 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20220410_1710'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coupon',
            name='coupon_code',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
