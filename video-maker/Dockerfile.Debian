FROM python:3.7.3-stretch

ADD requirements.txt /tmp/

RUN apt-get update && \
    apt-get install -y  apt-utils  xauth xfonts-base xfonts-75dpi fontconfig \
    ffmpeg \
    && curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash   \
    && apt-get install -y  git-lfs \
    && curl -L https://downloads.wkhtmltopdf.org/0.12/0.12.5/wkhtmltox_0.12.5-1.stretch_amd64.deb -o /tmp/wkhtmltox_0.12.5-1.stretch_amd64.deb \
    && apt-get install -y  /tmp/wkhtmltox_0.12.5-1.stretch_amd64.deb \
    && curl -sL https://deb.nodesource.com/setup_8.x |  bash  \
    && apt-get install -y  build-essential nodejs \
    && node -v  \
    && npm install -g hexo-cli
    
   
RUN pip install --upgrade -r /tmp/requirements.txt &&  rm -rf /tmp/

CMD echo "running ...." >> /logs && tail -f  /logs
