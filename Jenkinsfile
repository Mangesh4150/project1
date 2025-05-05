pipeline {
  agent any
  environment {
    INSTANCE_IP = '15.206.7.200'
  }
  stages {
    stage('Deploy'){
            steps {
                echo 'Deployment'
                sshagent(credentials: ['zignuts-ubuntu-ssh']) {
                  sh '''
                    ssh -o StrictHostKeyChecking=no 'ubuntu'@${INSTANCE_IP} sh /apps/coca-landing-page/auto-deploy-frontend.sh
                    '''
                }
            }
    }
  }
  post {
        always {
            cleanWs()
        }
    }
}
