#!/bin/sh
# Starts the MySQL server

if [ ! -e /var/run/mysqld/gitpod-init.lock ]
then
    touch /var/run/mysqld/gitpod-init.lock

    # initialize database structures on disk, if needed
    [ ! -d /workspace/mysql ] && mysqld --initialize-insecure

    # launch database, if not running
    [ ! -e /var/run/mysqld/mysqld.pid ] && mysqld --daemonize

    rm /var/run/mysqld/gitpod-init.lock
fi

# Create read user with read only privileges
mysql -u root -e "CREATE USER IF NOT EXISTS 'read'@'localhost'; GRANT SELECT ON *.* TO 'read'@'localhost'; FLUSH PRIVILEGES;"


# Imports all databases from the database directory
for db_path in ./databases/*.sql;
do
    db_name=$(basename $db_path .sql)
    echo "Importing '$db_name'.."
    mysql -e "DROP DATABASE IF EXISTS $db_name; CREATE DATABASE $db_name;"
    mysql --init-command="SET SESSION FOREIGN_KEY_CHECKS=0;" $db_name < $db_path
done

