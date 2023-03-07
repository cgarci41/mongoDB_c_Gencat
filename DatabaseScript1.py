'''
Created on 7 de març 2023

@author: CursUnity
'''
import pymongo
#This is a MongoDB Connection
#no té autenticació si no cal passar més coses a la classe MongoClient
client=pymongo.MongoClient("Localhost",27017)

#Create a test Database
db=client.test
print(db.name)

#Drop and Create my_collection collection
#borrem per si existeix i la crea de nou. Com el test
db.my_collection.drop()
print(db.my_collection)#em dona les metadades

#Insert one element with different fields
print(db.my_collection.insert_one({"x":10}).inserted_id)#retorna id de l'element x insertat

print(db.my_collection.insert_one({"x":11,"name":"Pepe"}).inserted_id)
print(db.my_collection.insert_one({"x":11,"name":"Albert","surname":"Soto"}).inserted_id)

#Find one element
print(db.my_collection.find_one())
#Loop through a collection
for item in db.my_collection.find():
    print(item)
    
#ara en ordre descendent
for item in db.my_collection.find().sort("x",pymongo.DESCENDING):
    print(item)

#update a element     
myquery={"name":"Alberto"}
newvalues={"$set":{"name":"Jordi"}}

db.my_collection.update_one(myquery,newvalues)

#Loop through a collection
for item in db.my_collection.find():
    print(item)




    
    