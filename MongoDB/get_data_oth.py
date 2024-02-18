from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from time import sleep
import pandas as pd

df = pd.read_csv('input.csv')
# print(df.head())
url_list = df[' Problem Link']
problem_list = df['Problem Name']
topic_list = df[' Topic Name']
difficulty_list = df[' Difficulty']

# print(url_list)

# Set the path to the ChromeDriver executable
chrome_driver_path = '/path/to/chromedriver'

# Set up Chrome options (optional)
chrome_options = webdriver.ChromeOptions()
# chrome_options.add_argument('--headless')  # Run Chrome in headless mode (no GUI)

# Create a Chrome driver
driver = webdriver.Chrome(options=chrome_options)
idx = 0
file1 = open('output.csv', 'w')
file1.write("Problem Name, Problem Text, Topic Name, Difficulty\n")

for url in url_list:
    # Navigate to the URL
    driver.get(url)

    # Wait for the page to load (you might need to adjust the wait time)
    driver.implicitly_wait(5)

    # Extract content using Selenium


    problem_name = problem_list[idx]
    problem_text = ""
    topic_name = topic_list[idx]
    difficulty = difficulty_list[idx]
    idx += 1 
    
    print(f'Processing: {idx}/{len(url_list)}')
            
    try:
        problem_text_block_link = f'/html/body/div[4]/div[2]/div/div/div[6]/div/div[1]/p'
        problem_text_block = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, problem_text_block_link))
        )
        problem_text = problem_text_block.text
    except TimeoutException:
        print(f'Timed out waiting for Text Block: {problem_name}')
    except Exception:
        print("WTF")  

    try:
        file1.write(f'{problem_name}, "{problem_text}", {topic_name}, {difficulty}\n')
    except Exception as e:
        print(f'There is an ERROR {problem_name}')


file1.close()
print("DONE")

while(True):
    pass