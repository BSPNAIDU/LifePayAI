pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/BSPNAIDU/LifePayAI.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t lifepayai-backend ./backend'
            }
        }

        stage('Stop Existing Container') {
            steps {
                bat '''
                docker ps -q -f "name=lifepayai-backend-container" && docker stop lifepayai-backend-container || exit 0
                docker ps -aq -f "name=lifepayai-backend-container" && docker rm lifepayai-backend-container || exit 0
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
                docker run -d --name lifepayai-backend-container ^
                -p 5001:5000 ^
                --env-file backend/.env ^
                lifepayai-backend
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'docker ps'
            }
        }

        stage('Success') {
            steps {
                echo '🎉 LifePayAI deployed successfully using Jenkins + Docker!'
            }
        }
    }
}