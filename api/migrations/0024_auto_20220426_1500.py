# Generated by Django 3.1.14 on 2022-04-26 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_ordermodel_ea_status'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='EA_Accounts',
            new_name='EA_Account',
        ),
        migrations.AlterField(
            model_name='ordermodel',
            name='tim',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]