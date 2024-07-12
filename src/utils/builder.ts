import routes from "../routes";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";

type HasIn<K extends string, R> = { [k in K]: R };
function hasIn<K extends string, R>(
  object: object,
  key: K
): object is HasIn<K, R> {
  return key in object;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function recursiveIgnore(objs: any[], prefix: string = "") {
  const paths: string[] = [];
  const joinPath = (...paths: string[]) =>
    paths.join("/").replace(/[/]+/g, "/");
  for (let i = 0; i < objs.length; i++) {
    const obj = objs[i];
    // if (hasIn<string, string>(obj, "Component")) {
    //   delete obj.Component;
    // }
    if (
      hasIn<string, any[]>(obj, "children") &&
      hasIn<string, string>(obj, "path")
    ) {
      paths.push(...recursiveIgnore(obj.children, joinPath(prefix, obj.path)));
    }
    if (obj.path !== "") {
      paths.push(joinPath(prefix, obj.path));
    }
  }
  return paths;
}

async function build() {
  const recursivePaths = Array.from(new Set(recursiveIgnore(routes)));
  console.log("recursivePaths", recursivePaths);

  const distPath = path.join(path.resolve(), "dist");
  const indexPath = path.join(path.resolve(), "dist/client/index.html");
  const isBuilded = fs.existsSync(distPath);

  if (isBuilded) {
    console.log("run build");
    const filtered = recursivePaths.reduce<string[]>((acc, cur) => {
      const removed: string = cur.startsWith("/") ? cur.slice(1) : cur;
      if (removed !== "" && !acc.includes(removed)) {
        acc.push(removed);
      }
      return acc;
    }, []);
    for (const folder of filtered) {
      const genPath = path.join(path.resolve(), "dist/client", folder);
      fs.mkdirSync(genPath, { recursive: true });
      await sleep(100);
      spawn("cp", ["-r", indexPath, genPath]);
    }

    console.log("builded");
  }
}
build();
