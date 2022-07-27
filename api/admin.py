
from django.contrib import admin

from api.models import orderModel, reviewModel, settingsModel, userModel, Coupon,EA_Account,Promotion

# Register your models here.


class userAdmin(admin.ModelAdmin):
    list_display = (['name'])


class orderAdmin(admin.ModelAdmin):
    list_display = ['id','user','status','console','tim','cur','price','quantity']


class settingsAdmin(admin.ModelAdmin):
    list_display = (['id'])

class PromotionAdmin(admin.ModelAdmin):
    list_display = (['mail'])

class CouponAdmin(admin.ModelAdmin):
    list_display = (['coupon_code','discount'])
class EA_AccountAdmin(admin.ModelAdmin):
    list_display = (['EA_Account_login','account_status'])


class reviewsAdmin(admin.ModelAdmin):
    list_display = (['id'])


admin.site.register(reviewModel, reviewsAdmin)

admin.site.register(settingsModel, settingsAdmin)

admin.site.register(Coupon, CouponAdmin)

admin.site.register(Promotion, PromotionAdmin)

admin.site.register(orderModel, orderAdmin)

admin.site.register(userModel, userAdmin)

admin.site.register(EA_Account, EA_AccountAdmin)

