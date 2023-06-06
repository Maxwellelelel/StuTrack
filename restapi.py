from fastapi import FastAPI, responses
import backend

app = FastAPI()

@app.get('/')
async def home():
    return "Hello StuTrack"

@app.get('/user/login')
async def user_login(username: str, password: str):
    return backend.user_login(username, password)

@app.post('/user/register')
async def user_register(username: str, password: str, lastName: str, firstName: str, email: str):
    return backend.user_register(username, password, lastName, firstName, email)

@app.get('/project/{project_id}')
async def get_project(project_id: int):
    return backend.project_getProject(project_id)

@app.get('/project')
async def get_project():
    return backend.project_getOverview()