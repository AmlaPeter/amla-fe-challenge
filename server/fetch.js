const https = require("https");
const lists = require(__dirname + "/data/lists.json");
const fs = require("fs");
function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .request(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk.toString();
        });

        response.on("end", () => {
          const result = JSON.parse(data).value;
          resolve(result);
        });
      })
      .end();
  });
}

(async () => {
  const versions = [];
  const detail = [];

  for (const list of lists) {
    const lv = await fetch(
      `https://datawarehouseservice.aml-analytics.com/dom/Default/ListVersion?$filter=Status%20eq%20AmlAnalytics.Common.Root.Enums.ProcessStatus%27Live%27%20and%20ListId%20eq%20${list.PrimaryKey}&$orderby=ContextDate%20desc&$top=5`
    );
    versions.push(...lv);

    for (const version of lv) {
      const d = await fetch(
        `https://datawarehouseservice.aml-analytics.com/dom/Default/ListVersion(${version.PrimaryKey})/HarvesterRecords`
      );
      d.forEach((item) => (item.ListVersionId = version.PrimaryKey));
      detail.push(...d);
    }

    fs.writeFileSync(
      __dirname + "/data/versions.json",
      JSON.stringify(versions)
    );
    fs.writeFileSync(__dirname + "/data/details.json", JSON.stringify(detail));
  }
})();
