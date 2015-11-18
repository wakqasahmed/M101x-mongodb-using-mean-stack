//To find all categories that are subcategories of electronics
db.categories.find({ ancestors: [ "Electronics" ] });

//To find categories that are child categories of phones
db.categories.find({ parent: 'Phones' });

//To find the ancestor categories of Android
db.categories.find({ _id: 'Android' });

//To find all products under the phones category
db.products.find({ 'category.ancestors': 'Phones' }).pretty();