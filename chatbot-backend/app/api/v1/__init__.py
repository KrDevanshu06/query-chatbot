# Import the router from endpoints.py to make it available when importing api.v1
from .endpoints import router

# Optionally, you can define what gets imported when using `from api.v1 import *`
__all__ = ["router"]