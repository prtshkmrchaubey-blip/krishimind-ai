from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.efficientnet import preprocess_input
import numpy as np
import os

app=Flask(__name__)
CORS(app)

MODEL_PATH=os.path.join(os.path.dirname(__file__),"model","plant_disease_efficientnet.keras")
CLASS_NAMES_PATH=os.path.join(os.path.dirname(__file__),"model","class_names.txt")
model=tf.keras.models.load_model(MODEL_PATH)

class_names=[]
with open(CLASS_NAMES_PATH,"r",encoding="utf-8") as f:
    for line in f:
        line=line.strip()
        if ":" in line: class_names.append(line.split(":",1)[1].strip())

@app.route("/")
def home(): return {"message":"KrishiMind AI Backend is running successfully!"}

@app.route("/predict",methods=["POST"])
def predict():
    if "image" not in request.files: return jsonify({"error":"No image uploaded"}),400
    try:
        img=image.load_img(request.files["image"],target_size=(224,224))
        arr=preprocess_input(np.expand_dims(image.img_to_array(img),axis=0))
        predictions=model.predict(arr,verbose=0)
        idx=int(np.argmax(predictions[0]))
        confidence=float(predictions[0][idx])*100
        disease=class_names[idx] if idx<len(class_names) else "Unknown"
        return jsonify({"success":True,"prediction":disease,"confidence":round(confidence,2)})
    except Exception as e:
        return jsonify({"success":False,"error":str(e)}),500

if __name__=="__main__": app.run(debug=True)