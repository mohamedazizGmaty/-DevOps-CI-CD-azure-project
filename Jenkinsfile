pipeline {
    agent any
    environment {
        DOCKER_HUB = credentials('docker-hub')
    }
    stages {
        stage('Build Angular') {
            steps {
                sh '''
                npm install
                ng build --prod
                docker build -t ${DOCKER_HUB_USR}/mon-angular-app:${BUILD_NUMBER} .
                docker push ${DOCKER_HUB_USR}/mon-angular-app:${BUILD_NUMBER}
                '''
            }
        }
        stage('Update Manifest & Deploy') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-token', usernameVariable: 'GITHUB_USER', passwordVariable: 'GITHUB_TOKEN')]) {
                    sh '''
                    sed -i "s|image: .*|image: ${DOCKER_HUB_USR}/mon-angular-app:${BUILD_NUMBER}|" k8s/angular-deployment.yaml
                    git config user.email "jenkins@votre.com"
                    git config user.name "Jenkins"
                    git add k8s/angular-deployment.yaml
                    git commit -m "Deploy Angular build ${BUILD_NUMBER}"
                    git push https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/mon-devops-azure.git HEAD:main
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
                    from: "jenkins@votre.com",
                    smtpHost: "smtp.gmail.com",
                    smtpPort: 587,
                    useSsl: false
                )
            }
        }
    }
}