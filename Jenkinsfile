// pipeline {
//     agent any

//     environment {
//         DOCKER_HUB = credentials('docker-hub') // Jenkins Docker Hub credentials ID
//     }

//     stages {
//         stage('Checkout SCM') {
//             steps {
//                 git branch: 'main',
//                     credentialsId: 'github-token',
//                     url: 'https://github.com/mohamedazizGmaty/-DevOps-CI-CD-azure-project'
//             }
//         }

//         stage('Build & Push Docker Image') {
//             steps {
//                 script {
//                     // Define image tag with build number + short git commit for traceability
//                     def IMAGE = "azizgmaty/mon-angular-app:${env.BUILD_NUMBER}"

//                     echo "🐳 Docker build & push starting for ${IMAGE}..."

//                     // Ensure Docker is available
//                     sh 'docker --version || { echo "❌ Docker not found—install on agent!"; exit 1; }'

//                     // Build image (BuildKit disabled for compatibility)
//                     sh "docker build -t ${IMAGE} ."

//                     // Push image to Docker Hub
//                     withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
//                         sh "docker push ${IMAGE}"
//                     }

//                     echo "✅ CI Success: Image ${IMAGE} pushed to Docker Hub."
//                 }
//             }

//             post {
//                 always {
//                     // Clean up image after build to free disk space
//                     sh 'docker rmi azizgmaty/mon-angular-app:${BUILD_NUMBER} || true'
//                     // Optionally prune unused layers
//                     sh 'docker system prune -af || true'
//                 }
//             }
//         }
//     }

//     post {
//         success {
//             mail to: 'aziz.gmaty@gmail.com',
//                  subject: "✅ CI Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
//                  body: "The CI/CD pipeline completed successfully.\nDocker image: azizgmaty/mon-angular-app:${BUILD_NUMBER}\nCheck your Docker Hub repository."
//         }
//         failure {
//             mail to: 'aziz.gmaty@gmail.com',
//                  subject: "❌ CI Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
//                  body: "The CI/CD pipeline failed.\nPlease review the Jenkins logs for more details."
//         }
//     }
// }
pipeline {
    agent any

    environment {
        // Docker Hub credentials ID configured in Jenkins
        DOCKER_HUB = credentials('docker-hub')

        // GitHub token for pushing manifest updates (use a GitHub Personal Access Token)
        GITHUB_TOKEN = credentials('github-token')

        // Your Docker Hub username
        DOCKER_USER = "azizgmaty"

        // Your app name and repo for manifests (adjust if different)
        MANIFEST_REPO = "https://github.com/mohamedazizGmaty/angular-manifests.git"
    }

    stages {

        // === 1️⃣ Clone source code ===
        stage('Checkout SCM') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-token',
                    url: 'https://github.com/mohamedazizGmaty/-DevOps-CI-CD-azure-project'
            }
        }

        // === 2️⃣ Build & Push Docker Image ===
        stage('Build & Push Docker Image') {
            steps {
                script {
                    // Generate short Git commit for traceability
                    def GIT_COMMIT = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    def IMAGE_TAG = "${env.BUILD_NUMBER}-${GIT_COMMIT}"
                    def IMAGE = "${DOCKER_USER}/mon-angular-app:${IMAGE_TAG}"

                    echo "🐳 Building Docker image: ${IMAGE}"

                    // Verify Docker is installed
                    sh 'docker --version || { echo "❌ Docker not found—install Docker on the agent!"; exit 1; }'

                    // Build Docker image
                    sh "docker build -t ${IMAGE} ."

                    // Push image to Docker Hub
                    withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
                        sh "docker push ${IMAGE}"
                    }

                    // Save the image tag for the next stage
                    env.IMAGE_TAG = IMAGE_TAG

                    echo "✅ Image ${IMAGE} successfully pushed to Docker Hub."
                }
            }

            post {
                always {
                    // Cleanup images to free space
                    sh 'docker system prune -af || true'
                }
            }
        }

        // === 3️⃣ Update Kubernetes Manifests (GitOps for ArgoCD) ===
stage('Update Kubernetes Manifests') {
    steps {
        script {
            echo "📝 Updating K8s manifests in main repo (k8s folder)..."

            // Variables
            def DOCKER_USER   = "azizgmaty"
            def IMAGE_TAG     = "${env.BUILD_NUMBER}"  // Jenkins build number as tag

            // Configure Git
            sh """
                git config user.email "jenkins@ci.local"
                git config user.name "Jenkins CI"
            """

            // Update the image tag inside angular-deployment.yaml
            sh """
                sed -i.bak "s|image: ${DOCKER_USER}/mon-angular-app:.*|image: ${DOCKER_USER}/mon-angular-app:${IMAGE_TAG}|" k8s/angular-deployment.yaml
                git add k8s/deployment.yaml
                git commit -m "Update image to ${IMAGE_TAG} [ci skip]" || echo "No changes to commit."
                git push https://${GITHUB_TOKEN}@github.com/mohamedazizGmaty/-DevOps-CI-CD-azure-project.git main
            """

            echo "✅ Kubernetes manifests updated → ArgoCD will sync automatically."
        }
    }
}


    }

    // === 4️⃣ Notifications ===
    post {
        success {
            mail to: 'aziz.gmaty@gmail.com',
                subject: "✅ CI/CD Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                The CI/CD pipeline completed successfully! 🚀

                🔹 Image pushed: ${DOCKER_USER}/mon-angular-app:${env.IMAGE_TAG}
                🔹 Manifests updated in: ${MANIFEST_REPO}
                🔹 ArgoCD will automatically deploy the new version.

                -- Jenkins Azure CI/CD Pipeline
                """
        }
        failure {
            mail to: 'aziz.gmaty@gmail.com',
                subject: "❌ CI/CD Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                The pipeline failed during one of the stages.
                Please check the Jenkins logs for more details.
                """
        }
    }
}
