
pipeline{
    agent any

    environment{
        dockerImage = ''
        registry = 'rrr/jen-t1-app'
    }
    // {
    //     docker{ image 'node:16.13.1-alpine',
    //     args '-p 3000:3000'
    //     }
    //     // docker { image 'mcr.microsoft.com/windows/servercore:ltsc2019'}
    //         }

    stages{
        stage('Build'){
           
            steps {
                script{
                    dockerImage = docker.build registry
                    // sh 'docker build . -p 3000:3000 -t jen-t1-app:v1'
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