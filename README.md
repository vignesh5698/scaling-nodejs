The Scale Cube:

X-Axis represents cloning (Instances)
Y-Axis represents Microservices(Monolithic app into microservices)
Z-Axis represents scaling data capability(Database)

#   3 metrices should be followed to scale node.js application : 
-   Cloning
-   Database scaling
-   Microservices

### Cloning :

Uses fork() of child_process class;
When fork our application, we clone it into 'n' processes, each running on it's own port

Using PM2 for working with clusters:
- Install PM2 using npm
- Use the command: pm2 start app.js -i 3 (runs 3 instances of app.js and node) [-i -1 is special handle]

### Database scaling :

Horizontal partitioning or sharding involves adding more database instance that are each designed to store part of data.
Each db is called shard.

Horizontal partitioning can be done by many ways:
- partition by alphabet [(a-k),(l-p),(p-z)]
- partition by group [(1-50), (50-100)]

When to use sharding:
- Too much data
- More write operations than the server can handle
- Slow performance

### Microservices :

- Decomposing monolithic services into micro services
- The process of bringing together microservices under one gateway or umberlla is called Orchestration
- Orchestration exposes only the parts of the underlying service that we want clients to consume
- create and test Orchestration 