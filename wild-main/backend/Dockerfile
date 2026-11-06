FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /workspace
COPY backend/pom.xml ./backend/pom.xml
COPY backend/src ./backend/src
COPY *.html ./
COPY css ./css
COPY js ./js
WORKDIR /workspace/backend
RUN mvn -B -DskipTests package

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /workspace/backend/target/wildlife-tracker-api-1.0.0.jar /app/app.jar
EXPOSE 10000
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=40", "-XX:MaxMetaspaceSize=112m", "-XX:ReservedCodeCacheSize=32m", "-Xss256k", "-jar", "/app/app.jar"]
