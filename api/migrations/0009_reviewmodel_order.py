# Generated by Django 4.0.1 on 2022-03-10 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_reviewmodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviewmodel',
            name='order',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
