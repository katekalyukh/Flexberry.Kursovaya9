docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya9-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya9-java/app ../../..
