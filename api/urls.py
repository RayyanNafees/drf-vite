from rest_framework.routers import DefaultRouter
from .views import PostViewset

router = DefaultRouter()
router.register("api", PostViewset, "Posts")

urlpatterns = router.urls
