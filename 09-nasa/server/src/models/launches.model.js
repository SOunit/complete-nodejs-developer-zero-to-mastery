const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "mission name",
  rocket: "rocket",
  launchDate: new Date("December 27, 2030"),
  destination: "destination",
  customers: ["Jack", "Bec"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = { launches };
