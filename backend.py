import user 
import project


#Table User

#GET
def user_login(username, hashedPassword):
    return user.login(username, hashedPassword)

#POST
def user_register(username, password, lastName, firstName, email):
    return user.register(username, password, lastName, firstName, email)


#Table Project

#GET
def project_getProject(projekt_id):
    return project.getProject(projekt_id)

def project_getOverview():
    return project.getOverview()