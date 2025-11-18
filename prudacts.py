# Vercel Python Serverless Function
# Path: /api/products
import json

def handler(request):
    # Demo static data — চাইলে ডাটাবেস বা CSV থেকে আনতে পারো
    products = [
        {"id": 1, "name": "Ecomars Starter Tee", "description": "সফট কটন, লোকাল প্রিন্ট", "price": 499},
        {"id": 2, "name": "Mars Mug", "description": "ম্যাট সিরামিক, 350ml", "price": 349},
        {"id": 3, "name": "Galaxy Tote", "description": "রিসাইকেলড ফ্যাব্রিক, A4 ফিট", "price": 299}
    ]

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=60"
        },
        "body": json.dumps({"products": products}, ensure_ascii=False)
    }