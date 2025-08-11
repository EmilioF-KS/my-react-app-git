pipeline {
  agent any

  stages {
    stage('Build Docker Image') {
      steps {
        script {
          docker.build('my-react-app')
        }
      }
    }

    stage('Run Container') {
      steps {
        script {
          docker.image('my-react-app').run('-p 3000:3000')
        }
      }
    }
  }
}
