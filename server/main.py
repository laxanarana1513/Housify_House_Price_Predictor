
import pandas as pd
from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np



app = Flask(__name__)
# data = pd.read_csv("Cleaned_data.csv")
# pipe = pickle.load(open("RidgeModel.pkl", 'rb'))
# data = pd.read_csv("Bengalore_Cleaned_data.csv")
# pipe = pickle.load(open("BengaloreRidgeModel.pkl", 'rb'))



# @app.route('/')
# def index():
#     data = pd.read_csv("Bengalore_Cleaned_data.csv")
#     # area_type = sorted(data['area_type'].unique())
#     # return render_template('form.html', area_type=area_type)
#     location = sorted(data['location'].unique())
#     return render_template('form.html', location=location)


# @app.route("/predict", methods=['POST'])
# def predict():
    
#     # area_type = request.json['area']
#     # bath = request.json['bath']
#     # print(area_type, bhk, bath, sqft)
#     # input = pd.DataFrame([[area_type, sqft, bath, bhk]],columns=['area_type', 'total_sqft', 'bathrooms', 'bhk'])
#     # print(area_type+ " "+bhk + " " + bath + " "+ sqft) 
#     # print(area_type, bhk, bath, sqft)
#     # input = pd.DataFrame([[area_type, sqft, bath, bhk]],columns=['area_type', 'total_sqft', 'bathrooms', 'bhk'])
#     # return jsonify({'area': area_type},{'bhk':bhk},{'bath': bath}, {'sqft': sqft})

#     bhk = request.json['bhk']
#     bath = request.json['bath']
#     sqft = request.json['sqft']
#     location = request.json['location']
   
#     print(bhk, bath, sqft, location)
#     input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
#     print(input)
#     prediction = pipe.predict(input)[0]
#     print(prediction)
   
#     print(sqft + " " + location + " "+ bath + " " + bhk) 
#     print(bhk, bath, sqft, location)
#     input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
#     prediction = pipe.predict(input)[0]
   

#     return str(np.round(prediction,2))


@app.route("/predict/Bengalore", methods=['POST'])
def predict1():
    pipe = pickle.load(open("BengaloreRidgeModel.pkl", 'rb'))
    bhk = request.json['bhk']
    bath = request.json['bath']
    sqft = request.json['sqft']
    location = request.json['location']

    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    print(input)
    prediction = pipe.predict(input)[0]
    print(prediction)

    print(sqft + " " + location + " "+ bath + " " + bhk) 
    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    prediction = pipe.predict(input)[0]
    return str(np.round(prediction,2))


@app.route("/predict/Chennai", methods=['POST'])
def predict2():
    pipe = pickle.load(open("ChennaiRidgeModel.pkl", 'rb'))
    bhk = request.json['bhk']
    bath = request.json['bath']
    sqft = request.json['sqft']
    location = request.json['location']

    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    print(input)
    prediction = pipe.predict(input)[0]
    print(prediction)

    print(sqft + " " + location + " "+ bath + " " + bhk) 
    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    prediction = pipe.predict(input)[0]
    return str(np.round(prediction,2))


@app.route("/predict/Mumbai", methods=['POST'])
def predict3():
    pipe = pickle.load(open("MumbaiRidgeModel.pkl", 'rb'))
    bhk = request.json['bhk']
    bath = request.json['bath']
    sqft = request.json['sqft']
    location = request.json['location']

    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    print(input)
    prediction = pipe.predict(input)[0]
    print(prediction)

    print(sqft + " " + location + " "+ bath + " " + bhk) 
    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    prediction = pipe.predict(input)[0]
    return str(np.round(prediction,2))


@app.route("/predict/Kolkata", methods=['POST'])
def predict4():
    pipe = pickle.load(open("KolkataRidgeModel.pkl", 'rb'))
    bhk = request.json['bhk']
    bath = request.json['bath']
    sqft = request.json['sqft']
    location = request.json['location']

    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    print(input)
    prediction = pipe.predict(input)[0]
    print(prediction)

    print(sqft + " " + location + " "+ bath + " " + bhk) 
    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    prediction = pipe.predict(input)[0]
    return str(np.round(prediction,2))


@app.route("/predict/Hyderabad", methods=['POST'])
def predict5():
    pipe = pickle.load(open("HyderabadRidgeModel.pkl", 'rb'))
    bhk = request.json['bhk']
    bath = request.json['bath']
    sqft = request.json['sqft']
    location = request.json['location']

    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    print(input)
    prediction = pipe.predict(input)[0]
    print(prediction)

    print(sqft + " " + location + " "+ bath + " " + bhk) 
    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    prediction = pipe.predict(input)[0]
    return str(np.round(prediction,2))

@app.route("/predict/Delhi", methods=['POST'])
def predict6():
    pipe = pickle.load(open("DelhiRidgeModel.pkl", 'rb'))
    bhk = request.json['bhk']
    bath = request.json['bath']
    sqft = request.json['sqft']
    location = request.json['location']

    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    print(input)
    prediction = pipe.predict(input)[0]
    print(prediction)

    print(sqft + " " + location + " "+ bath + " " + bhk) 
    print(bhk, bath, sqft, location)
    input = pd.DataFrame([[sqft, location, bath, bhk]],columns=['sqft', 'location', 'bathrooms', 'bhk'])
    prediction = pipe.predict(input)[0]
    return str(np.round(prediction,2))

    

if __name__ == "__main__":
    app.run(debug=True)
