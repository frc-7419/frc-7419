import json
name = 'TeamBuilding2021'
links = []
with open(f'{name}.txt', 'r') as f:
    links = f.read().splitlines()

with open(f'{name}.json', 'w') as f:
    f.write(json.dumps({name:links}))