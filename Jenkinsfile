pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    environment {
        SOURCECODE_JENKINS_CREDENTIAL_ID = 'donghun'
        SOURCE_CODE_URL = 'https://lab.ssafy.com/s08-final/S08P31B209.git'
        RELEASE_BRANCH = 'release-client'
    }
    stages {

        stage('Clone') {
            steps {
                git url: "$SOURCE_CODE_URL",
                    branch: "$RELEASE_BRANCH",
                    credentialsId: "$SOURCECODE_JENKINS_CREDENTIAL_ID"
                sh "ls -al"
            }
        }

        stage('Dependencies install') {
            when {
                changeset "front/package.json"
            }
            steps {
                dir('front') {
                    nodejs(nodeJSInstallationName: 'NodeJS18') {
                        sh "npm install --legacy-peer-deps"
                    }
                }
            }
        }

        stage('Build') {
            steps {
                dir('front') {
                    nodejs(nodeJSInstallationName: 'NodeJS18') {
                        sh "npm run build"
                    }
                }
            }
        }

        stage('Dockerizing') {
            steps {
                sh "pwd"
                sh "docker build --no-cache -t front ./front"
            }
        }

        stage('Deploy') {
            steps{
                sh "pwd"
                sh "docker-compose -f docker-compose-client.yml up -d --build"
                sh "docker ps"
                sh '''
                    docker exec docdoc_client_client_1 sed -i 's/location \\/ {/location \\/ {\\n\\t\\ttry_files \\$uri \\$uri\\/ \\/index.html;/g' /etc/nginx/conf.d/default.conf
                '''
            }
            post {
                success {
                    echo "docker-compose success"
                }

                failure {
                    echo "docker-compose failed"
                }
            }       
        }
    }
}
