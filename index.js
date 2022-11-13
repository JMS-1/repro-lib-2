const { lib1Version } = require("repro-lib-1");

function lib2Version() {
  return `lib-2-version using ${lib1Version()}`;
}

exports.lib2Version = lib2Version;

console.log(lib2Version());
