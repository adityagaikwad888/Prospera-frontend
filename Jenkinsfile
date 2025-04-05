pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDS = credentials('docker-hub-credentials')
        DOCKER_IMAGE = "adityagaikwad888/prospera-frontend"
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        // Environment variables for frontend
        VITE_BACKEND_URL = credentials('VITE_BACKEND_URL')
    }
    
    stages {
        stage("Check Out") {
            steps {
                git branch: 'main', url: 'https://github.com/adityagaikwad888/Prospera-frontend.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        
        stage('Build React App') {
            steps {
                echo 'Building React application...'
                // Pass environment variables to the build
                bat 'npm run build'
                
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                bat "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                echo 'Pushing Docker image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    bat "docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%"
                    bat "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    bat "docker push ${DOCKER_IMAGE}:latest"
                }
            }
        }

        stage('Docker Prune') {
            steps {
                echo 'Cleaning unused Docker resources...'
                bat 'docker system prune -f'
            }
        }
    }
    
    post {
        always {
            bat 'docker logout'
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}