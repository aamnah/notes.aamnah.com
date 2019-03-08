---
title: Notes on Moving from MySQL to MariaDB and Replication 
date: 2019-03-07
category: databases
tags:
- mysql
- mariadb
---

NOTTES

- it's easier to switch from MySQL to MariaDB


```bash
# (Ubuntu 18.04 LTS - MariaDB 10.3 stable)
# add repo 
sudo apt-get install software-properties-common
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8
sudo add-apt-repository 'deb [arch=amd64,arm64,ppc64el] http://mirror.poliwangi.ac.id/mariadb/repo/10.3/ubuntu bionic main'

# install
sudo apt update
sudo apt install mariadb-server
```


## Replication
- we probably want a multi-source replication (multiple masters, data is combined into slaves)
- Galera Cluster is better than multi-source as it has all masters and no slaves. Every node can read+write.
- Slave databases are not updated in real-time (async transfers)
- Slave lag is the time it takes to replicate data from master to slave
- The downside for synchronous write to all masters is that it takes long to write (get an agreement between all master before changes apply)
- That is why some people setup Galera Cluster, but treat other masters as slaves handling only read ops.

## Galera Cluster
- clustering techonology enabling active-active, true multi-master cluster. each database is a master database
- Application can read+write from any database node
- All database nodes contain same data (minimizing data logs)
- No slave lag, no complex failovers
- if one master fails, the other nodes continue to serve clients

## Keywords
- multi-mastter(source) replication
- Topology: infrasttructure of your databaes. Two types: master-master and maser-slave.
- DBMS: DataBase Management System (control panel). MySQL and Oracle etc. are DBMS


## Further reading
- Galera cluster on Kubernetes

## ClusterControl Setup
- insall ClusterControl (will install MySQL as part of the installation process..)
- the SSH user has to be the same user and same SSH password on all servers. CloudConrol only asks for one user/password, not separate users for all nodes..
- Same is the case with MariaDB root passord for all nodes..
Setup your SSH keys before installing ClusterControl > MariaDB. It'll confirm that the nodes can be reached during the install process.

Links
---
- [Galera Cluster](http://galeracluster.com/products/)
- [MariaDB Blog: How to migrate from MySQL to MariaDB on Linux in five steps](https://mariadb.com/resources/blog/how-to-migrate-from-mysql-to-mariadb-on-linux-in-five-steps/)
- [Docs: MariaDB Replication](https://mariadb.com/kb/en/library/high-availability-performance-tuning-mariadb-replication/)
- [YouTube: Galera Cluster for MySQL introduction](https://www.youtube.com/watch?v=n8vM_HVnnfc)
- [YouTube: Database Clustering Tutorials](https://www.youtube.com/watch?v=NnA1WgPSbgY&list=PL_c9BZzLwBRLO-HHp0XU3f9KSHR5Tc33c)
- [Caleb Curry: Database Clustering Tutorial 1 – Intro to Database Clustering](https://www.calebcurry.com/database-clustering-tutorial-1-intro-to-database-clustering/)