# Generated by Django 3.1 on 2022-04-18 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_ea_accounts'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ea_accounts',
            name='account_status',
            field=models.CharField(blank=True, choices=[('Pending', 'Pending'), ('Completed', 'Completed'), ('Account info wrong', 'Account info wrong'), ('Customer Using', 'Customer Using')], max_length=100),
        ),
    ]
