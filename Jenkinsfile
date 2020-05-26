def myVariable = "$first_param"
if(myVariable) {
      myVariable = "Haha....I am TRUE"
} else {
      myVariable = "Haha....I am FASLSEEE"
}
def myVariable2 = myVariable.toUpperCase()
pipeline {
      agent any
      stages {
          stage("Hello") {
                steps {
                      echo "My variable is ${myVariable2}"
                    sh '''
                      npm install;
                      echo "Multi line script";
                      ls -la;
                    '''
                }
          }
          stage("Param Values") {
                steps {
                      echo "This is Param ONE : ${myVariable}";
                }
          }
      }
}
