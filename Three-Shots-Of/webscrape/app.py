import requests
from bs4 import BeautifulSoup

URL = 'https://cocktailflow.com/collection/chilling-out'

page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')

results = soup.find_all('li', class_='cocktail-unit')

for result in results:
    print(result.decode_contents(), end="\n"*2)
