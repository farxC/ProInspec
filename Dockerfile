FROM openjdk:latest

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update && apt-get -y install nodejs unzip

# ENV Variables from Android SDK
ENV SDK_URL = "https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip" \
    ANDROID_HOME="/home/Android/Sdk/"\
    ANDROID_VERSION=13 \
    ANDROID_BUILD_TOOLS_VERSION=34.0.0\
    GRADLE_VERSION=7.4.1

WORKDIR ${ANDROID_HOME}

# Get SDK manager
RUN curl -sL -o android.zip ${SDK_URL} && unzip android.zip && rm android.zip
RUN yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses

# Android SDK and Plataform
RUN $ANDROID_HOME/tools/bin/sdkmanager --update
RUN $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}" \
    "plataforms;android-${ANDROID_VERSION}"\
    "plataforms-tools"
# GRADLE
RUN curl -sL -o gradle.zip https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip &&\
 mkdir /opt/gradle && unzip -d /opt/gradle gradle.zip && rm gradle.zip

# ADD PATH TO BASHRC
RUN export PATH=$PATH:$ANDROID_HOME/emulator\
    && export PATH=$PATH:$ANDROID_HOME/tools\
    && export PATH=$PATH:$ANDROID_HOME/tools/bin\
    && export PATH=$PATH:/opt/gradle/gradle-${GRADLE_VERSION}/bin\
    && echo PATH=$PATH:$ANDROID_HOME/platform-tools>>/etc/bash.bashrc
# INSTALL YARN, REACT NATIVE CLI, CREATE-REACT-NATIVE-APP
RUN npm install -g yarn && yarn global add react-native-cli expo-cli
# VOLUMES
VOLUME ["/app","/root/.gradle"]
# CHANGE WORKDIR
WORKDIR /app
# REACT NATIVE PORT AND ADB PORT
EXPOSE 8081 5555
# DEFAULT REACT NATIVE COMMAND
CMD npx react-native start