from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enable CORS 

@app.route('/upload_audio, methods=['POST'])
def upload_audio ():
    # Here, you would handle the audio file upload and convert it to text
    # Use a speech-to-text API to perform the conversion
    return jsonify({"message": "Audio processed"})

    if __name__ == '__main__ :
        app.run(debug=True)
        