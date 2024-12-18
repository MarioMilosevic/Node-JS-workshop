import { createServer } from "node:http";

const server = createServer((req, res) => {
  const superHero = {
    fistName: "Bruce",
    lastName: "Wayne",
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
  console.log(req);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
