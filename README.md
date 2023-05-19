# DocDoc

문서 전파 및 취합을 쉽게 만들어주는 문서 간편 관리 서비스 웹 사이트

## 🪔프로젝트 소개

### 📅진행 일정

23.04.10(월) ~ 23.05.19(금) (총 6주)

- 학습 및 기획, 설계 : 04.10 ~ 05.05 (4주)
  - 학습 : 1차 교보재 강의 학습
  - 기획 : 프로젝트 아이디어 논의, 주제 구체화, 기술 스택 선정
  - 설계 : 기능 요구 명세서 작성, ERD, 와이어프레임, 프로젝트 구조 설계, REST API 설계
- 개발 : 05.08 ~ 05.19 (2주)
  - API 구현
  - 프로젝트 주요 기능 구현
  - 배포 및 인프라 구축

## 🤝팀 소개

| 이름                                                       | 개발 내용                                             |
| ---------------------------------------------------------- | ----------------------------------------------------- |
| [👨🏻‍💻 김주성](https://github.com/{}) [📧](mailto:@gmail.com) | 팀장, React<br />정보 페이지, 푸터&네비바, 기본 틀 및 API, redux상태관리 <br /> |
| [👨🏻‍💻 권동규](https://github.com/{}) [📧](mailto:@gmail.com) | 부팀장, React<br /> 원두 조회 페이지 및 프로필 디자인 및 키워드 검색 기능 구현,                                                |
| [👨🏻‍💻 김성태](https://github.com/{}) [📧](mailto:@gmail.com) | React<br /> 아이디어 기획, 메인페이지, 소개페이지 디자인 및 구현                                                 |
| [👨🏻‍💻 유헌상](https://github.com/{}) [📧](mailto:@gmail.com) | 팀장 <br /> Spring Boot REST API<br /> Fast API, 추천알고리즘 설계<br>                               |
| [👨🏻‍💻 이동훈](https://github.com/{}) [📧](mailto:@gmail.com) | Spring Boot REST API<br /> 젠킨스와 도커를 활용한 CI/CD <br /> 송신함 API, 수신함 API, Template API, Docsfile API, Templatefile API
| [👨🏻‍💻 한재욱](https://github.com/{}) [📧](mailto:@gmail.com) | React<br/> Spring Boot REST API<br /> 젠킨스와 도커를 활용한 CI/CD|

### 🏁목표

조금 더 편하게 !!!

### 🤔기획 의도

문서 취합을 더 편하게 !!!

#### 🎯서비스 대상

발신자: 문서 전파자 및 그룹 관리자
수신자: 요반환자

#### 🎨UI/UX

직관적인 문서 관리 플랫폼

#### ⚙Technical

##### 📡프론트엔드

React, Redux, Typescript, TailWind, twin-macro

##### 📡벡엔드

Spring Rest API

##### 📡데이터베이스

MySQL, MongoDB

## 🛠기술 스택

![Architecture](docs/아키텍처/아키텍처_완.png)

- 세부내역
  > | 구분     | 기술스택          | 상세내용           | 버전    |
  > | :------- | :---------------- | :----------------- | :------ |
  > | 공통     | 형상관리          | GitLab             | -       |
  > | &nbsp;   | 이슈관리          | Jira               | -       |
  > | &nbsp;   | 커뮤니케이션      | Mattermost         | -       |
  > | FrontEnd | HTML5             |
  > | &nbsp;   | CSS3              |
  > | &nbsp;   | JavaScript(ES6)   |
  > | &nbsp;   | styled-components | Tailwind           | 2.2.0   |
  > | &nbsp;   | React             | React              | 18.2.0  |
  > | &nbsp;   | &nbsp;            | Redux              | 8.0.5   |
  > | &nbsp;   | &nbsp;            | Redux-Toolkit      | 1.9.2   |
  > | &nbsp;   | IDE               | Visual Studio Code | 1.75.1  |
  > | BackEnd  | Java              | OpenJDK            | 11.0.15 |
  > | &nbsp;   | Build             | Gradle             | 7.6.1   |
  > | &nbsp;   | Spring            | Boot               | 2.7.9   |
  > | &nbsp;   | &nbsp;            | Security           | 5.6.1   |
  > | &nbsp;   | DB                | Mysql              | 8.0.32  |
  > | &nbsp;   | &nbsp;            | Spring-Data-jpa    | 2.6.0  |
  > | &nbsp;   | IDE               | IntelliJ           | 22.3.1  |
  > | Server   | AWS EC2           | Ubuntu             | 20.04   |
  > | &nbsp;   | 배포              | Docker             | 23.0.0  |
  > | &nbsp;   | 배포              | Docker-compose     | 23.0.0  |
  > | &nbsp;   | &nbsp;            | Jenkins            | 2.375.2 |
  > | &nbsp;   | WebServer         | Nginx              | 1.23.3  |


<br>
## 💼기획/설계

### 📑기능 요구 명세서
![요구사항명세서.png](/docs/요구 명세서/요구 명세서.pdf)
<br>
### 📑ERD
![erd.png](/docs/erd/img/DOCDOCERD_V2.0.png)
<br>

## 📬배포 방법

### Port Number

> 각각의 구성요소는 Docker container 로 격리하였습니다
> Port|이름
> :--|:--
> 80|HTTP => 443(HTTPS)로 리다이렉트
> 443|HTTPS
> 3000|React, Nginx Docker Container
> 3306|Mysql Docker Container
> 6379|Redis Docker Container
> 8009|FastApi Docker Container
> 8081|SpringBoot Docker Container
> 8082|Jenkins Docker Container

### ssl 인증서 발급

> - nginx 설치
>
> ```
> sudo apt-get install nginx
> ```
>
> - letsencrypt 설치
>
> ```
> sudo apt-get install letsencrypt
>
> sudo systemctl stop nginx
>
> sudo letsencrypt certonly --standalone -d 도메인
>
> # 발급 경로
> cd /etc/letsencrypt/live/도메인/
> # 발급 확인
> ls
> ```

### How To Run in Local

> - Frontend
>
> ```
> npm install
>
> npm run dev
> ```
>
> - Backend
>   > - 사용하는 IDE 로 import 후 src/main/java/b209/docdoc/server/ ServerApplication.java 실행

### How To Run in EC2

> - 개요
>   > - DocDoc은 Jenkins 를 이용한 CI/CD 자동화 환경으로 구성하여 팀 구성원 각자 작성한 코드를 Gitlab 에 푸쉬하면 Webhook 을 통해 Jenkins 의 Pipeline Script 에 작성한 대로 CI/CD 흐름이 진행됩니다

> - EC2 배포 환경 구성 순서
>   > 1. ufw (uncomplicated firewall) 방화벽 포트 개방
>   > 2. Docker & Docker-compose 설치
>   > 3. Jenkins 도커 이미지 설치 및 컨테이너 실행 및 설정
>   > 4. Mysql 도커 이미지 설치 및 컨테이너 실행 및 설정
>   > 5. Redis 도커 이미지 설치 및 컨테이너 실행 및 설정
>   > 6. frontend 폴더의 Dockerfile과 Docker-compose file을 이용하여 도커 이미지 생성 및 컨테이너 실행
>   > 7. backend 폴더의 Dockerfile과 Docker-compose file을 을 이용하여 도커 이미지 생성 및 컨테이너 실행
>   > 8. Nginx 설치 및 설정
>
> ```
> # ufw 명령 도움말
> sudo ufw -help
>
> # ufw 상태 확인
> sudo ufw status
>
> # ufw 포트 허용
> sudo ufw allow portnumber
> ```
>
> - Docker 설치
>
> ```
> # 도커 공식 GPG key를 생성
> sudo apt-get update
>
> sudo apt-get install \
> ca-certificates \
>    curl \
>    gnupg \
>    lsb-release
> ```
>
> ```
> # 키저장소 추가
> sudo mkdir -p /etc/apt/keyrings
>
> curl -fsSL https://download.docker.com/linux/ubuntu/gpg | <\>sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
>
> echo \
>  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/>keyrings/docker.gpg] https://download.docker.com/linux/ubuntu\
> $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
> ```
>
> ```
> # 도커 패키지 설치
> sudo apt-get update
>
> $ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
> dpkg -s libc6 | grep Arch
> sudo curl -L "https://github.com/docker/compose/releases/download/v2.15.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
>
> ```
>
> - Docker-compose 설치
>
> ```
> # 도커 공식 GPG key를 생성
> sudo apt-get update
>
> sudo apt-get install \
> ca-certificates \
>    curl \
>    gnupg \
>    lsb-release
> ```
>
> - Nginx & SSL 설정
>
> ```
> # Nginx 설치
> sudo apt-get install nginx
> sudo nginx -v //설치확인
> sudo systemctl stop nginx // nginx중지
> ```
>
> ```
> # Let's Encypt 설치
> sudo apt-get install letsencrypt
> sudo letsencrypt certonly --standalone -d [도메인]
> ```
>
> - ec2 nginx
>
> ```conf
> # /etc/nginx/sites-available/docdoc.conf
>server {
>    server_name k8b209.p.ssafy.io;
>
>    location /api {
>        proxy_pass http://127.0.0.1:8081;
>        proxy_set_header Host $host;
>        proxy_set_header X-Real-IP $remote_addr;
>    }
>
>    location / {
>        root /jenkins/workspace/docdoc_client/front/dist;
>        try_files $uri $uri/ /index.html;
>        proxy_set_header Host $host;
>        proxy_set_header X-Real-IP $remote_addr;
>    }
>
>    listen 443 ssl; # managed by Certbot
>    ssl_certificate /etc/letsencrypt/live/k8b209.p.ssafy.io/fullchain.pem; # managed by Certbot
>    ssl_certificate_key /etc/letsencrypt/live/k8b209.p.ssafy.io/privkey.pem; # managed by Certbot
>
>    access_log /logs/access.log;
>    error_log /logs/error.log;
>}
>
>server {
>    if ($host = k8b209.p.ssafy.io) {
>        return 301 https://$host$request_uri;
>    } # managed by Certbot
>
>    listen 80;
>    server_name k8b209.p.ssafy.io;
>    return 404; # managed by Certbot
>}
> ```
>
> ```
> # DB(mysql, redis, mongodb) 구성하는 docker-compose.yml
>version: "3"
>  
>services:
>       mysql:
>                image: mysql:8.0
>                container_name: mysql
>                ports:
>                       - 3306:3306 # HOST:CONTAINER
>                environment:
>                       - MYSQL_ROOT_PASSWORD='@wkdbfb209'
>                       - MYSQL_SSAFY_PASSWORD='!wkdbfb209'
>                       - TZ=Asia/Seoul
>                command:
>                       - --character-set-server=utf8mb4
>                       - --collation-server=utf8mb4_unicode_ci
>                volumes:
>                       - ./data:/var/lib/mysql
>        redis:
>                image: 'bitnami/redis:latest'
>                container_name: redis-master
>                environment:
>                        - ALLOW_EMPTY_PASSWORD=no
>                        - REDIS_PASSWORD=@wkdbfb209
>                        - TZ=Asia/Seoul
>                ports:
>                        - 6379:6379
>        mongodb:
>                image: mongo:4.2
>                restart: always
>                network_mode: host
>                environment:
>                        - TZ=Asia/Seoul
>               volumes:
>                       - /etc/mongod.conf:/etc/mongod.conf
>                       - /data/db:/data/db
>                       - /data/journal:/data/db/journal
>                        - /data/log:/var/log/mongodb
>                entrypoint: ["mongod", "-f", "/etc/mongod.conf"]
>                container_name: "mongodb"
>                ulimits:
>                        nproc: 64000
>                        nofile:
>                                soft: 64000
>                                hard: 64000
>
>                mem_limit: 900m
> ```
> ```
> # jenkins 구성하는 docker-compose.yml
>version: "3"
>  
>services:
> jenkins:
>   container_name: jenkins
>   image: jenkins/jenkins:lts
>   user: root
>   volumes:
>     - /jenkins:/var/jenkins_home
>     - /var/run/docker.sock:/var/run/docker.sock
>     - /usr/share/nginx/html:/usr/share/nginx/html
>   ports:
>     - 8082:8080
>   environment:
>     - TZ=Asia/Seoul
>   privileged: true
>   restart: "unless-stopped"
>```
>```
>> # server(backend) 구성하는 docker-compose.yml
>version: "3"
>services:
> api:
>   build:
>     context: ./server
>     dockerfile: Dockerfile
>   volumes:
>     - /jenkins/workspace/docdoc_server:/var/jenkins_home/workspace/docdoc_server
>     - /var/run/docker.sock:/var/run/docker.sock
>     - /etc/localtime:/etc/localtime:ro
>     - /usr/share/zoneinfo/Asia/Seoul:/etc/timezone:ro
>     - /logs:/logs
>   environment:
>                        - SOURCECODE_JENKINS_CREDENTIAL_ID='donghun'
>                        - SOURCE_CODE_URL='https://lab.ssafy.com/s08-final/S08P31B209.git'
>                        - RELEASE_BRANCH=release-server
>                        - datasource=k8b209.p.ssafy.io
>                        - dbUser=${dbUser}
>                        - dbPwd=${dbPwd}
>                        - jwt_secret_key=${jwt_secret_key}
>                        - redisPwd=${redisPwd}
>                        - schema=devdb
>   ports:
>     - "8081:8081"
>   networks:
>     - web
>
>networks:
>       web:
>               external: true
>```
>
>```
> # client(frontend) 구성하는 docker-compose.yml
>
>version: "3"
>services:
>        client:
>                build:
>                        context: ./front
>                        dockerfile: Dockerfile
>                volumes:
>                        - /jenkins/workspace/b305_coffeebrew_client:/var/jenkins_home/workspace/b305_coffeebrew_b305
>                        - /var/run/docker.sock:/var/run/docker.sock
>                environment:
>                        TZ: "Asia/Seoul"
>                ports:
>                        - 3000:3000
>                networks:
>                        - web
>
>networks:
>        web:
>                external: true
>```
>
>```
> # client(추천 서버) 구성하는 docker-composer-client.yml
>
>version: "3"
>services:
>       client:
>               build:
>                       context: ./front
>                       dockerfile: Dockerfile
>               volumes:
>                       - /jenkins/workspace/docdoc_client:/var/jenkins_home/workspace/docdoc_client
>                       - /var/run/docker.sock:/var/run/docker.sock
>               environment:
>                       TZ: "Asia/Seoul"
>               expose:
>                       - 80
>               networks:
>                       - web
>
>networks:
>       web:
>               external: true
>```
>```
> # 각 환경변수의 값은 Jenkinsfile의 credential Secret text에 설정
> ![image](/uploads/f4954ad830ad3a8cb8c4be7cdbc1cb8b/image.png)
>```
>```
> # jenkins frontend pipeline
>
> pipeline {
>    agent any
>    options {
>        timeout(time: 1, unit: 'HOURS')
>    }
>    environment {
>        SOURCECODE_JENKINS_CREDENTIAL_ID = 'donghun'
>        SOURCE_CODE_URL = 'https://lab.ssafy.com/s08-final/S08P31B209.git'
>        RELEASE_BRANCH = 'release-client'
>    }
>    stages {
>
>        stage('Clone') {
>            steps {
>                git url: "$SOURCE_CODE_URL",
>                    branch: "$RELEASE_BRANCH",
>                    credentialsId: "$SOURCECODE_JENKINS_CREDENTIAL_ID"
>                sh "ls -al"
>            }
>        }
>
>        stage('Dependencies install') {
>            when {
>                changeset "front/package.json"
>            }
>            steps {
>                dir('front') {
>                    nodejs(nodeJSInstallationName: 'NodeJS18') {
>                        sh "npm install --legacy-peer-deps"
>                    }
>                }
>            }
>        }
>
>        stage('Build') {
>            steps {
>                dir('front') {
>                    nodejs(nodeJSInstallationName: 'NodeJS18') {
>                        sh "npm run build"
>                    }
>                }
>            }
>        }
>
>        stage('Dockerizing') {
>            steps {
>                sh "pwd"
>                sh "docker build --no-cache -t front ./front"
>            }
>        }
>
>        stage('Deploy') {
>            steps{
>                sh "pwd"
>                sh "docker-compose -f docker-compose-client.yml up -d --build"
>                sh "docker ps"
>                sh '''
>                    docker exec docdoc_client_client_1 sed -i 's/location \\/ {/location \\/ {\\n\\t\\ttry_files \\$uri \\$uri\\/ \\/index.html;/g' /etc/nginx/conf.d/default.conf
>                '''
>            }
>            post {
>                success {
>                    echo "docker-compose success"
>                }
>
>                failure {
>                    echo "docker-compose failed"
>                }
>            }       
>        }
>    }
>}
>
> ```
> ```
> # jenkins backend pipeline
>
>pipeline {
>    agent any
>    options {
>        timeout(time: 1, unit: 'HOURS')
>    }
>    environment {
>        SOURCECODE_JENKINS_CREDENTIAL_ID = 'donghun'
>        SOURCE_CODE_URL = 'https://lab.ssafy.com/s08-final/S08P31B209.git'
>        RELEASE_BRANCH = 'release-server'
>        datasource = 'k8b209.p.ssafy.io'
>        dbUser = credentials('dbUser')
>        dbPwd = credentials('dbPwd')
>        redisPwd = credentials('redisPwd')
>        jwt_secret_key = credentials('jwt_secret_key')
>        schema = 'devdb'
>    }
>    stages {
>
>        stage('Clone') {
>            steps {
>                git url: "$SOURCE_CODE_URL",
>                    branch: "$RELEASE_BRANCH",
>                    credentialsId: "$SOURCECODE_JENKINS_CREDENTIAL_ID"
>                sh "ls -al"
>            }
>        }
>    
>        stage('backend dockerizing') {
>            steps {
>                sh "pwd"
>                sh "cd ./server && docker build -t server ."
>            }
>        }
>
>        stage('Deploy') {
>            steps{
>                sh "pwd"
>                sh "docker-compose -f docker-compose-server.yml up -d --build"
>            }
>            post {
>                success {
>                    echo "docker run success"
>                }
>
>                failure {
>                    echo "docker run failed"
>                }
>            }
>        }
>    }
>}
>
> ```
> ```
> # Frontend Dockerfile
>
>FROM nginx:stable-alpine
>COPY dist /usr/share/nginx/html
>EXPOSE 80
>CMD ["nginx", "-g", "daemon off;"]
>
>```
>```
> # Backend Dockerfile
>
>FROM openjdk:11
>COPY build/libs/server-0.0.1-SNAPSHOT.jar /app/server.jar
>WORKDIR /app
>ENTRYPOINT ["java", "-jar", "-Duser.timezone=Asia/Seoul", "server.jar"]
>
>
>```
