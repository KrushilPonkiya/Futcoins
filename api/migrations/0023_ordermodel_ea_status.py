# Generated by Django 3.1 on 2022-04-20 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_auto_20220419_2112'),
    ]

    operations = [
        migrations.AddField(
            model_name='ordermodel',
            name='EA_status',
            field=models.BooleanField(default=False),
        ),
    ]
