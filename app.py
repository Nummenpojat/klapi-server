from flask import Flask, jsonify, request
from datetime import datetime

app = Flask(__name__)

# Testing demo data.
scouter_data = [
    {
        'scout_name': 'jape',
        'task': [
            {
                'task': 'teltan pystytys',
                'task': 'kerhotilan siivous'
            }
        ],
        'scout_name': 'minna',
        'task': [
            {
                'task': 'teltan siivous',
                'task': 'sudareiden leikitys'
            }
        ],
    }
]


@app.route('/scouter', methods=['POST'])
def create_scouter():
    """
    Variable 'scout_name'--> is a scouter nick name.
    Variable 'task'--> is a task list for a scouter.
    :return:
    {
        "scout_name": "laura",
        "task": []
    }
    """

    timestamp = datetime.now()
    timestamp = timestamp.isoformat()
    request_data = request.get_json()
    new_scouter = {
        'scout_name': request_data['scout_name'],
        'task': [],
        'timestamp': timestamp
    }

    check_name = False
    name = request_data['scout_name']
    for ii in scouter_data:
        if name in ii.values():
            check_name = True

    if not check_name:
        scouter_data.append(new_scouter)
        return jsonify(new_scouter)
    else:
        return jsonify({'message': 'A scouter name already reserved'})


@app.route('/scouter')
def get_all_scouters_data():
    """
    return: All scouters names and tasks.
    """
    return jsonify({'scouter': scouter_data})


@app.route('/scouter/<string:scouter>')
def get_scouter_and_tasks(scouter):
    """
    Variable 'scout_name'--> is a scouter nick name.
    Variable 'task'--> is a task list for a scouter.
    {
        "scout_name": "veera",
        "task": []
    }
    """
    for elem in scouter_data:
        if elem['scout_name'] == scouter:
            return jsonify(elem)
    return jsonify({'message': 'no scouter found'})


@app.route('/scouter/<string:scout_name>/task', methods=['POST'])
def create_task(scout_name):
    request_data = request.get_json()

    timestamp = datetime.now()
    timestamp = timestamp.isoformat()

    for elem in scouter_data:
        if elem['scout_name'] == scout_name:
            new_item = {
                'task': request_data['task'],
                'timestamp': timestamp
            }
            elem['task'].append(new_item)
            return jsonify(new_item)
    return jsonify({'message': 'no scouter found'})


app.run(port=5000)
