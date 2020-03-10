FROM selenium/standalone-chrome-debug:3.141.59

ADD requirements.txt /requirements.txt

USER root

RUN apt-get update && \
    apt-get install -y  curl && \
    apt-get install -y build-essential checkinstall && \
    apt-get install -y libreadline-gplv2-dev libncursesw5-dev libssl-dev  && \
    apt-get install -y  libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev zlib1g-dev && \
    cd /usr/src && \
    wget https://www.python.org/ftp/python/3.7.4/Python-3.7.4.tgz && \
    tar xzf Python-3.7.4.tgz && \
    cd Python-3.7.4 && \
    ./configure --enable-optimizations && \
    make altinstall && \ 
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && \  
    python3.7 get-pip.py && \
    pip3 install -r /requirements.txt

USER seluser
