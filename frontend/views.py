from django.shortcuts import render


def index(request):
    return render(
        request,
        "frontend/index.html",
        context={"project_name": "{{ project_name }}".replace("-", " ").title()},
    )
