import flask
import json
import math
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin

from model import predict

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
@cross_origin()
def main():
	return {"status":True, "result": "Working...."}

@app.route("/api", methods=["GET"])
@cross_origin()
def api():
	# print(request.values.keys())
	# print(request.values['prog'])
	# print(request.values['key'])

	prog = request.values['prog']
	key = request.values['key']

	result = predict(prog,key)
	
	for i in result[0]:
		for j in i.keys():
			i[j] = str(i[j])

	result = json.dumps(result[0])

	return {"status":True, "result": result}, 200

if __name__=="__main__":
	app.run(debug=True)