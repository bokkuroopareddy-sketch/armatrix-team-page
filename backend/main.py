from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class TeamMember(BaseModel):
    id: int
    name: str
    role: str
    bio: str
    photo_url: str
    linkedin: str

team_members = []

@app.get("/")
def root():
    return {"message": "Armatrix Team API"}

@app.get("/team")
def get_team():
    return team_members

@app.post("/team")
def add_member(member: TeamMember):
    team_members.append(member)
    return member

@app.put("/team/{member_id}")
def update_member(member_id: int, updated_member: TeamMember):
    for i, member in enumerate(team_members):
        if member.id == member_id:
            team_members[i] = updated_member
            return updated_member
    return {"error": "Member not found"}

@app.delete("/team/{member_id}")
def delete_member(member_id: int):
    global team_members
    team_members = [m for m in team_members if m.id != member_id]
    return {"message": "Member deleted"}
