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

        stage('Run Docker Container') {
            steps {
                bat '''
                docker stop lifepayai-backend-container || exit 0
                docker rm lifepayai-backend-container || exit 0
                docker run -d --name lifepayai-backend-container ^
                -p 5001:5000 ^
                --env-file backend/.env ^
                lifepayai-backend
                '''
            }
        }

        stage('Success') {
            steps {
                echo 'LifePayAI deployed successfully!'
            }
        }
    }
}