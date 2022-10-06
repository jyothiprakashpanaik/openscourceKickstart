import pandas as pd
from models.cosinesimilarity_model import nltk_model_predict

def predict(languages,  keywords):

	model_input = pd.DataFrame([languages + keywords])

	model_output = nltk_model_predict(model_input)

	return model_output

