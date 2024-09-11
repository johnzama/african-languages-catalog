pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your repository
                git branch: 'main', url: 'https://github.com/johnzama/african-languages-catalog.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install dependencies using npm
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Build the React app for production
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run tests (if you have any defined)
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Placeholder for deployment step
                // You can customize this step to fit your deployment method
                echo 'Deploy step is currently a placeholder. Define your deployment method here.'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            deleteDir()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

