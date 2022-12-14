# Generated by Django 3.1 on 2022-04-18 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_ordermodel_console'),
    ]

    operations = [
        migrations.CreateModel(
            name='EA_Accounts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('EA_Account_login', models.EmailField(max_length=255)),
                ('EA_Account_Password', models.CharField(max_length=255)),
                ('account_status', models.CharField(blank=True, choices=[('Completed', 'Completed'), ('Account info wrong', 'Account info wrong'), ('Customer Using', 'Customer Using')], max_length=100)),
                ('Backup_Codes', models.CharField(max_length=255)),
                ('Email_for_Communication', models.EmailField(max_length=255)),
                ('Whatsapp_Number', models.IntegerField()),
            ],
        ),
    ]
