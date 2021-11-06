from flask import Flask
from sys import argv
import prescriberData

app = Flask(__name__)

@app.route("/members")
def members():
    data = prescriberData.func(argv[1])
    return data


if __name__ == "__main__":
    app.run(debug=True)
