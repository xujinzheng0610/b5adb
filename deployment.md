# Step 1 Docker build

```
docker build . -t my-app
```

# Step 2 Find out host machine inner ip address

```
ifconfig
```

找到其中类似这样的一段输出，记录其中的inet备用，下面的栗子中，即`192.168.0.4`

```
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	ether 8c:85:90:72:8b:f8
	inet6 fe80::4d1:fb48:c40a:af75%en0 prefixlen 64 secured scopeid 0x8
	inet 192.168.0.104 netmask 0xffffff00 broadcast 192.168.0.255
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect
	status: active
```

# Step 3 Mount db config into docker container

在磁盘上新建一个目录，例如`/root/my-app`。在其中新建一个文件`config.json`。

将其中的host改成Step 2中得到的inet地址。

```
{
  "development": {
    "username": "postgres",
    "password": "33779900",
    "database": "B5A2",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorAliases": false
  },
  "test": {
    "username": "postgres",
    "password": "33779900",
    "database": "B5A2",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "33779900",
    "database": "b5a2",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

然后运行

```
docker run -it -p 80:8080 -v /root/my-app/config.json:/app/server/db/config/config.json my-app
```

即可运行应用。在浏览器用`http://公网ip`即可访问之。验证没问题后，Ctrl-C杀掉应用，使用

```
docker run -d --restart=always -p 8080:8080 -v /root/my-app/config.json:/app/server/db/config/config.json my-app
```

进行长期部署
