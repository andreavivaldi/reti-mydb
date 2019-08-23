db.createUser(
        {
            user: "myapp",
            pwd: "mypwd",
            roles: [
                {
                    role: "readWrite",
                    db: "colors"
                }
            ]
        }
);
db.colors.drop();
db.colors.insertMany([
  {
    _id: 1,
    name: 'red',
    color: "#e74c3c"
  },
  {
    _id: 2,
    name: 'green',
    color: "#16a085"
  },
  {
    _id: 3,
    name: 'blue',
    color: "#2980b9"
  },
  {
    _id: 4,
    name: 'blue2',
    color: "#30336b"
  },
  {
    _id: 5,
    name: 'pink',
    color: "#be2edd"
  },
  {
    _id: 6,
    name: 'darkblue',
    color: "#130f40"
  }
])
