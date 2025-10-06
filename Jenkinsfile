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

        stage('Build Angular App') {
            steps {
                sh 'echo "Installing dependencies..."'
                sh 'npm ci --legacy-peer-deps'
                sh 'npm run build --prod'
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    def IMAGE = "azizgmaty/mon-angular-app:${BUILD_NUMBER}"
                    sh 'echo Building Docker image...'
                    sh "docker build -t ${IMAGE} ."
                    sh "echo ${DOCKER_HUB_PSW} | docker login -u ${DOCKER_HUB_USR} --password-stdin"
                    sh "docker push ${IMAGE}"
                }
            }
        }

        stage('Update Manifest & Deploy') {
            steps {
                sh 'echo "Deploy step (ArgoCD/K8s manifest update goes here)"'
                        sh 'argocd app sync mon-angular-app'
                        sh 'argocd app wait mon-angular-app --health --timeout 300'
                // Example: sh 'kubectl apply -f k8s/'
            }
        }
    }

    post {
        success {
            mail to: 'aziz.gmaty@gmail.com',
                 subject: "✅ Build Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "The build completed successfully."
        }
        failure {
            mail to: 'aziz.gmaty@gmail.com',
                 subject: "❌ Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "The build failed. Please check Jenkins logs."
        }
    }
}
