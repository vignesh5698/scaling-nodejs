def myVariable = "$first_param"
pipeline {
      agent any
      stages {
          stage("Hello") {
                steps {
                    echo "My variable is ${myVariable}"
                    sh '''
                      npm install;
                      echo "Multi line script";
                      ls -la;
                    '''
                }
          }
          stage("Param Values") {
                steps {
                    echo "This is Param ONE : $first_param";
                }
          }
      }
}
