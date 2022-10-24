import requests
from bs4 import BeautifulSoup


def getting_video(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')
    soup = str(soup)
    text1 = soup.split('":{"owner":{"videoOwnerRenderer":{"thumbnail":{"thumbnails":[{"')
    final = text1[1][:300].split("\"")
    for i in range(200):
        mystr = "=s%s-" %i
        if mystr in final[10]:
            final[10] = final[10].replace(mystr,"=s1024-")
    return final[10]

def getting_channel(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')
    soup = str(soup)
    text1 = soup.split('avatar":{"thumbnails":[{"url":"')
    final = text1[1][200:700].split("\"")
    for i in range(200):
        mystr = "=s%s-" %i
        if mystr in final[8]:
            final[8] = final[8].replace(mystr,"=s1024-")
    return final[8]

if __name__ == "__main__":
        final_url = ""
        url ="https://www.youtube.com/UCMONhu1UyBQ-CEci9WBNCHw"
        if "/watch?" in url:
            final_url = getting_video(url)
            print(final_url)
        elif "/c/" in url or "/channel/" in url or "/user/" in url:
            final_url = getting_channel(url)
            print(final_url)
        else:
            print("URL is not correct!")