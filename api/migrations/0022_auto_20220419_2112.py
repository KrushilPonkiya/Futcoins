# Generated by Django 3.1 on 2022-04-19 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_auto_20220418_2344'),
    ]

    operations = [
        migrations.AddField(
            model_name='ea_accounts',
            name='Payment_status',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='ea_accounts',
            name='user',
            field=models.CharField(default='0', max_length=255),
        ),
        migrations.AlterField(
            model_name='ea_accounts',
            name='Whatsapp_Number',
            field=models.CharField(max_length=255),
        ),
    ]
