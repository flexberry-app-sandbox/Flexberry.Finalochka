docker build --no-cache -f SQL\Dockerfile.PostgreSql -t finalochka-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t finalochka-java/app ../../..
