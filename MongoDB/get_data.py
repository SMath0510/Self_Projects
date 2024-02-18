from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

# Set the path to the ChromeDriver executable
chrome_driver_path = '/path/to/chromedriver'

# Set up Chrome options (optional)
chrome_options = webdriver.ChromeOptions()
# chrome_options.add_argument('--headless')  # Run Chrome in headless mode (no GUI)

# Create a Chrome driver
driver = webdriver.Chrome(options=chrome_options)

url = "https://www.puzzledquant.com/"

# Navigate to the URL
driver.get(url)

# Wait for the page to load (you might need to adjust the wait time)
driver.implicitly_wait(5)

# Extract content using Selenium

'''
/html/body/div[4]/div/div[2]/div[3]/table/tbody/tr[1]/th[2]/a
/html/body/div[4]/div/div[2]/div[3]/table/tbody/tr[1]/td[2]/div/span
/html/body/div[4]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div
'''

file1 = open('input.csv', 'w')
file1.write("Problem Name, Problem Link, Topic Name, Difficulty\n")

page_dir = [[i, 25] for i in range(1, 8)]
page_dir.append([8, 18])

# while True:
#     pass
for page in page_dir:
    print(f'Page: {page[0]}/{len(page_dir)}')
    
    driver.implicitly_wait(5)
    for row_num in range(1, page[1]+1):
        print(f'\t{row_num}/{page[1]}')
        problem_name = ""
        problem_link = ""
        topic_name = ""
        difficulty = ""

        try:
            anchor_tag_link = f'/html/body/div[4]/div/div[2]/div[4]/table/tbody/tr[{row_num}]/th[2]/a'
            anchor_tag = WebDriverWait(driver, 5).until(
                EC.presence_of_element_located((By.XPATH, anchor_tag_link))
            )
            problem_link = anchor_tag.get_attribute('href')
            problem_name = anchor_tag.text
        except TimeoutException:
            print('Timed out waiting for Anchor Tag')
        except Exception:
            print("WTF")    

        try:
            topic_block_link = f'/html/body/div[4]/div/div[2]/div[4]/table/tbody/tr[{row_num}]/td[2]/div/span'
            topic_block = WebDriverWait(driver, 5).until(
                EC.presence_of_element_located((By.XPATH, topic_block_link))
            )
            topic_name = topic_block.text
        except TimeoutException:
            print('Timed out waiting for Topic Block')
        except Exception:
            print("WTF")    

        try:
            difficulty_block_link = f'/html/body/div[4]/div/div[2]/div[4]/table/tbody/tr[{row_num}]/td[3]/div/div'
            difficulty_block = WebDriverWait(driver, 5).until(
                EC.presence_of_element_located((By.XPATH, difficulty_block_link))
            )
            difficulty = difficulty_block.text
        except TimeoutException:
            print('Timed out waiting for Difficulty Block')
        except Exception:
            print("WTF")    

        file1.write(f'{problem_name}, {problem_link}, {topic_name}, {difficulty}\n')

    try:
        # button_number = page[0] + 1
        # button_link = f'/html/body/div[4]/div/div[2]/div[4]/div/nav/button[{button_number}]'
        button_link = f'/html/body/div[4]/div/div[2]/div[4]/div/nav/button[8]'
        if page[0] == 4:
            button_link = f'/html/body/div[4]/div/div[2]/div[4]/div/nav/button[7]'
        button_block = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH ,button_link)))
        button_block.click()
    except TimeoutException:
        print('Timed out waiting for Button Block')
    except Exception:
        print("WTF")    

file1.close()
print("DONE")

while(True):
    pass
# Extract text content from the elements
# text_content = [element.text for element in content_elements if element.text.strip()]

# Print the extracted text
# print("\n".join(text_content))
# /html/body/div[4]/div/div[2]/div[4]/table/tbody/tr[1]/th[2]/a
# Close the browser

# /html/body/div[4]/div/div[2]/div[3]/table/tbody/tr[1]/th[2]/a
# /html/body/div[4]/div/div[2]/div[3]/table/tbody/tr[1]/td[2]/div/span
# /html/body/div[4]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div

# /html/body/div[4]/div/div[2]/div[3]/div/nav/button[4]

# /html/body/div[4]/div/div[2]/div[4]/div/nav/button[8]
# /html/body/div[4]/div/div[2]/div[4]/div/nav/button[7]
# /html/body/div[4]/div/div[2]/div[4]/div/nav/button[8]
# /html/body/div[4]/div/div[2]/div[4]/div/nav/button[8]
# /html/body/div[4]/div/div[2]/div[4]/div/nav/button[8]
# /html/body/div[4]/div/div[2]/div[4]/div/nav/button[8]
