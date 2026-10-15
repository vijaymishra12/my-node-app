
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Node and npm') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Snyk Security Scan') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'snyk-token',
                        variable: 'SNYK_TOKEN'
                    )
                ]) {
                    bat 'npx --yes snyk test'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
