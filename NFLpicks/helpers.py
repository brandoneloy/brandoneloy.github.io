import requests
import urllib.parse
import base64
import json

from flask import redirect, render_template, request, session
from functools import wraps


def apology(message, code=400):
    """Render message as an apology to user."""
    def escape(s):
        """
        Escape special characters.

        https://github.com/jacebrowning/memegen#special-characters
        """
        for old, new in [("-", "--"), (" ", "-"), ("_", "__"), ("?", "~q"),
                         ("%", "~p"), ("#", "~h"), ("/", "~s"), ("\"", "''")]:
            s = s.replace(old, new)
        return s
    return render_template("apology.html", top=code, bottom=escape(message)), code

def standings():
    """Look up quote for symbol."""

    # Contact API
    try:
        response = requests.get("https://api.mysportsfeeds.com/v2.1/pull/nba/2018-2019-regular/standings.json",
            headers={
                "Authorization": "Basic " + base64.b64encode('{}:{}'.format("7df37f6d-24a0-4435-a9ff-fd0cfc","MYSPORTSFEEDS").encode('utf-8')).decode('ascii')
            }
        )
        print('Response HTTP Status Code: {status_code}'.format(
            status_code=response.status_code))
        print('Response HTTP Response Body: {content}'.format(
            content=response.content))
    except requests.RequestException:
        print('HTTP Request failed')

    # # Parse response
    # try:
    record = json.loads(response.text)
    return record
    # except (KeyError, TypeError, ValueError):
    #     return None