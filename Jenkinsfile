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

        stage('clone') {
            steps {
                git url: "$SOURCE_CODE_URL",
                    branch: "$RELEASE_BRANCH",
                    credentialsId: "$SOURCECODE_JENKINS_CREDENTIAL_ID"
                sh "ls -al"
            }
        }

        stage('frontend build') {
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
            }
        }

        stage('Deploy') {
            steps{
                sh "pwd"
                sh "docker-compose -f docker-compose-client.yml up -d --build"
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
        }
    }
}
