docker build --no-cache -f SQL\Dockerfile.PostgreSql -t finalochka/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t finalochka/app ../..
