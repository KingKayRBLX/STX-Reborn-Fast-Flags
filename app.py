from flask import Flask, redirect, url_for, session, render_template
from authlib.integrations.flask_client import OAuth
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.secret_key = os.urandom(24)  # Secret key for session management

# Configure OAuth
oauth = OAuth(app)
oauth.register(
    name='roblox',
    client_id=os.getenv('CLIENT_ID'),
    client_secret=os.getenv('CLIENT_SECRET'),
    authorize_url='https://apis.roblox.com/oauth/authorize',
    access_token_url='https://apis.roblox.com/oauth/token',
    userinfo_endpoint='https://apis.roblox.com/oauth/userinfo',  # Endpoint for user information
    client_kwargs={'scope': 'openid profile'},
)

# Main route to render index.html
@app.route('/')
def index():
    # Check if user information exists in session
    user = session.get('user')
    return render_template('index.html', user=user)  # Pass user info to template

# Login route for Roblox OAuth
@app.route('/login')
def login():
    redirect_uri = url_for('auth', _external=True)  # Redirect after login
    return oauth.roblox.authorize_redirect(redirect_uri)

# Callback route after Roblox OAuth
@app.route('/auth')
def auth():
    # Get access token and user info from Roblox
    token = oauth.roblox.authorize_access_token()
    user = oauth.roblox.userinfo(token=token)
    session['user'] = user  # Store user info in session
    return redirect(url_for('index'))  # Redirect back to index page

# Logout route to clear session
@app.route('/logout')
def logout():
    session.pop('user', None)  # Clear user session
    return redirect(url_for('index'))

if __name__ == '__main__':
    # Run the app on specified port from .env or default to 3000
    app.run(port=int(os.getenv("PORT", 3000)), debug=True)
