import requests
import json

def fetch_visible_data():
    final_data = []
    for page in range(0, 10):
        res = requests.get(f'https://project-valentine-api.herokuapp.com/investors?page%5Blimit%5D=50&page%5Boffset%5D={page*50}')
        final_data.extend(res.json()['data'])
    return final_data

def transform_visible_data():
    data = fetch_visible_data()
    return [{
        'name': investor['attributes']['name'],
        'website': investor['attributes']['website'],
        'country': investor['attributes']['country'],
        'focus': ', '.join(investor['attributes']['focus']),
        'min_check_size': investor['attributes']['min-check-size'],
        'max_check_size': investor['attributes']['max-check-size'],
        'sweet_spot_check_size': investor['attributes']['sweet-spot-check-size'],
    } for investor in data]
