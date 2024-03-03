from fastapi import FastAPI, Body
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import urllib.request
import g4f

import nest_asyncio
nest_asyncio.apply()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


def Chatgpt(text):
    full_message = ""
    response = g4f.ChatCompletion.create(model="gpt-4",messages=[{"role": "user", "content": text}],stream=True,provider=g4f.Provider.Bing)
    print(response)
    for message in response:
        full_message += message
    return {"message": full_message}  # return dictionary

 
@app.post("/send_text")
async def send_text(text:str):
  response = Chatgpt(text)
  return {"response": response}  # this will be converted to JSON
  