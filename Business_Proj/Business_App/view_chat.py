from django.shortcuts import render
from django.http import JsonResponse
import json
import requests
from . models import ChatModel
# import ollama


def chatpage(request):
    chats=ChatModel.objects.all().order_by('created_at')
    return render(request, 'chatpage.html',{'chats':chats})


def chat_api(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body.decode('utf-8'))
            message = body.get("message")

            if not message:
                return JsonResponse({"error": "Empty message"}, status=400)
            response = requests.post(
                "http://localhost:11434/api/generate",
                json={
                    "model": "tinyllama",
                    "prompt": message,
                    "stream": False
                }
            )

            data = response.json()
            reply=data.get("response","No response")

            ChatModel.objects.create(
                message=message,
                response=reply
            )

            return JsonResponse({
                "reply": reply
            })

        except Exception as e:
            print("ERROR:", e)  # 🔥 check terminal
            return JsonResponse({"error": str(e)}, status=500)
        
# def chat_api(request):
#     if request.method =="POST":
#         body=json.loads(request.body)
#         prompt=body.get('message')
#         response=ollama.chat(
#             model='tinyllama',
#             message=[
#                 {'role':'user','content':prompt}
#             ]
#         )
#         return JsonResponse ({
#             'replay':response['message']['content']
#         })