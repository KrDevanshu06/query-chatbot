from sqlalchemy.orm import Session
from . import models

def get_products_by_brand(db: Session, brand: str):
    return db.query(models.Product).filter(models.Product.brand == brand).all()

def get_suppliers_by_category(db: Session, category: str):
    return db.query(models.Supplier).filter(models.Supplier.product_categories.contains(category)).all()

def get_product_details(db: Session, product_id: int):
    return db.query(models.Product).filter(models.Product.id == product_id).first()

def get_supplier_by_id(db: Session, supplier_id: int):
    return db.query(models.Supplier).filter(models.Supplier.id == supplier_id).first()
