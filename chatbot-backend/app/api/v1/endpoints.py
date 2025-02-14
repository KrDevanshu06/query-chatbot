from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.database import get_db
from app.services.openai_service import summarize_supplier

router = APIRouter()

@router.get("/products/{brand}")
def get_products(brand: str, db: Session = Depends(get_db)):
    products = crud.get_products_by_brand(db, brand)
    if not products:
        raise HTTPException(status_code=404, detail="No products found for this brand")
    return products

@router.get("/suppliers/{category}")
def get_suppliers(category: str, db: Session = Depends(get_db)):
    suppliers = crud.get_suppliers_by_category(db, category)
    if not suppliers:
        raise HTTPException(status_code=404, detail="No suppliers found for this category")
    return suppliers

@router.get("/product/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = crud.get_product_details(db, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.get("/suppliers/{supplier_id}/summary")
def get_supplier_summary(supplier_id: int, db: Session = Depends(get_db)):
    supplier = crud.get_supplier_by_id(db, supplier_id)
    if not supplier:
        raise HTTPException(status_code=404, detail="Supplier not found")
    summary = summarize_supplier(f"Name: {supplier.name}, Categories: {supplier.product_categories}")
    return {"summary": summary}