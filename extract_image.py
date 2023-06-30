import markdown
from markdown.treeprocessors import Treeprocessor
from markdown.extensions import Extension
import requests
# First create the treeprocessor

class ImgExtractor(Treeprocessor):
    def run(self, doc):
        "Find all images and append to markdown.images. "
        self.md.images = []
        for image in doc.findall('.//img'):
            self.md.images.append(image.get('src'))

# Then tell markdown about it

class ImgExtExtension(Extension):
    def extendMarkdown(self, md, md_globals):
        img_ext = ImgExtractor(md)
        md.treeprocessors.add('imgext', img_ext, '>inline')

# Finally create an instance of the Markdown class with the new extension

md = markdown.Markdown(extensions=[ImgExtExtension()])

# Now let's test it out:

#html = md.convert(data)
#print(md.images)

# images = []

import os

files = os.listdir("./_posts")
for file in files:
    if file.endswith(".md"):
        with open("./_posts/" + file, "rb") as f:
            data = f.read()
            html = md.convert(data.decode())
            content = data.decode()
            should_write = False
            for image in md.images:
                if "https://hackmd.summershrimp.com/uploads" in str(image):
                    should_write = True
                    content = content.replace("https://hackmd.summershrimp.com/uploads","https://imgbucket404.oss-cn-beijing.aliyuncs.com/img")
                    break
            if should_write:
                with open("./_posts/" + file, "wb") as fw:
                    fw.write(content.encode())
            #print(md.images)


# import requests
# import threading
# import os
# import queue

# def download_image(url, folder):
#     filename = os.path.join(folder, url.split("/")[-1])
#     response = requests.get(url)
#     with open(filename, "wb") as f:
#         f.write(response.content)

# def download_worker(queue, folder):
#     while True:
#         try:
#             url = queue.get(block=False)
#             download_image(url, folder)
#             queue.task_done()
#         except queue.Empty:
#             break


# max_threads = 6 # Maximum number of threads
# queue = queue.Queue()
# for url in images:
#     if "hackmd" not in url:
#         continue
#     queue.put(url)

# threads = []
# for i in range(max_threads):
#     thread = threading.Thread(target=download_worker, args=(queue, "uploads"))
#     thread.start()
#     threads.append(thread)

# queue.join() # Wait for all downloads to complete

# for thread in threads:
#     thread.join()
