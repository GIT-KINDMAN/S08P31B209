pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    environment {
        SOURCECODE_JENKINS_CREDENTIAL_ID = 'donghun'
        SOURCE_CODE_URL = 'https://lab.ssafy.com/s08-final/S08P31B209.git'
<<<<<<< HEAD
        RELEASE_BRANCH = 'release-server'
        datasource = 'k8b209.p.ssafy.io'
        dbUser = credentials('dbUser')
        dbPwd = credentials('dbPwd')
        redisPwd = credentials('redisPwd')
        jwt_secret_key = credentials('jwt_secret_key')
        schema = 'devdb'
=======
        RELEASE_BRANCH = 'release-client'
>>>>>>> 526a447aa8514bab1a814b43100b8c38997c8526
    }
    stages {

        stage('clone') {
            steps {
                git url: "$SOURCE_CODE_URL",
                    branch: "$RELEASE_BRANCH",
                    credentialsId: "$SOURCECODE_JENKINS_CREDENTIAL_ID"
                sh "ls -al"
            }
        }
<<<<<<< HEAD
    
        stage('backend dockerizing') {
            steps {
                sh "pwd"
                sh "cd ./server && docker build -t server ."
=======

        stage('frontend build') {
            when {
                changeset "front/package.json"
            }
            steps {
                dir('front') {
                    nodejs(nodeJSInstallationName: 'NodeJS18') {
                        sh "npm install --legacy-peer-deps"
                        sh "npm run build"
                    }
                }
            }
        }

        stage('frontend dockerizing') {
            steps {
                sh "pwd"
                sh "docker build --no-cache -t front ./front"
>>>>>>> 526a447aa8514bab1a814b43100b8c38997c8526
            }
        }

        stage('Deploy') {
            steps{
                sh "pwd"
<<<<<<< HEAD
                sh "docker-compose -f docker-compose-server.yml up -d --build"
            }
            post {
                success {
                    echo "docker run success"
                }

                failure {
                    echo "docker run failed"
                }
            }        
=======
                sh "docker-compose --file /var/jenkins_home/workspace/docdoc_client/docker-compose-client.yml up -d --build"
                sh "docker ps"
            }
            post {
                success {
                    echo "docker-compose success"
                }

                failure {
                    echo "docker-compose failed"
                }
            }       
>>>>>>> 526a447aa8514bab1a814b43100b8c38997c8526
        }
    }
}
