from flask import Flask, request, jsonify
from ai import mcts, marl

app = Flask(__name__)

@app.route('/api/mcts', methods=['POST'])
def get_mcts_action():
    data = request.get_json()
    state = data.get('state')
    action = mcts.compute_action(state)
    return jsonify({'action': action})

@app.route('/api/marl', methods=['POST'])
def get_marl_action():
    data = request.get_json()
    state = data.get('state')
    action = marl.compute_action(state)
    return jsonify({'action': action})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
