
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TeamMember(BaseModel):
    name: str
    role: str
    bio: str
    photo_url: str
    linkedin: str


team = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "role": "Robotics Engineer",
        "bio": "Building intelligent robotic systems.",
        "photo_url": "https://randomuser.me/api/portraits/women/44.jpg",
        "linkedin": "https://linkedin.com"
    },
    {
        "id": 2,
        "name": "Mark Chen",
        "role": "AI Researcher",
        "bio": "Working on machine learning for automation.",
        "photo_url": "https://randomuser.me/api/portraits/men/32.jpg",
        "linkedin": "https://linkedin.com"
    }
]


@app.get("/team")
def get_team():
    return team


@app.post("/team")
def add_member(member: TeamMember):

    new_member = member.dict()
    new_member["id"] = len(team) + 1

    team.append(new_member)

    return {"message": "Member added"}


@app.put("/team/{member_id}")
def edit_member(member_id: int, updated: TeamMember):

    for m in team:
        if m["id"] == member_id:
            m.update(updated.dict())
            return {"message": "Member updated"}

    return {"error": "Member not found"}


@app.delete("/team/{member_id}")
def delete_member(member_id: int):

    global team
    team = [m for m in team if m["id"] != member_id]

    return {"message": "Member deleted"}
