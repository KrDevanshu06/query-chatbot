from sqlalchemy import Column, Integer, String, Text, Float, ForeignKey
from .database import Base

class Supplier(Base):
    __tablename__ = "suppliers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    contact_info = Column(Text)
    product_categories = Column(Text)

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    brand = Column(String(255))
    price = Column(Float)
    category = Column(String(255))
    description = Column(Text)
    supplier_id = Column(Integer, ForeignKey("suppliers.id"))