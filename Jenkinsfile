
pipeline{
    agent{
        docker{ image 'node:16.13.1-alpine'}
            }

    stages{
        stage('Build'){
           
            steps {
                script{
                    sh 'docker build . -p 3000:3000 -t jen-t1-app:v1'
                }
                
            }
        }

        stage('Test'){
            steps {
                echo "test"
                sh 'npm run test'
        }
    }
}
}