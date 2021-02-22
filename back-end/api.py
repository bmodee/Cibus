import os
from flask import Flask, request, render_template, make_response, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
import json
import ast


app = Flask(__name__)
CORS(app, resources=r'/api/*', allow_headers='Content-Type')

#Unix/Mac (note the four leading slashes) sqlite:////absolute/path/to/foo.db
#Windows (note 3 leading forward slashes and backslash escapes)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:\\Users\\bjorn\\Documents\\Skola\TDDD27\\Cibus\\TDDD27_2020_Cibus\\back-end\\database.db'

db = SQLAlchemy(app)

class User(db.Model):
    
    email = db.Column(db.String(120), unique=True, nullable=False, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    password_hash = db.Column(db.String(80),nullable=False)

    @property
    def password(self):

        raise AttributeError('password can not be accesed')

    @password.setter
    def password(self,password):

        self.password_hash = generate_password_hash(password)

    def verify_password(self,password):

        return check_password_hash(self.password_hash)

    def __repr__(self):

        return '<User %r>' % self.name


class Recipies(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(120), nullable=False)
    creatorName = db.Column(db.String(80), nullable=False)
    creatorId = db.Column(db.Integer)
    ingredients = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    instructions = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return '<Recipe %r>' %self.title


# uncomment these two if you want to reset the database when running it
#db.drop_all()
#db.create_all()

@app.route("/user", methods = ['GET','POST','PUT'])
def user():
    if request.method == 'POST':
        name = request.args.get('name')
        email = request.args.get('email')
        password = request.args.get('password')
        if name and email and password:
            existing = User.query.filter(User.email == email).first()
            if existing:
                return make_response('{email} already in use')
        
            """Create user class"""
            user_class = User(name, email, password)

            """Adds user to database"""
            db.session.add(user_class)  
            db.session.commit() 

    if request.method == 'GET': 
        pass
    return jsonify({})


def beautify(recipe):
    ingredients = ast.literal_eval(recipe["ingredients"]) 
    instructions = []
    for i in recipe["instructions"][1:-1].split(", "):
        instructions.append(i)

    return ingredients, instructions


@app.route("/api/user/recipes", methods = ['POST'])
def get_all_recipies():
    if request.method == 'POST':
        recipes = []
        for i in Recipies.query.filter_by(creatorId = request.json['creatorId']).all():
            temp = i.__dict__
            temp.pop('_sa_instance_state')
            recipes.append(temp)
 
        for recipe in recipes:
            recipe["ingredients"], recipe["instructions"] = beautify(recipe)
            
        return jsonify({'recipes': recipes})

    return jsonify({"message: something"})

@app.route("/api/addRecipe", methods = ['GET','POST'])
def add_recipe():
    if request.method == 'POST':
        recipe = request.json["recipe"]

        print(request.data, flush=True)

        recipe_class = Recipies(title=recipe["title"], creatorName=recipe["creatorName"], creatorId=recipe["creatorId"],
                                ingredients="[" + ", ".join(map(json.dumps, recipe["ingredients"])) + "]",
                                description=recipe["description"], instructions="[" + ", ".join(recipe["instructions"]) + "]")

        db.session.add(recipe_class)
        db.session.commit()
        
    return jsonify({"message": "Added recipe"})

@app.route("/api/search", methods=["POST"])
def search_recipe():
    if request.method == "POST":
        recipes = []
        for i in Recipies.query.filter_by(title = request.json['searchWord']).all():
            temp = i.__dict__
            temp.pop('_sa_instance_state')
            recipes.append(temp)
 
        for recipe in recipes:
            recipe["ingredients"], recipe["instructions"] = beautify(recipe)
            
        return jsonify({'recipes': recipes})

if __name__ == '__main__':

    app.run(debug=True)