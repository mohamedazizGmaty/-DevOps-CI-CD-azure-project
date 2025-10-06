pipeline {
    agent any

    environment {
        DOCKER_HUB = credentials('docker-hub') // Jenkins credentials ID
    }

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-token',
                    url: 'https://github.com/mohamedazizGmaty/-DevOps-CI-CD-azure-project'
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    def IMAGE = "azizgmaty/mon-angular-app:${BUILD_NUMBER}"
                    // Quick Docker env check
                    sh 'docker --version || { echo "Docker not found—install on agent!"; exit 1; }'
                    sh 'echo Building Docker image...'
                    sh "docker build --progress=plain -t ${IMAGE} ."
                    withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
                        sh "docker push ${IMAGE}"
                    }
                    echo "CI Success: Image ${IMAGE} pushed to Docker Hub."
                }
            }
            post {
                always {
                    sh 'docker rmi azizgmaty/mon-angular-app:${BUILD_NUMBER} || true'
                }
            }
        }
    }

    post {
        success {
            mail to: 'aziz.gmaty@gmail.com',
                 subject: "✅ CI Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "CI completed successfully. Docker image: azizgmaty/mon-angular-app:${BUILD_NUMBER} (check Docker Hub)."
        }
        failure {
            mail to: 'aziz.gmaty@gmail.com',
                 subject: "❌ CI Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "CI failed. Please check Jenkins logs for details."
        }
    }
}