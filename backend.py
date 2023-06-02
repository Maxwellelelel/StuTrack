import user as user

#Table User

#GET
def user_login(username, hashedPassword):
    return user.login(username, hashedPassword)

#POST
def user_register(username, password, lastName, firstName, email):
    return user.register(username, password, lastName, firstName, email)