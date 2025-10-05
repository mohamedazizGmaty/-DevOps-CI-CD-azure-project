pipeline {
    agent any

    environment {
        DOCKER_HUB = credentials('docker-hub') // username/password
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    sh '''
                    echo "Building Docker image..."
                    docker build -t ${DOCKER_HUB_USR}/mon-angular-app:${BUILD_NUMBER} .
                    
                    echo "Logging into Docker Hub..."
                    echo ${DOCKER_HUB_PSW} | docker login -u ${DOCKER_HUB_USR} --password-stdin
                    
                    echo "Pushing Docker image..."
                    docker push ${DOCKER_HUB_USR}/mon-angular-app:${BUILD_NUMBER}
                    '''
                }
            }
        }

        stage('Update Manifest & Deploy') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-token', usernameVariable: 'GITHUB_USER', passwordVariable: 'GITHUB_TOKEN')]) {
                    sh '''
                    echo "Updating Kubernetes manifest..."
                    sed -i "s|image: .*|image: ${DOCKER_HUB_USR}/mon-angular-app:${BUILD_NUMBER}|" k8s/angular-deployment.yaml
                    
                    git config user.email "jenkins@votre.com"
                    git config user.name "Jenkins"
                    
                    git add k8s/angular-deployment.yaml
                    git commit -m "Deploy Angular build ${BUILD_NUMBER}" || echo "No changes to commit"
                    
                    git push https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/-DevOps-CI-CD-azure-project.git HEAD:main
                    '''
                }
            }
        }

        stage('Notify') {
            steps {
                emailext (
                    subject: "Build ${BUILD_NUMBER} Success",
                    body: "Application Angular déployée !",
                    to: "votre@gmail.com",
                    from: "jenkins@votre.com"
                )
            }
        }
    }

    post {
        failure {
            emailext (
                subject: "Build ${BUILD_NUMBER} Failed",
                body: "La build a échoué !",
                to: "votre@gmail.com",
                from: "jenkins@votre.com"
            )
        }
    }
}
