pipeline {
    agent any

    environment {
        DOCKER_HUB = credentials('docker-hub') // Jenkins Docker Hub credentials ID
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
                    // Define image tag with build number + short git commit for traceability
                    def IMAGE = "azizgmaty/mon-angular-app:${env.BUILD_NUMBER}"

                    echo "🐳 Docker build & push starting for ${IMAGE}..."

                    // Ensure Docker is available
                    sh 'docker --version || { echo "❌ Docker not found—install on agent!"; exit 1; }'

                    // Build image (BuildKit disabled for compatibility)
                    sh "docker build -t ${IMAGE} ."

                    // Push image to Docker Hub
                    withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
                        sh "docker push ${IMAGE}"
                    }

                    echo "✅ CI Success: Image ${IMAGE} pushed to Docker Hub."
                }
            }

            post {
                always {
                    // Clean up image after build to free disk space
                    sh 'docker rmi azizgmaty/mon-angular-app:${BUILD_NUMBER} || true'
                    // Optionally prune unused layers
                    sh 'docker system prune -af || true'
                }
            }
        }
    }

    post {
        success {
            mail to: 'aziz.gmaty@gmail.com',
                 subject: "✅ CI Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "The CI/CD pipeline completed successfully.\nDocker image: azizgmaty/mon-angular-app:${BUILD_NUMBER}\nCheck your Docker Hub repository."
        }
        failure {
            mail to: 'aziz.gmaty@gmail.com',
                 subject: "❌ CI Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "The CI/CD pipeline failed.\nPlease review the Jenkins logs for more details."
        }
    }
}
